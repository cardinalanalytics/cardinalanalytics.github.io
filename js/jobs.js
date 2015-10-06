(function(window, document, undefined) {

	// data specifically for the jobs page
	var jobsData = {
		header: "Jobs Postings",
		description: "Opportunities to work in sports analytics",
		navbarTitle: "Jobs",
		jobs: [
			{
				team: "Cardinals",
				title: "Data Analyst",
				description: "abc and def",
				link: "http://cardinals.com"
			},
			{
				team: "Rams",
				title: "Database management",
				description: "ghi and jkl",
				link: "http://google.com"
			}
		]
	};
	
	// Handlebars template for the jobs page
	jobsTemplate = [
		'<div class="row">',
			'{{#each pageData.jobs}}',
				'<div class="job-posting">',
					'<a href="{{ link }}" target="_new"><h3>{{ team }} - {{ title }}</h3></a>',
					'<a href="{{ link }}" target="_new">Link to the {{ title }} job with the {{ team }}</a>',
					'<p>{{ description }}</p>',
				'</div>',
				'<hr>',
			'{{/each}}',
		'</div>'
	].join('\n');

	// populate page with the above data
	populatePage(jobsTemplate, jobsData);

})(this, this.document);
