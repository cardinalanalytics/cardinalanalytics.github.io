(function(window, document, undefined) {

	// data specifically for the events page
	var eventsData = {
		header: "Events",
		description: "See what the Stanford Sports Analytics Club is doing",
		navbarTitle: "Events",
		events: [
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
					"Check out the image below, which was taken at the meeting."
				],
				image: {
					link: 'images/events/first-meeting.jpg',
					alt: 'The first meeting of the 2015-2015 school year',
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
		'{{#each pageData.events}}',
			'{{#if done }}',
				'<div class="col-md-6 col-xs-12 collaboration-tiles">',
					'<h3>{{ title }}</h3>',
					'{{#if date}}<h4>{{textualDate date}}</h4>{{/if}}',
					'{{#if author}}<h5>{{byline author}}</h5>{{/if}}',
					'{{#each text}}',
						'<p>{{{ this }}}</p>',
					'{{/each}}',
					'{{#if image}}',
						'<img src="{{ image.link }}" alt="{{ alt }}"/>',
					'{{/if}}',
					'<hr/>',
				'</div>',
			'{{/if}}',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(eventsTemplate, eventsData);

})(this, this.document);
