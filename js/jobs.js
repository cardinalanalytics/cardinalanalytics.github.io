(function(window, document, undefined) {

	// data specifically for the jobs page
	var jobsData = {
		header: "Jobs Postings",
		description: "Opportunities to work in sports analytics",
		navbarTitle: "Jobs",
		jobs: [
			{
				company: "Charlotte Hornets",
				title: "Business Analytics Internship",
				location: "Charlotte, NC",
				description: "The Business Analytics and Database Marketing Intern will be interning in our offices here in Charlotte, NC. The primary responsibility of this intern will be to assist the Business Intelligence department’s needs with business analytics.",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=87460",
				logo: "hornets.png",
				league: "nhl.png",
				date: {
					posted: {
						year: 2015,
						month: 10,
						day: 5
					}
				}
			},
			{
				company: "San Francisco 49ers",
				title: "Data Science Internship",
				location: "San Francisco, CA",
				description: "We are looking for a Data Science Intern to play a critical role in our use and understanding of data across various 49ers technology efforts and fan interaction and touch points.",
				link: "http://49ers.teamworkonline.com/teamwork/r.cfm?i=83653",
				logo: "49ers.png",
				league: "nfl.png",
				date: {
					posted: {
						year: 2015,
						month: 9,
					}
				}
			},
			{
				company: "Colmubus Crew SC",
				title: "Database & Analytics Internship",
				location: "Columbus, OH",
				description: "Columbus Crew SC is offering a Database and Analytics Internship designed to offer experience in reviewing and analyzing data within our Sales & Marketing Department.",
				link: "http://mls.teamworkonline.com/teamwork/r.cfm?i=87042",
				logo: "columbus-crew.png",
				league: "mls.png",
				date: {
					posted: {
						year: 2015,
						month: 9,
						day: 28
					}
				}
			},
			{
				company: "Carolina Hurricanes",
				title: "Java Developer/Database Administrator",
				location: "Raleigh, NC",
				description: "The Carolina Hurricanes and PNC Arena are seeking a Java Developer to continue development of existing systems and write new applications as needed.",
				link: "http://hockeyjobs.nhl.com/teamwork/r.cfm?i=85191",
				logo: "hurricanes.png",
				league: "nhl.png",
				date: {
					posted: {
						year: 2015,
						month: 9,
					}
				}
			}
		]
	};
	
	// Handlebars template for the jobs page
	jobsTemplate = [
		'<div class="row">',
			'{{#each pageData.jobs}}',
				'<div class="row job-posting">',
					'<div class="col-sm-2 col-xs-4">',
						'{{#if logo}}<a href="{{ link }}" target="_new"><img src="./images/jobs/{{ logo }}" class="job-image"/></a>{{/if}}',
					'</div>',
					'<div class="col-sm-3 col-xs-8">',
						'<h3>{{ company }}</h3>',
						'<h4>{{ location }}</h4>',
						'<h4>{{ title }}</h4>',
						'<h5>Posted {{textualDate date.posted}}</h5>',
					'</div>',
					'<div class="col-sm-7 col-xs-12">',
						'<p>{{ description }}</p>',
						'<a href="{{ link }}" target="_new">Link to the {{ title }} job with the {{ company }}</a>',
					'</div>',
				'</div>',
			'{{/each}}',
		'</div>'
	].join('\n');

	// populate page with the above data
	populatePage(jobsTemplate, jobsData);

})(this, this.document);
