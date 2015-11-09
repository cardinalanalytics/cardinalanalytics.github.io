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

// helper function to append a li tag > a tag with an href, class, and text to a parent
function appendLi(parent, text, liClass, liId, href, ulChild) {
	var li = parent.append('li')
					.attr('class', liClass)
					.attr('id', liId);
	li.append('a')
		.attr('href', '#' + href)
		.text(text);

	if (ulChild) {
		return li.append('ul').attr('class', 'sub-players-list');
	}
}

// for both hitters and pitchers
for (playerType in processed) {
	// add a player category li to the ul
	var sublist = appendLi(playerList, playerType, 'nav-category', playerType + '-li', playerType + '-vis', true);

	// add an individual player li to the ul
	$.each(processed[playerType], function(index, player) {
		appendLi(sublist, player.name, 'nav-player', player.id + '-li', player.id);
	});
}

// ======================================== Modal
// constants
var POSITION_TYPES = [
	{
		position : 'Hitters',
		value    : 'h',
	},
	{
		position : 'Pitchers',
		value    : 'p',
	}
];
// add to the modal architecture
var modal = d3.select('#modal')
				.attr('class', 'modal fade')
				.append('div')
				.attr('class', 'modal-dialog modal-ssac')
				.append('div')
				.attr('class', 'modal-content');

// create the modal header
var modalHeader = modal.append('div').attr('class', 'modal-header')
modalHeader.append('button')
			.attr('type', 'button')
			.attr('class', 'close')
			.attr('data-dismiss', 'modal')
			.attr('aria-label', 'Close')
			.append('span')
			.attr('aria-hidden', 'true')
			.html('&times;');
modalHeader.append('h4')
			.attr('class', 'modal-title')
			.text('Player Comparison');


var modalBody = modal.append('div').attr('class', 'modal-body');
var modalForm = modalBody.append('div').attr('class', 'row')
		.append('div').attr('class', 'col-xs-12').attr('id', 'modal-form');
var modalGraphs = modalBody.append('div').attr('class', 'row');
var modalFirstGraph = modalGraphs.append('div').attr('class', 'col-xs-6 modal-graph');
var modalSecondGraph = modalGraphs.append('div').attr('class', 'col-xs-6 modal-graph');

modalForm.append('p').attr('id', 'modal-form-note').text('Select the type of player to compare. Hit the Reset button to make a new selection!');
modalForm.append('label')
			.attr('for', '#modal-position-select')
			.text('Position');
// add a hitter/pitcher selection button
var modalPositionSelect = modalForm.append('select')
									.attr('id', 'modal-position-select');

modalPositionSelect.append('option')
					.attr('value', '')
					.text('--- Select ---');

$.each(POSITION_TYPES, function(index, type) {
	modalPositionSelect.append('option')
						.attr('value', type.value)
						.text(type.position);
});

var modalFooter = modal.append('div').attr('class', 'modal-footer');
modalFooter.append('button')
			.attr('type', 'button')
			.attr('class', 'btn btn-danger')
			.attr('id', 'modal-reset')
			.text('Reset');
modalFooter.append('button')
			.attr('type', 'button')
			.attr('class', 'btn btn-primary')
			.attr('data-dismiss', 'modal')
			.text('Close');

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

// map from position to age bounds
AGE_MAP = {
	hitters  : HITTER_AGE_BOUNDS,
	pitchers : PITCHER_AGE_BOUNDS
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

$('.vis-form-wrapper > select').change(function(event) {
	// collect event data
	var $this = $(this);
	var year = $this.val();
	var type = $this.attr('type');
	var otherType = type === 'max' ? 'min' : 'max';

	// call event listener functions
	setDisabeled($this.parent(), year, otherType, type);
	polyListener($this.parents('.player-vis'));
});

$('.vis-form-wrapper > button').click(function(event) {
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

// helper function to get the year at a player's known age
function yearToAge(year, records) {
	for (var i = 0; i < records.length; i++) {
		if (records[i].year && year === records[i].year) {
			return records[i].age;
		}
	}
	return NOT_FOUND_SENTINEL;
}

// sets the new polygon parameters and animates the changes
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

	// if finalIndex isn't found or is the highest index, take records through the end
	var records = finalIndex !== NOT_FOUND_SENTINEL && maxYear !== playerData.maxYear ?
		// plus one to account for slice being exclusive
		playerData.records.slice(startIndex, finalIndex + 1) :
		playerData.records.slice(startIndex);


	// reduce records to only those in which they played (had a team)
	records = records.filter(function(record) { return record.team; });

	// get the d attribute for the skills polygon
	var d = getPolygonPath(skills, records, minYear, maxYear);

	// get the logo and color
	var logoAndColor = chooseLogoAndColor(records, war, playerData.teamYearMap);

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

	// remove any previous year lines
	$parent.find('.selection-line').remove();

	// add in lines marking the currently selected if the full career is not selected
	if (minYear !== playerData.minYear || maxYear !== playerData.maxYear) {
		// get age bounds
		var ageBounds = AGE_MAP[position];

		// make a d3 age scale
		var ageScale = d3.scale.linear()
						  .domain([ageBounds.min, ageBounds.max])
						  .range([CHART_LEFT_PADDING, CHART_WIDTH - CHART_RIGHT_PADDING]);

		// get a d3 object representing the svg
		var svg = d3.select($parent.find('.chart')[0]);

		// append one line at either end of the selection
		svg.append('line')
			.attr('x1', ageScale(yearToAge(minYear, playerData.records)))
			.attr('y1', CHART_TOP_PADDING)
			.attr('x2', ageScale(yearToAge(minYear, playerData.records)))
			.attr('y2', CHART_HEIGHT - CHART_BOTTOM_PADDING)
			.attr(DASHED_STYLE)
			.attr('class', 'selection-line');
		svg.append('line')
			.attr('x1', ageScale(yearToAge(maxYear, playerData.records)))
			.attr('y1', CHART_TOP_PADDING)
			.attr('x2', ageScale(yearToAge(maxYear, playerData.records)))
			.attr('y2', CHART_HEIGHT - CHART_BOTTOM_PADDING)
			.attr(DASHED_STYLE)
			.attr('class', 'selection-line');
	}
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

	// for each skill
	$.each(skills, function(index, skill) {
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

// a buffer from the top of the screen to determine which player is being viewed
var BUFFER_VIEW = 200;

// are the hitters/pitchers hidden
var areHittersHidden = false;
var arePitchersHidden = false;

// selected class name
var selectedClass = 'active-li';

// find the top and bottom players
var $allPlayers = $('.player-vis');
var $firstPlayer = $($allPlayers[0]);
var $lastPlayer = $($allPlayers[$allPlayers.length - 1]);

// use those two players to get breakpoints
var preBreakpoint, topBreakpoint, bottomBreakpoint, tabsBreakpoint;
setBreakpoints = function() {
	preBreakpoint = $('#vis').offset().top;
	topBreakpoint = $firstPlayer.offset().top;
	bottomBreakpoint = $lastPlayer.offset().top;
	tabsBreakpoint = $('.nav-justified').offset().top;
};

// initial call of set breakpoints
setBreakpoints();

// resets the breakpoints upon resize of the window
$(window).resize(setBreakpoints);

// cache jQuery objects for efficiency
var $playersList = $('.players-list');
var $legendSvg = $('.legend-svg');
var $tabs = $('.nav-justified');
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
			$('#hitters-li > a').toggleClass(selectedClass, true);
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
						if (!(areHittersHidden && $player.attr('position') === 'hitters') && !(arePitchersHidden && $player.attr('position') === 'pitchers')) {
							// cache the jQuery object of the li corresponding to the player
							var $playerLi = $('#' + id + '-li');

							// protect against setting the current player when it would result in no change
							if (!$playerLi.hasClass(selectedClass)) {
								$('.' + selectedClass).toggleClass(selectedClass, false);
								$playerLi.toggleClass(selectedClass, true);
								$playerLi.parents('.nav-category').toggleClass(selectedClass, true);
							}
							activePlayerSet = true;	
						}
					}
				}
			});
		}
	}
/*
	// set navigation position
	if (screenTop < tabsBreakpoint) {
		$tabs.css({
			position: 'relative',
			top: ''
		});
	} else {
		$tabs.css({
			position: 'absolute',
			top: '0'
		});
	}
*/
});

// ======================================== Navigation tabs
var $currentTab = $('#nav-tab-all');
$('#nav-tab-all').click(function(event) {
	navigationListener($(this), true, true);
});

$('#nav-tab-pitchers').click(function(event) {
	navigationListener($(this), true, false);
});

$('#nav-tab-hitters').click(function(event) {
	navigationListener($(this), false, true);
});

// navigation click listener
function navigationListener($this, pitchersVisible, hittersVisible) {
	// set the hidden variables
	areHittersHidden = !hittersVisible;
	arePitchersHidden = !pitchersVisible;

	// remove the .active class from the currently active tab
	$this.parents('.nav-pills').find('.active').removeClass('active');

	// add the .active class to the li that was just clicked
	$this.parent().addClass('active');

	$currentTab = $this;

	// set pitcher visiblity
	$('.player-vis[position="pitchers"]').toggle(pitchersVisible);
	$('#pitchers-vis').toggle(pitchersVisible);
	$('#pitchers-li').toggle(pitchersVisible);

	// set pitcher visiblity
	$('.player-vis[position="hitters"]').toggle(hittersVisible);
	$('#hitters-vis').toggle(hittersVisible);
	$('#hitters-li').toggle(hittersVisible);
}

$('#nav-tab-comparison').click(function(event) {
	// cache for efficency
	var $this = $(this);

	// cache the previous tab selection
	var $prevTab = $this.parents('.nav-pills').find('.active');
	// remove the .active class from the currently active tab
	$prevTab.removeClass('active');

	// add the .active class to the li that was just clicked
	$this.parent().addClass('active');

	// call the modal
	$('#modal').modal({
		backdrop : true,
		keyboard : true,
		show     : true
	});

	// return to the previous tab selection upon the modal being closed
	$('#modal').on('hidden.bs.modal', function(event) {
		$this.parent().removeClass('active');
		$currentTab.parent().addClass('active');

		resetModal();
	});
});

// ======================================== Modal interactions
$('#modal-reset').click(function() {
	resetModal();
});

// reset the modal by removing elements and reseting the position selector
function resetModal() {
	// clear the contents
	$('#modal-position-select').val('');
	$('#modal-position-select').prop('disabled', false);
	$('.modal-temp-label').remove();	
	$('#modal-first-player').remove();
	$('#modal-second-player').remove();
	$('.modal-graph').children().remove();
}

$('#modal-position-select').change(function() {
	// cache for efficency
	var $this = $(this);

	// only if '--- Select ---' is not chosen
	if ($this.val()) {
		$('#modal-position-select').prop('disabled', true);

		modalForm.append('label')
					.attr('class', 'modal-temp-label')
					.attr('for', '#modal-first-player')
					.text('First Player');
		var firstPlayerSelect = modalForm.append('select')
											.attr('id', 'modal-first-player');
		firstPlayerSelect.append('option')
							.attr('value', '')
							.text('--- Select ---');
		var selector = ($this.val() === 'h' ? '.hitters-vis' : '.pitchers-vis');
		$.each($(selector), function(index, player) {
			var $player = $(player);
			firstPlayerSelect.append('option')
								.attr('value', $player.attr('id'))
								.text($player.attr('name'));
		});
		// disable the previous position select
		$('#modal-position-select').attr('disabled');

		// event listener for the new first player selector
		$('#modal-first-player').change(function() {
			// cache for efficency
			var $this = $(this);

			// only if '--- Select ---' is not chosen
			if ($this.val()) {
				$('#modal-first-player').prop('disabled', true);

				modalForm.append('label')
							.attr('class', 'modal-temp-label')
							.attr('for', '#secondPlayer')
							.text('Second Player');
				var secondPlayerSelect = modalForm.append('select')
													.attr('id', 'modal-second-player');
				$.each($('#modal-first-player > option'), function(index, option) {
					var $option = $(option);
					if ($option.val() !== $('#modal-first-player').val()) {
						secondPlayerSelect.append('option')
											.attr('value', $option.attr('value'))
											.text($option.text());
					}
				});

				// put the second player into the first graph slot
				cloneGraphToModal(modalFirstGraph, $this.val());

				// event listener for the new second player selector
				$('#modal-second-player').change(function() {
					if ($this.val()) {
						$('#modal-second-player').prop('disabled', true);
						cloneGraphToModal(modalSecondGraph, $(this).val());
					}
				});

			} else {
				$('#modal-second-player').remove();
			}
		});
	} else {
		$('#modal-first-player').remove();
		$('#modal-second-player').remove();
	}
});

// clones the graph into the wrapper
function cloneGraphToModal(d3wrapper, id) {
	// cache the wrapper and the player row
	var $wrapper = $(d3wrapper.node());
	var $playerRow = $('#' + id);

	// add a title
	d3wrapper.append('h3').text($playerRow.attr('name'));

	// empty the wrapper
	$wrapper.children().remove();
	
	// ge a cloned version of the graph
	var $graph = $playerRow.find('.chart').clone();

	// remove vertical lines
	$graph.find('.selection-line').remove();

	// append to the wrapper
	$graph.appendTo($wrapper);
}
