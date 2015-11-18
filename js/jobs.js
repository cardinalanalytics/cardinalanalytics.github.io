(function(window, document, undefined) {

	// data specifically for the jobs page
	var jobsData = {
		header: "Job Postings",
		description: "Opportunities to work in sports analytics",
		navbarTitle: "Job Postings",
		jobs: [
			{
				company: "Kansas City Royals",
				title: "Baseball Analytics Intern",
				location: "Kansas City, Missouri",
				description: "The Kansas City Royals are looking to add a creative and hard-working Intern to the Baseball Analytics Department. The Intern will work closely with Baseball Analytics to conduct research and develop tools for use by all areas of Baseball Operations (Amateur/Pro Scouting, Advance Scouting, and Player Development).  The position will run from February 2016 through the end of the 2016 MLB baseball season.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=89384",
				logo: "royals.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 18
					}
				},
				active: true,
				isTeam: true
			},
			{
				company: "Chicago Cubs",
				title: "Analyst (Pitching Evaluation), Research & Development",
				location: "Chicago, Illinois",
				description: "The Chicago Cubs are seeking an Analyst for the team’s Baseball Research and Development group.  The role will focus primarily on using an analytical approach for the evaluation and projection of pitcher performance. The analyst will work closely with the R&D team to develop methods to improve the effective understanding and application of in-game pitch data throughout Baseball Operations.",
				link: "https://chc.tbe.taleo.net/chc04/ats/careers/requisition.jsp?org=CHICAGOCUBS&cws=1&rid=237",
				logo: "cubs.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 17
					}
				},
				active: true,
				isTeam: true
			},
			{
				company: "Detroit Tigers",
				title: "Baseball Analytics & Operations Internship",
				location: "Detroit, Michigan",
				description: "The Detroit Tigers are looking for a Baseball Analytics & Operations Intern who will be primarily responsible for assisting with day-to-day tasks in the front office. Responsibilities will focus on database design and maintenance, systems development and baseball research.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-detroit-tigers-baseball-analytics-operations-internship/",
				logo: "tigers.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 12
					}
				},
				active: true,
				isTeam: true
			},
			{
				company: "New York Yankees",
				title: "Statistical Analysis Intern, Baseball Operations",
				location: "Bronx, New York",
				description: "Responsibilities include following: assist in research and analysis of various baseball topics; design, test and implement predictive models using advanced statistical techniques; responsibilities may also include data collection and entry, running database queries and administrative tasks.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=89029",
				logo: "yankees.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 10
					}
				},
				active: true,
				isTeam: true
			},
			{
				company: "Washington Nationals",
				title: "Intern, Baseball Research & Development",
				location: "Washington D.C.",
				description: "Contribute to Washington Nationals Baseball Operations for the 2016 season as one of our highly valued interns. The Research & Development focus includes an emphasis on computer programming and data analysis.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=88614",
				logo: "nationals.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 2
					}
				},
				active: true,
				isTeam: true
			},
			{
				company: "Toronto Blue Jays",
				title: "Baseball Operations Analytics Intern",
				location: "Toronto, ON, CA",
				description: "A Baseball Operations Analytics Intern is primarily responsible for assisting with day-to-day tasks within Baseball Operations.  Responsibilities vary dependent on the baseball calendar and internal sub-department needs (Amateur Scouting, Player Development, Pro Scouting and Baseball Information), with a heavy focus on analytics and research.",
				link: "https://jobs.rogers.com/job/Toronto-Baseball-Operations-Analytics-Intern-ON/302799300/",
				logo: "bluejays.gif",
				date: {
					posted: {
						year: 2015,
						month: 10,
						day: 30
					},
					due   : {
						year: 2015,
						month: 11,
						day: 13
					}
				},
				active: false,
				isTeam: true
			},
			{
				company: "Houston Astros",
				title: "Analyst, Baseball Research and Development",
				location: "Houston, TX",
				description: "The Houston Astros are seeking an Analyst for the team's Baseball Research and Development group. The Analyst will work closely with the Director of R&D and the analytics team to conduct research and develop methods that encourage the effective understanding and application of information throughout Baseball Operations.",
				link: "http://www.baseballprospectus.com/article.php?articleid=27776",
				logo: "astros.gif",
				date: {
					posted: {
						year: 2015,
						month: 10,
						day: 28
					}
				},
				active: true,
				isTeam: true
			},
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
					due   : {
						year: 2015,
						month: 11,
						day: 13
					}
				},
				active: false,
				isTeam: true
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
				active: true,
				isTeam: true
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
				active: true,
				isTeam: true
			},
			{
				company: "Indiana Pacers",
				title: "Baseball Operations Analytics Intern",
				location: "Indianapolis, IN",
				description: "The Basketball Analytics Intern will work directly with the Indiana Pacers analytics team in support of the front office, training staff, and coaching staff. The overall focus will be on helping develop internal software tools and maintaining current analytics infrastructure. Experience in the sports industry is not required, but applicants must be passionate about basketball.",
				link: "http://pacers.teamworkonline.com/teamwork/jobs/jobs.cfm/Internships?supcat=3342#88002",
				logo: "pacers.gif",
				date: {
					posted: {
						year: 2015,
						month: 10,
						day: 19
					}
				},
				active: true,
				isTeam: true
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
				active: true,
				isTeam: true
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
				active: true,
				isTeam: true
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
				active: false,
				isTeam: true
			},
			{
				company: "Second Spectrum",
				title: "Machine Learning Engineer",
				location: "Los Angeles, CA or Boston, MA",
				description: "Second Spectrum is seeking a Machine Learning Software Engineer to join our Data team.  At Second Spectrum the machine understanding of sports forms the foundation of all the products we deliver.  Machine Learning engineers have the opportunity to develop state of the art models whose results are used by coaches, broadcasters, and fans throughout the world.",
				link: "http://www.secondspectrum.com/careers-ml",
				logo: "second-spectrum.jpg",
				date: {},
				active: true,
				isTeam: false
			},
			{
				company: "Second Spectrum",
				title: "Full-Stack Software Engineer",
				location: "Los Angeles, CA or Shanghai",
				description: "Second Spectrum is seeking solid full-stack engineers to join our team and help build out infrastructure to support highly interactive applications. Full-stack engineers can range from specializing at systems engineering to UI/UX development.",
				link: "http://www.secondspectrum.com/careers-full-stack",
				logo: "second-spectrum.jpg",
				date: {},
				active: true,
				isTeam: false
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
				active: true,
				isTeam: false
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
				active: true,
				isTeam: false
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
				active: false,
				isTeam: true
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
				active: false,
				isTeam: true
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
				active: false,
				isTeam: true
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
				active: false,
				isTeam: true
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
		if (job.date.posted) {
			result += '<h5>Posted ' + Handlebars.helpers.textualDate(job.date.posted) + '</h5>';		
		}
		if (job.date.due) {
			result += '<h5>Due ' + Handlebars.helpers.textualDate(job.date.due) + '</h5>';		
		}
		result += '</div>';

		// add the description and link
		result += '<div class="col-sm-7 col-xs-12">';
		result += '<p>' + job.description + '</p>';
		result += '<a href="' + job.link + '" target="_new">Link to the ' + job.title + ' job with ' + (job.isTeam ? 'the ' : '') + job.company + '</a>';
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
		var overview = 'If you have found a job listing that would fit on this page, please send it to ';
		var email = 'stanfordsportsanalytics@gmail.com';
		var subject = 'A New SSAC Job Posting';
		var body = 'Here is a job listing that would fit well on the SSAC job postings: ';
		
		var result = '';

		result += '<p>';
		result += overview;
		result += '<a href="mailto:' + email + '?subject=' + encodeURIComponent(subject)
				+ '&body=' + encodeURIComponent(body)
				+ '" target="_ new">' + email + '</a>';
		result += '!</p>';

    	return new Handlebars.SafeString(result);
	});
	
	// Handlebars template for the jobs page
	jobsTemplate = [
		'{{job-overview}}',
		'{{job-listings pageData.jobs}}'
	].join('\n');

	// populate page with the above data
	populatePage(jobsTemplate, jobsData);

})(this, this.document);
