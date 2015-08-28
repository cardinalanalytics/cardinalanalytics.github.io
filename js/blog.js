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
					year: 2015,
					month: 5,
					day: 6
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
				content: [
					{
						type: "image",
						link: "images/blog/maddon.png",
						alt: "Joe Maddon",
						caption: "Joe Maddon, manager of the Chicago Cubs"
					},
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
								text: "Neil Finnell. Cubs researching benefits of batting the pitcher eighth in the lineup. <em>Chicago Cubs Online</em>. December 3, 2014."
							},
							{
								num: 2,
								text: "J.G. Preston. A history of pitchers not batting ninth, and the managers who did it most often. <em>The J.G. Preston Experience</em>. Accessed April 28, 2015."
							},
							{
								num: 3,
								text: "Richard Bergstrom. Baseball rarity: Cubs, Rockies hit pitchers in eighth slot. <em>ESPN</em>. April 10, 2015."
							},
							{
								num: 4,
								text: "John Beamer. Is LaRussa right to bat his pitcher in the eight slot? <em>The Hardball Times</em>. October 1, 2007."
							},
						]
					}
				]
			},
			{
				title: "New Leadership Elected",
				date: {
					year: 2015,
					month: 4,
					day: 29
				},
				authors: {
					firstName: "Eli",
					lastName: "Shayer"
				},
				content: [
					{
						type: "paragraph",
						text: "The Stanford Sports Analytics Club has held elections for its officer positions for the next year. The club will again be led by co-Presidents. Vihan Lahksman will continue to serve as co-President, and will be joined by the newly elected Scott Powers. Sandy Huang will continue in his previous position as Financial Officer. Serving as Blog Editor-in-Chief and Tech Officer will be Eli Shayer."
					},
					{
						type: "paragraph",
						text: "Thank you to the previous leadership of the club for bringing about a tremendously successful first year of existence for SSAC. A special thank you goes to outgoing co-President John Sears, who co-founded SSAC last year and leaves the club in a great position to continue into the future."
					}
				]
			},
			{
				title: "The Frictional Cost of a Call to the Bullpen",
				date: {
					year: 2015,
					month: 3,
					day: 24
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
				content: [
					{
						type: "image",
						link: "images/blog/bullpen.png",
						alt: "Bullpen pitchers",
						caption: "Pitchers for the Houston Astros warm up in the bullpen. (Photo from wikimedia.org)"
					},
					{
						type: "paragraph",
						text: "It is well known that a starter’s performance tails off as he pitches deeper into a game. This drop off in results is attributed to facing the same batters multiple times, pitcher fatigue, and inconsistencies in mechanics. In this work, we examine reliever performance to see if there is an analogous effect."
					},
					{
						type: "paragraph",
						text: "Our study uses wOBA. a statistic developed by Tom Tango that measures the contribution of plate appearance results toward run creation, in units of runs. When assessing a pitcher’s quality, a low wOBA indicates a high performance by the pitcher, while a high wOBA shows the opposite. Expected wOBA is derived from the season wOBA of the batter. The figure below shows the difference between observed and expected wOBA for relievers, as a function of the number of batters faced, based on all batters faced by MLB relievers from 2000 to 2013."
					},
					{
						type: "paragraph",
						text: "For example, the value 1 along the x-axis corresponds to the first batter faced by relievers. The value 2 along the x-axis corresponds to the second batter faced by relievers, and so on. Because pitcher and batter handedness have a significant impact on the result, we separate the results into separate curves for each possible handedness pairing. The “All Handedness” curve is the unweighted average of the four other curves."
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-graph-1.png",
						alt: "Difference from expected wOBA graph by BF",
						caption: "Difference from expected wOBA by batters faced for each handedness split"
					},
					{
						type: "paragraph",
						text: "After the fourth or fifth batter faced (BF), results fluctuate greatly due to insufficient sample size, but all curves show the same pattern at the beginning: On average, the wOBA of the first BF is 10 wOBA points higher, relative to expectation, than the wOBA of the second BF. This difference of 10 wOBA points scales to a difference of about 0.37 runs per 9 innings (because the average number of batters faced per 9 innings is about 37)."
					},
					{
						type: "paragraph",
						text: "Our proposed explanation of this frictional substitution cost is that pitchers require some feeling out of their pitches and throwing at full effort before being completely game-ready. Warm up pitches in the bullpen appear to not sufficiently prepare a reliever for appearing in the game, and they pay the price when facing their first batter."
					},
					{
						type: "subtitle",
						text: "What kind of relievers struggle most against the first batter faced?"
					},
					{
						type: "paragraph",
						text: "While we account for batter skill by comparing results against expected results for the batter (and in doing so adjust for year), the above results do not account for pitcher ability. Pitchers who face more batters than average are over-represented, relatively, against the fifth BF, while pitchers with fewer BFs than average are relatively over-represented against the first batter faced."
					},
					{
						type: "paragraph",
						text: "To account for this source of bias, we define a reliever’s type based on the number of batters he faces in an average outing. The three categories were < 3.5 BF, 3.5 – 4 BF, and > 4 BF. These categories were derived from the distribution of average number of batters faced, which was centered at 3.5 – 4 BF, with long tails on either end. Using the same model as above, we made a similar graph for each category of reliever, included in the figure below."
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-graph-2.png",
						alt: "Difference from expected wOBA graph by BF split by reliever type",
						caption: "Difference from expected wOBA by batters faced for each handedness split and reliever appearance length split"
					},
					{
						type: "paragraph",
						text: "Dividing the data to this granularity, we observe that the sample sizes have been reduced sufficiently to mask the signal with the noise. In none of the three graphs above is there a clear trend. However, one important observation is that the three groups of relievers do not have significantly different performance over all among the first five batters faced. So we have assuaged concerns that the observed first batter effect may be due to sampling bias."
					},
					{
						type: "subtitle",
						text: "How do relievers struggle against the first batter faced?"
					},
					{
						type: "paragraph",
						text: "To try to understand exactly how reliever performance changes as they face more batters, we broke down the distribution of results for each number of batters faced. In the table that follows, we have found the percentage of plate appearances that end in each result."
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-table-1.png",
						alt: "Outcome distribution by batters faced",
						caption: "The distribution of batter outcomes by the number of batters faced by the reliever"
					},
					{
						type: "paragraph",
						text: "The data in the table demonstrate that the mechanism for relievers performing worse against their first batter faced is a high level of power. The first batter of a reliever’s appearance hits fewer singles than typical, but makes up for it by hitting an above average proportion of doubles, triples, and home runs. Additionally, the peril of leaving a reliever in too long is clear when comparing the first few batters faced to the last few batters faced in the chart. In fact, the first batter effect is overcome by a reliever tiredness effect by the 7th batter, at which point reliever performance increasingly worsen, and is worse than their performance against the first batter."
					},
					{
						type: "subtitle",
						text: "What about the first batter faced in subsequent innings?"
					},
					{
						type: "paragraph",
						text: "The final aspect of our analysis was looking at whether there is a first batter effect for each inning similar to the one we found for each appearance. Knowing that the first batter effect exists for the first inning we separated out that effect from a potential first batter of the inning effect. Thus this analysis looked exclusively at plate appearances pitched by relievers coming out of the dugout after pitching the final out of the previous inning. Pooling together all innings besides the first into number of batters faced results in the figure below."
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-graph-3.png",
						alt: "Difference from expected wOBA graph by BF split after the first inning",
						caption: "Difference from expected wOBA by batters faced for each handedness split for relievers not in their first inning"
					},
					{
						type: "paragraph",
						text: "The graph doesn’t show any notable patterns in the first several batters faced. There doesn’t appear to be an analogous first batter effect, and moreover the data shows an opposite result. There is an oddly consistent result in the fifth and sixth batters faced, which is a source of intrigue. Otherwise, the data doesn’t show an effect on the first batter of an inning, other than the first batter of the appearance as a whole."
					},
					{
						type: "subtitle",
						text: "Conclusion"
					},
					{
						type: "paragraph",
						text: "We have shown that relievers struggle against the first batter they face, relative to expectation. Data were insufficient to identify which types of relievers suffered from this effect most, but we were able to identify that the reason for the increase wOBA of the first batter faced is an increase in power numbers. That is, the proportion of doubles, triples, and home runs against the first BF is higher than would otherwise be expected when relievers enter a ballgame."
					},
					{
						type: "paragraph",
						text: 'Intuitively, these results make sense. A reliever who has just entered the game could not be described as being “in rhythm.” These results suggest that there is an increased risk of such a reliever throwing a mistake pitch, resulting in extra bases. Perhaps, on average, the time spent warming up in the bullpen is insufficient for a reliever to be “game ready.”'
					},
					{
						type: "paragraph",
						text: "The frictional cost we observed is the equivalent of a difference of about 0.37 runs in ERA. So while much has been made of the value of using relievers, this effect is something that managers need to take into account when they are managing their bullpens."
					},
					{
						type: "paragraph",
						text: "Something that we did not explore is whether relievers struggle more against the first batter face when they have more or less forewarning that they will enter the game. This preparedness may be difficult to measure, but a possible surrogate would be an indicator of whether the reliever entered mid-inning. We leave this to future work."
					}
				]
			},
		]
	};

	/* Converts a numerical date into a textual date in a Handlebars helper
	 * Assumes the following date object format, with the example textually
	 * being "August 26, 2015":
	 *
	 * date: {
	 *     day: 26,
	 *     month: 8,
	 *     year: 2015
	 * }
	 */
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

	/* Writes a byline for any length of an authors array. Assumes the names
	 * are contained in an array, with each name as an object with the first and
	 * last name seperated. Example:
	 * name: {
	 *     firstName: "Eli",
	 *     lastName: "Shayer"
	 * }
	 */
	Handlebars.registerHelper("byline", function(authors) {
		// helper function to write a full name
		function fullName(name) {
			return name.firstName + " " + name.lastName;
		}

		// forms byline with the one author, two authors, and three or more authors cases
		var result = "";
		if ($.isArray(authors)) {
			if (authors.length === 1) {
				result += fullName(authors[0]);
			} else if (authors.length === 2) {
				result += fullName(authors[0]) + " and " + fullName(authors[1]);
			} else {
				for (var i = 0; i < authors.length; i++) {
					result += fullName(authors[i]);
					if (i + 1 < authors.length) {
						result += ", ";
					}
					if (i + 2 === authors.length) {
						result += "and ";
					}
				}
			}
		} else {
			result += fullName(authors);
		}
		return new Handlebars.SafeString(result);
	});

	/* Handlebars helper to deal with any type of post content. Accepts paragraphs,
	 * tables, images, and references. Relies on the type key of the content object.
	 */

	Handlebars.registerHelper("postContent", function(content) {
		var result = "";
		// paragraph content
		if (content.type === "paragraph") {
			result += "<p>" + content.text + "</p>";

		// table content
		} else if (content.type === "table") {
			result += '<table class="table">';
			$.each(content.rows, function(index, row) {
				result += "<tr>";
				$.each(row, function(index, data) {
					result += "<td>" + data + "</td>";
				});
				result += "</tr>";
			});
			result += "</table>";

		// references content
		} else if (content.type === "references") {
			result += '<hr class="small"/>';
			$.each(content.references, function(index, reference) {
				result += "<p>" + "[" + reference.num + "] " + reference.text + "</p>";
			});

		// images content
		} else if (content.type === "image") {
			result += '<img src="' + content.link + '" alt="' + content.alt + '" class="blog-image" </img>';
			if (content.caption) {
				result += '<p class="blog-image-caption">' + '<span class="caption-header">Caption: </span>' + content.caption + '</p>';
			}

		// subtitle content
		} else if (content.type === "subtitle") {
			result += '<p class="blog-subtitle">' + content.text + '</p>';
		}
		return new Handlebars.SafeString(result);
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
						'<h3 class="post-title">{{ title }}</h3>',
						'<h4>Posted on {{textualDate date}}</h4>',
						'<h5 class="post-byline">{{byline authors}}</h5>',
						'{{#each content}}',
							'{{postContent this}}',
						'{{/each}}',
						'<hr/>',
					'{{/each}}',
				'</div>',
			'</div>',
		'</div>',
	'{{/with}}'
	].join('\n');

	// populate page with the above data
	populatePage(blogTemplate, blogData);

})(this, this.document);
