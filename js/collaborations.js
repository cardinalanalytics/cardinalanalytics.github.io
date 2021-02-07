(function(window, document, undefined) {

	// data specifically for the collaboration page
	var collaborationsData = {
		header: "Collaborations",
		description: "Providing analytic consulting to collegiate and professional sports teams. Our partners:",
		navbarTitle: "Collaborations",
		collaborations: [
			{
				partner: "San Jose Sharks",
				image: "images/collaborations/san-jose-sharks.png"
			},
			{
				partner: "Stanford Women's Volleyball",
				image: "images/collaborations/stanford_womens_vball.jpg"
			},
			{
				partner: "Stanford Football",
				image: "images/collaborations/stanford_football.jpg"
			},
			{
				partner: "Stanford Baseball",
				image: "images/collaborations/stanford_bball.jpg"
			},
			{
				partner: "Stanford Men's Basketball",
				image: "images/collaborations/stanford-men-basketball.jpg"
			}
		]
	};
	
	// Handlebars template for the collaborations page
	var collaborationsTemplate = [
		'{{#each pageData.collaborations}}',
			'<div class="col-md-6 col-xs-12 ssac-tile">',
				'<h3>{{ partner }}</h3>',
				'<img src="{{ image }}" alt="{{{ partner }}}"/>',
				'<hr/>',
			'</div>',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(collaborationsTemplate, collaborationsData);

})(this, this.document);
