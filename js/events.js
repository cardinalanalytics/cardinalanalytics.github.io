(function(window, document, undefined) {

	// data specifically for the events page
	var eventsData = {
		header: "Events",
		description: "See what the Stanford Sports Analytics Club is doing",
		navbarTitle: "Events",
		events: [
			{
				title: "A conversation with Billy Beane of the Oakland Athletics",
				date: {
					year: 2015,
					month: 4,
					day: 23
				}
			},
			{
				title: "SSAC competes at the SABR Analytics Conference Case Competition",
				date: {
					year: 2015,
					month: 3,
					day: 12
				}
			},
			{
				title: "The sports applications of virtual reality",
				date: {
					year: 2015,
					month: 2,
					day: 2
				}
			},
			{
				title: "A discussion with Doug Wilson, Jr. of the San Jose Sharks",
				date: {
					year: 2015,
					month: 1,
					day: 26
				}
			},
			{
				title: "Visit with the Golden State Warriors",
				date: {
					year: 2015,
					month: 1,
					day: 14
				}
			}
		]
	};
	
	// Handlebars template for the events page
	eventsTemplate = [
		'{{#each pageData.events}}',
			'<h3>{{ title }}</h3>',
			'{{#if date}}<h4>{{textualDate date}}</h4>{{/if}}',
			'{{#if author}}<h5>{{byline author}}</h5>{{/if}}',
			'<hr/>',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(eventsTemplate, eventsData);

})(this, this.document);
