(function(window, document, undefined) {

	// data specifically for the events page
	var eventsData = {
		header: "Events",
		description: "See what the Stanford Sports Analytics Club is doing",
		navbarTitle: "Events",
		events: [
			{
				title: "A Presentation to d3.bayarea on the Graphicacy Major League Data Challenge",
				date: {
					year: 2016,
					month: 1,
					day: 20
				},
				author: NAMES.RYAN,
				text: [
					'On January 20, 2016, Eli Shayer, Scott Powers, and I gave a presentation to the <a href="http://www.meetup.com/Bay-Area-d3-User-Group/">Bay Area d3 User Group</a> about the Stanford Sports Analytics Club’s data visualization submission to <a href="http://graphicacy.com/">Graphicacy</a>’s <a href="http://www.majorleaguedatachallenge.com/">Major League Data Challenge</a> (view our submission <a href="http://cardinalanalytics.github.io/mlb-challenge/">here</a>), which won runner-up in the competition. The challenge was to “visualize the careers of the top 20 baseball players (10 hitters, 10 pitchers) of all-time as high-density small-multiple graphics (like extended spark-lines), or some other graphic form that presents a summary of individual performance data in a simple, highly condensed, easy to compare way.”',
					'We presented our data visualization, discussed the nuts and bolts of creating the visualization in d3, described the teamwork process of creating it from scratch (including no prior d3 experience!) in the span of 3 weeks, and fielded questions from the audience on topics varying from particulars of the functionality to issues of contention within the team to the merits and disadvantages of various baseball statistics.',
					'Daniel Alvarado and Stephen Spears also contributed to this project, but were not able to join in the presentation.'
				],
				image: {
					link: 'images/events/graphicacy.png',
					alt: 'd3.bayarea Presentation',
				},
				done: true
			},
			{
				title: "A Meeting with the Founders of TeamRankings",
				date: {
					year: 2015,
					month: 11,
					day: 4
				},
				author: NAMES.SCOTT,
				text: [
					'On Wednesday, November 4th, the Stanford Sports Analytics Club hosted <a href="https://www.teamrankings.com/", target="_new">TeamRankings</a> founders and Stanford alumni Tom Federico and Mike Greenfield. Tom and Mike talked about the challenges of starting a business based on selling sports predictions and about how to maximize your chances of winning a March Madness bracket pool by picking teams that are underrated in terms of how the population vote. The thought exercise on this topic proposed by Tom and Mike goes as follows:',
					'"Imagine you stepped back into a time machine, and it was the day before the 2015 NCAA tournament started. You cruised by this great site called TeamRankings and found this <a href="https://www.teamrankings.com/blog/ncaa-basketball/2015-tournament-survival-odds-comparison" target="_new">post</a> which listed our round by round survival odds of every team in the tournament (the big table at the very bottom).',
					'Then, you went to ESPN, where you saw a <a href="http://games.espn.go.com/tournament-challenge-bracket/2015/en/whopickedwhom", target="_new">page</a> listing how many brackets entered into their Tournament Challenge game picked every team to survive each successive tournament round.',
					'Given that information (assuming the TeamRankings survival odds are accurate, and erasing any memory you may have of who actually won this March), who &#39;should&#39; you have picked as your NCAA tournament champion to maximize your odds of winning your bracket pool?"'
				],
				image: {
					link: 'images/events/teamrankings.jpg',
					alt: 'TeamRankings meeting',
				},
				done: true
			},
			{
				title: "Kickoff meeting of the 2015-2016 school year",
				date: {
					year: 2015,
					month: 10,
					day: 4
				},
				author: NAMES.ELI,
				text: [
					"Our second year on campus began with a meeting on the evening of October 4th, 2015. We are looking forward to a great second year on campus!",
					"The 2015-2016 school year will see SSAC slightly changing the structure of the club in an effort to make research projects more accessible to all members. We will have biweekly general meetings at which there will be presentations, updates, and the like. Outside of the general meetings there will also be sport-specific subgroups, which will be a space where new members will have a chance to get involved and receive support from others interested in the same sport.",
					"These meetings will be supplemented by guest speakers, data challenges, and workshops as in the previous year.",
					"If you are a student we hope to see you at these meetings and work with you to help you achieve your research goals. Otherwise, we hope to present meaningful sports analytics research on our blog, and we hope you will continue to follow us throughout the year!"
				],
				image: {
					link: 'images/events/first-meeting.jpg',
					alt: 'The first meeting of the 2015-2015 school year',
				},
				done: true
			},
			{
				title: "A meeting with Keith Woolner",
				date: {
					year: 2015,
					month: 9,
					day: 7
				},
				author: NAMES.SCOTT,
				text: [
					'In an event that was attended by more than two club members, the Sports Analytics Club kicked off the 2015-16 academic year by meeting with Keith Woolner, director of baseball analytics for the Cleveland Indians. Woolner, who earned a masters in decision sciences from Stanford in 1996, was in the Bay Area for the Sports Analytics Innovation Summit in San Francisco.',
					'Because the meeting happened two weeks before the start of the school year, the few club members in attendance were able to get deep into conversation with the Indians executive. The biggest topic of conversation was the win-dollar tradeoff for Cleveland and other teams, as it relates to the mission of a baseball operations department. This relates to creating a framework for evaluating trades and was motivated by Woolner&#39;s article "Baseball&#39;s Hilbert Problems" in Baseball Prospectus 2000.'
				],
				image: {
					link: 'images/events/woolner.jpg',
					alt: 'A meeting with Keith Woolner',
				},
				done: true
			},
			{
				title: "A conversation with Billy Beane of the Oakland Athletics",
				date: {
					year: 2015,
					month: 4,
					day: 23
				},
				done: false
			},
			{
				title: "SABR Analytics Conference Case Competition",
				date: {
					year: 2015,
					month: 3,
					day: 12
				},
				author: NAMES.SCOTT,
				text: [
					'On March 12, 2015, a team of students from Stanford bested 10 other undergraduate teams to win the Diamond Dollars Case Competition at the SABR Analytics Conference in Phoenix. The team consisted of Jordan Wallach, Vihan Lakshman, Alec Powell, Avner Kreps and Do-Hyoung Park, the first four of whom being members of the Stanford Sports Analytics Club.',
					'The case given to all of the contestants was to find the optimal trade for then-Phillies starting pitcher Cole Hamels, who had been the subject of intense trade rumors throughout the off-season. In a post at <a href="http://www.beyondtheboxscore.com/2015/5/8/8568877/diamond-dollars-2015-case-competition-cole-hamels-trade-machine-stanford">Beyond the Boxscore</a>, Wallach described his team&#39;s methodology for evaluating potential trades for Hamels, who ended up being dealt to the Rangers in a July trade deadline deal.',
					'Stanford also competed in the graduate division of the competition with a team including two SSAC members: Scott Powers and Eli Shayer. But that team, consisting of one grad student and four undergrads, did not place in the graduate division.'
				],
				image: {
					link: 'images/events/diamonddollars.png',
					source: 'http://sabr.org/analytics/case'
				},
				done: true
			},
			{
				title: "The sports applications of virtual reality",
				date: {
					year: 2015,
					month: 2,
					day: 2
				},
				done: false
			},
			{
				title: "A discussion with Doug Wilson, Jr. of the San Jose Sharks",
				date: {
					year: 2015,
					month: 1,
					day: 26
				},
				done: false
			},
			{
				title: "Visit with the Golden State Warriors",
				date: {
					year: 2015,
					month: 1,
					day: 14
				},
				done: false
			}
		]
	};
	
	// Handlebars template for the events page
	eventsTemplate = [
		'<div class="row">',
			'{{#each pageData.events}}',
				'{{#if done }}',
					'<div class="col-xs-12 ssac-tile">',
						'<div class="col-xs-3"><h3>{{ title }}</h3>',
							'{{#if date}}<h4>{{textualDate date}}</h4>{{/if}}',
							'{{#if author}}<h5>Written by {{byline author}}</h5>{{/if}}',
						'</div>',
						'<div class="col-xs-9">',
							'{{#if image}}<img src="{{ image.link }}" {{#if alt}}alt="{{ alt }}{{/if}}"/>{{/if}}',
							'{{#each text}}<p>{{{ this }}}</p>{{/each}}',
						'</div>',
						'<hr/>',
					'</div>',
				'{{/if}}',
			'{{/each}}',
		'</div>'
	].join('\n');

	// populate page with the above data
	populatePage(eventsTemplate, eventsData);

})(this, this.document);
