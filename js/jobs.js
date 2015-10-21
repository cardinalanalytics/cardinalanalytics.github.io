(function(window, document, undefined) {

	// data specifically for the jobs page
	var jobsData = {
		header: "Job Postings",
		description: "Opportunities to work in sports analytics",
		navbarTitle: "Job Postings",
		overview: [
			"These job listings are maintained for your convenience.",
			"If you have found a job listing that would fit on this page, please submit the link here: ",
			'<input type="text" id="jobLink" placeholder="Job Link">'
		],
		jobs: {
			active: [
				{
					company: "Los Angeles Angels of Anaheim",
					title: "Director, Quantitative Analysis",
					location: "Anaheim, CA",
					description: "Responsible for developing and overseeing the research and analytics initiative within Baseball Operations, reporting to the General Manager and Assistant General Manager.",
					link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=88100",
					logo: "angels.gif",
					date: {
						posted: {
							year: 2015,
							month: 10
						}
					}
				},
				{
					company: "Charlotte Hornets",
					title: "Business Analytics Internship",
					location: "Charlotte, NC",
					description: "The Business Analytics and Database Marketing Intern will be interning in our offices here in Charlotte, NC. The primary responsibility of this intern will be to assist the Business Intelligence department’s needs with business analytics.",
					link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=87460",
					logo: "hornets.gif",
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
					logo: "49ers.gif",
					date: {
						posted: {
							year: 2015,
							month: 9,
						}
					}
				},
				{
					company: "Columbus Crew SC",
					title: "Database & Analytics Internship",
					location: "Columbus, OH",
					description: "Columbus Crew SC is offering a Database and Analytics Internship designed to offer experience in reviewing and analyzing data within our Sales & Marketing Department.",
					link: "http://mls.teamworkonline.com/teamwork/r.cfm?i=87042",
					logo: "columbus-crew.gif",
					date: {
						posted: {
							year: 2015,
							month: 9,
							day: 28
						}
					}
				}
			],
			closed: [
				{
					company: "Carolina Hurricanes",
					title: "Java Developer/Database Administrator",
					location: "Raleigh, NC",
					description: "The Carolina Hurricanes and PNC Arena are seeking a Java Developer to continue development of existing systems and write new applications as needed.",
					link: "http://hockeyjobs.nhl.com/teamwork/r.cfm?i=85191",
					logo: "hurricanes.gif",
					date: {
						posted: {
							year: 2015,
							month: 9,
						}
					}
				}
			]
		}
	};

	Handlebars.registerHelper("job", function(job, closed) {
		var result = "";
		result += '<div class="row job-posting">'; // JOB POSTING

		// add job logo
		result += '<div class="col-sm-2 col-xs-4">';
		result += '<a href="' + job.link + '" target="_new"><img src="./images/jobs/' + job.logo + '" class="job-image"/></a>';
		result += '</div>';

		// add company name, location, title, and date posted
		result += '<div class="col-sm-3 col-xs-8">';
		result += '<h3>' + job.company + '</h3>';
		result += '<h4>' + job.location + '</h4>';
		result += '<h4>' + job.title + '</h4>';
		result += '<h5>' + Handlebars.helpers.textualDate(job.date.posted) + '</h5>';
		result += '</div>';

		// add the description and link
		result += '<div class="col-sm-7 col-xs-12">';
		result += '<p>' + job.description + '</p>';
		result += '<a href="' + job.link + '" target="_new">Link to the ' + job.title + ' job with the ' + job.company + '</a>';
		result += '</div>';

		result += '</div>'; // / JOB POSTING
		return new Handlebars.SafeString(result);
	});
	
	// Handlebars template for the jobs page
	jobsTemplate = [
	//	'{{#each pageData.overview}}',
	//		'<p>{{{ this }}}</p>',
	//	'{{/each}}',
		'<div class="row">',
			'<h2 class="center">Active Jobs</h2>',
			'{{#each pageData.jobs.active}}',
				'{{job this}}',
			'{{/each}}',
			'<h2 class="center">Closed Jobs</h2>',
			'{{#each pageData.jobs.closed}}',
				'{{job this}}',
			'{{/each}}',
		'</div>'
	].join('\n');

	// populate page with the above data
	populatePage(jobsTemplate, jobsData);

})(this, this.document);
