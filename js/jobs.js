(function(window, document, undefined) {

	// data specifically for the jobs page
	var jobsData = {
		header: "Job Postings",
		description: "Opportunities to work in sports analytics",
		navbarTitle: "Job Postings",
		jobs: [
			{
				company: "Los Angeles Dodgers",
				title: "Analysis Associate",
				location: "Los Angeles, CA",
				description: "The Los Angeles Dodgers are seeking an Analysis Associate to join the team's Baseball Operations group starting in the fall of 2015. We consider our internship program to be a critical pipeline for recruiting full-time employees, though there is no guarantee of receiving a full-time offer after the internship is completed. Our current focus is on identifying highly-talented, mathematically-oriented candidates as we seek to build and develop our baseball analytics team.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=88159",
				logo: "dodgers.gif",
				date: {
					posted: {
						year: 2015,
						month: 10,
						day: 21
					},
					due: {
						year: 2015,
						month: 11,
						day: 13
					}
				},
				active: true
			},
			{
				company: "Boston Red Sox",
				title: "Software Engineer",
				location: "Boston, MA",
				description: "The software engineer will be a member of the Application Development team involved in all aspects of the application development process.  This individual will work closely with team members to understand business requirements that drive the analysis, design and coding of quality business and baseball applications that meet our customer’s needs.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=88111",
				logo: "redsox.gif",
				date: {
					posted: {
						year: 2015,
						month: 10,
						day: 21
					}
				},
				active: true
			},
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
						month: 10,
						day: 20
					}
				},
				active: true
			},
			{
				company: "TruMedia Networks",
				title: "Principal / Senior / QA Software",
				location: "Boston, MA (remote possible)",
				description: "TruMedia is looking for Principal, Senior and QA Software Engineers to help build tier one sports analytics and scouting solutions. The ideal candidates will be passionate sports fans, have a strong interest in data science and have the ability to work on the full software stack with a focus on web development and user interface design. Interfaces will be needed for web based solutions as well as mobile platforms.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-trumedia-networks-principal-senior-qa-software-engineer/",
				logo: "trumedia.jpg",
				date: {
					posted: {
						year: 2015,
						month: 10,
						day: 14
					}
				},
				active: true
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
				},
				active: true
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
				},
				active: true
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
				},
				active: true
			},
			{
				company: "Baseball Info Solutions",
				title: "Research & Development Associate",
				location: "Allentown, PA",
				description: "Baseball Info Solutions (BIS) is looking for candidates to fill a full-time position in our R&D Department. The R&D Associate will work out of our office near Allentown, Pa., and will contribute as a member of our R&D team, supporting research for publications and future products.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-baseball-info-solutions-research-development-associate/",
				logo: "bis.gif",
				date: {
					posted: {
						year: 2015,
						month: 9,
						day: 28
					}
				},
				active: true
			},
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
				},
				active: false
			},
			{
				company: "Atlanta Braves",
				title: "Baseball Operations Analyst",
				location: "Atlanta, GA",
				description: "Responsibilities: Oversee the in-house technological efforts associated with the development of Braves’ new internal player evaluation application, Development and on-going adjustment of proprietary statistics and systems, etc.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-atlanta-braves-baseball-operations-analyst/",
				logo: "braves.gif",
				date: {
					posted: {
						year: 2015,
						month: 7,
						day: 23
					}
				},
				active: false
			},
			{
				company: "St. Louis Cardinals",
				title: "Analyst, Baseball Development",
				location: "St. Louis, MO",
				description: "This position is responsible for conducting quantitative research to provide timely recommendations to decision makers within Baseball Operations.",
				link: "http://www.fangraphs.com/blogs/jop-posting-cardinals-openings/",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2015,
						month: 1,
						day: 14
					}
				},
				active: false
			},
			{
				company: "St. Louis Cardinals",
				title: "Developer, Baseball Development",
				location: "St. Louis, MO",
				description: "This position is responsible for designing, implementing and maintaining analytic and technical systems to provide timely, baseball-related information to decision makers within Baseball Operations.",
				link: "http://www.fangraphs.com/blogs/jop-posting-cardinals-openings/",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2015,
						month: 1,
						day: 14
					}
				},
				active: false
			},
		]
	};

	Handlebars.registerHelper("job", function(job, active) {
		var result = "";
		result += '<div class="row job-posting' + (active ? "" : " job-closed") + '">'; // JOB POSTING

		// add job logo
		result += '<div class="col-sm-2 col-xs-4">';
		result += '<a href="' + job.link + '" target="_new"><img src="./images/jobs/' + job.logo + '" class="job-image"/></a>';
		result += '</div>';

		// add company name, location, title, and date posted
		result += '<div class="col-sm-3 col-xs-8">';
		result += '<h3>' + job.company + '</h3>';
		result += '<h4>' + job.location + '</h4>';
		result += '<h4>' + job.title + '</h4>';
		result += '<h5>Posted ' + Handlebars.helpers.textualDate(job.date.posted) + '</h5>';
		result += '</div>';

		// add the description and link
		result += '<div class="col-sm-7 col-xs-12">';
		result += '<p>' + job.description + '</p>';
		result += '<a href="' + job.link + '" target="_new">Link to the ' + job.title + ' job with the ' + job.company + '</a>';
		if (!active) {
			result += '<p class="job-closed-text">Please note that this job is now closed.</p>';
		}
		result += '</div>';

		result += '</div>'; // / JOB POSTING
		return new Handlebars.SafeString(result);
	});

	Handlebars.registerHelper("job-listings", function(jobs) {
		var result = "";

		activeJobs = '<h2 class="center">Active Jobs</h2>';
		closedJobs = '<h2 class="center job-closed-text">Closed Jobs</h2>';

		$.each(jobs, function(index, job) {
			if (job.active) {
				activeJobs += Handlebars.helpers.job(job, true);
			} else {
				closedJobs += Handlebars.helpers.job(job, false);
			}
		});

		result += '<div class="row">';
		result += activeJobs;
		result += closedJobs;
		result += '</div>';

		return new Handlebars.SafeString(result);
	});

	Handlebars.registerHelper('job-overview', function() {
		result = "";
		result += '<p>If you have found a job listing that would fit on this page, please submit the link here:</p>';
		result += '<form class="form-inline job-link-form">';
    	result +=     '<div class="col-xs-11"><input type="text" class="form-control" id="jobLinkInput" placeholder="Job Link"></div>';
    	result +=     '<div class="col-xs-1"><a href="mailto:stanfordsportsanalytics@gmail.com?subject=A%20New%20SSAC%20Job%20Posting&amp;body=Here%20is%20a%20job%20listing%20that%20would%20fit%20well%20on%20the%20SSAC%20job%20postings%3A" target="_new" class="btn btn-default" id="btn-job">Send</a></div>';
    	result += '</form>';
    	result += '<br/>';

    	return new Handlebars.SafeString(result);
	});
	
	// Handlebars template for the jobs page
	jobsTemplate = [
		'{{job-overview}}',
		'{{job-listings pageData.jobs}}'
	].join('\n');

	// populate page with the above data
	populatePage(jobsTemplate, jobsData);

	// update the mailto link based on the contents in the 
	$("#jobLinkInput").keyup(function(event) {
		var mailto = "mailto:stanfordsportsanalytics@gmail.com";
		var subject = "A New SSAC Job Posting";
		var body = "Here is a job listing that would fit well on the SSAC job postings: " + $(this).val();
		var href = mailto + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
		$('#btn-job').attr('href', href);
	});

})(this, this.document);
