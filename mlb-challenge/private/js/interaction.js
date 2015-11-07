/* interaction.js
 * Eli Shayer
 * -------
 * The interaction file for the SSAC entry to the 
 * majorleaguedatachallenge.com visualization contest.
 * Allows for easier transitions between viewing players
 */

// ======================================== Players List
// add a ul element to hold the list of players
var playerList = navCol.append('ul').attr('class', 'players-list');

// helper function to create an li tag > a tag with an href, class, and text
function createLinkLi(playerType, text, liClass, liId, href) {
	playerList.append('li')
				.attr('class', liClass)
				.attr('id', liId)
				.attr('parent', playerType + '-li')
				.append('a')
				.attr('href', '#' + href)
				.text(text);
}

// for both hitters and pitchers
for (playerType in processed) {
	// add a player category li to the ul
	createLinkLi(playerType, playerType, 'nav-category', playerType + '-li', playerType + '-vis');

	// add an individual player li to the ul
	$.each(processed[playerType], function(index, player) {
		createLinkLi(playerType, player.name, 'nav-player', player.id + '-li', player.id);
	});
}

// ======================================== Visualization Manipulation Forms
// -------------------- Constants
// animation length
var ANIMATION_LENGTH = 1000;

// radio options for the visualization forms
var RADIO_OPTIONS = [
	{
		value: 'b',
		label: 'Basic Stats'
	},
	{
		value: 'a',
		label: 'Advanced Stats'
	}
];

// map from radio button value and position to set of stats
SKILLS_MAP = {
	a : {
		hitters  : HITTER_STATS_ADV,
		pitchers : PITCHER_STATS_ADV
	},
	b : {
		hitters  : HITTER_STATS_BASIC,
		pitchers : PITCHER_STATS_BASIC
	}
}

// map from position to WAR specifications
WAR_MAP = {
	hitters  : HITTER_WAR,
	pitchers : PITCHER_WAR
}

// for each player's form-wrapper, create a form
$.each($('.vis-form-wrapper'), function(index, formWrapper) {
	// add a title to the form wrapper
	$('<h4>').text('Interaction Form').appendTo(formWrapper);

	// get the player id from the row id (parent of the formWrapper)
	var playerId = $(formWrapper).parent().attr('id');

	// for each radio option
	$.each(RADIO_OPTIONS, function(index, option) {
		// create a radio wrapper with input and input children
		var radioWrapper = $('<div>').addClass('radio')
										.appendTo(formWrapper);
		var label = $('<label>').appendTo(radioWrapper);
		var input = $('<input>').attr('type', 'radio')
								.attr('value', option.value)
								.attr('name', playerId + '-radio')
								.attr('class', 'radio-' + option.value)
								.appendTo(label);

		// add text to the label
		label.html(label.html() + option.label);

	});
	// initialize the 'basic' input to selected
	$('.radio-b').prop('checked', true);

	// add a seperator
	$('<hr>').attr('class', 'small').appendTo(formWrapper);

	// slider contents
	var name = $(formWrapper).parents('.player-vis').attr('name');
	var position = $(formWrapper).parents('.player-vis').attr('position');

	var playerData = processed[position][getNameIndex(position, name)];

	// label, select, and option elements for the interaction form
	$('<label>').text('Starting Year').appendTo(formWrapper);
	var minSelect = $('<select>').attr('type', 'min').attr('id', playerId + '-start').appendTo(formWrapper);
	$('<label>').text('Ending Year').appendTo(formWrapper);
	var maxSelect = $('<select>').attr('type', 'max').attr('id', playerId + '-end').appendTo(formWrapper);
	for (var year = playerData.minYear; year <= playerData.maxYear; year++) {
		$('<option>').attr('value', year).text(year).appendTo(minSelect);
		$('<option>').attr('value', year).text(year).appendTo(maxSelect);
	}

	// initialize the selected option for maxSelect to maxYear
	maxSelect.val(playerData.maxYear);

	// add a seperator
	$('<hr>').attr('class', 'small').appendTo(formWrapper);

	// reset button
	$('<button>').text('Reset to Career').appendTo(formWrapper);
});

// ======================================== Form Event Listeners
// radio button listener
$('input').change(function(event) {
	polyListener($(this).parents('.player-vis'));
});

$('select').change(function(event) {
	// collect event data
	var $this = $(this);
	var year = $this.val();
	var type = $this.attr('type');
	var otherType = type === 'max' ? 'min' : 'max';

	// call event listener functions
	setDisabeled($this.parent(), year, otherType, type);
	polyListener($this.parents('.player-vis'));
});

$('button').click(function(event) {
	var $parent = $(this).parents('.player-vis');

	// collect event information
	var name = $parent.attr('name');
	var position = $parent.attr('position');
	var playerData = processed[position][getNameIndex(position, name)];

	// reset selectors to full range of dates
	$parent.find('select[type="min"]').val(playerData.minYear);
	$parent.find('select[type="max"]').val(playerData.maxYear);

	// enable all options of select element
	$parent.find('select option').attr('disabled', false);

	// reset display to career data
	polyListener($parent);
});

// sets the disabeled options
function setDisabeled($parent, year, otherType, type) {
	$parent.find('select[type="' + otherType + '"] option').attr('disabled', function(i, val) {
		return (type === 'min' && $(this).val() < year) || (type === 'max' && $(this).val() > year);
	});
}

// sets the 
function polyListener($parent) {
	// collect event information
	var name = $parent.attr('name');
	var position = $parent.attr('position');
	var type = $parent.find('input[type="radio"]:checked').val();

	// get years from select elements and convert to ints
	var minYear = parseInt($parent.find('select[type="min"]').val());
	var maxYear = parseInt($parent.find('select[type="max"]').val());

	// get records, skills, and war parameters from the input and select data
	var skills = SKILLS_MAP[type][position];
	var playerData = processed[position][getNameIndex(position, name)];
	var war = WAR_MAP[position];

	// get the indices in the records, with startIndex not found resulting in 0
	var startIndex = Math.max(getIndexByYear(playerData.records, minYear), 0);
	var finalIndex = getIndexByYear(playerData.records, maxYear);
	console.log([minYear, maxYear]);
	console.log([startIndex, finalIndex]);

	// if finalIndex isn't found or is the highest index, take records through the end
	var records = finalIndex !== NOT_FOUND_SENTINEL && maxYear !== playerData.maxYear ?
		// plus one to account for slice being exclusionary
		playerData.records.slice(startIndex, finalIndex + 1) :
		playerData.records.slice(startIndex);

	// get the d attribute for the skills polygon
	var d = getPolygonPath(skills, records, minYear, maxYear);

	// get the logo and color
	var logoAndColor = chooseLogoAndColor(records, war);

	// update the skill polygon shape and color with animation
	skillPolygons[name].poly.transition()
							.duration(ANIMATION_LENGTH)
							.attr('fill', logoAndColor.color)
							.attr('d', d);

	// update the skill polygon icon
	skillPolygons[name].image.attr('xlink:href', logoAndColor.logo);

	// update the skill polygon title and adjust back to the middle
	var titleText = 'Skills: ';
	if (minYear === playerData.minYear && maxYear === playerData.maxYear) {
		titleText += 'Career';
	} else {
		titleText += minYear + '-' + maxYear;
	}
	skillPolygons[name].title.text(titleText);
	skillPolygons[name].title.attr('x', (POLY_WIDTH - $(skillPolygons[name].title.node()).width()) / 2);

	// update each label
	$.each(skillPolygons[name].labels, function(index, label) {
		adjustPolyLabelLoc(label.attr('x', getX(NUM_POLY * POLY_D_RADIUS, label.attr('angle')))
								.attr('y', getY(NUM_POLY * POLY_D_RADIUS, label.attr('angle')))
				.text(skills[index].name), label.attr('angle'));
	});
}

// ======================================== Polygon Editing Functions
function getIndexByYear(records, year) {
	for (var i = 0; i < records.length; i++) {
		if (records[i].year === year) {
			return i;
		}
	}
	return NOT_FOUND_SENTINEL;
}

function getPolygonPath(skills, records, minYear, maxYear) {
	var path = '';
	var dRadians = 2 * Math.PI / POLY_SIDES;

	// straight upwards
	var angle = -Math.PI / 2;

	// maximum radius, to edge of polygon
	var maxR = NUM_POLY * POLY_D_RADIUS;
	//console.log(records);
	//console.log(records[0].name + ' from ' + minYear + ' to ' + maxYear);
	// for each skill
	$.each(skills, function(index, skill) {
		//console.log(skill.name + ': [' + d3.mean(records, function(d) { return d[skill.key + 'mean']; }) + ', ' + d3.mean(records, function(d) { return d[skill.key]; }) + ', ' + d3.mean(records, function(d) { return d[skill.key + 'best']; }) + ']');
		var scale = d3.scale.linear()
							// average all means and bests in the records
							.domain([d3.mean(records, function(d) { return d[skill.key + 'mean']; }),
								d3.mean(records, function(d) { return d[skill.key + 'best']; })])
							.range([maxR / 2, maxR]);

		// insure that all radii are in the range [0, maxR]
		// take the average over the career
		path += pathPt(Math.min(Math.max(0, scale(
			d3.mean(records, function(d) { return d[skill.key]; }))), maxR), angle);

		// update the angle for the next skill
		angle += dRadians;
	});

	return 'M' + path.substring(1) + 'Z';
}

// ======================================== Player List Interaction

// a buffer from the top of the screen for the legend
var LEGEND_BUFFER = 10;

// a buffer from the top of the screen when viewing players
var PLAYER_LIST_BUFFER = LEGEND_HEIGHT + 20;
PLAYER_LIST_BUFFER
// a buffer from the top of the screen to determine which player is being viewed
var BUFFER_VIEW = 200;

// selected class name
var selectedClass = 'active-li';

// find the top and bottom players
var $allPlayers = $('.player-vis');
var $firstPlayer = $($allPlayers[0]);
var $lastPlayer = $($allPlayers[$allPlayers.length - 1]);

// use those two players to get breakpoints
var preBreakpoint, topBreakpoint, bottomBreakpoint;
setBreakpoints = function() {
	preBreakpoint = $('#vis').offset().top;
	topBreakpoint = $firstPlayer.offset().top;
	bottomBreakpoint = $lastPlayer.offset().top;
};

// initial call of set breakpoints
setBreakpoints();

// resets the breakpoints upon resize of the window
$(window).resize(setBreakpoints);

// cache jQuery objects for efficiency
var $playersList = $('.players-list');
var $legendSvg = $('.legend-svg');
var $window = $(window);

// respond every time a scroll occurs
$window.scroll(function () {
	// position the players list on the screen based on the scroll location
	var screenTop = $window.scrollTop();
	// if above all players, normal position and no players are selected
	if (screenTop < preBreakpoint) {
		$playersList.css({
			position: 'relative',
			top: ''
		});
		$legendSvg.css({
			position: 'relative',
			top: ''
		});
		$('.' + selectedClass).toggleClass(selectedClass, false);
	// if below all players, lock the list into place at the bottom
	} else if (screenTop > $lastPlayer.offset().top) {
		$playersList.css({
			position: 'relative',
			top: bottomBreakpoint - preBreakpoint
		});
		$legendSvg.css({
			position: 'fixed',
			top: LEGEND_BUFFER
		});
	// if viewing players, make the list fixed and set one player as active
	} else { 
		$playersList.css({
			position: 'fixed',
			top: PLAYER_LIST_BUFFER
		});
		$legendSvg.css({
			position: 'fixed',
			top: LEGEND_BUFFER
		});
		// if screen is at the bottom, set the last player to active and its parent
		// buffer of 1 pixel for rounding
		if($(document).height() - $window.scrollTop() - $window.height() <= 1) {
			$('.' + selectedClass).toggleClass(selectedClass, false);
			$('#' + $lastPlayer[0].id + '-li').toggleClass(selectedClass, true);
			$('#hitters-li').toggleClass(selectedClass, true);
		}
		// if above all players, nothing is active
		else if (screenTop < topBreakpoint) {
			// remove the selection from anything currently selected
			$('.' + selectedClass).toggleClass(selectedClass, false);
		} else {
			// set the active player
			var activePlayerSet = false;

			// for each player
			$allPlayers.each(function() {
				// cache the jQuery object and the player id
				var $player = $(this);
				var id = $player.attr('id');

				// protect against setting the active player again after it has been set
				if (!activePlayerSet) {

					// if the current player is the viewed player
					if ($player.offset().top + $player.outerHeight() > screenTop + BUFFER_VIEW) {
						// cache the id of the player in the ul list
						var listId = '#' + id + '-li';

						// protect against setting the current player when it would result in no change
						if (!$(listId).hasClass(selectedClass)) {
							$('.' + selectedClass).toggleClass(selectedClass, false);
							$(listId).toggleClass(selectedClass, true);
							$('#' + $(listId).attr('parent')).toggleClass(selectedClass, true);
						}
						activePlayerSet = true;	
					}
				}
			});
		}
	}
});
