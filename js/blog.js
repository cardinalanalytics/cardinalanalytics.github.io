(function(window, document, undefined) {

	// data specifically for the blog page
	var blogData = {
		header: "SSAC Blog",
		description: "Hear our thoughts",
		navbarTitle: "Blog",
		overview: [
			"This is the SSAC Blog",
			"We are testing out an on-site implementation",
		],
		posts: [
			{
				title: "A Fresh Take on Batting the Pitcher Eighth",
				date: {
					day: 6,
					month: 5,
					year: 2015
				},
				authors: [
					{
						firstName: "Eli",
						lastName: "Shayer"
					},
					{
						firstName: "Scott",
						lastName: "Powers"
					}
				],
				banner: {
					type: "image",
					link: "tbd",
					alt: "Joe Maddon",
					caption: "Joe Maddon, manager of the Chicago Cubs"
				},
				content: [
					{
						type: "paragraph",
						text: "First-year Cubs manager Joe Maddon made headlines shortly after joining his new team this offseason when he asked Chicago’s analytics staff to investigate the effect of batting the pitcher eighth in the lineup[1], rather than in the standard nine-hole. Maddon had demonstrated an affinity for batting the pitcher eighth in the past when his Tampa Bay Rays played interleague games in National League ballparks, requiring that the pitcher be included in the batting order."
					},
					{
						type: "paragraph",
						text: "Through his first 17 games at the helm of the Chicago Cubs, Maddon has written his starting pitcher’s name in the eighth slot of his lineup card each time. Should Maddon continue this habit, at season’s end he will have slotted his pitcher eighth more often in his career than did any other manager since 1916 not named Tony LaRussa[2]. But it would take almost two more full seasons of managing an NL team beyond that in order to pass LaRussa, the modern-day champion of the strategy."
					},
					{
						type: "paragraph",
						text: "The most common argument in favor of moving the pitcher up one spot in the order is based on the value of having a position player batting last, right before the lineup turns over and the strongest batters get their hacks. By batting the pitcher ninth, the argument goes, the best hitters are less likely to have runners on base when they come to the plate. This effect must be balanced with the mild counter-effect that, over the course of a 162-game season, the no. 8 hitter will get something like 20 more plate appearances than the no. 9 hitter."
					},
					{
						type: "paragraph",
						text: "There are additional reasons to suspect that batting the pitcher eighth may be the better strategy. Maddon himself points out that after five or six innings, the pitcher’s spot in the lineup is often filled by a pinch hitter, who may be a better batter than the worst-hitting position player in the starting lineup and certainly has the potential to be a better fit for the situation[3]. Sabermetricians have tackled this problem in the past, for example Mitchel Lichtman concluding that, while the answer depends on the lineup, it is often a toss-up between the two strategies[3] and John Beamer concluding that batting the pitcher eighth was better for the 2007 Cardinals[4]."
					},
					{
						type: "paragraph",
						text: "Here we present the results of an original analysis to tackle the same question, based on simulation and using more recent data. Specifically, using 2014 National League data only, we estimate the probability of each possible outcome of a plate appearance for non-pitchers in each spot of the order, first through eighth. We estimate the same probabilities for pitchers and pinch hitters. Additionally, for each type of ball in play, we estimate the distribution of baserunner advancement, depending on the number of outs and the spot in the order of the baserunner. For example, with the leadoff hitter on second base and two outs, 81% of singles plated that runner while 15% of singles advanced the runner only to third base and 4% of singles resulted in the runner being thrown out. Those same fractions for a no. 4 hitter are 78%, 16% and 6%, respectively."
					},
					{
						type: "paragraph",
						text: "Equipped with these percentages, we simulated a large number (500,000, if you must know) of games each with the starting pitcher batting eighth and the pitcher batting ninth, varying the number of innings pitched by the starter from three to nine. The results are summarized in the table below. The important observation to take away from these results is that while some numbers are larger than others and these differences may be statistically significant due to the large number of simulations, there is no evidence of a strategically significant difference between the two lineups."
					},
					{
						type: "table",
						rows: [
							["Pitcher IP", "3", "4", "5", "6", "7", "8", "9"],
							["Pitcher 9th", "3.4994", "3.4972", "3.4967", "3.4924", "3.4994", "3.4997", "3.4960"],
							["Pitcher 8th", "3.4963", "3.4990", "3.4965", "3.4999", "3.4925", "3.4966", "3.5001"]
						]
					},
					{
						type: "paragraph",
						text: "One problem with this approach for evaluating the strategy is that the simulator underestimates the run-scoring environment. An average of about 3.5 runs per game is lower than in the 2014 National League, so there is some room for improvement in the simulator. But our results are consistent with past results, the difference between the two lineups likely being on the order of less than one run over the course of an entire season."
					},
					{
						type: "paragraph",
						text: "Given our findings, we suspect that the Cubs analytics staff came to a similar conclusion — that it doesn’t really matter whether the pitcher bats eighth or ninth — and gave Maddon the thumbs-up to do whatever his heart felt was right. At least, the Cubs’ lineups to this point this season have not been inconsistent with this hypothesis."
					},
					{
						type: "references",
						references: [
							{
								num: 1,
								text: "Neil Finnell. Cubs researching benefits of batting the pitcher eighth in the lineup. Chicago Cubs Online. December 3, 2014."
							},
							{
								num: 2,
								text: "J.G. Preston. A history of pitchers not batting ninth, and the managers who did it most often. The J.G. Preston Experience. Accessed April 28, 2015."
							},
							{
								num: 3,
								text: "Richard Bergstrom. Baseball rarity: Cubs, Rockies hit pitchers in eighth slot. ESPN. April 10, 2015."
							},
							{
								num: 4,
								text: "John Beamer. Is LaRussa right to bat his pitcher in the eight slot? The Hardball Times. October 1, 2007."
							},
						]
					}
				]
			}
		]
	};

	Handlebars.registerHelper("textualDate", function(date) {
		return new Handlebars.SafeString(
			(function(month) {
				switch (month) {
					case 1: return "January";
					case 2: return "February";
					case 3: return "March";
					case 4: return "April";
					case 5: return "May";
					case 6: return "June";
					case 7: return "July";
					case 8: return "August";
					case 9: return "September";
					case 10: return "October";
					case 11: return "November";
					case 12: return "December";
					default: "Error"
				}
			})(date.month) +
			" " +
			date.day +
			", " +
			date.year
		);
	});

	Handlebars.registerHelper("blogContent", function(content) {
		return new Handlebars.SafeString("<p>ABCD</p>");
	});
	
	var blogTemplate = [
	'{{#with pageData}}',
		'<div class="row">',
			'<div class="col-xs-12">',
				'<div class="row" id="overview">',
					'<div class="col-xs-12">',
						'<h2 class="profiles-overview">Overview</h2>',
						'{{#each overview}}',
						'<p>{{{this}}}</p>',
						'{{/each}}',
						'<hr/>',
					'</div>',
				'</div>',
				'<div class="post">',
					'{{#each posts}}',
						'<h2 class="post-title">{{ title }}</h2>',
						'<h3>Posted on {{textualDate date}}',
						'{{blogContent this}}',
					'{{/each}}',
				'</div>',
			'</div>',
		'</div>',
	'{{/with}}'
	].join('\n');

	// populate page with the above data
	populatePage(blogTemplate, blogData);

})(this, this.document);
