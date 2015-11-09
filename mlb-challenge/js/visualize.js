/* visualize.js
 * Eli Shayer
 * -------
 * The current JavaScript file for the SSAC entry to the
 * majorleaguedatachallenge.com visualization contest.
 * Visualizes the careers of the top 10 batters and top 10
 * hitters in MLB history using the d3.js library.
 */

// ======================================== Constants

// Chart SVG size
var CHART_WIDTH = 590;
var CHART_HEIGHT = 250;

// chart padding values
var CHART_BOTTOM_PADDING = 55;
var CHART_TOP_PADDING = 10;
var CHART_LEFT_PADDING = 110;
var CHART_RIGHT_PADDING = 20;

// approximate number of ticks on the WAR axis
var WAR_TICKS = 3;

// maximum WAR
var MAX_WAR = 15;

// dashed line style
var DASHED_STYLE = {"stroke-dasharray": ("3, 3")};

// WAR types and styles
var PITCHER_WAR = [
	{
		name: 'RA9 WAR',
		key: 'WARra9',
		class: 'ra9-war',
		color: '#ff0000'
	},
	{
		name: 'FIP WAR',
		key: 'WARfip',
		class: 'fip-war',
		color: '#551a8b',
		style: DASHED_STYLE
	}
];
var HITTER_WAR = [
	{
		name: 'Def WAR',
		key: 'Value Fielding',
		class: 'def-war',
		color: '#90ee90'
	},
	{
		name: 'Hit WAR',
		key: 'Value Batting',
		class: 'bat-war',
		color: '#87cefa'
	},
	{
		name: 'Run WAR',
		key: 'Value Running',
		class: 'run-war',
		color: '#ffa500'
	},
];

HITTER_WAR_GRAPH_FUNCTIONS = [
	function(d) { return 0; },
	function(d) {
		return d['Value Fielding'] ? d['Value Fielding'] : 0;
	},
	function(d) {
		return d['Value Fielding'] || d['Value Batting'] || d['Value Running'] ?
			Math.min(d['Value Fielding'] + d['Value Batting'],
				d['Value Fielding'] + d['Value Batting'] + d['Value Running']) : 0;
	},
	function(d) { return d['Value Fielding'] || d['Value Batting'] || d['Value Running'] ?
		d['Value Fielding'] + d['Value Batting'] + d['Value Running'] : 0;
	}
];

// line width, color, and fill
var LINE_WIDTH = 2;
var EMPTY_LINE = 0;

// Champion notes
var CHAMP_SIZE = 8;        // set in the .champ-note class

// Axis details
var AXIS_TITLE_SIZE = 15;  // set in the .axis-title class
var AXIS_LEFT_PADDING = 12;   // accounts for axis size and spacing
var AXIS_TICK_SIZE = 10;

// champion stats
var PITCHER_CHAMP_STATS = ['W', 'ERA', 'SO', 'IP', 'SHO', 'FIP'];
var HITTER_CHAMP_STATS = ['HR', 'AVG', 'RBI', 'SB', 'OBP', 'R'];

// WAR note attributes
var WAR_SIZE = 10;
var WAR_RIGHT_PADDING = 80;
var WAR_TOP_PADDING = 5;
var WAR_INTERIOR_PADDING = 3;

// image location and size
var IMAGE_X = 10;
var IMAGE_Y = 5;
var IMAGE_WIDTH = 70;
var IMAGE_HEIGHT = 100;

// position note size
var POSITION_NOTE_AREA_SIZE = 20;
var POSITION_NOTE_SIZE = 12;   // set in the .position-text class
var POSITION_NOTE_PADDING = 5;

// team logo location and size
var LOGO_SIZE = 20;
var LOGO_INTERIOR_PADDING = 3;
var LOGO_X = 10;
var LOGO_Y = IMAGE_Y + IMAGE_HEIGHT + 5;

// Award names and specifications
var PITCHER_AWARDS = [{name: 'AS', key: 'as'}, {name: 'CY', key: 'cy'},
	{name: 'MVP', key: 'mvp'}];
var HITTER_AWARDS = [{name: 'GG', key: 'gg'}, {name: 'AS', key: 'as'},
	{name: 'MVP', key: 'mvp'}];
var AWARD_BASE_Y = CHART_HEIGHT - CHART_BOTTOM_PADDING + 15;
var AWARD_BASE_X = CHART_LEFT_PADDING - 5;
var AWARD_INTERIOR_PADDING = 2;
var AWARD_RADIUS = 3;
var WS_ICON_SIZE = 35;

// icon size: both awards and for the legend
var ICON_SIZE = 10;

// Legend constants
var LEGEND_WIDTH = 150;
var LEGEND_HEIGHT = 130;
var LEGEND_SIZE = 12;     // set in the .legend-content class
var LEGEND_TEXT_OFFSET = 8;
var LEGEND_ENTRY_SIZE = 10;
var LEGEND_PADDING = 15;
var LEGEND_INTERIOR_PADDING = 5;
var LEGEND_ICON_SIZE = 15;
var LEGEND_CONTENTS = [
	{
		type   : 'text',
		class  : 'champ-note',
		text   : 'Black Ink = League Leader'
	},
	{
		type   : 'subtitle',
		text   : 'Pitchers'
	},
	{
		type   : 'line',
		dashed : false,
		color  : '#ff0000',
		text   : 'RA9 WAR'
	},
	{
		type   : 'line',
		dashed : true,
		color  : '#551a8b',
		text   : 'FIP WAR'
	},
	{
		type   : 'subtitle',
		text   : 'Hitters'
	},
	{
		type   : 'icon',
		link   : 'running.png',
		text   : 'Run WAR'
	},
	{
		type   : 'icon',
		link   : 'batting.png',
		text   : 'Hit WAR'
	},
	{
		type   : 'icon',
		link   : 'fielding.png',
		text   : 'Field WAR'
	}
];

// Polygon SVG size
var POLY_WIDTH = 225;
var POLY_HEIGHT = 250;

// Polygon title parameters
var POLY_TITLE_TOP_PADDING = 10;
var POLY_TITLE_SIZE = 18;     // set in the .polygon-title class

// Polygon parameters
var POLY_SIDES = 6;
var POLY_D_RADIUS = 9;
var NUM_POLY = 8;
var POLY_AVERAGE = Math.round(NUM_POLY / 2);

// Polygon colors and stroke width
var POLY_COLOR_DEFAULT = '#000000'; // black
var POLY_COLOR_AVERAGE = '#0000ff'; // blue
var POLY_COLOR_LEADER = '#ff0000';  // red
var POLY_STROKE_DEFAULT = 1;
var POLY_STROKE_THICK = 2;

// Skill poly color and stroke
var POLY_SKILL_STROKE = '#000000';
var POLY_SKILL_STROKE_WIDTH = 3;
var POLY_SKILL_STROKE_OPACITY = 1;
var POLY_SKILL_FILL_OPACITY = 0.7;

// Polygon stats
var PITCHER_STATS_BASIC = [{name: 'Wins', key: 'W'}, {name: 'ERA', key: 'ERA'},
	{name: 'BAA', key: 'AVG'}, {name: 'SO', key: 'SO'},
	{name: 'IP', key: 'IP'}, {name: 'FP', key: 'FP'}];
var PITCHER_STATS_ADV = [{name: 'HR/9', key: 'HR9'}, {name: 'FIP', key: 'FIP'},
	 {name: 'BABIP', key: 'BABIP'}, {name: 'K/BB', key: 'KBB'}, 
	{name: 'TBF', key: 'TBF'}, {name: 'TZ', key: 'TZ'}];
var HITTER_STATS_BASIC = [{name: 'AVG', key: 'AVG'}, {name: 'HR', key: 'HR'},
	{name: 'RBI', key: 'RBI'}, {name: 'Runs', key: 'R'},
	{name: 'SB', key: 'SB'}, {name: 'FP', key: 'FP'}];
var HITTER_STATS_ADV = [{name: 'BABIP', key: 'BABIP'}, {name: 'SLG', key: 'SLG'},
	{name: 'BB/K', key: 'BBK'}, {name: 'OBP', key: 'OBP'},
	{name: 'BsR', key: 'BSR'}, {name: 'TZ', key: 'TZ'}];

// Polygon label
var POLY_LABEL_PADDING = 3;
var POLY_LABEL_SIZE = 15;    // set in the .polygon-label class

// Polygon team image
var POLY_IMAGE_SIZE = 100;

var ZERO_EPSILON = 0.001 // zero with a bound

// variable for later transitions of skill polygons
var skillPolygons = {};

// navigation tabs
var NAV_TABS = [
	{
		text : 'All Players',
		id   : 'nav-tab-all'
	},
	{
		text : 'Pitchers',
		id   : 'nav-tab-pitchers'
	},
	{
		text : 'Hitters',
		id   : 'nav-tab-hitters'
	},
	{
		text : 'Comparison',
		id   : 'nav-tab-comparison'
	}
];

// ======================================== Setup DOM

// initialize a bootstrap container then a main row
var mainRow = d3.select('body')
				.append('div')
				.attr('class', 'container')
				.append('div')
				.attr('class', 'row');

// Overview for the project
mainRow.append('h1').text('Major League Data Challenge 2015 Submission');
mainRow.append('h3').text('Eli Shayer, Ryan Chen, Stephen Spears, Daniel Alvarado, and Scott Powers');
mainRow.append('p').html("In October, Graphicacy challenged the Internet to visualize the careers of the 20 greatest baseball players of all time. Below is our submission, created primarily using the JavaScript library D3. For each player, we plot his WAR by season, and note World Series, awards, and stat titles won. For <b>pitchers</b>, we show both RA9 WAR and FIP WAR (a more stable estimate of the pitcher's true talent) from ages 19 to 44. For <b>hitters</b>, we break down WAR into its fielding, hitting, and running components from ages 18 to 43. Our <b>interactive skills polygons</b> allow you to select any year or range of years on which to compare players' skills, using either basic or advanced stats. The outer vertices of the polygons represent the league leaders over that time and the blue polygon within similarly represents the league average. The comparison utility allows for a more direct comparison of players on the same screen. All data come from <a href=" + '"http://www.baseball-reference.com/" target="_new"' + '>Baseball-Reference.com</a> and <a href="http://www.fangraphs.com/" target="_new">FanGraphs.com</a>. All team logos come from <a href="http://www.sportslogos.net/" target="_new">SportsLogos.net</a>. All portraits come from <a href=http://www.baseball-reference.com/" target="_new">Baseball-Reference.com</a>.');

// create a modal div that will be expanded in interaction.js
d3.select('body').append('div').attr('id', 'modal');

// create two children from the main row: visualizations and navigation
var visCol = mainRow.append('div').attr('class', 'col-sm-10').attr('id', 'vis');
var navCol = mainRow.append('div').attr('class', 'col-sm-2').attr('id', 'nav');

// add justified navigation tabs to the visCol
var navTabs = visCol.append('ul').attr('class', 'nav nav-pills nav-justified');

// append each tab to the navTabs ul
$.each(NAV_TABS, function(index, tab) {
	var tabLi = navTabs.append('li')
						.attr('role', 'presentation');
	var tabA = tabLi.append('a')
					.attr('href', '#')
					.attr('id', tab.id)
					.text(tab.text);

	// mark the first tab as active
	if (index === 0) {
		tabLi.attr('class','active');
	}
});


// helper function to adjust for text width to center an object
// allows for adjustment in either the x or y dimension, defaulting to x
// allows for muliple adjustments as specified by num, in the unit of half width
// assumes one half width unless otherwise specified
// allows for additional padding to the adjustment as specified 
// subtract negative padding to protect against a string being passed in
function adjustObjLoc(obj, isY, halfWidths, padding) {
	obj.attr((isY ? 'y' : 'x'), obj.attr((isY ? 'y' : 'x')) - (halfWidths ? halfWidths : 1) *
		$(obj.node()).width() / 2 - -(padding ? padding : 0));
}

// helper function to get x coordinate
function getX(radius, angle) {
	return POLY_WIDTH / 2 + radius * Math.cos(angle);
}

// helper function to get y coordinate
function getY(radius, angle) {
	return (POLY_HEIGHT + POLY_TITLE_SIZE + POLY_TITLE_TOP_PADDING) / 2 +
		radius * Math.sin(angle);
}

// helper function to add a point to a path
function pathPt(radius, angle) {
	return 'L' + getX(radius, angle) + ',' + getY(radius, angle);
}

// gets the WAR in a single record
function getRecordWar(record, war) {
	var sum = 0;
	$.each(war, function(index, warType) {
		sum += record[warType.key];
	});
	return sum;
}

// finds the key with the largest value in map
function findLargestKey(map) {
	var largestKey = '';
	var largestValue = -Infinity;
	for (key in map) {
		if (map[key] > largestValue) {
			largestKey = key;
			largestValue = map[key];
		}
	}
	return largestKey;
}

// chooses the logo and color that best represents a set of years within a player's career
// based on the logo for which the player accumulated the most WAR
function chooseLogoAndColor(records, war, teamYearMap) {
	// a map to correspond a logo to the associated WAR and team
	var map = {};
	$.each(records, function(index, record) {
		if (record.team && map.hasOwnProperty(getTeamName(record.team))) {
			map[getTeamName(record.team)] += getRecordWar(record, war);
		} else if (record.team) {
			map[getTeamName(record.team)] = getRecordWar(record, war);
		}
	});
	var team = findLargestKey(map);
	return teamYearMap[team];
}

// helper function to adjust the location of the polygon label
function adjustPolyLabelLoc(label, angle) {
	// adjust x location

	// if label is on the left, move one width left and add padding
	if (Math.cos(angle) < -ZERO_EPSILON) {
		adjustObjLoc(label, false, 2, -POLY_LABEL_PADDING);

	// if label is on top/bottom, move half width left
	} else if (Math.abs(Math.cos(angle)) < ZERO_EPSILON) {
		adjustObjLoc(label);
	
	// if label is on the left, add padding.
	// parseFloat to convert string to float, because .attr('y') returns string
	// and the + operator concatenates rather than adds
	} else {
		label.attr('x', parseFloat(label.attr('x')) + POLY_LABEL_PADDING);
	}

	// adjust y location

	// if label is on the top, add padding
	if (Math.sin(angle) < 0) {
		label.attr('y', label.attr('y') - POLY_LABEL_PADDING);

	// if label is on bottom, adjust by font size and add padding
	// same parseFloat rationale: convert from string to float to add rather than concatenate
	} else {
		label.attr('y', parseFloat(label.attr('y')) + POLY_LABEL_SIZE + POLY_LABEL_PADDING);
	}
}

// ======================================== Visualization Function
function visualizeCareers(processedData, playerType, war, champ, age, awards, basic, advanced, isStacked) {
	// ======================================== Category
	// append a header naming the player category
	visCol.append('h2')
			.attr('class', 'player-category')
			.attr('id', playerType + '-vis')
			.text(playerType);

	// ======================================== Chart
	// -------------------- WAR Scale
	// a scale for WAR from 0 to the highest WAR value
	// same scale is used for all players to improve ability to compare
	var warScale = d3.scale.linear()
					 .domain([0, MAX_WAR])
					 .range([CHART_HEIGHT - CHART_BOTTOM_PADDING, CHART_TOP_PADDING]);

	// -------------------- Year Scale
	// a scale for the years spanning the set of ages for the type of player
	var ageScale = d3.scale.linear()
					  .domain([age.min, age.max])
					  .range([CHART_LEFT_PADDING, CHART_WIDTH - CHART_RIGHT_PADDING]);

	// create a graph for each player
	$.each(processedData, function(index, playerData) {
		// initalize a bootsrap row to hold all the relevant elements
		var row = visCol.append('div')
						.attr('id', playerData.id)
						.attr('name', playerData.name)
						.attr('position', playerType)
						.attr('class', 'row player-vis ' + playerType + '-vis');

		// add a title corresponding to the player name
		row.append('h3')
			.attr('class', 'player-title')
			.text(playerData.name);

		// -------------------- Initialization
		// initialize a SVG container, retain for easier future access
		var svg = row.append('div')
						.attr('class', 'col-sm-12 col-md-7')
						.append('svg')
						.attr('class', 'chart')
						.attr('width', CHART_WIDTH)
						.attr('height', CHART_HEIGHT);

		// -------------------- Line graphs
		// returns the results of a line function for both types of WAR
		function warGraph(warArray, index) {
			// get the simple line -- time plot, no shading
			if (!isStacked) {
				return d3.svg.line()
								.x(function(d) { return ageScale(d.age); })
								.y(function(d) { return warScale(d[warArray[index].key]); })
								.interpolate('monotone')(playerData.records);
			} else {
				var bottomPath = d3.svg.line()
										.x(function(d) { return ageScale(d.age); })
										.y(function(d) { return warScale(HITTER_WAR_GRAPH_FUNCTIONS[index](d)); })
										.interpolate('monotone')(playerData.records);
				var topPath = d3.svg.line()
										.x(function(d) { return ageScale(d.age); })
										.y(function(d) { return warScale(HITTER_WAR_GRAPH_FUNCTIONS[index + 1](d)); })
										.interpolate('monotone')(playerData.records.reverse());

				// combine the paths into a single stacked region
				return 'M' + topPath.substring(1) + bottomPath + 'Z';
			}
		}

		// an array of all WAR types up to this point
		// used differently depending on whether isStacked is true or false

		// draw a line on the chart for each type of war
		$.each(war, function(index, warType) {
			var path = svg.append('path')
							.attr('d', warGraph(war, index))
							.attr('stroke', warType.color)
							.attr('stroke-width', isStacked ? EMPTY_LINE : LINE_WIDTH)
							.attr('fill', isStacked ? warType.color : 'none');

			// apply a style if it exists
			if (warType.style) {
				path.style(warType.style);
			}
		});

		// -------------------- Axes
		// helper function to get the player's age in a certain year
		function ageAtYear(records, year) {
			var age = null;
			$.each(records, function(index, record) {
				if (!age && record.year === year) {
					age = record.age;
				}
			});
			return age;
		}

		var yearScale = d3.scale.linear()
						  .domain([playerData.minYear, playerData.maxYear])
						  .range([ageScale(ageAtYear(playerData.records, playerData.minYear)),
						  	ageScale(ageAtYear(playerData.records, playerData.maxYear))]);

		// horizontal year axis, years at the top of the chart
		svg.append('g')
			.attr('class', 'axis horizontal-axis')
			.attr('transform', 'translate(0,' + (CHART_TOP_PADDING) + ')')
			.call(d3.svg.axis()
						.scale(yearScale)
						.orient('bottom')
						.innerTickSize(0)
						.outerTickSize(AXIS_TICK_SIZE)
						.tickValues(0)
						.tickFormat(d3.format('d')));

		// helper function to draw year labels for minYear and maxYear
		function drawYearLabel(year) {
			var label = svg.append('text')
							.attr('x', yearScale(year))
							.attr('y', CHART_TOP_PADDING + AXIS_TICK_SIZE + AXIS_TITLE_SIZE)
							.attr('class', 'axis-title')
							.text(year);

			// adjust label to center on the tick unless it is the youngest possible age
			if (ageAtYear(playerData.records, year) !== age.min) {
				adjustObjLoc(label);
			}
		}

		// draw horizontal year axis labels for the minimum and maximum years
		drawYearLabel(playerData.minYear);
		drawYearLabel(playerData.maxYear); 

		// vertical WAR axis
		svg.append('g')
			.attr('class', 'axis')
			.attr('transform', 'translate(' + CHART_LEFT_PADDING +',0)')
			.call(d3.svg.axis()
						.scale(warScale)
						.orient('left')
						.ticks(WAR_TICKS));

		// -------------------- Axis Titles

		// vertical WAR axis title
		var warAxisTitle = svg.append('text')
								.attr('class', 'axis-title vert-text')
								.attr('x', -(CHART_HEIGHT - CHART_BOTTOM_PADDING + CHART_TOP_PADDING) / 2)
								.attr('y', CHART_LEFT_PADDING - AXIS_LEFT_PADDING)
								.text('WAR');

		// center the vertical axis title
		adjustObjLoc(warAxisTitle);

		// -------------------- Champ stats and year lines
		$.each(playerData.records, function(index, record) {
			// initial value of y -- the bottom of the graph
			var y;
			if (playerType === 'pitchers') {
				y = warScale(Math.min(record.WARra9, record.WARfip) / 2) + CHAMP_SIZE;
			} else {
				y = warScale((record['Value Batting'] + record['Value Fielding']) / 2);
			}
			$.each(champ, function(index, stat) {
				// if the player was the champion of this stat for this year
				if(record[stat + 'champ']) {
					// add a note to indicate they were that stats' champion
					var champNote = svg.append('text')
										.attr('class', 'champ-note')
										.attr('x', ageScale(record.age))
										.attr('y', y)
										.text(stat);

					// adjust x position to center notes on the year
					adjustObjLoc(champNote);

					// adjust y for the next stat
					y += CHAMP_SIZE;
				}
			});
		});

		// -------------------- Player images
		svg.append('image')
			.attr('xlink:href', './images/players/' + playerData.name.replace(' ', '_') + '.jpg')
			.attr('x', IMAGE_X)
			.attr('y', IMAGE_Y)
			.attr('width', IMAGE_WIDTH)
			.attr('height', IMAGE_HEIGHT);

		// -------------------- Awards
		// the height of the current horizontal award line
		var yAward = AWARD_BASE_Y + AWARD_INTERIOR_PADDING;

		// for each award
		$.each(awards, function(awardIndex, award) {
			// add a label
			var awardLabel = svg.append('text')
								.attr('class', 'award-text')
								.attr('x', AWARD_BASE_X)
								.attr('y', yAward)
								.text(award.name);

			// adjust label backwards a full width (2 half-widths) to line up the text
			adjustObjLoc(awardLabel, false, 2);

			// for each year
			$.each(playerData.records, function(playerIndex, record) {
				var isWon = record[award.key] && record[award.key] != 'n/a';
				// add an icon corresponding to an award if won
				if (isWon) {
					svg.append('image')
						.attr('xlink:href', 'images/icons/' + award.key + '.png')
						.attr('x', ageScale(record.age) - ICON_SIZE / 2)
						.attr('y', yAward - ICON_SIZE + AWARD_INTERIOR_PADDING)
						.attr('width', ICON_SIZE)
						.attr('height', ICON_SIZE)
				}
			});


			// add in a separating line on top for all but the last award
			if (awardIndex !== awards.length - 1) {
				svg.append('line')
					.attr('x1', ageScale(age.min))
					.attr('y1', yAward + AWARD_INTERIOR_PADDING)
					.attr('x2', ageScale(age.max))
					.attr('y2', yAward + AWARD_INTERIOR_PADDING)
					.style(DASHED_STYLE)
			}

			// update yAward for the next award
			yAward += ICON_SIZE + AWARD_INTERIOR_PADDING;
		});

		// special world series icons
		$.each(playerData.records, function(index, record) {
			if (record['ws'] && record['ws'] != 'n/a') {
				svg.append('image')
					.attr('xlink:href', 'images/icons/ws.png')
					.attr('x', ageScale(record.age) - WS_ICON_SIZE / 2)
					.attr('y', Math.max(warScale((playerType ===  'pitchers' ? Math.max(record.WARra9, record.WARfip) :
						record['Value Batting'] + record['Value Fielding'] + record['Value Running']))
						- WS_ICON_SIZE, CHART_TOP_PADDING))
					.attr('width', WS_ICON_SIZE)
					.attr('height', WS_ICON_SIZE)
			}
		});

		// ======================================== Polygon
		// create a svg for the polygon
		var polySvg = row.append('div')
							.attr('class', 'col-sm-8 col-md-3')
							.append('svg')
							.attr('class', 'poly')
							.attr('width', POLY_WIDTH)
							.attr('height', POLY_HEIGHT);

		// helper function for a SVG polygon path
		function polygonPath(sides, radius) {
			var path = '';
			// radians per side given the number of sides
			var dRadians = 2 * Math.PI / sides;

			// the current angle, negative so that
			var angle = -Math.PI / 2;
			for (var i = 0; i < sides; i++) {
				path += pathPt(radius, angle);
				angle += dRadians;
			}
			return 'M' + path.substring(1) + 'Z';
		}

		// helper function to draw a polygon
		function drawRegularPolygon(sides, radius, color, strokeWidth) {
			polySvg.append('path')
					.attr('d', polygonPath(sides, radius))
					.attr('stroke', color)
					.attr('stroke-width', strokeWidth)
					.attr('fill', 'none');
		}

		// helper function to draw a skill polygon
		function drawCareerSkillPolygon(skills, records, color, name) {
			var path = '';
			var dRadians = 2 * Math.PI / POLY_SIDES;

			// straight upwards
			var angle = -Math.PI / 2;

			// maximum radius, to edge of polygon
			var maxR = NUM_POLY * POLY_D_RADIUS;

			// create an array to hold the polygon labels
			skillPolygons[name].labels = [];

			// reduce records to only those in which they played (had a team)
			records = records.filter(function(record) { return record.team; });

			// for each skill
			$.each(skills, function(index, skill) {
				var scale = d3.scale.linear()
									// average all means and bests in the career years
									.domain([d3.mean(records, function(d) { return d[skill.key + 'mean']; }),
										d3.mean(records, function(d) { return d[skill.key + 'best']; })])
									.range([maxR / 2, maxR]);

				// insure that all radii are in the range [0, maxR]
				// take the average over the career
				path += pathPt(Math.min(Math.max(0, scale(
					d3.mean(records, function(d) { return d[skill.key]; }))), maxR), angle);

				// add skill labels
				var polyLabel = polySvg.append('text')
										.attr('class', 'polygon-label')
										.attr('x', getX(maxR, angle))
										.attr('y', getY(maxR, angle))
										.attr('angle', angle)
										.text(skill.name);

				adjustPolyLabelLoc(polyLabel, angle);

				// push the labels into the skillPolygon labels array
				skillPolygons[name].labels.push(polyLabel);

				// update the angle for the next skill
				angle += dRadians;
			});

			// draw the skills polygon with color specified by the teams
			skillPolygons[name].poly = polySvg.append('path')
												.attr('d', 'M' + path.substring(1) + 'Z')
												.attr('stroke', POLY_SKILL_STROKE)
												.attr('stroke-width', POLY_SKILL_STROKE_WIDTH)
												.attr('fill', color)
												.attr('stroke-opacity', POLY_SKILL_STROKE_WIDTH)
												.attr('fill-opacity', POLY_SKILL_FILL_OPACITY);
		}

		// draws the polygon and its title in its entirety
		// layers from bottom to top: 1) Team image
		//                            2) Regular polygons
		//                            3) Skill polygon
		function drawPolygon(name, records) {
			var polyTitle = polySvg.append('text')
									.attr('class', 'polygon-title')
									.attr('y', POLY_TITLE_SIZE + POLY_TITLE_TOP_PADDING)
									.text('Skills: ' + 'Career');

			// adjust x position to center
			polyTitle.attr('x', (POLY_WIDTH - $(polyTitle.node()).width()) / 2);

			// add polyTitle to the new skillPolygons[name] object
			skillPolygons[name] = {};
			skillPolygons[name].title = polyTitle;

			// get the logo and color representing the player's career
			var logoAndColor = chooseLogoAndColor(records, war, playerData.teamYearMap);

			// add a key for the player to store the skill polygon for later access
			skillPolygons[name].image = polySvg.append('image')
												.attr('xlink:href', logoAndColor.logo)
												.attr('x', (POLY_WIDTH - POLY_IMAGE_SIZE) / 2)
												.attr('y', (POLY_HEIGHT - POLY_IMAGE_SIZE +
													POLY_TITLE_TOP_PADDING + POLY_TITLE_SIZE) / 2)
												.attr('width', POLY_IMAGE_SIZE)
												.attr('height', POLY_IMAGE_SIZE);

			// draw the regular polygons
			for (var p = 0; p <= NUM_POLY; p++) {
				var color = POLY_COLOR_DEFAULT;
				var strokeWidth = POLY_STROKE_DEFAULT;
				if (p === NUM_POLY || p === NUM_POLY / 2) {
					color = (p === NUM_POLY ? POLY_COLOR_LEADER : POLY_COLOR_AVERAGE);
					strokeWidth = POLY_STROKE_THICK;
				}
				drawRegularPolygon(POLY_SIDES, p * POLY_D_RADIUS, color, strokeWidth);
			}

			// draw the skill polygon
			drawCareerSkillPolygon(basic, records, logoAndColor.color, name);
		}

		// draw the polygon
		drawPolygon(playerData.name, playerData.records);

		// initialize a div to hold the interaction form
		// export responsibility to make the form to the controller
		row.append('div').attr('class', 'col-sm-4 col-md-2 vis-form-wrapper');
		row.append('div').attr('class', 'col-xs-12').append('hr');

		// ======================================== Team Logos and position
		// get most common position
		function getPosition(records) {
			var map = {};
			$.each(records, function(index, record) {
				if (record.position && record.position.length) {
					for (var i = 1; i <= 9; i++) {
						if (record.position.indexOf(i) !== NOT_FOUND_SENTINEL) {
							if (map[i]) {
								map[i]++;
							} else {
								map[i] = 1;
							}
						}
					}
				}
			});
			
			var topPosition = 0;
			var topNumberOfYears = 0;
			// find the most common position, favoring higher numbered positions in ties
			for (var i = 1; i <= 9; i++) {
				if (map[i] && map[i] >= topNumberOfYears) {
					topPosition = i;
					topNumberOfYears = map[i];
				}
			}

			// translate from numberical position to textual position
			switch (topPosition) {
				case 1: return 'Pitcher';
				case 2: return 'Catcher';
				case 3: return 'First Baseman';
				case 4: return 'Second Baseman';
				case 5: return 'Third Baseman';
				case 6: return 'Shortstop';
				case 7: return 'Left Fielder';
				case 8: return 'Center Fielder';
				case 9: return 'Right Fielder';
			}
		}

		// recursively generate a string representing a set of sorted years
		// returned as an array if there are multiple sets of years
		function generateYearString(years) {
			var string = '';
			for (var i = 0; i < years.length; i++) {
				if (i === 0) {
					string += years[i];
				} else if (i === years.length - 1) {
					return string + '-' + years[i];
				} else if (years[i] + 1 !== years[i + 1]) {
					return [string + '-' + years[i], generateYearString(years.slice(i + 1))];
				}
			}
			return string;
		}

		var yLogo = LOGO_Y;

		// for hitters only give the most common position
		if (playerType === 'hitters') {
			adjustObjLoc(svg.append('text')
							.attr('x', IMAGE_X + IMAGE_WIDTH / 2)
							.attr('y', yLogo + POSITION_NOTE_SIZE)
							.attr('class', 'position-text')
							.text(getPosition(playerData.records)));
			yLogo += POSITION_NOTE_AREA_SIZE;
		}

		var teamYearMap = getTeamYearMap(playerData.records);		

		$.each(teamYearMap, function(index, value) {
			svg.append('image')
				.attr('xlink:href', value.logo)
				.attr('x', LOGO_X)
				.attr('y', yLogo)
				.attr('width', LOGO_SIZE)
				.attr('height', LOGO_SIZE);

			var text = generateYearString(value.years);

			// if one set of years, put on the screen
			if (typeof text === 'string') {
				svg.append('text')
					.attr('x', LOGO_X + LOGO_SIZE)
					.attr('y', yLogo + LOGO_SIZE / 1.5)
					.attr('class', 'logo-text')
					.text(text);
			// put on separate lines if an array
			// assumes (correctly for this project) that no more than two stretches with a team
			} else {
				svg.append('text')
					.attr('x', LOGO_X + LOGO_SIZE)
					.attr('y', yLogo + LOGO_SIZE / 2)
					.attr('class', 'logo-text')
					.text(text[0]);

				svg.append('text')
					.attr('x', LOGO_X + LOGO_SIZE)
					.attr('y', yLogo + LOGO_SIZE)
					.attr('class', 'logo-text')
					.text(text[1]);
			}

			yLogo += LOGO_SIZE + LOGO_INTERIOR_PADDING;
		});
	});
}

// ======================================== Legend
// create an svg for the legend, place it at the top of the #nav
var legend = d3.select('#nav')
				.append('svg')
				.attr('class', 'legend-svg')
				.attr('width', LEGEND_WIDTH)
				.attr('height', LEGEND_HEIGHT);

var yLegend = LEGEND_ENTRY_SIZE + LEGEND_INTERIOR_PADDING;

// add the legend contents
$.each(LEGEND_CONTENTS, function(index, content) {
	if (content.type === 'text') {
		adjustObjLoc(legend.append('text')
							.attr('x', LEGEND_WIDTH / 2)
							.attr('y', yLegend)
							.attr('class', content.class)
							.style('font-size', '9px')
							.text(content.text));
	} else if (content.type === 'line') {
		var line = legend.append('line')
							.attr('x1', LEGEND_PADDING)
							.attr('y1', yLegend - LEGEND_ENTRY_SIZE / 2)
							.attr('x2', LEGEND_WIDTH / 2 - LEGEND_PADDING)
							.attr('y2', yLegend - LEGEND_ENTRY_SIZE / 2)
							.style('stroke', content.color)
							.style('stroke-width', LINE_WIDTH);
		if (content.dashed) {
			line.style(DASHED_STYLE);
		}
		legend.append('text')
				.attr('x', LEGEND_WIDTH / 2 + LEGEND_TEXT_OFFSET)
				.attr('y', yLegend)
				.attr('class', 'legend-content')
				.text(content.text);
	} else if (content.type === 'icon') {
		legend.append('image')
				.attr('xlink:href', './images/icons/' + content.link)
				.attr('x', LEGEND_WIDTH / 4 - LEGEND_ICON_SIZE / 2)
				.attr('y', yLegend - ICON_SIZE * 1.25)
				.attr('width', LEGEND_ICON_SIZE)
				.attr('height', LEGEND_ICON_SIZE);
		legend.append('text')
				.attr('x', LEGEND_WIDTH / 2 + LEGEND_TEXT_OFFSET)
				.attr('y', yLegend)
				.attr('class', 'legend-content')
				.text(content.text);
	} else if (content.type === 'subtitle') {
		var subtitle = legend.append('text')
								.attr('x', LEGEND_WIDTH / 2)
								.attr('y', yLegend)
								.attr('class', 'legend-content legend-subtitle')
								.text(content.text);
		// center the subtitle
		adjustObjLoc(subtitle);

		// lines to separate the legend into sections
		legend.append('line')
				.attr('x1', 0)
				.attr('y1', yLegend - LEGEND_ENTRY_SIZE / 2)
				.attr('x2', subtitle.attr('x'))
				.attr('y2', yLegend - LEGEND_ENTRY_SIZE / 2);
		legend.append('line')
				.attr('x1', parseInt(subtitle.attr('x')) + $(subtitle.node()).width())
				.attr('y1', yLegend - LEGEND_ENTRY_SIZE / 2)
				.attr('x2', LEGEND_WIDTH)
				.attr('y2', yLegend - LEGEND_ENTRY_SIZE / 2);
	}
	yLegend += LEGEND_ENTRY_SIZE + LEGEND_INTERIOR_PADDING;
});


visualizeCareers(processed.pitchers, 'pitchers', PITCHER_WAR, PITCHER_CHAMP_STATS, PITCHER_AGE_BOUNDS,
	PITCHER_AWARDS, PITCHER_STATS_BASIC, PITCHER_STATS_ADV, false);
visualizeCareers(processed.hitters, 'hitters', HITTER_WAR, HITTER_CHAMP_STATS, HITTER_AGE_BOUNDS,
	HITTER_AWARDS, HITTER_STATS_BASIC, HITTER_STATS_ADV, true);
