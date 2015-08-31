(function(window, document, undefined) {

	// data specifically for the events page
	var eventsData = {
		header: "Events",
		description: "See what the Stanford Sports Analytics Club is up to",
		navbarTitle: "Events",
		events: [
			{
				title: "Visit with the Golden State Warriors"
			},
			{
				title: "A conversation with Billy Beane of the Oakland Athletics"
			},
			{
				title: "SSAC competes at the SABR Analytics Conference Case Competition"
			},
			{
				title: "The sports applications of virtual reality"
			}
		]
	};
	
	// Handlebars template for the events page
	eventsTemplate = [
		'{{#each pageData.events}}',
			'<h3>{{{ title }}}</h3>',
			'<hr/>',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(eventsTemplate, eventsData);

})(this, this.document);
