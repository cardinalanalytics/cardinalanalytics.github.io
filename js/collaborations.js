(function(window, document, undefined) {

	// data specifically for the collaboration page
	var collaborationsData = {
		header: "Collaborations",
		description: "Providing analytic consulting to collegiate and professional sports teams",
		navbarTitle: "Collaborations",
		collaborations: [
			{
				partner: "Stanford Men's Basketball",
				image: "images/collaborations/stanford-men-basketball.jpg"
			},
			{
				partner: "San Jose Sharks",
				image: "images/collaborations/san-jose-sharks.png"
			}
		]
	};
	
	// Handlebars template for the collaborations page
	var collaborationsTemplate = [
		'{{#each pageData.collaborations}}',
			'<div class="col-md-6 col-xs-12 collaboration-tiles">',
				'<h3>{{ partner }}</h3>',
				'<img src="{{ image }}" alt="{{{ partner }}}" class="collaboration-image"/>',
				'<hr/>',
			'</div>',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(collaborationsTemplate, collaborationsData);

})(this, this.document);
