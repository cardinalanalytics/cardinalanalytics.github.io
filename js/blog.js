(function(window, document, undefined) {

	// constants
	var MAX_RECENT_POSTS = 5
	var FA_EXPAND = "fa-plus";
	var FA_SHRINK = "fa-minus";
	var FILTER_OPTIONS = {
		subject: {
			title: "subject",
			options: ["Baseball", "Basketball", "Football", "Other"],
			textualize: function(subject) {
				return subject;
			}
		},
		date: {
			title: "date",
			options: [
				{
					year: 2015,
					month: 5
				},
				{
					year: 2015,
					month: 4
				},
				{
					year: 2015,
					month: 3
				},
				{
					year: 2014,
					month: 11
				},
				{
					year: 2014,
					month: 10
				}
			],
			textualize: function(date) {
				return getTextualDate(date);
			}
		},
		author: {
			title: "author",
			options: [
				{
					firstName: "Eli",
					lastName: "Shayer"
				},
				{
					firstName: "Scott",
					lastName: "Powers"
				},
				{
					firstName: "Vihan",
					lastName: "Lakshman"
				},
				{
					firstName: "Konstantinos",
					lastName: "Balafas"
				},
				{
					firstName: "Sandy",
					lastName: "Huang"
				}
			],
			textualize: function(name) {
				return fullName(name);
			}
		}
	};

	// data specifically for the blog page
	var blogData = {
		header: "SSAC Blog",
		description: "Hear our thoughts",
		navbarTitle: "Blog",
		posts: [
			{
				title: "A Fresh Take on Batting the Pitcher Eighth",
				id: "batter-eighth",
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
				subjects: [
					"Baseball"
				],
				content: [
					{
						type: "image",
						link: "images/blog/maddon.png",
						alt: "Joe Maddon",
						caption: "Joe Maddon, manager of the Chicago Cubs"
					},
					{
						type: "text",
						text: [
							"First-year Cubs manager Joe Maddon made headlines shortly after joining his new team this offseason when he asked Chicago’s analytics staff to investigate the effect of batting the pitcher eighth in the lineup[1], rather than in the standard nine-hole. Maddon had demonstrated an affinity for batting the pitcher eighth in the past when his Tampa Bay Rays played interleague games in National League ballparks, requiring that the pitcher be included in the batting order.",
							"Through his first 17 games at the helm of the Chicago Cubs, Maddon has written his starting pitcher’s name in the eighth slot of his lineup card each time. Should Maddon continue this habit, at season’s end he will have slotted his pitcher eighth more often in his career than did any other manager since 1916 not named Tony LaRussa[2]. But it would take almost two more full seasons of managing an NL team beyond that in order to pass LaRussa, the modern-day champion of the strategy.",
							"The most common argument in favor of moving the pitcher up one spot in the order is based on the value of having a position player batting last, right before the lineup turns over and the strongest batters get their hacks. By batting the pitcher ninth, the argument goes, the best hitters are less likely to have runners on base when they come to the plate. This effect must be balanced with the mild counter-effect that, over the course of a 162-game season, the no. 8 hitter will get something like 20 more plate appearances than the no. 9 hitter.",
							"There are additional reasons to suspect that batting the pitcher eighth may be the better strategy. Maddon himself points out that after five or six innings, the pitcher’s spot in the lineup is often filled by a pinch hitter, who may be a better batter than the worst-hitting position player in the starting lineup and certainly has the potential to be a better fit for the situation[3]. Sabermetricians have tackled this problem in the past, for example Mitchel Lichtman concluding that, while the answer depends on the lineup, it is often a toss-up between the two strategies[3] and John Beamer concluding that batting the pitcher eighth was better for the 2007 Cardinals[4].",
							"Here we present the results of an original analysis to tackle the same question, based on simulation and using more recent data. Specifically, using 2014 National League data only, we estimate the probability of each possible outcome of a plate appearance for non-pitchers in each spot of the order, first through eighth. We estimate the same probabilities for pitchers and pinch hitters. Additionally, for each type of ball in play, we estimate the distribution of baserunner advancement, depending on the number of outs and the spot in the order of the baserunner. For example, with the leadoff hitter on second base and two outs, 81% of singles plated that runner while 15% of singles advanced the runner only to third base and 4% of singles resulted in the runner being thrown out. Those same fractions for a no. 4 hitter are 78%, 16% and 6%, respectively.",
							"Equipped with these percentages, we simulated a large number (500,000, if you must know) of games each with the starting pitcher batting eighth and the pitcher batting ninth, varying the number of innings pitched by the starter from three to nine. The results are summarized in the table below. The important observation to take away from these results is that while some numbers are larger than others and these differences may be statistically significant due to the large number of simulations, there is no evidence of a strategically significant difference between the two lineups."
						]
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
						type: "text",
						text: [
							"One problem with this approach for evaluating the strategy is that the simulator underestimates the run-scoring environment. An average of about 3.5 runs per game is lower than in the 2014 National League, so there is some room for improvement in the simulator. But our results are consistent with past results, the difference between the two lineups likely being on the order of less than one run over the course of an entire season.",
							"Given our findings, we suspect that the Cubs analytics staff came to a similar conclusion — that it doesn’t really matter whether the pitcher bats eighth or ninth — and gave Maddon the thumbs-up to do whatever his heart felt was right. At least, the Cubs’ lineups to this point this season have not been inconsistent with this hypothesis."
						]
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
				id: "new-leadership",
				date: {
					year: 2015,
					month: 4,
					day: 29
				},
				authors: [
					{
						firstName: "Eli",
						lastName: "Shayer"
					}
				],
				subjects: [
					"Other"
				],
				content: [
					{
						type: "text",
						text: [
							"The Stanford Sports Analytics Club has held elections for its officer positions for the next year. The club will again be led by co-Presidents. Vihan Lakshman will continue to serve as co-President, and will be joined by the newly elected Scott Powers. Sandy Huang will continue in his previous position as Financial Officer. Serving as Blog Editor-in-Chief and Tech Officer will be Eli Shayer.",
							"Thank you to the previous leadership of the club for bringing about a tremendously successful first year of existence for SSAC. A special thank you goes to outgoing co-President John Sears, who co-founded SSAC last year and leaves the club in a great position to continue into the future."
						]
					}
				]
			},
			{
				title: "The Frictional Cost of a Call to the Bullpen",
				id: "frictional-cost",
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
				subjects: [
					"Baseball"
				],
				content: [
					{
						type: "image",
						link: "images/blog/bullpen.png",
						alt: "Bullpen pitchers",
						caption: "Pitchers for the Houston Astros warm up in the bullpen. (Photo from wikimedia.org)"
					},
					{
						type: "text",
						text: [
							"It is well known that a starter’s performance tails off as he pitches deeper into a game. This drop off in results is attributed to facing the same batters multiple times, pitcher fatigue, and inconsistencies in mechanics. In this work, we examine reliever performance to see if there is an analogous effect.",
							"Our study uses wOBA. a statistic developed by Tom Tango that measures the contribution of plate appearance results toward run creation, in units of runs. When assessing a pitcher’s quality, a low wOBA indicates a high performance by the pitcher, while a high wOBA shows the opposite. Expected wOBA is derived from the season wOBA of the batter. The figure below shows the difference between observed and expected wOBA for relievers, as a function of the number of batters faced, based on all batters faced by MLB relievers from 2000 to 2013.",
							"For example, the value 1 along the x-axis corresponds to the first batter faced by relievers. The value 2 along the x-axis corresponds to the second batter faced by relievers, and so on. Because pitcher and batter handedness have a significant impact on the result, we separate the results into separate curves for each possible handedness pairing. The “All Handedness” curve is the unweighted average of the four other curves."
						]
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-graph-1.png",
						alt: "Difference from expected wOBA graph by BF",
						caption: "Difference from expected wOBA by batters faced for each handedness split"
					},
					{
						type: "text",
						text: [
							"After the fourth or fifth batter faced (BF), results fluctuate greatly due to insufficient sample size, but all curves show the same pattern at the beginning: On average, the wOBA of the first BF is 10 wOBA points higher, relative to expectation, than the wOBA of the second BF. This difference of 10 wOBA points scales to a difference of about 0.37 runs per 9 innings (because the average number of batters faced per 9 innings is about 37).",
							"Our proposed explanation of this frictional substitution cost is that pitchers require some feeling out of their pitches and throwing at full effort before being completely game-ready. Warm up pitches in the bullpen appear to not sufficiently prepare a reliever for appearing in the game, and they pay the price when facing their first batter."
						]
					},
					{
						type: "subtitle",
						text: "What kind of relievers struggle most against the first batter faced?"
					},
					{
						type: "text",
						text: [
							"While we account for batter skill by comparing results against expected results for the batter (and in doing so adjust for year), the above results do not account for pitcher ability. Pitchers who face more batters than average are over-represented, relatively, against the fifth BF, while pitchers with fewer BFs than average are relatively over-represented against the first batter faced.",
							"To account for this source of bias, we define a reliever’s type based on the number of batters he faces in an average outing. The three categories were < 3.5 BF, 3.5 – 4 BF, and > 4 BF. These categories were derived from the distribution of average number of batters faced, which was centered at 3.5 – 4 BF, with long tails on either end. Using the same model as above, we made a similar graph for each category of reliever, included in the figure below."
						]
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-graph-2.png",
						alt: "Difference from expected wOBA graph by BF split by reliever type",
						caption: "Difference from expected wOBA by batters faced for each handedness split and reliever appearance length split"
					},
					{
						type: "text",
						text: "Dividing the data to this granularity, we observe that the sample sizes have been reduced sufficiently to mask the signal with the noise. In none of the three graphs above is there a clear trend. However, one important observation is that the three groups of relievers do not have significantly different performance over all among the first five batters faced. So we have assuaged concerns that the observed first batter effect may be due to sampling bias."
					},
					{
						type: "subtitle",
						text: "How do relievers struggle against the first batter faced?"
					},
					{
						type: "text",
						text: "To try to understand exactly how reliever performance changes as they face more batters, we broke down the distribution of results for each number of batters faced. In the table that follows, we have found the percentage of plate appearances that end in each result."
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-table-1.png",
						alt: "Outcome distribution by batters faced",
						caption: "The distribution of batter outcomes by the number of batters faced by the reliever"
					},
					{
						type: "text",
						text: "The data in the table demonstrate that the mechanism for relievers performing worse against their first batter faced is a high level of power. The first batter of a reliever’s appearance hits fewer singles than typical, but makes up for it by hitting an above average proportion of doubles, triples, and home runs. Additionally, the peril of leaving a reliever in too long is clear when comparing the first few batters faced to the last few batters faced in the chart. In fact, the first batter effect is overcome by a reliever tiredness effect by the 7th batter, at which point reliever performance increasingly worsen, and is worse than their performance against the first batter."
					},
					{
						type: "subtitle",
						text: "What about the first batter faced in subsequent innings?"
					},
					{
						type: "text",
						text: "The final aspect of our analysis was looking at whether there is a first batter effect for each inning similar to the one we found for each appearance. Knowing that the first batter effect exists for the first inning we separated out that effect from a potential first batter of the inning effect. Thus this analysis looked exclusively at plate appearances pitched by relievers coming out of the dugout after pitching the final out of the previous inning. Pooling together all innings besides the first into number of batters faced results in the figure below."
					},
					{
						type: "image",
						link: "images/blog/frictional-cost-graph-3.png",
						alt: "Difference from expected wOBA graph by BF split after the first inning",
						caption: "Difference from expected wOBA by batters faced for each handedness split for relievers not in their first inning"
					},
					{
						type: "text",
						text: "The graph doesn’t show any notable patterns in the first several batters faced. There doesn’t appear to be an analogous first batter effect, and moreover the data shows an opposite result. There is an oddly consistent result in the fifth and sixth batters faced, which is a source of intrigue. Otherwise, the data doesn’t show an effect on the first batter of an inning, other than the first batter of the appearance as a whole."
					},
					{
						type: "subtitle",
						text: "Conclusion"
					},
					{
						type: "text",
						text: [
							"We have shown that relievers struggle against the first batter they face, relative to expectation. Data were insufficient to identify which types of relievers suffered from this effect most, but we were able to identify that the reason for the increase wOBA of the first batter faced is an increase in power numbers. That is, the proportion of doubles, triples, and home runs against the first BF is higher than would otherwise be expected when relievers enter a ballgame.",
							'Intuitively, these results make sense. A reliever who has just entered the game could not be described as being “in rhythm.” These results suggest that there is an increased risk of such a reliever throwing a mistake pitch, resulting in extra bases. Perhaps, on average, the time spent warming up in the bullpen is insufficient for a reliever to be “game ready.”',
							"The frictional cost we observed is the equivalent of a difference of about 0.37 runs in ERA. So while much has been made of the value of using relievers, this effect is something that managers need to take into account when they are managing their bullpens.",
							"Something that we did not explore is whether relievers struggle more against the first batter face when they have more or less forewarning that they will enter the game. This preparedness may be difficult to measure, but a possible surrogate would be an indicator of whether the reliever entered mid-inning. We leave this to future work."
						]
					},
					{
						type: "author-note",
						text: "Eli Shayer is an undeclared freshman from Anchorage, Alaska. He misses having snow available for cross country skiing."
					},
					{
						type: "author-note",
						text: "Scott Powers is a PhD student in statistics and an analytics consultant to the Oakland Athletics. He plays catcher for the club baseball team and setter for the club volleyball team."
					},
					{
						type: "author-note",
						text: "Contact Eli at eshayer ‘at’ stanford.edu and Scott at sspowers ‘at’ stanford.edu"
					}
				]
			},
			{
				title: "Examining MLB Postseason Cluster Luck: Or, Why the Playoffs Might be a Crapshot",
				id: "custerluck",
				date: {
					year: 2015,
					month: 3,
					day: 24
				},
				authors: [
					{
						firstName: "Vihan",
						lastName: "Lakshman"
					}
				],
				subjects: [
					"Baseball"
				],
				content: [
					{
						type: "image",
						link: "images/blog/billy-beane-1989.jpg",
						alt: "Billy Beane in 1989",
						caption: "Billy Beane, General Manager of the Oakland Athletics, in 1989. (Photo from wikimedia.org)"
					},
					{
						type: "text",
						text: "What role does luck play in baseball success? As one of the pioneering sports in quantitative analysis, our national past time is now understood—in many respects—as a finely tuned game of numbers. But does that tell the whole story?"
					},
					{
						type: "text",
						text: "Many prominent baseball figures, including Billy Beane, have described the MLB playoffs as a “crapshoot,” a roll of the dice that throws regular season success out the window. As Beane puts it, the teams who make the playoffs undoubtedly deserve to be there following a marathon 162 game regular season, but pure luck might be ultimate factor behind who finally ends up hoisting the World Series trophy."
					},
					{
						type: "text",
						text: "To explore this idea of postseason luck in more detail, we can examine the “cluster luck” of teams in the regular season and the postseason. First coined by Joe Peta in his book Trading Bases, cluster luck provides a numerical measure of a team’s fortune in stringing together hits."
					},
					{
						type: "text",
						text: "Jonah Keri of Grantland explains the phenomenon of cluster luck with an example: “Say a team tallies nine singles in one game. If all of those singles occur in the same inning, the team would likely score seven runs; if each single occurs in a different inning, however, it’d likely mean a shutout.”"
					},
					{
						type: "text",
						text: "As a further example of very unfortunate cluster luck, consider this box-score from Baseball-Reference from a 2005 meeting between Minnesota and Kansas City where the Twins tied a 1969 MLB record for the most hits in a game without a run."
					},
					{
						type: "image",
						link: "images/blog/twins-royals-1969.png",
						alt: "Twins v. Royals 1969 game",
						caption: "The 1969 MLB record Twins v. Royals boxscore, epitomizing clusterluck"
					},
					{
						type: "text",
						text: "Thus, if we use cluster luck as a tool to measure the respective fortunes of MLB teams in the regular season and the postseason, we might be able to shed some light on whether the playoffs are indeed a crapshoot, or if there is, in fact, a correlation between regular season and post season cluster luck—suggesting that cluster luck may not be luck at all."
					},
					{
						type: "text",
						text: "While the idea behind cluster luck may make intuitive sense, there is no clear-cut, standard method of calculating how well a team bunches hits together. In this analysis, I used the base-runs formula, a model of predicting scoring, and considered the most accurate sabermetric statistic for run estimation. For all playoff teams between the years 2007 and 2014, I calculated each club’s regular season and postseason luck by determining their predicted run totals from the base runs formula and subtracting that from the actual amount of runs scored. A negative number indicates that a team scored fewer runs than expected and is hence “unlucky” while a positive score denotes “good luck” and specifies how many runs a team exceeded our base-runs prediction."
					},
					{
						type: "text",
						text: "In examining the World Series winner from 2007-2014, we see that the vast majority of teams enjoyed positive cluster luck in the postseason."
					},
					{
						type: "image",
						link: "images/blog/clusterluck-table.png",
						alt: "World Series winners regular season vs. postseason clusterluck table",
						caption: "Clusterluck of World Series champions from 2007-2014 in the regular season and the postseason"
					},
					{
						type: "text",
						text: "Perhaps what’s more surprising about this list is the overwhelming amount of negative cluster luck during the regular season, most notably on the part of the 2009 Yankees who finished at the bottom of MLB in regular season luck. This phenomenon can likely be explained by considering that teams who manage to win games in spite of bad luck might be the most talented. In addition, this table of World Series winners provides our first bit of evidence that there may not be a correlation between regular season and postseason cluster luck, affirming the theory of the playoffs as a crapshoot."
					},
					{
						type: "text",
						text: "To test this idea in further detail, I conducted a simple linear regression examining postseason cluster luck versus regular season luck."
					},
					{
						type: "image",
						link: "images/blog/clusterluck-graph.png",
						alt: "Playoff team clusterluck graph",
						caption: "Clusterluck of playoff teams in the regular season and the postseason"
					},
					{
						type: "text",
						text: "Under the null hypothesis that the true slope of our linear regression is 0, we use a two-sided t-test to obtain a p-value of 0.6201, which is greater than our significance level of 0.1. Therefore, we cannot reject our null hypothesis and cannot conclude anything further about the relationship between postseason and regular season luck."
					},
					{
						type: "text",
						text: "In our regression, we obtained an R2 value of 0.003987, suggesting that regular season cluster luck explains virtually none of the variance in postseason luck."
					},
					{
						type: "text",
						text: "Ultimately, we found no evidence of a relationship between a team’s luck in the regular season and in the playoffs, which is what one would expect if it were truly luck. Although we cannot conclude that no relationship exists, there might in fact be something to the intuitive notion that the playoffs are a crapshoot. Whether this news is comforting to perennial playoff disappointments like the A’s, I can’t say, but the idea that luck can play such a huge role in determining legacies in sports is a fascinating question and definitely deserving of further exploration."
					},
					{
						type: "author-note",
						text: "Vihan Lakshman is a junior from Savannah, GA studying mathematics. He also writes about football for The Stanford Daily and broadcasts sports for KZSU student radio. In his free time, he loves playing intramural sports and hopelessly rooting for the Atlanta Falcons to return to the Super Bowl."
					},
					{
						type: "author-note",
						text: "Contact Vihan at vihan ‘at’ stanford.edu "
					}
				]
			},
			{
				title: "The Importance of Having a High NBA Draft Pick",
				id: "nba-draft",
				date: {
					year: 2014,
					month: 11,
					day: 30
				},
				authors: [
					{
						firstName: "Konstantinos",
						lastName: "Balafas"
					}
				],
				subjects: [
					"Basketball"
				],
				content: [
					{
						type: "image",
						link: "images/blog/nba-draft-logo.jpg",
						alt: "The NBA Draft",
						caption: "The NBA Draft (Photo from pixgood.com)"
					},
					{
						type: "text",
						text: "On October 21st, the NBA board of governors voted against reforming the NBA’s draft lottery. A very good review of the proposed changes and potential ramifications can be found here but the overarching theme of the league’s proposal was limiting “tanking”. The board of governors ended up rejecting the proposal and, while the argument that was made was that the changes would hurt small-market teams, it indicates that there are NBA GMs and owners that are (or may be in the future) willing to embrace a losing ideology for the reward of a high draft pick. That brings us to the “million-dollar” question: Is tanking really worth it?"
					},
					{
						type: "subtitle",
						text: "THE DATA"
					},
					{
						type: "text",
						text: "In an attempt to answer that question with numbers, names and simple analysis, we gathered data for the “most successful” players since 2000 (from Wikipedia) and of the teams’ Win/Loss percentages since 1985 (from basketball-reference.com) – the year the lottery system came into effect. For the purposes of this article, the “most successful” players are those elected to All-NBA and All-Star teams, as well as the starters for teams that played in NBA Finals."
					},
					{
						type: "text",
						text: "There are certain caveats to this analysis. As far as the players are concerned, traded picks, on draft night or otherwise, are not considered. So, for this analysis, Kobe Bryant is a Charlotte Hornets pick despite never playing a minute for them and Jeff Green, as the #5 pick in 2008, is not considered for helping Boston have the best single-year turnaround in league history. As far as the team performances are concerned, only the top pick of each team is considered in order to simplify the analysis. That means that any effect that Tristan Thompson (#4 pick, 2011) may have had for the Cleveland Cavaliers has been attributed to Kyrie Irving (#1 pick, 2011)."
					},
					{
						type: "subtitle",
						text: "PICK DISTRIBUTIONS"
					},
					{
						type: "text",
						text: "As a first-pass analysis, we plotted the histograms of the draft picks for the aforementioned player categories, which are shown below. The histograms show a concentration of draft picks in the 1-10 range, which reinforces the intuitive belief that “good players are generally drafted high”."
					},
					{
						type: "image",
						link: "images/blog/nba-pick-distributions.png",
						alt: "NBA Pick Distribution"
					},
					{
						type: "text",
						text: "It is worth noting that no player drafted lower than 10 has made the first All-NBA team since 2000. So far, the pick distributions shown indicate that it is indeed important for a team to have high draft picks and therefore tanking may indeed be a viable strategy for lottery teams. However, a (very) good player does not a good team make, or Kevin Love would still be plying his trade in Minnesota."
					},
					{
						type: "text",
						text: "For that reason, let us explore the picks of the players that have started at least one game in the NBA Finals over the past 14 years. Figure 2 shows these picks for the NBA Champions (left) and the NBA Runners-up (right)."
					},
					{
						type: "image",
						link: "images/blog/nba-finals-pick-distributions.png",
						alt: "NBA Finals Pick Distribution"
					},
					{
						type: "text",
						text: "Again, the vast majority of the players are drafted in the lottery (picks 1-14). Interestingly enough, with the exception of the 2007-2011 interval and the ’04 Pistons there has been no NBA Champion without a #1 pick. Even in the listed exceptions, these teams had multiple Top-10 picks. Still more indication that teams need lottery picks to contend for a title!"
					},
					{
						type: "subtitle",
						text: "THE BIG-3 EFFECT"
					},
					{
						type: "text",
						text: "There is, however, an important parameter that has not been yet investigated. As the Miami Heat proved, the draft is not the only way to high draft picks and, subsequently, title rings. For that reason, Figure 3 shows the same histograms as Figure 1, only in this case different colors correspond to players that achieved the honors with the team that drafted them or a different one."
					},
					{
						type: "image",
						link: "images/blog/nba-big-3-effect.png",
						alt: "The Big 3 Effect",
					},
					{
						type: "text",
						text: "It generally seems that there is no clear trend in the distributions of draft picks with the drafting or with a different team. Top picks tend to stay (or be more successful) with the team that drafted them, while starting five in the NBA Finals tend to be assembled in ways other than the draft."
					},
					{
						type: "subtitle",
						text: "DRAFT POSITION VS> IMPROVEMENT"
					},
					{
						type: "text",
						text: "So far, then, even if there is no clear answer on whether a team is justified in tanking, quite a bit of the data seem to point that way. On the other hand we’ve looked at All-NBA teams, All-Star teams and NBA finalists. That can be a tall order for a young kid that has just been drafted (unless your name is Tim Duncan, but more on that later). It is reasonable then to investigate the more short-term effect of draft picks."
					},
					{
						type: "image",
						link: "images/blog/nba-draft-position-improvement.png",
						alt: "NBA Draft Position Improvement",
					},
					{
						type: "text",
						text: "Generally, if a high draft pick were to be strongly correlated with success, we’d expect teams with a high draft pick to exhibit a significant improvement over the next year and the points in the top part (teams with a high draft pick) of Figure 4 would be clustered towards the right of the figure (large difference in W/L percentage), which is clearly not the case."
					},
					{
						type: "text",
						text: "Maybe then, one year is too short of a time for a rookie to prove his worth? To control for that, we looked at the progression of win/loss percentage over four years after a high draft pick. The four-year window was selected since that is also the length of a rookie contract. Figure 5 shows the league average of the difference in win/loss percentage against the number of years since the team had a particular lottery pick in the draft."
					},
					{
						type: "image",
						link: "images/blog/nba-league-average-improvement.png",
						alt: "NBA League Average Improvement",
					},
					{
						type: "text",
						text: "Based on the previous figure, it can be argued that a team will consistently improve over the four years after a lottery pick. Of course, there are many other factors that play a part, such as other roster moves, coaching changes, new draft picks etc., as well as the fact that this is the league average. Still, it is hard to make a strong case against tanking."
					},
					{
						type: "text",
						text: "Does that, then, mean that a couple of draft picks can turn a franchise around? Figure 6 shows a grid of teams and seasons. A blue square indicates that a particular team had a lottery pick at a particular year and a larger square corresponds to a higher pick."
					},
					{
						type: "image",
						link: "images/blog/nba-lottery-picks.png",
						alt: "NBA Lottery Picks",
					},
					{
						type: "text",
						text: "It can be seen that lottery picks come in waves. It takes more than a few years for a team to accumulate enough talent (or assets) to go from lottery team to playoff contender. Once the team goes through that breakthrough, though, there’s a good chance it will stay that way for at least a few years."
					},
					{
						type: "subtitle",
						text: "FROM DRAFT PICKS TO GLORY, OR, THE TIM DUNCAN EFFECT"
					},
					{
						type: "text",
						text: "So, we saw that once a team has stockpiled enough high draft picks, it can break through the cycle of mediocrity and the Durant-Westbrook-led Thunder are living proof of that. Can that, though, lead a team to glory? The following figure shows the number of years since the last lottery pick for the NBA Champions since 1985 and, by the looks of it, it usually takes 4-6 years since the last lottery pick to win a championship. So, not an immediate turnaround, but well within the realm of possibility that the team won the Larry O’Brien trophy thanks to its lottery picks."
					},
					{
						type: "image",
						link: "images/blog/nba-champions-lottery-picks.png",
						alt: "NBA Champions Lottery Picks",
					},
					{
						type: "text",
						text: "That is especially true for the case of one Timothy Theodore Duncan, who, as the last lottery pick of the San Antonio Spurs, has led them into a state of perpetual championship contention, 5 rings and 0 lottery picks in the past 16 years. While the contribution of Duncan is undeniable, there’s also a lot to be said about the system that he was drafted in. From the existence of a Hall of Famer like David Robinson and a Hall of Fame caliber coach in Gregg Popovich to the scouting team that brought All-Stars like Tony Parker and Manu Ginobili with the 28th and 57th pick respectively."
					},
					{
						type: "text",
						text: "It is also worth noting that in the two cases of quickest lottery-to-championship turnaround (one year between lottery and championship), the 2004 Pistons and the 2008 Celtics, neither draft pick contributed significantly to the team. Darko Milicic, the #2 pick in 2003 averaged 4.8 minutes in 32 games for the Pistons (1.8 minutes per game in 8 games in the playoffs), while Jeff Green, the #5 pick in 2007 was traded to the Seattle Supersonics. It could, however, be argued that Jeff Green did actually contribute to the Celtics’ championship season as he was part of the package that took Ray Allen to Boston."
					},
					{
						type: "subtitle",
						text: "CONCLUSIONS"
					},
					{
						type: "text",
						text: "The first, and easiest, conclusion to be made here is that high draft picks tend to be good players. Secondly, it can be seen that players of that caliber are absolutely necessary for a team to challenge for a championship. Not only that, but, on average, a lottery pick will result in an improvement in win/loss percentage. Maybe not necessarily right away but at least within the lifespan of the rookie deal of said lottery pick. On the other hand, it is also demonstrated that it takes multiple high draft picks for a team to become a playoff contender, and that’s what it all boils down to. If a team is willing to suffer several years of mediocrity (to put it mildly) and accumulate a significant amount of talent through the draft, chances are that they will become a playoff (or even championship) contender. Like everything else, tanking takes commitment, but also has its rewards."
					},
					{
						type: "author-note",
						text: "Konstantinos Balafas is finishing up his PhD on detecting damage from earthquakes. He grew up watching soccer and basketball and loves Steve Nash, Paolo Maldini and Bill Self."
					},
					{
						type: "author-note",
						text: "Contact Konstantinos at balafas ‘at’ stanford.edu"
					}
				]
			},
			{
				title: "Stanford Economist Roger Noll on Sports Analytics",
				id: "roger-noll",
				date: {
					year: 2014,
					month: 10,
					day: 31
				},
				authors: [
					{
						firstName: "Sandy",
						lastName: "Huang"
					}
				],
				subjects: [
					"Other"
				],
				content: [
					{
						type: "image",
						link: "images/blog/roger-noll.png",
						alt: "Roger Noll",
						caption: "Roger Noll, Professor Emeritus of Economics at Stanford University. (Photo from Epix.com)"
					},
					{
						type: "text",
						text: "Thank you Professor Roger Noll for taking time out of his evening to come talk to us. This past summer Professor Noll gave an expert testimony for O’Bannon v. NCAA. We’ve recorded his talk here."
					},
					{
						type: "video",
						embed: '<iframe width="672" height="407" src="https://www.youtube.com/embed/GjsukOrEBAw" frameborder="0" allowfullscreen></iframe>'
					}
				]
			},
			{
				title: "Why We Love Sports Analytics and Richard Sherman",
				id: "intro",
				date: {
					year: 2014,
					month: 10,
					day: 8
				},
				authors: [
					{
						firstName: "Sandy",
						lastName: "Huang"
					}
				],
				subjects: [
					"Football"
				],
				content: [
					{
						type: "image",
						link: "images/blog/sherman-stanford.jpg",
						alt: "Richard Sherman",
						caption: "Richard Sherman during his playing career at Stanford (Photo by John Todd via The Stanford Daily)"
					},
					{
						type: "text",
						text: "“I’m the best corner in the game. When you try me with a sorry receiver like Crabtree, that’s the result you’re going to get.” – Richard Sherman"
					},
					{
						type: "text",
						text: "The Stanford Sports Analytics Club loves Richard Sherman. He’s famous for his on-the-field play and his legendary trash talk, but he’s not always recognized for his work off-the-field as a student of the game. In an interview with NBC Sports, Sherman said, “My tape study and my meticulous attention to detail are what make me a good ball player.”"
					},
					{
						type: "video",
						embed: '<iframe width="700" height="424" src="https://www.youtube.com/embed/Va29YFkchXo" frameborder="0" allowfullscreen></iframe>'
					},
					{
						type: "text",
						text: "Like Sherman, the Stanford Sports Analytics Club strives to uncover competitive advantages through a detailed, analytical approach to sports. We believe this approach offers players and teams a more objective way of assessing their strengths and correcting their weaknesses. Becoming a better player or team requires accurately understanding strengths and weaknesses."
					},
					{
						type: "text",
						text: "Starting this year the Stanford Sports Analytics Club will be maintaining a robust blog presence featuring different projects being worked on within the club. On campus we will be offering weekly workshops to help students develop their quantitative analysis skills. We will also be hosting expert guest speakers to provide a deeper understanding of how sports analytics is actually practiced. Last year we hosted Philadelphia 76ers GM Sam Hinkie."
					},
					{
						type: "text",
						text: "Our purpose in starting this club is to ultimately build a strong sports analytics community here at Stanford. It seems only natural that an environment with a top athletics program as well as an excellent engineering school be a fertile ground for sports research. In the process of achieving this goal, our club’s focus will be on the following two main objectives. First, we will connect students with similar interests by facilitating collaboration on projects. Second, we will provide the resources students need to get their projects off the ground. This blog will be a platform for promoting their work."
					},
					{
						type: "text",
						text: "Overall though, we just really want to learn more about the sports we love. Is Sherman really the best corner in the game? Is Crabtree really a sorry receiver? Let’s be clear. We don’t have all the answers to such pressing questions, but we’re eager to try to figure them out."
					}
				]
			},
		]
	};

	// helper to write a closed html element with the possibilty of innerText, a class, and an id
	function writeHtml(tag, text, className, id) {
		return '<' + tag + (className ? ' class="' + className + '"' : "") + (id ? ' id="' + id + '"' : "") + '>' + text + '</' + tag + '>';
	}

	/* Handlebars helper to deal with any type of post content. Accepts text,
	 * tables, references, images, subtitles, author-notes, and videos.
	 * Relies on the type key of the content object.
	 */

	Handlebars.registerHelper("postContent", function(content) {
		var result = "";

		// paragraph content, either as an array or a single object
		if (content.type === "text") {
			if ($.isArray(content.text)) {
				$.each(content.text, function(index, paragraph) {
					result += writeHtml("p", paragraph);
				});
			} else {
				result += writeHtml("p", content.text);
			}

		// table content
		} else if (content.type === "table") {
			result += '<table class="table blog-table">';
			result += '<thead>';
			$.each(content.rows, function(index, row) {
				result += "<tr>";
				$.each(row, function(index, data) {
					result += writeHtml("td", data);
				});
				result += "</tr>";
				if (index === 0) {
					result += '</thead>';
				}
			});
			result += "</table>";

		// references content
		} else if (content.type === "references") {
			result += '<hr class="small"/>';
			$.each(content.references, function(index, reference) {
				result += writeHtml("p", "[" + reference.num + "] " + reference.text);
			});

		// images content
		} else if (content.type === "image") {
			result += '<div class="blog-image-wrapper">';
			result += '<img src="' + content.link + '" alt="' + content.alt + '" class="blog-image" </img>';
			if (content.caption) {
				result += writeHtml("p", writeHtml("span", "Caption: ", "caption-header") + content.caption, "blog-image-caption");
			}
			result += '</div>';

		// subtitle content
		} else if (content.type === "subtitle") {
			result += writeHtml("p", content.text, "blog-subtitle");

		// author-note content
		} else if (content.type === "author-note") {
			result += writeHtml("p", content.text, "blog-author-note");

		// video content
		} else if (content.type === "video") {
			result += content.embed;
		}
		return new Handlebars.SafeString(result);
	});


	Handlebars.registerHelper("recentPosts", function(posts) {
		var result = "";
		result += '<div class="recent-posts noSelect">';
		result += writeHtml("h3", "Recent Posts" + writeHtml("i", "", "fa fa-fw fa-minus toggle-button", "recent-posts-toggle"), "recent-posts-header");
		result += '<ul id="recent-posts-list">';
		$.each(posts, function(index, post) {
			result += '<a href="#' + post.id + '" class="post-link" id="' + post.id + '-recent">' + writeHtml("li", post.title) + '</a>';
		});
		result += '</ul></div>';
		return new Handlebars.SafeString(result);
	});

	Handlebars.registerHelper("filterTool", function(posts) {
		var result = "";
		result += '<div class="filter-tool noSelect">';
		result += writeHtml("h3", "Filter Tool " + writeHtml("span", "(" + posts.length + "/" + posts.length + ")", null, "filter-tool-num")
			+ writeHtml("i", "", "fa fa-fw fa-minus toggle-button", "filter-tool-toggle"));
		result += '<div id="filter-tool-contents">';
		$.each(FILTER_OPTIONS, function(index, filterOption) {
			result += writeHtml("span", writeHtml("h4", filterOption.title, "filter-option") 
				+ writeHtml("span", writeHtml("button", "Select All", "button filter-button", filterOption.title + "-sa")
				+ writeHtml("button", "Clear All", "button filter-button", filterOption.title + "-ca")));
			result += '<form>';
			$.each(filterOption.options, function(optionNum, option) {
				result += '<label class="checkbox-inline filter-checkbox" id="' + filterOption.title + '-' + optionNum + '">'
				result += '<input type="checkbox">' + filterOption.textualize(option) + '</input></label>';
			});
			result += '</form>';
			result += '<br/>';
		});
		result += '</div></div>';
		return new Handlebars.SafeString(result);
	});

	var blogTemplate = [
	'{{#with pageData}}',
		'<div class="row">',
			'<div class="col-xs-12 col-sm-4 col-sm-push-8" id="blog-sidebar">',
				'{{recentPosts posts}}',
				'{{filterTool posts}}',
			'</div>',
			'<div class="col-xs-12 col-sm-8 col-sm-pull-4" id="blog">',
				'{{#each posts}}',
					'<div class="post" id="{{id}}">',
						'<h3 class="blog-post-title">{{ title }}</h3>',
						'<h4>Posted on {{textualDate date}}</h4>',
						'{{#if authors}}<h5 class="blog-post-byline">{{byline authors}}</h5>{{/if}}',
						'{{#each content}}',
							'{{postContent this}}',
						'{{/each}}',
						'<hr/>',
					'</div>',
				'{{/each}}',
				'<div><span id="empty-note"></span></div>',
			'</div>',
		'</div>',
	'{{/with}}'
	].join('\n');

	// populate page with the above data
	populatePage(blogTemplate, blogData);

	// relevant jQuery objects and boolean for each sidebar menu
	var sidebarMenus = [
		{
			isShowing: true,
			toggleButton: $("#recent-posts-toggle"),
			contents: $("#recent-posts-list")
		},
		{
			isShowing: true,
			toggleButton: $("#filter-tool-toggle"),
			contents: $("#filter-tool-contents")
		}
	];

	// add click listeners to expand/shrink each menu
	$.each(sidebarMenus, function(index, menu) {
		menu.toggleButton.click(function() {
			menu.isShowing = !menu.isShowing;
			menu.toggleButton.removeClass(menu.isShowing? FA_EXPAND : FA_SHRINK);
			menu.toggleButton.addClass(menu.isShowing? FA_SHRINK : FA_EXPAND);
			menu.contents.toggle(menu.isShowing);
		});
	});

	// ---------------- filter tool -------------------

	// initialize all filter options to selected
	$(".filter-checkbox > input").prop('checked', true);

	// utility function for customizable array searching
	function arrayContains(array, searchTerm, callback) {
		var i, l;
		for (i = 0, l = array.length; i < l; i++) {
			if (callback(array[i], searchTerm)) {
				return i;
			}
		}
		return -1;
	}

	// helper function to filter by subject
	function filterSports(subjects) {
		for (var i = 0, l = subjects.length; i < l; i++) {
			if($("#subject-" + arrayContains(FILTER_OPTIONS.subject.options, subjects[i], function(a, b) {
				return a === b;
			}) + " > input").prop("checked")) {
				return true;
			}
		}
		return false;
	}

	// helper function to filter authors
	function filterAuthors(authors) {
		for (var i = 0, l = authors.length; i < l; i++) {
			if($("#author-" + arrayContains(FILTER_OPTIONS.author.options, authors[i], function(a, b) {
				return a.firstName === b.firstName && a.lastName === b.lastName;
			}) + " > input").prop("checked")) {
				return true;
			}
		}
		return false;
	}

	// helper function to filter the date
	function filterDate(date) {
		return $("#date-" + arrayContains(FILTER_OPTIONS.date.options, date, function(a, b) {
			return a.year === b.year && a.month === b.month;
		}) + " > input").prop("checked");
	}

	// toggle posts as visible or hidden based on filtering of the sport,
	// date, and author
	function filterPosts() {
		var numVisible = 0, numHidden = 0;
		$.each(blogData.posts, function(index, post) {
			var show = filterSports(post.subjects) && filterDate(post.date) && filterAuthors(post.authors);
			show ? numVisible++ : numHidden++;
			$("#" + post.id).toggle(show);
			$("#" + post.id + "-recent").toggleClass("recent-post-disabled", !show);
		});

		// show the number that are filter
		$("#filter-tool-num").text("(" + numVisible + "/" + blogData.posts.length + ")");

		// if there are no visible, then explain in the document
		if (numVisible === 0) {
			$("#empty-note").text("The current filter settings do not return any posts");
		} else {
			$("#empty-note").text("");
		}
	}


	// upon click of a filter checkbox, strike out unselected and filter posts
	$(".filter-checkbox").on("click", function(event) {
		// cache jQuery object
		var $eventTarget = $(event.target);
		// only the INPUT is consistently clicked, so use the input to
		// go up the DOM to the LABEL and add the unselected-label class
		if ($eventTarget.prop('tagName') === "INPUT") {
			$($eventTarget[0].parentNode).toggleClass("unselected-label");

			// inside the if to only call once per click at most
			filterPosts();
		}
	});

	/* ------------------ buttons on the filter tool --------------------------- */

	// sets all filter checkboxes to the 
	function setAllFilterCheckboxes(category, count, isChecked) {
		var i, l;
		for (i = 0, l = count; i < l; i++) {
			var $parent = $('#' + category + '-' + i);
			var $elem = $($parent[0].children[0]);
			$parent.toggleClass("unselected-label", !isChecked);
			$elem.prop('checked', isChecked);
		}
		filterPosts();
	}

	$.each(FILTER_OPTIONS, function(index, filterOption) {
		// select all button
		$('#' + filterOption.title + '-sa').click(function() {
			setAllFilterCheckboxes(filterOption.title, filterOption.options.length, true);
		});

		// clear all button
		$('#' + filterOption.title + '-ca').click(function() {
			setAllFilterCheckboxes(filterOption.title, filterOption.options.length, false);
		});
	});

})(this, this.document);
