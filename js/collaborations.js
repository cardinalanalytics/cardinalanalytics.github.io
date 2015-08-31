(function(window, document, undefined) {

	// data specifically for the collaboration page
	var collaborationsData = {
		header: "Collaborations",
		description: "Supporting sports teams through an analytic approach",
		navbarTitle: "Collaborations",
		collaborations: [
			{
				partner: "Stanford Men's Basketball Team"
			},
			{
				partner: "San Jose Sharks"
			}
		]
	};
	
	// Handlebars template for the collaborations page
	var collaborationsTemplate = [
		'{{#each pageData.collaborations}}',
			'<h3>{{{partner}}}</h3>',
			'<hr/>',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(collaborationsTemplate, collaborationsData);

})(this, this.document);
