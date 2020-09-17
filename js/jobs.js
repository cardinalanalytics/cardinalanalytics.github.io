(function(window, document, undefined) {

	// data specifically for the jobs page
	var jobsData = {
		header: "Job Postings",
		description: "Opportunities to work in sports analytics",
		navbarTitle: "Job Postings",
		jobs: [
			{
				company: "Basic Template",
				title: "",
				location: "",
				description: "",
				link: "",
				logo: "",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 3
					}
				},
				show: false,
				active: true,
				isTeam: true
			},
			{
				company: "USA Olympic & Paralympic Committee",
				title: "Data Analytics Fellow",
				location: "Colorado Springs, CO",
				description: "Team USA is looking for a resourceful and trusted problem solver with exceptional attention to detail who effectively communicates analytical insights with accuracy and clarity.  The Data Analytics Fellow will be working on a wide range of impactful analytics projects at the USOPC to help Team USA bring home the gold.  The Fellowship is a temporary position with an expected duration between 12 and 24 months.",
				link: "https://www.teamworkonline.com/multiple-properties/united-states-olympic-committee/usoc-jobs/data-analytics-fellow-full-time-temporary-eligible-for-benefits-1975873",
				logo: "us-olympics.png",
				date: {
					posted: {
						year: 2020,
						month: 9,
						day: 17
					}
				},
				show: true,
				active: true,
				isTeam: false
			},
			{
				company: "Oklahoma City Thunder",
				title: "Software Engineer Intern, Data Science & Solutions",
				location: "Oklahoma City, OK",
				description: "As a Software Engineer Intern in Data Science & Solutions, your work is critical to uncovering valuable insights that help shape the organization’s future — influencing strategic planning, decision-making, and performance to create the optimal conditions for talent to thrive. You will work with colleagues, external suppliers, and internal and external data sources to develop tools and analyze data to support basketball analytics, player evaluation, and physical research, areas crucial to the performance of the team.",
				link: "https://www.teamworkonline.com/basketball-jobs/oklahoma-city-thunder-jobs/oklahoma-city-thunder/software-engineer-intern-data-science-solutions-1975725",
				logo: "thunder.gif",
				date: {
					posted: {
						year: 2020,
						month: 9,
						day: 10
					}
				},
				show: true,
				active: true,
				isTeam: true
			},
			{
				company: "Oklahoma City Thunder",
				title: "Analyst Intern, Data Science & Solutions",
				location: "Oklahoma City, OK",
				description: "As an Analyst Intern in Data Science & Solutions, your work is critical to uncovering valuable insights that help shape the organization’s future — influencing strategic planning, decision-making, and performance to create the optimal conditions for talent to thrive. You will work on every aspect of the data pipeline — from the building and maintaining information systems to research, analysis, and presentation. You will leverage data to impact the organization’s most significant decisions.",
				link: "https://www.teamworkonline.com/basketball-jobs/oklahoma-city-thunder-jobs/oklahoma-city-thunder/analyst-intern-data-science-solutions-1975726",
				logo: "thunder.gif",
				date: {
					posted: {
						year: 2020,
						month: 9,
						day: 10
					}
				},
				show: true,
				active: true,
				isTeam: true
			},
			{
				company: "Colorado Rockies",
				title: "Quantitative Analyst - Entry Level, Baseball Research and Development",
				location: "Denver, CO",
				description: "The Colorado Rockies are currently seeking a full-time entry level Quantitative Analyst within the Baseball Research and Development Department. This individual will assist in the development and maintenance of player information and projection systems, statistical analysis projects and on field strategy. This position requires strong statistical development skills, ability to program in a scripting language such as Python and/or R, as well as a demonstrated ability for independent curiosity and a commitment to excellence while working within a team.",
				link: "https://www.mlb.com/rockies/team/jobs",
				logo: "rockies.gif",
				date: {
					posted: {
						year: 2020,
						month: 3,
						day: 10
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Lakers",
				title: "Basketball Analytics Summer Intern",
				location: "El Segundo, CA",
				description: "The Summer Intern, Basketball Analytics is a paid hourly position that will support the Basketball Analytics team by taking on a variety of responsibilities, including modeling basketball situations, researching team strategy, and streamlining existing or new processes. The Intern will engage in multiple individually-owned projects to be delivered to stakeholders at the conclusion of their term. ",
				link: "https://www.teamworkonline.com/basketball-jobs/los-angeles-lakers/los-angeles-lakers-jobs/basketball-analytics-summer-intern-1970877",
				logo: "lakers.png",
				date: {
					posted: {
						year: 2020,
						month: 3,
						day: 4
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Miami Marlins",
				title: "Intern, Baseball Analytics",
				location: "Jupiter, FL",
				description: "The Analytics Intern will assist Baseball Operations decision-making through the analysis and facilitation of baseball information. The specific day-to-day responsibilities of this position will vary depending on the baseball calendar, but will revolve around analyzing and troubleshooting baseball data. A competitive candidate will be an excellent communicator and possess an established foundation of analytical skills. The position will report to the Director of Analytics.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-marlins-baseball-analytics-intern-full-season/",
				logo: "marlins.png",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 18
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Cleveland Indians",
				title: "Baseball Operations Fellow",
				location: "Cleveland, OH",
				description: "The Cleveland Indians are seeking multiple Fellows to join their Baseball Operations department. Each Fellow will work full-time with one of the Indians’ minor league affiliates and report to both the Player Development and Baseball Operations departments. Fellows will operate as an extension of the front office staff and be a resource for both players and coaches. Fellows will be expected to manage the collection of multiple data streams. Fellows will gain exposure across multiple departments and have access to and be encouraged to use a suite of internal, proprietary resources.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-cleveland-indians-fellowships/",
				logo: "indians.png",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 18
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Cleveland Indians",
				title: "Amateur Scouting Fellow",
				location: "Cleveland, OH",
				description: "The Cleveland Indians are seeking two Fellows to join their Amateur Scouting department. Each Fellow will work collaboratively with the amateur scouting staff. Fellows will operate as an extension of the front office staff and be a resource for scouts and Baseball Operations. Fellows will be expected to manage the collection of multiple data streams on amateur players to prepare the organization for acquisition opportunities.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-cleveland-indians-fellowships/",
				logo: "indians.png",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 18
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Second Spectrum",
				title: "Software Engineering Intern",
				location: "Los Angeles, CA",
				description: "Second Spectrum is building the next way of seeing sports. We deliver unique and innovative solutions through unparalleled capabilities in machine understanding of sports. We are constantly innovating. We believe that technology will revolutionize the way that sports are played, coached, and experienced, and that the work to make this happen has just begun. We try to match each intern with the best group based on personal and professional interest. Our groups include Applications Development, Computer Vision, AI/Machine Learning, and Infrastructure (DevOps, SysOps, IT, Systems, Hardware).",
				link: "https://www.linkedin.com/jobs/view/software-engineering-intern-at-second-spectrum-inc-1545062386/",
				logo: "second-spectrum.jpg",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 18
					}
				},
				show: true,
				active: false,
				isTeam: false
			},
			{
				company: "Inside Edge",
				title: "Baseball Operations Intern",
				location: "Bloomington, MN",
				description: "Inside Edge Scouting Services specializes in data capture and analytics down to the finest details of every Major League game. Major League clubs, media, and other clients subscribe to their real-time pitch-by-pitch data, custom-tailored reports, and advanced analytic tools to gain an edge on their competition. They provide a fun, fast-paced work environment and an opportunity to get started on a career in baseball and differentiate yourself from other job seekers. Past interns have gone on to positions with both Major League clubs and media organizations.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-inside-edge-baseball-operations-intern-5/",
				logo: "inside-edge.jpg",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 18
					}
				},
				show: true,
				active: false,
				isTeam: false
			},
			{
				company: "San Diego Padres",
				title: "Analyst, Baseball R&D",
				location: "San Diego, CA or Remote",
				description: "The Padres are looking to grow their Research and Development team and bring in individuals with a passion for baseball and winning through data-driven decision making. Through both collaborative and individual work, members of their team will impact every part of the R&D process: idea and question generation, data exploration and analysis, development of decision making tools utilizing analyses, and communication of results to decision-makers and other staff. Ideal candidates are those that are excited to challenge the status quo, improve how the Padres organization makes decisions, and contribute to the continual development of the department.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-padres-baseball-research-development-analyst/",
				logo: "padres.png",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 10
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "San Diego Padres",
				title: "Developer, Baseball Systems",
				location: "San Diego, CA",
				description: "The Developer, Baseball Systems is primarily responsible for designing and developing user interfaces for different personnel in the Baseball Operations Department. This position requires substantial experience with various software programs, in addition to a strong understanding of statistical baseball terminology.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-san-diego-padres-baseball-systems-developer-2/",
				logo: "padres.png",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 10
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Chicago Cubs",
				title: "Amateur Scouting Analyst, R&D",
				location: "Chicago, IL",
				description: "The Chicago Cubs are seeking an amateur scouting analyst to join the Research and Development group in Baseball Operations. This role will focus on providing data-driven support to the Chicago Cubs’ amateur scouting department in preparation for the Rule 4 draft, in addition to providing analytical evaluation of amateur prospects. The analyst will work closely with the entirety of the R&D department to develop methods to improve the effective understanding and application of data, and disseminate analytic insights throughout the organization.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-cubs-amateur-scouting-analyst-research-development/",
				logo: "cubs.gif",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 10
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Texas Rangers",
				title: "Apprentice, Baseball Analytics",
				location: "Arlington, TX",
				description: "In this role, you will query and report on data, build and maintain analytical tools, metrics, & models, create compelling data visualizations and stories, research game changing ideas and concepts, and present information to organizational stakeholders and executives.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-texas-rangers-baseball-analytics-apprentice/",
				logo: "rangers.gif",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 10
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Tampa Bay Rays",
				title: "Research and Development Intern",
				location: "St. Petersburg, FL",
				description: "The Tampa Bay Rays are in search of their next Research and Development Intern. The Rays’ R&D group helps shape Baseball Operations’ decision-making processes through the analysis and interpretation of data. They are seeking those with a passion for baseball and a desire to contribute through mathematics, data analysis, and computation. Their next intern will be an intellectual contributor that can work both individually and collaboratively, coming up with interesting research questions to explore, find ways to answer those questions with the data at their disposal, communicate the results of their research, and work to apply their research outcomes to improve how the Rays organization operates. The Rays want to work with people who care about being good teammate, want to make a positive impact on their organization, have an innovative spirit, and will explore new ways to make them better. Does this describe you?",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-tampa-bay-rays-research-and-development-intern/",
				logo: "rays.gif",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 3
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Cincinnati Reds",
				title: "Data Scientist",
				location: "Cincinnati, OH",
				description: "Work with the Manager of Baseball Analytics to implement the department’s research and development efforts within new and existing applications. The Reds envision the person in this position to play a major role in the creation of new baseball analytics concepts with the ultimate goal of enhancing player evaluation and on-field performance.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-cincinnati-reds-baseball-analytics-roles/",
				logo: "reds.gif",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 3
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Cincinnati Reds",
				title: "Baseball Research Analyst",
				location: "Cincinnati, OH",
				description: "Work with the Baseball Analytics, Baseball Operations, Scouting and Player Development staffs to develop and support analysis and research requests. The Reds envision the person in this position to play a major role in the creation of new baseball analytics/development concepts, supporting player evaluation, development and acquisitions and on-field strategies.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-cincinnati-reds-baseball-analytics-roles/",
				logo: "reds.gif",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 3
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Cincinnati Reds",
				title: "DevOps Engineer",
				location: "Cincinnati, OH",
				description: "Work with Baseball Analytics group to manage departmental infrastructure, build out analytic workflows, and support optimal development processes within the group. The Reds envision the person in this position to play a major role in the creating and maintaining stable production environments, allowing stakeholders to easily access information.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-cincinnati-reds-baseball-analytics-roles/",
				logo: "reds.gif",
				date: {
					posted: {
						year: 2019,
						month: 11,
						day: 3
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Cleveland Indians",
				title: "Data Scientist, Baseball R&D",
				location: "Cleveland, OH",
				description: "The Cleveland Indians are seeking a data scientist to join the team’s Baseball Research and Development group. The data scientist will use their machine learning expertise and the Indians proprietary data to develop statistical and machine learning models that support baseball operations decisions across all facets of the organization. This position will work closely with other members of the R&D department as well as key stakeholders across the organization to design and build cutting edge models and tools that help the Indians stay ahead of the competition. The ideal candidate will possess experience working with large data sets and advanced machine-learning models. Strong applicants will demonstrate curiosity, creativity, and the ability to learn new concepts.",
				link: "https://boards.greenhouse.io/clevelandindiansbops/jobs/4490505002",
				logo: "indians.png",
				date: {
					posted: {
						year: 2019,
						month: 10,
						day: 25
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Cleveland Indians",
				title: "Sports Science Analyst, Baseball R&D",
				location: "Cleveland, OH",
				description: "The Cleveland Indians are seeking an analyst to join the team’s Baseball Research and Development group with a focus on answering questions specific to sports science. The position will use data and statistics to provide research and analysis to support the Indians’ player development, medical, S&C, and sports science staff in helping Indians players perform at optimal levels. This individual will work closely with other analysts in the R&D department as well as sports science, player development, medical, strength & conditioning, and other staff members across the organization. The ideal candidate will possess a strong foundation in statistics and/or data science, the ability to effectively communicate findings to colleagues in non-technical roles, and a passion for learning more about baseball. Strong applicants will demonstrate curiosity, creativity, and the ability to learn new concepts.",
				link: "https://boards.greenhouse.io/clevelandindiansbops/jobs/4490489002",
				logo: "indians.png",
				date: {
					posted: {
						year: 2019,
						month: 10,
						day: 25
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Dodgers",
				title: "Quantitative Analysis Intern, Baseball R&D",
				location: "Los Angeles, CA",
				description: "The Baseball Analytics team of the Los Angeles Dodgers is responsible for developing novel statistical methodology to support decision-making throughout Dodgers baseball operations. They are seeking to hire a summer intern to join the team. The primary goal of our internship program is to identify and develop talented individuals who may be interested in joining the team full-time in the future.",
				link: "https://blogs.fangraphs.com/instagraphs/job-postings-dodgers-quantitative-analyst-and-quantitative-analysis-intern/",
				logo: "dodgers.gif",
				date: {
					posted: {
						year: 2019,
						month: 10,
						day: 14
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Dodgers",
				title: "Quantitative Analyst, Baseball R&D",
				location: "Los Angeles, CA",
				description: "The Baseball Analytics team of the Los Angeles Dodgers is responsible for developing novel statistical methodology to support decision-making throughout Dodgers baseball operations. They are seeking to hire a Quantitative Analyst to join the team. As a member of the team, you will collaborate with experts (from statistics, computer science, biomechanics and other disciplines) who will challenge you to bring scientific rigor to your research. This position offers the opportunity to solve challenging problems in data science and ultimately see the impact of your work on the field.",
				link: "https://blogs.fangraphs.com/instagraphs/job-postings-dodgers-quantitative-analyst-and-quantitative-analysis-intern/",
				logo: "dodgers.gif",
				date: {
					posted: {
						year: 2019,
						month: 10,
						day: 14
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Swish Analytics",
				title: "Sports Trading Analyst",
				location: "San Francisco, CA",
				description: "Swish Analytics is looking for our next Trading Analyst. A deep passion for sports, betting, and stats is what helps our trading team succeed - we hope you share the same!",
				link: "https://angel.co/company/swish-analytics/jobs/634479-sports-trading-analyst-entry-level",
				logo: "swish-analytics.jpg",
				date: {
					posted: {
						year: 2019,
						month: 10,
						day: 9
					}
				},
				show: true,
				active: false,
				isTeam: false
			},
			{
				company: "St. Louis Cardinals",
				title: "Analytics Engineer",
				location: "St. Louis, MO",
				description: "The Analytics Engineer will focus on supporting the analytics pipeline that supplies the Baseball Development department with the data tools and processes needed to make actionable insights for daily operations. This position will be responsible for providing analytics team members with the necessary components for their data modeling processes. Candidates for this position should be detail orientated and analytical, with general knowledge & interest in the game of baseball.",
				link: "https://stlcardinals.aaimtrack.com/jobs/379516.html",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 30
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "St. Louis Cardinals",
				title: "Data Engineer",
				location: "St. Louis, MO",
				description: "This position will primarily focus on supporting the data pipeline infrastructure that supplies the Baseball Development department with the data needed to make actionable decisions in day-to-day operations. The Data Engineer will be responsible for maintaining the current data infrastructure and developing new, innovative methods to deliver data for actionable business outcomes. Candidates for this position should be detail orientated and analytical, with general knowledge & interest in the game of baseball.",
				link: "https://stlcardinals.aaimtrack.com/jobs/379549.html",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 30
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "St. Louis Cardinals",
				title: "Data Quality Engineer",
				location: "St. Louis, MO",
				description: "This position is responsible for ensuring that data management (ETL) processes for the Cardinals' testing and quality standards are met across existing and new data sources within the organization. This position will work closely with other members of the Baseball Development department to understand their data needs, and incorporate them into the data management (ETL) processes. Candidates for this position should be detail-oriented and analytical, with the ability to work independently.",
				link: "https://stlcardinals.aaimtrack.com/jobs/379554.html",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 30
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "New York Yankees",
				title: "Associate, Quantitative Analysis",
				location: "Bronx, NY",
				description: "This position will give students hands-on experience with quantitative projects related to player evaluation, player development, and/or in-game strategy. For this role, we are looking for students with strong quantitative reasoning, familiarity with statistical programming, and a passion for baseball.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/new-york-yankees/associate-quantitative-analysis-1962944",
				logo: "yankees.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 27
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "New York Yankees",
				title: "Associate, Baseball Operations",
				location: "Bronx, NY",
				description: "This position will give students hands-on experience with various important baseball operations tasks, including advance scouting, data collection and entry, and video charting. For this role, we are looking for candidates who are highly detail-oriented and have solid working knowledge of current baseball players, rules, and strategies.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/new-york-yankees/associate-baseball-operations-1962929",
				logo: "yankees.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 27
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "USA Baseball",
				title: "Baseball Analytics Intern",
				location: "Durham, NC",
				description: "USA Baseball’s National Training Complex in Cary, N.C. is equipped with TrackMan radar and data collection capabilities. The Trackman radar allows USA Baseball to enhance its evaluation and selection processes as well as assist in player development and training by adding in individual pitch and hit tracking data. This internship position will touch all programs and events that hold programming at the USA Baseball National Training Complex in 2020 including, but not limited to, NCAA Division II Baseball Championship, 14U National Team Development Program, 15U National Team, 16U National Team Development Program, Collegiate National Team, and National Team Identification Series.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/usa-baseball/baseball-analytics-intern-1963325",
				logo: "usabaseball.png",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 26
					}
				},
				show: true,
				active: false,
				isTeam: false
			},
			{
				company: "Detroit Tigers",
				title: "Baseball Operations Analyst",
				location: "Detroit, MI",
				description: "The Detroit Tigers are currently seeking a full-time Analyst in the Baseball Operations Department. This role will be responsible for managing analytics and research within Baseball Operations. This position will report to the Director, Baseball Analytics.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-tigers-baseball-operations-analyst/",
				logo: "tigers.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 26
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Oklahoma City Thunder",
				title: "Front End Software Engineer",
				location: "Oklahoma City, OK",
				description: "As a Front End Software Engineer, your work is critical to uncovering valuable insights that help shape the organization’s future – influencing performance, strategic planning, and decision-making to create the optimal conditions for talent to thrive. Working with colleagues and stakeholders you will develop tools and applications to support areas crucial to team performance, such as basketball analytics, player evaluation, and physical performance research.",
				link: "docs/Front End Software Developer Job Posting September 2019",
				logo: "thunder.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 25
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "San Francisco Giants",
				title: "Baseball Operations Analyst",
				location: "Scottsdale, AZ",
				description: "The San Francisco Giants are seeking an Analyst to join the Baseball Operations department. This individual will be part of the R&D team and provide research and analysis to support the front office and player development staff. This position will also work closely with the application development team to design and develop statistical models and tools using advanced data sources within new and existing applications. The ideal candidate will possess strong analytical skills, the ability to communicate effectively to non-technical people, and both passion and intellectual curiosity for the game of baseball.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-giants-baseball-operations-analyst/",
				logo: "giants.png",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 24
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "New York Mets",
				title: "Player Development Intern",
				location: "St. Lucie, FL",
				description: "You will: assist players and coaching staff with accessing video, statistical and analytical information; setup and operate baseball technology/teaching tools and assist players and staff in the comprehension of the data; will travel with the team on all road trips; work on projects assigned by player development staff; film and chart each home game and pregame activities; assist in Player Development administrative needs such as team travel, hotel reservation and obtaining documents for international players; operate TrackMan Radar system in order to collect valuable player development data.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-mets-player-development-intern/",
				logo: "mets.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 23
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "New York Mets",
				title: "Baseball R&D Associate",
				location: "Flushing, NY",
				description: "The Mets are seeking an individual with a background in data analysis to work with the club’s Research and Development team. This is an entry-level, seasonal 8-12 month position in which he/she will analyze baseball data and use their findings to provide insight within the different areas of Baseball Operations. These may include player development, amateur and international scouting, major league advance scouting and more. Applicants should be available to start in January, although the Mets may be flexible.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-mets-baseball-systems-and-rd-associate-positions/",
				logo: "mets.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 23
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "New York Mets",
				title: "Baseball Systems Associate",
				location: "Flushing, NY",
				description: "The Mets are seeking an individual with a background in database management and software development to work with the club’s Baseball Systems team. The position will be responsible for assisting in the management and development of processes collecting, cleaning, and organizing large baseball data sets. One should have demonstrated experience building web applications in Python, Java, PHP, Javascript, etc. Applicants should be available to start in January, although the Mets may be flexible.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-mets-baseball-systems-and-rd-associate-positions/",
				logo: "mets.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 23
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Seattle Mariners",
				title: "R&D Analytics Positions",
				location: "Seattle, WA",
				description: "The Mariners are seeking individuals with a background in statistical analysis and a passion for baseball for both full-time and internship roles. The positions will work directly alongside the analytics team on a wide range of projects and provide ample opportunity to directly impact front office decision-making. Start and end dates are flexible; applicants only available for summer 2020 will be considered, but their preference is for candidates that can start by Feb 1, 2020.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-seattle-mariners-rd-analytics-positions/",
				logo: "mariners.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Minnesota Twins",
				title: "R&D Intern, Baseball Operations",
				location: "Minneapolis, MN",
				description: "You will support the Research and Development Department by delivering tools and research that improve decision-making processes for the breadth of Baseball Operations personnel. You will evaluate and build statistically rigorous models to aid and inform in a variety of areas of baseball operations, including: amateur scouting, advance scouting, player development, and player acquisition. You will also provide administrative support as expected.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-twins-baseball-operations-and-technology-internships/",
				logo: "twins.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Minnesota Twins",
				title: "Intern, Baseball Operations",
				location: "Minneapolis, MN",
				description: "You will support the Baseball Department in all areas, including Draft meeting preparation and support during Draft days, post-Draft player pick-up, data entry, filing, and other assigned projects. Administrative support is expected throughout the internship, however, there is ample opportunity for areas of personal interest/development through self-determined projects and access to Baseball Operations personnel, information, and systems. You will also complete other administrative projects, as assigned.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-twins-baseball-operations-and-technology-internships/",
				logo: "twins.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Major League Baseball",
				title: "MLB Diversity Fellowship Program",
				location: "Various Locations",
				description: "This latest venture in Baseball’s efforts to competitively recruit the most talented individuals and brightest young minds entering the workforce will provide the opportunity for young, diverse professionals to experience front office positions that have been traditionally influential in baseball operations decisions. Fellows will have the opportunity to work in baseball operations and see the inner workings of a front office. Areas of baseball operations include player development, scouting, research and development, and beyond. The MLB Diversity Fellowship Program will allow MLB to stay true to the ideals of equal opportunity while solidifying Major League Baseball as an organization of choice for all recent graduates, including people of color and women.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-mlb-diversity-fellowship-program/",
				logo: "mlb.svg",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: false
			},
			{
				company: "Philadelphia Phillies",
				title: "Quantitative Analyst, Baseball R&D",
				location: "Philadelphia, PA",
				description: "As a Quantitative Analyst (QA), you help shape The Phillies Baseball Operations strategies by processing, analyzing, and interpreting large and complex data. You do more than just crunch the numbers; you carefully plan the design of your own studies by asking and answering the right questions, while also working collaboratively with other analysts and software engineers on larger projects. Using analytical rigor, you work with your team as you mine through data and see opportunities for The Phillies to improve. After communicating the results of your studies and experiments to the GM and executive staff, you collaborate with front office executives, scouts, coaches, and trainers to incorporate your findings into Phillies practices. Identifying the challenge is only half the job; you also work to figure out and implement the solution.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-phillies-baseball-research-development-quantitative-analyst-roles/",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					},
					due: {
						year: 2019,
						month: 10,
						day: 13
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Phillies",
				title: "Quantitative Analyst Associate, Baseball R&D",
				location: "Philadelphia, PA",
				description: "As a Quantitative Analyst (QA) Associate, you help shape The Phillies Baseball Operations strategies by processing, analyzing, and interpreting large and complex data. You do more than just crunch the numbers; you carefully plan the design of your own studies by asking and answering the right questions, while also working collaboratively with other analysts and software engineers on larger projects. Using analytical rigor, you work with your team as you mine through data and see opportunities for The Phillies to improve. After communicating the results of your studies and experiments to the GM and executive staff, you collaborate with front office executives, scouts, coaches, and trainers to incorporate your findings into Phillies practices. Identifying the challenge is only half the job; you also work to figure out and implement the solution.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-phillies-baseball-research-development-quantitative-analyst-roles/",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					},
					due: {
						year: 2019,
						month: 10,
						day: 13
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Phillies",
				title: "Software Engineer, Baseball R&D",
				location: "Philadelphia, PA",
				description: "The work of a Software Engineer (SWE) at The Phillies extends well beyond merely coding. As a SWE you contribute fresh ideas in a variety of areas, including information retrieval, networking and data storage, security, machine learning, natural language processing, UI design and mobile to shape the evolution of The Phillies baseball analytics systems. The Phillies ideal engineers will have a versatile skill set, be enthusiastic to handle new challenges and demonstrate leadership qualities. You will work closely with end-users across Scouting, Player Development and the Major League Coaching Staff while building software tools from the ground up. By identifying appropriate design specifications through collaboration with those end-users, you will build applications that conform to user needs. Specific areas of focus may include, but are not limited to, the draft, free-agency, player valuation, player development, in-game strategy, and injury prevention. As a SWE you will have the opportunity to use your technical expertise to create software solutions that impact decision making at The Phillies.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-phillies-baseball-research-development-software-engineers/",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					},
					due: {
						year: 2019,
						month: 10,
						day: 13
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Phillies",
				title: "Software Engineer Associate, Baseball R&D",
				location: "Philadelphia, PA",
				description: "The work of a Software Engineer (SWE) at The Phillies extends well beyond merely coding. As a SWE you contribute fresh ideas in a variety of areas, including information retrieval, networking and data storage, security, machine learning, natural language processing, UI design and mobile to shape the evolution of The Phillies baseball analytics systems. The Phillies ideal engineers will have a versatile skill set, be enthusiastic to handle new challenges and demonstrate leadership qualities. You will work closely with end-users across Scouting, Player Development and the Major League Coaching Staff while building software tools from the ground up. By identifying appropriate design specifications through collaboration with those end-users, you will build applications that conform to user needs. Specific areas of focus may include, but are not limited to, the draft, free-agency, player valuation, player development, in-game strategy, and injury prevention. As a SWE you will have the opportunity to use your technical expertise to create software solutions that impact decision making at The Phillies.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-phillies-baseball-research-development-software-engineers/",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					},
					due: {
						year: 2019,
						month: 10,
						day: 13
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Phillies",
				title: "Baseball Operations Associate",
				location: "Philadelphia, PA",
				description: "The Phillies are seeking passionate and knowledgeable applicants for an entry-level baseball operations associate. This role will provide analytical and administrative support to their baseball operations group and will consist of opportunities to contribute throughout the many facets of the department, including close collaboration with their Research & Development team.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-phillies-baseball-operations-associate-and-intern-roles/",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					},
					due: {
						year: 2019,
						month: 10,
						day: 13
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Phillies",
				title: "Organizational Intern, Baseball Operations Analyst",
				location: "Philadelphia, PA",
				description: "The Phillies are seeking passionate and knowledgeable applicants for an entry-level baseball operations internship. This role will provide analytical and administrative support to their baseball operations group and will consist of opportunities to contribute throughout the many facets of the department, including close collaboration with their Research & Development team.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-phillies-baseball-operations-associate-and-intern-roles/",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					},
					due: {
						year: 2019,
						month: 10,
						day: 13
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Minnesota Timberwolves & Lynx",
				title: "Basketball Operations Analyst",
				location: "Minneapolis, MN",
				description: "In this role you will work on a variety of projects on subjects including but not limited to: Player evaluation, player projection, front office strategy, gameplay strategy, sports science, and/or player development. We are looking for self-motivated, ambitious and passionate individuals to join our dynamic team.",
				link: "https://www.teamworkonline.com/basketball-jobs/minnesota-timberwolves-jobs/minnesota-timberwolves/basketball-operations-analyst-1963506",
				logo: "twolves.png",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Quantitative Analyst – Football Operations",
				location: "Philadelphia, PA",
				description: "The Quantitative Analyst will be a member of the analytics team within Football Operations. This position will expose candidates to all parts of the modern NFL front office, including player evaluation, game preparation, resource allocation, sports science, and player development. A good candidate will be able to work with football data to draw insights and improve decision-making. Applicants should have the quantitative skills to analyze complex problems and the technical ability to implement their ideas effectively. We expect applicants to have a solid foundation in statistical modeling.",
				link: "./docs/analyst_football_ops_8_6_19.pdf",
				logo: "eagles.png",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Senior Quantitative Analyst – Football Operations",
				location: "Philadelphia, PA",
				description: "The Senior Quantitative Analyst will join the analytics team within Football Operations. The position will expose candidates to all parts of the modern NFL front office, including player evaluation, game preparation, resource allocation, sports science, and player development. The job involves working with a wide variety of football data to draw insights and improve decision-making. A strong candidate for this role will have relevant work experience and/or graduate-level training in a quantitative discipline. Applicants should have a deep understanding of modern statistical techniques, with proven ability to execute on their ideas. We expect candidates to be well-versed in sports analytics research and methods.",
				link: "./docs/senior_analyst_football_ops_8_6_19.pdf",
				logo: "eagles.png",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Director of Analytics – Football Operations",
				location: "Philadelphia, PA",
				description: "This position will work closely with the VP of Football Operations and Strategy to shape analytics within Football Operations. The Director of Analytics will use data to address key issues in the modern NFL front office including player evaluation, game preparation, resource allocation, sports science, and player development. A strong candidate will have significant work experience, an advanced degree in a quantitative discipline, and a demonstrated ability to interact with a diverse set of stakeholders. We will prioritize applicants with deep knowledge of modern statistical techniques and the creativity to identify novel analytical directions. The position requires strong organization, communication, and leadership skills, along with the ability to work on widely varying projects with distinct audiences. Candidates must have the ability and statistical range to draw insights from many different forms of football data and a passion for improving football decision-making.",
				link: "./docs/director_analytics_football_ops_8_6_19.pdf",
				logo: "eagles.png",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 19
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Atlanta Braves",
				title: "R&D Analyst Trainee",
				location: "Atlanta, GA",
				description: "The R&D Analyst Trainee will assist Baseball Operations decision-making through the analysis and research of baseball information. The day-to-day responsibilities of this position will revolve around using data analysis to provide insight into player evaluation, performance projection, roster construction, and all other facets of baseball operations decision making, with emphasis on different sub-departments depending on the baseball calendar and needs of the department. The position will report to Assistant General Manager, Research and Development.",
				note: "Applicants for full-season R&D Analyst Trainee (Jan-Nov), and summer R&D Analyst Intern (May-Aug) positions will be considered.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-braves-rd-trainee-positions/",
				logo: "braves.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 16
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Atlanta Braves",
				title: "R&D Developer Trainee",
				location: "Atlanta, GA",
				description: "The R&D Developer Trainee position emphasizes software and web development as it relates to the Baseball Operations department. The trainee’s main responsibilities will be to assist the R&D department with building proprietary applications for displaying baseball information and visualizations, maintaining existing information management systems, and developing additional productivity tools to aid in Baseball Operations decision making. Candidates must have proven experience with application and/or web development, with interest in baseball and sports analytics research as a strong plus. The position will report to Assistant General Manager, Research and Development.",
				note: "Applicants for full-season R&D Developer Trainee positions (Jan-Nov), and summer R&D Developer Intern positions (May-Aug) will be considered.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-braves-rd-trainee-positions/",
				logo: "braves.gif",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 16
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Miami Marlins",
				title: "Baseball Operations Data Engineer",
				location: "Jupiter, FL",
				description: "The Miami Marlins are seeking a full-time Data Engineer for the Baseball Operations department. The position will be responsible for developing and maintaining ETL processes that ingest, clean, validate, and organize baseball data. The Data Engineer will support the information requirements of our analysts, coaches, and scouts. Strong applicants will have experience with ETL processes and database management, with extensive knowledge of both SQL and object oriented programming.",
				link: "https://www.teamworkonline.com/baseball-jobs/miamibaseball/miami-marlins/data-engineer-1962874",
				logo: "marlins.png",
				date: {
					posted: {
						year: 2019,
						month: 9,
						day: 11
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Chicago White Sox",
				title: "Baseball Operations Software Engineer",
				location: "Chicago, IL",
				description: "The Chicago White Sox seek an experienced Software Engineer to join their baseball operations group. The engineer will be responsible for building and maintaining data driven systems with a focus on Baseball Analytics, however there will be additional exposure to all facets of baseball operations.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-white-sox-baseball-operations-software-engineer-and-analyst/",
				logo: "whitesox.png",
				date: {
					posted: {
						year: 2019,
						month: 8,
						day: 25
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Chicago White Sox",
				title: "Baseball Analyst",
				location: "Chicago, IL",
				description: "The Chicago White Sox seek a passionate, knowledgeable, and dedicated individual with a desire to work in Baseball Operations. The position will focus primarily on the numerical methods that drive Baseball Analytics, however there will be additional exposure to all facets of baseball operations.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-white-sox-baseball-operations-software-engineer-and-analyst/",
				logo: "whitesox.png",
				date: {
					posted: {
						year: 2019,
						month: 8,
						day: 25
					}
				},
				show: true,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Dodgers",
				title: "Associate Quantitative Analyst",
				location: "Los Angeles, CA",
				description: "The Los Angeles Dodgers are seeking an Associate Quantitative Analyst for the team’s Research & Development group within Baseball Operations. This position will run for 12 weeks during the 2019 MLB season. Responsibilities include developing statistical/machine learning models to support player evaluation, development, and strategic decision-making and preparing reports and presentations to track progress and disseminate model/analysis results.",
				link: "https://blogs.fangraphs.com/instagraphs/job-posting-dodgers-associate-quantitative-analyst/",
				logo: "dodgers.gif",
				date: {
					posted: {
						year: 2019,
						month: 1,
						day: 31
					}
				},
				show: true,
				active: false,
				isTeam: true
			},				
			{
				company: "San Francisco Giants",
				title: "Sports Science Analyst",
				location: "San Francisco, CA",
				description: "The San Francisco Giants are seeking a Sports Science Analyst to join the Baseball Operations department. This individual will be part of the R&D team and provide research and analysis to support the medical, training, and player development staffs. This position will also work closely with the application development team to design and develop statistical models and tools using advanced data sources within new and existing applications. The ideal candidate will possess a strong foundation with advanced training in performance science disciplines, strong analytical skills, the ability to communicate effectively to non-technical people, and both passion and intellectual curiosity for the game of baseball.",
				link: "./docs/SFG - Sports Science Analyst 01_30_19.pdf",
				logo: "giants.png",
				date: {
					posted: {
						year: 2019,
						month: 1,
						day: 30
					}
				},
				show: true,
				active: false,
				isTeam: true
			},	
			{
				company: "San Francisco Giants",
				title: "Data Scientist",
				location: "San Francisco, CA",
				description: "The San Francisco Giants are seeking a Data Scientist to join the Baseball Operations department. This individual will be part of the R&D team and develop advanced predictive models to support front office and in-game decision making. This position will also work closely with the application development team to integrate these decision-support tools into new and existing applications. The ideal candidate will possess advanced data modeling skills, the ability to communicate effectively to non-technical people, and both passion and intellectual curiosity for the game of baseball.",
				link: "./docs/SFG - Data Scientist 01_30_19.pdf",
				logo: "giants.png",
				date: {
					posted: {
						year: 2019,
						month: 1,
						day: 30
					}
				},
				show: true,
				active: false,
				isTeam: true
			},	
			{
				company: "San Francisco Giants",
				title: "Baseball Operations Analyst",
				location: "Scottsdale, AZ",
				description: "The San Francisco Giants are seeking an Analyst to join the Baseball Operations department. This individual will be part of the R&D team and provide research and analysis to support the front office and player development staff. This position will also work closely with the application development team to design and develop statistical models and tools using advanced data sources within new and existing applications. The ideal candidate will possess strong analytical skills, the ability to communicate effectively to non-technical people, and both passion and intellectual curiosity for the game of baseball.",
				link: "./docs/SFG - Baseball Operations Analyst 01_30_19.pdf",
				logo: "giants.png",
				date: {
					posted: {
						year: 2019,
						month: 1,
						day: 30
					}
				},
				show: true,
				active: false,
				isTeam: true
			},					
			{
				company: "San Francisco Giants",
				title: "Baseball Operations Intern",
				location: "San Francisco, CA",
				description: "The San Francisco Giants are seeking an intern to join the Baseball Operations department. This individual will assist the Baseball Operations department and provide comprehensive administrative support to all functions including minor league and major league operations, player development administration and amateur and pro scouting administration.",
				link: "./docs/giants_baseball_operations_01_15_19.pdf",
				logo: "giants.png",
				date: {
					posted: {
						year: 2019,
						month: 1,
						day: 15
					}
				},
				show: true,
				active: false,
				isTeam: true
			},		
			{
				company: "Detroit Pistons",
				title: "Basketball Research Fellowship",
				location: "Auburn Hills, MI",
				description: "In the Basketball Research Fellowship, you will support the efforts of the Pistons Basketball Operations team by using data to help them improve team performance. You will help with driving and improving our evidence-based decision-making by writing robust data pipelines, visualizing data to identify causal relationships, building predictive models and forecasts, and developing internal tooling to integrate it all. Your assignment will be for the duration of the 2018-2019 Basketball Season.  This position would ideally be located in Auburn Hills, Michigan but candidates who are located elsewhere and could work remotely will also be considered.",
				link: "https://www.teamworkonline.com/basketball-jobs/palacenet/detroit-pistons-jobs-/basketball-research-fellowship-1947805",
				logo: "pistons.png",
				date: {
					posted: {
						year: 2018,
						month: 12,
						day: 1
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "SimpleBet",
				title: "Data Scientist/Software Engineer, Machine Learning Systems",
				location: "New York City, NY",
				description: "SimpleBet is looking to hire several intern AND full-time Data Scientists/Systems Engineers to join the team. You will help build and design statistical machine learning algorithms that ensure maximum profit through pricing sports markets efficiently and improving customer metrics. To do well in this role, you need first-rate problem solving skills, an interest in the sports or betting markets, as well as experience with statistics, machine learning, data structures and algorithms, and computer science fundamentals.",
				link: "https://app.joinhandshake.com/jobs/2001949?ref=web-app-job-search&search_id=4075d989-a142-45d0-bc2f-c4569c7b29b2",
				logo: "",
				date: {
					posted: {
						year: 2018,
						month: 10,
						day: 19
					}
				},
				show: false,
				active: false,
				isTeam: false
			},			
			{
				company: "Los Angeles Dodgers",
				title: "Quantitative Analyst, Baseball Analytics",
				location: "Los Angeles, CA",
				description: "The Los Angeles Dodgers seek an entry-level analyst for the team's Baseball Analytics group. Responsibilities include statistical modeling and quantitative analysis to support research projects focused on player evaluation/development and strategic decision-making; developing, automating, and implementing mathematical, statistical, and/or machine                      learning models; and preparing reports and presentations to disseminate model results to front office, coaching staff, player development, scouting, and medical/performance staff.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/los-angeles-dodgers/quantitative-analyst-baseball-analytics-1945955",
				logo: "dodgers.gif",
				date: {
					posted: {
						year: 2018,
						month: 10,
						day: 9
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "New York Yankees",
				title: "Associate, Quantitative Analysis",
				location: "New York, NY",
				description: "This position is a rigorous 12-month program geared to prepare entry level candidates for a career within the Baseball Operations industry. Responsibilities include: assisting in research and analysis of various baseball topics; designing, testing, and implementing predictive models using advanced statistical techniques; Preparing, managing, and visualizing large-scale data sets; developing processes for monitoring and ensuring data quality across multiple data sources.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/new-york-yankees/associate-quantitative-analysis-1944125",
				logo: "yankees.gif",
				date: {
					posted: {
						year: 2018,
						month: 10,
						day: 6
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Los Angeles Angels",
				title: "Baseball Operations Intern",
				location: "Anaheim, CA",
				description: "The Los Angeles Angels are seeking Baseball Operations interns for the 2019 season. They have internships available in both Anaheim and Arizona. As a Baseball Operations Intern, you will be fully immersed in our department, and given the opportunity/resources to learn, grow, and develop over the course of the season. Our goal is to find people with the necessary skills and traits to become long-term members of the department.",
				link: "https://angel.co/los-angeles-angels-baseball/jobs/437798-baseball-operations-intern",
				logo: "angels.gif",
				date: {
					posted: {
						year: 2018,
						month: 10,
						day: 6
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Analyst - Football Operations",
				location: "Philadelphia, PA",
				description: "The Analyst position will help apply analytics within football operations. A successful candidate will be equipped to work with football data to draw insights and improve decision-making. Candidates should have the quantitative skills to analyze complex problems and the technical ability to implement their ideas effectively. Candidates will be exposed to all parts of the modern NFL front office, including player evaluation, game preparation, resource allocation, sports science, and player development.",
				link: "./docs/eagles_analyst_football_ops_10_1_18.pdf",
				logo: "eagles.png",
				date: {
					posted: {
						year: 2018,
						month: 9,
						day: 26
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Analytics Intern - Football Operations",
				location: "Philadelphia, PA",
				description: "The Analytics Intern will work with the football operations staff on a wide range of analytical projects. Candidates will primarily assist in managing and analyzing data. Successful candidates will have strong quantitative skills and the technical ability to implement ideas. The internship will expose candidates to the day-to-day work of a modern NFL front office.",
				link: "./docs/eagles_intern_football_ops_10_1_18.pdf",
				logo: "eagles.png",
				date: {
					posted: {
						year: 2018,
						month: 9,
						day: 26
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Washington Nationals",
				title: "Major League Operations Intern",
				location: "Washington, DC",
				description: "The Washington Nationals are looking for a Baseball Operations intern who can contribute to its front office by specializing in work related to Major League Operations. The internship includes assisting the Baseball Operations Department with day-to-day assignments, along with long term projects centered on roster management, salary arbitration, transactions, and the economics of baseball. This internship is for the 2019 season and typically spans from Opening Day to November 1st.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/washington-nationals/internship/2019-internship-major-league-operations-1944404",
				logo: "nationals.gif",
				date: {
					posted: {
						year: 2018,
						month: 9,
						day: 17
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "San Francisco 49ers",
				title: "Business Intelligence Intern",
				location: "Santa Clara, CA",
				description: "The San Francisco 49ers are looking for a current undergraduate or graduate student to join the Business Strategy & Analytics team as a Business Intelligence Intern. This paid internship is uniquely positioned to play a critical role in their use and understanding of data across various 49ers technology efforts and strategy development. The role requires end-to-end analysis work, including querying databases, designing reporting dashboards, building predictive models, and communicating results to management. The individual in this role will have the opportunity to interact with almost every department in the company and gain experience in all facets of the business operations of a professional sports team.",
				link: "https://www.teamworkonline.com/football-jobs/49ers/san-francisco-49ers/internship/business-intelligence-intern-1944458",
				logo: "49ers.gif",
				date: {
					posted: {
						year: 2018,
						month: 9,
						day: 12
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "ESPN",
				title: "Stats & Information Internship - Fall 2018",
				location: "Bristol, CT",
				description: "ESPN is looking for a Stats & Information Intern for Fall 2018. You may work in one or a combination of the 3 primary areas within their Group: SIG Content, Stats & Analysis, and Sports Analytics.",
				link: "https://jobs.espncareers.com/job/bristol/stats-and-information-internship-espn-fall-2018/5216/8175970",
				logo: "espn.svg",
				date: {
					posted: {
						year: 2018,
						month: 6,
						day: 16
					}
				},
				show: false,
				active: false,
				isTeam: false
			},			
			{
				company: "Arizona Diamondbacks",
				title: "Baseball Systems Developer",
				location: "Phoenix, AZ",
				description: "The Arizona Diamondbacks are looking for a Baseball Systems Developer to to play a significant role in designing and developing new functionality and maintaining existing applications within the Baseball Information Systems umbrella. They will work closely with Baseball Operations staff to create user-friendly tools to solve baseball needs and streamline processes.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-diamondbacks-baseball-systems-developer/",
				logo: "dbacks.png",
				date: {
					posted: {
						year: 2018,
						month: 4,
						day: 12
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Philadelphia 76ers",
				title: "Technical Scout",
				location: "Camden, NJ",
				description: "The Technical Scout will assist the Philadelphia 76ers front office by supporting basketball decision-making primarily in the areas of player personnel, scouting and strategy. The 76ers Analytics and Strategy team is responsible for leveraging multiple large and complex data sets and a vast amount of video. The Technical Scout will possess a strong technical foundation in programming - Engineering or Computer Science backgrounds are favored.",
				link: "https://www.teamworkonline.com/basketball-jobs/nbateamjobs/nba-league-office/player-operations/technical-scout-1937386",
				logo: "76ers.png",
				date: {
					posted: {
						year: 2018,
						month: 4,
						day: 10
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Washington Nationals",
				title: "Baseball R&D Web Developer",
				location: "Washington DC",
				description: "The Washington Nationals are seeking a web developer to join the organization’s Baseball Research and Development team. The role will focus on building new web application features for decision-support systems and tools used throughout the organization. The developer will design UI components to visualize and facilitate in-house baseball datasets from R&D analysts as well as external data accessed via APIs.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-nationals-baseball-rd-web-developer/",
				logo: "nationals.gif",
				date: {
					posted: {
						year: 2018,
						month: 4,
						day: 2
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Arizona Diamondbacks",
				title: "Baseball Systems Developer",
				location: "Phoenix, AZ",
				description: "The Arizona Diamondbacks are looking for a Baseball Systems Developer to assist with the design, development, and maintenance of new and existing functionality for the Baseball Information Systems. They will work closely with Baseball Operations staff to create user-friendly tools to solve baseball needs and streamline processes.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/arizona-diamondbacks/baseball-systems-developer-1935791?utm_source=dlvr.it&utm_medium=twitter",
				logo: "dbacks.png",
				date: {
					posted: {
						year: 2018,
						month: 3,
						day: 6
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Minnesota Twins",
				title: "Baseball Systems Developer",
				location: "Minneapolis, MN",
				description: "The Minnesota Twins are seeking a Full Stack Software Developer to join the Baseball Research and Development group. This position offers wide-ranging exposure to current programming methods and frameworks in a fast-paced agile environment. With creativity and passion, this candidate will collaborate with the Baseball Operations staff to develop, deliver, and maintain data driven solutions for player evaluation, player development, and leading-edge baseball research. This position requires strong full stack web development skills and experience as well as a demonstrated ability for independent curiosity and a commitment to excellence while working within a team framework.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-minnesota-twins-baseball-systems-developer/",
				logo: "twins.gif",
				date: {
					posted: {
						year: 2018,
						month: 3,
						day: 1
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Chicago Cubs",
				title: "Baseball Systems Software Engineer",
				location: "Chicago, IL",
				description: "The Chicago CUbs are looking for a full-time software engineer that will primarily focus on the development and maintenance of the Cubs internal baseball information system, including creating web interfaces and web tools for the user interface; building ETL processes; maintaining back-end databases; and troubleshooting data sources issues as needed.",
				link: "https://recruiting2.ultipro.com/RIC1003CUBS/JobBoard/b839f5fa-ba5f-4561-824b-31e8d3d2d9ed/OpportunityDetail?opportunityId=e87662da-5710-4acb-bd92-c12c35fba89d",
				logo: "cubs.gif",
				date: {
					posted: {
						year: 2018,
						month: 3,
						day: 1
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Los Angeles Lakers",
				title: "Basketball Analytics Fellow",
				location: "El Segundo, CA",
				description: "The Basketball Analytics Fellow will be a critical member of the Basketball Analytics team.  Supporting the Basketball Analytics team, he or she will take on a variety of statistical and reporting responsibilities, including modeling, analytical team strategy, and streamlining existing or new processes. Note: this is a one-year fellowship, beginning summer 2018.",
				link: "https://www.teamworkonline.com/basketball-jobs/nbateamjobs/los-angeles-lakers/basketball-analytics-fellow-1933766",
				logo: "lakers.png",
				date: {
					posted: {
						year: 2018,
						month: 2,
						day: 25
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "New York Mets",
				title: "Analytics Intern",
				location: "New York",
				description: "The New York Mets are seeking an intern to work with the club’s Research and Development team. The employee will analyze baseball data and use their findings to support different areas within Baseball Operations. These may include player development, amateur and international scouting, and Major League advance scouting.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-mets-analytics-intern/",
				logo: "mets.gif",
				date: {
					posted: {
						year: 2018,
						month: 2,
						day: 20
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Seattle Mariners",
				title: "Baseball Operations Intern",
				location: "Seattle, WA",
				description: "The Seattle Mariners are working to build a winning team with exceptionally talented people. If you are passionate about baseball and eager to make an impact using your skills, learn more about this exciting opportunity to join our Baseball Operations team. This individual will provide support to our scouting operations while working closely with various members of our Baseball Operations team.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-mariners-baseball-operations-intern/",
				logo: "mariners.gif",
				date: {
					posted: {
						year: 2018,
						month: 2,
						day: 1
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Boston Red Sox",
				title: "Baseball Reserach and Development Analyst",
				location: "Boston, MA",
				description: "The Boston Red Sox are seeking an Analyst for the team’s Baseball Research & Development department. The role will support all areas of Baseball Operations while working closely with the VP, Baseball Research & Development, and the analysts on the R&D team.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-red-sox-baseball-research-and-development-analyst/",
				logo: "redsox.gif",
				date: {
					posted: {
						year: 2018,
						month: 1,
						day: 23
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Indiana Pacers",
				title: "Summer Basketball Analytics Internship",
				location: "Indianapolis, IN",
				description: "The Indiana Pacers are looking for a Basketball Analytics Intern who will work directly with the Indiana Pacers analytics team in support of the front office, performance staff, and coaching staff. The overall focus will be on helping develop internal software tools and maintaining current analytics infrastructure.",
				link: "https://www.teamworkonline.com/basketball-jobs/pacers/pacers/summer-basketball-analytics-internship-1929177",
				logo: "pacers.gif",
				date: {
					posted: {
						year: 2018,
						month: 1,
						day: 3
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "New York Yankees",
				title: "Senior Analyst, Quantitative Analysis",
				location: "Bronx, NY",
				description: "The New York Yankees are seeking a Senior Data Analyst to join the Quantitative Analysis group of the Baseball Operations department. Quantitative Analysis plays a large role in all decisions within the organization.  In a Senior Analyst, we are looking for a highly motivated individual that can help make use of the large amount of baseball data available to influence the long-term direction of the organization.  We are seeking someone who enthusiastically tackles big challenges and wants to see their work-product make a meaningful impact on the field.",
				link: "https://www.teamworkonline.com/baseball-jobs/baseballjobs/new-york-yankees/senior-analyst-quantitative-analysis-1902819",
				logo: "yankees.gif",
				date: {
					posted: {
						year: 2018,
						month: 1,
						day: 3
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Houston Astros",
				title: "Baseball Research & Development Analyst",
				location: "Houston, TX",
				description: "The Houston Astros are seeking an Analyst for the team's Baseball Research and Development group.  The Analyst will work closely with the Director of R&D and the analytics team to conduct research and develop methods that encourage the effective understanding and application of information throughout Baseball Operations.",
				link: "https://www.teamworkonline.com/employment_opportunities/1930485",
				logo: "astros.gif",
				date: {
					posted: {
						year: 2018,
						month: 1,
						day: 3
					}
				},
				show: false,
				active: false,
				isTeam: true
			},				
			{
				company: "Washington Nationals",
				title: "2018 Research & Development Internship",
				location: "Washington DC",
				description: "Contribute to the Washington Nationals Baseball Operations for the 2018 season as one of its highly valued interns. The Research & Development internship includes an emphasis on computer programming and data analysis. The intern’s main responsibility will be to assist the R&D department with input, cleaning and processing of baseball data into proprietary databases. There will also be assignments that require statistical analysis on large volumes of baseball-related data. Candidates must have significant experience with R and SQL, as well as an interest in publicly available sabermetrics research and data science.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-washington-nationals-2018-research-development-internship/",
				logo: "nationals.gif",
				date: {
					posted: {
						year: 2018,
						month: 1,
						day: 3
					}
				},
				show: false,
				active: false,
				isTeam: true
			},				
			{
				company: "Oakland Athletics",
				title: "Junior Software Developer",
				location: "Oakland, CA",
				description: "The Oakland Athletics are seeking a Junior Software Developer; responsible for developing and maintaining software used by all Baseball Operations personnel. The Software Developer will work on full-stack development, from front-end web interfaces to back-end databases, along with mobile application development. They will work with end-users across the department, so communication and collaboration skills are imperative.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-oakland-athletics-junior-software-developer/",
				logo: "athletics.gif",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Miami Marlins",
				title: "Baseball Operations Analyst",
				location: "Miami, FL",
				description: "The Miami Marlins are looking for an analyst to assist with Baseball Operations decision-making through the analysis and research of baseball information. The specific day-to-day responsibilities of this position will vary depending on the baseball calendar, but will revolve around using data analysis to answer baseball-related questions. A competitive candidate will possess an established foundation of statistical, programming and database skills.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-miami-marlins-baseball-operations-analyst/",
				logo: "marlins.gif",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Kansas City Royals",
				title: "Baseball Operations Senior Analyst",
				location: "Kansas City, MO",
				description: "The Kansas City Royals Baseball Club is seeking a highly motivated and creative analyst to develop models and methodologies for use in decision-making by the Baseball Operations department. The ideal applicant will have expert knowledge in machine learning and other modern analysis techniques for use in leveraging baseball data to provide a competitive edge and innovative solutions to the Kansas City Royals.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-kansas-city-royals-baseball-operations-senior-analyst-quantitative-analysis/",
				logo: "royals.gif",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 20
					}
				},
				show: false,
				active: false,
				isTeam: true
			},	
			{
				company: "Wasserman Media Group",
				title: "Manager, Data Analytics",
				location: "Los Angeles, CA",
				description: "Wasserman is looking for a motivated individual to bring a robust data and analytics skillset to the Research & Insights (R&I) team within its corporate and property consulting division - Wasserman Marketing. The R&I team takes a leadership role within Wasserman around topics and client needs that live at the intersection of research, analytics, strategy and data. The team leads Wasserman’s efforts around sponsorship measurement, custom research, analytics, and insight-driven strategies. In addition, R&I leads capability-building efforts required to maintain our market leadership position. If interested, please email tbrown@teamwass.com.",
				link: "postings/wasserman.pdf",
				logo: "wasserman.png",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: false
			},							
			{
				company: "Boston Red Sox",
				title: "David Ortiz Fellowship",
				location: "Boston, MA",
				description: "The Boston Red Sox, in partnership with Major League Baseball have created The David Ortiz Fellowship Program, with one of its purposes being to promote and encourage greater racial and gender diversity within baseball front office positions. While the specific job responsibilities may change from one year to the next, each calendar year one new individual will be selected for this Fellowship to work in a Red Sox front office position. In addition, the Fellow will travel to New York two or three times during the course of the year to meet with leaders within Major League Baseball and work on projects for the Commissioner’s Office. The goal of this work will be to broaden their exposure to the baseball profession and give them the skills they need for future positions in the field.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-boston-red-sox-david-ortiz-fellowship/",
				logo: "redsox.gif",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 14
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Cleveland Indians",
				title: "Baseball Operations Intern",
				location: "Cleveland, OH",
				description: "The Cleveland Indians are looking for a Baseball Operations intern to assist with virtually all facets of the Baseball Operations department while gaining exposure to the day-to-day operations of a Major League Baseball front office. Interns will gather and coordinate information for baseball planning and decision-making, perform analytical, scouting, financial and/or statistical studies as assigned or as interest dictates, and coordinate, collect and analyze video for studies and potential player acquisitions throughout the season (at the Trade Deadline, in the offseason, etc.).",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-cleveland-indians-baseball-operations-intern-2/",
				logo: "indians.png",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 05
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Cincinnati Reds",
				title: "Baseball Analytics Trainee",
				location: "Cincinnati, OH",
				description: "The Cincinnati Reds are looking for a Baseball Operations Trainee to assist the Baseball Analytics department’s research and development efforts within new and existing applications. Responsibilities include collaborating with Major League Operations and Player Development departments to design and implement statistical analyses, and assisting Analytics and Baseball Operations staff with data analysis, preparation, maintenance and collection.",
				link: "https://www.teamworkonline.com/employment_opportunities/1929170?utm_source=dlvr.it&utm_medium=twitter",
				logo: "reds.gif",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 05
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Detroit Tigers",
				title: "Baseball Operations Senior Analyst",
				location: "Detroit, Michigan",
				description: "The Detroit Tigers are currently seeking a full-time Sr. Analyst in the Baseball Operations Department. This role will be responsible for conducting advanced analytics and research within Baseball Operations.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-detroit-tigers-baseball-operations-senior-analyst/",
				logo: "tigers.gif",
				date: {
					posted: {
						year: 2017,
						month: 12,
						day: 04
					}
				},
				show: false,
				active: false,
				isTeam: true
			},					
			{
				company: "Texas Rangers",
				title: "Baseball Systems Developer",
				location: "Arlington, TX",
				description: "The Texas Rangers are looking for a developer who will support, maintain and expand its baseball operations software systems. Responsibilities include web development design and testing, database queries, and updating and maintaining internal system documentation.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-texas-rangers-baseball-systems-developer/",
				logo: "rangers.gif",
				date: {
					posted: {
						year: 2017,
						month: 11,
						day: 27
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "San Diego Padres",
				title: "Baseball Systems Developer",
				location: "San Diego, CA",
				description: "The San Diego Padres are looking for a Baseball Systems Developer to help design and implement user interfaces across multiple platforms for different audiences. Responsibilities include creating responsive design visualizations, ensuring data integrity and database availability, and assessing and implementing database design decisions to handle large data sets.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-san-diego-padres-baseball-systems-developer/",
				logo: "padres.png",
				date: {
					posted: {
						year: 2017,
						month: 11,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Seattle Mariners",
				title: "Baseball Analytics Intern",
				location: "Seattle, WA",
				description: "The Seattle Mariners are seeking an individual with a background in statistical analysis and a passion for baseball. The position will work directly alongside the analytics team on a wide range of projects, providing ample opportunity to directly impact front office decision-making.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-seattle-mariners-baseball-analytics-intern-2/",
				logo: "mariners.gif",
				date: {
					posted: {
						year: 2017,
						month: 11,
						day: 07
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "St. Louis Cardinals",
				title: "Baseball Operations Fellowship",
				location: "Jupiter, FL",
				description: "The St. Louis Cardinals baseball club is seeking candidates for a Baseball Operations Fellowship position that is designed to provide entry-level baseball executives with an opportunity to gain experience mainly in the International and Player Development departments at the home of the Cardinals’ Spring Training, Extended Spring Training, Gulf Coast, Florida State, and Instructional Leagues. While working at the direction of the Jupiter-based Directors of the International/Player Development departments, the Fellow will also provide occasional support to the St. Louis front office.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-st-louis-cardinals-baseball-operations-fellowship-3/",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2017,
						month: 11,
						day: 07
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Los Angeles Lakers",
				title: "Data Engineer, Basketball Analytics",
				location: "El Segundo, CA",
				description: "The Data Engineer, Basketball Analytics will be a critical member of the Basketball Analytics team, managing the continuously growing volume and complexity of basketball data.  Supporting the Director, Basketball Analytics, he or she will process the team's data feeds from multiple sources, and help design and build the team’s proprietary basketball data warehouse.  The Data Engineer, Basketball Analytics will also automate reports to be distributed to key stakeholders including coaches and the front office, and build systems to serve data to the team’s proprietary mobile and web apps.",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=120825",
				logo: "lakers.png",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 28
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Colorado Rockies",
				title: "Baseball Research & Development Full Stack Developer",
				location: "Denver, CO",
				description: "The Colorado Rockies are currently seeking a full-time Full Stack Developer within the Baseball Research and Development Department. This individual will be a member of the Baseball Research and Development team and will assist in the continued development of the Rockies’ proprietary Web Application along with the maintenance and development of proprietary databases and APIs.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-colorado-rockies-baseball-research-development-full-stack-developer/",
				logo: "rockies.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 25
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Minnesota Twins",
				title: "Baseball Operations Internship",
				location: "Minneapolis, MN",
				description: "The Minnesota Twins are looking for Baseball Operations interns to support the Research and Development Department by delivering tools and research that improve decision-making processes for the breadth of Baseball Operations personnel. Interns will also evaluate and build statistically rigorous models to aid and inform in a variety of areas of baseball operations, including: amateur scouting, advance scouting, player development, and player acquisition.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-postings-minnesota-twins-baseball-operations-internships/",
				logo: "twins.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 25
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "New York Yankees",
				title: "Summer Intern, Quantitative Analysis",
				location: "Bronx, NY",
				description: "The New York Yankees are hosting a summer internship geared to introduce current students or recent graduates to Quantitative Analysis within Baseball Operations. Interns will assist in research and analysis of various baseball topics, and design, test and implement predictive models using advanced statistical techniques.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=119506",
				logo: "yankees.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Milwaukee Brewers",
				title: "Research and Development Analyst",
				location: "Milwaukee, WI",
				description: "The Milwaukee Brewers are currently seeking an Analyst in the Baseball Research and Development Department. The Analyst will deliver research and tools to improve decision making working with the Baseball R&D, Baseball Systems departments and the entire Baseball Operations Department.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=115322",
				logo: "brewers.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Los Angeles Angels",
				title: "Baseball Operations Quantitative Analysis Intern",
				location: "Anaheim, CA",
				description: "The Los Angeles Angels Quantitative Analysis department is seeking passionate individuals to join their team for the 2018 season. Quantitative Analysis Interns will process, analyze, and interpret large and complex data, working side-by-side with analysts to develop and answer pertinent research questions.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=119556",
				logo: "angels.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Arizona Diamondbacks",
				title: "Research & Development Baseball Systems Intern",
				location: "Phoenix, AZ",
				description: "The Arizona Diamondbacks are looking for a Baseball Systems Intern to assist and support the Diamondback’s Research & Development group in the maintenance and support of hardware, software and other systems.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=119041",
				logo: "dbacks.png",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Chicago White Sox",
				title: "Baseball Analytics Fellowship",
				location: "Chicago, IL",
				description: "The Chicago White Sox seek a passionate, knowledgeable, and dedicated individual with a desire to work in Baseball Operations. The fellowship will focus primarily on the numerical methods that drive Baseball Analytics, however there will be additional exposure to all facets of baseball operations.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-chicago-white-sox-baseball-analytics-fellowship/",
				logo: "whitesox.png",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 16
					}
				},
				show: false,
				active: false,
				isTeam: true
			},			
			{
				company: "Cincinnati Reds",
				title: "Baseball Operations Data Scientist",
				location: "Cincinnati, OH",
				description: "The Cincinnati Reds are looking for a Baseball Operations Data Scientist to work with the Manager of Baseball Analytics to implement the department’s research and development efforts within new and existing applications. This position will play a major role in the creation of new baseball analytics concepts with the ultimate goal of enhancing on-field performance.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-cincinnati-reds-baseball-operations-data-scientist/",
				logo: "reds.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 16
					}
				},
				show: false,
				active: false,
				isTeam: true
			},		
			{
				company: "Houston Astros",
				title: "Baseball Operations Apprentice",
				location: "Houston, TX",
				description: "The Houston Astros are seeking a Baseball Operations Apprentice for the 2018 season to assist with the department’s day-to-day responsibilities. Apprentices will perform analysis and modeling to support one or more research projects, and collect data and perform ad hoc projects to support Baseball Operations.",
				link: "http://baseballjobs.m.teamworkonline.com/Jobdetail.aspx?j=120212",
				logo: "astros.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 13
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Tampa Bay Rays",
				title: "Baseball Research and Development Analyst",
				location: "St. Petersburg, FL",
				description: "The Tampa Bay Rays are seeking Research and Development analysts and interns with a passion for winning through mathematics, data analysis and computation. Its R&D group helps shape its Baseball Operations decision making processes through the analysis and interpretation of data. Its analysts and interns work both individually and collaboratively, coming up with interesting research questions to tackle, finding ways to answer those questions with the data at our disposal, communicating the results of their research to decision makers and other staff, and working to apply the results of its research to improve how the organization operates.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-postings-tampa-bay-rays-baseball-research-and-development-positions/",
				logo: "rays.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 13
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Toronto Blue Jays",
				title: "Baseball Operations Analytics Intern",
				location: "Toronto or Dunedin, FL",
				description: "This position will be based in Toronto, ON or Dunedin, FL for the 2018 season and will assist with day-to-day tasks within the Baseball Operations department, specifically focused toward the Analytics Department. This position will run from January–November.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-postings-toronto-blue-jays-baseball-operations-internships/",
				logo: "bluejays.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 13
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "St. Louis Cardinals",
				title: "Baseball Development Analyst",
				location: "St. Louis, MO",
				description: "The St. Louis Cardinals are seeking candidates for a new Analyst position in the Baseball Development department. An Analyst in the Baseball Development department will work closely with the rest of Baseball Development and all of Baseball Operations in conducting research and creating tools to improve decision making, player performance, and overall institutional knowledge. Problems can range from valuing amateur player performance to making suggestions on optimal in-game strategy, to visualizing new and complex information. Though this position is targeted toward entry level candidates in the beginning of their career, candidates with all levels of education and experience will be considered. ",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-postings-st-louis-cardinals-baseball-development-application-developer-analyst/",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2017,
						month: 10,
						day: 9
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Milwaukee Bucks",
				title: "Basketball Analytics Manager",
				location: "Milwaukee, WI",
				description: "A skilled data analyst responsible for continuing development and maintenance of a basketball information system and database architecture as well as performing model building and other analysis of the data housed within the architecture. Extensive experience in and expertise with a scripting language such as R is a requirement. A successful candidate will also be conversant in SQL and comfortable with a range of statistical and model-building techniques. Ability to work in a fast-paced, team-oriented, competitive environment is a must.",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=119181",
				logo: "bucks.png",
				date: {
					posted: {
						year: 2017,
						month: 9,
						day: 22
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Washington Nationals",
				title: "Baseball Operations Analyst",
				location: "Washington DC",
				description: "The Washington Nationals are seeking a full-time Baseball Operations Analyst. The role’s responsibilities include designing and developing analytical tools to aid baseball operations, salary arbitration research and preparation, and ad-hoc research projects to support baseball operations. The ideal candidate will have strong analytical and mathematical skills, excellent verbal and written communication skills, be well-versed in publicly available Sabermetric research, and have a demonstrated passion for working in baseball. The position will report to the Director, Baseball Operations.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-washington-nationals-baseball-operations-analyst/",
				logo: "nationals.gif",
				date: {
					posted: {
						year: 2017,
						month: 9,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Miami Marlins",
				title: "Baseball Analytics Internship",
				location: "Miami, FL",
				description: "The Baseball Analytics Intern will assist Baseball Operations decision-making through the analysis and research of baseball information. The specific day-to-day responsibilities of this position will vary depending on the baseball calendar, but will revolve around using data analysis to answer baseball-related questions, with a strong preference for a candidate possessing an established foundation of statistical, programming, and database skills. We are accepting both full year (January-December) and summer candidates at this time.",
				link: "https://www.fangraphs.com/blogs/instagraphs/job-posting-miami-marlins-baseball-analytics-internship/",
				logo: "marlins.gif",
				date: {
					posted: {
						year: 2017,
						month: 9,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Detroit Tigers",
				title: "Baseball Analytics Internship",
				location: "Detroit, Michigan",
				description: "The Detroit Tigers are seeking a baseball analytics intern for the 2018 season. The position can run from Jan. or May 2018 through Dec. 2018. Multiple people will be hired for this internship. Some evening, weekend, and holiday hours will be required.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-detroit-tigers-baseball-analytics-internship/",
				logo: "tigers.gif",
				date: {
					posted: {
						year: 2017,
						month: 9,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Phillies",
				title: "Baseball Research & Development Quantitative Analyst",
				location: "Philadelphia, PA",
				description: "As a Quantitative Analyst (QA) or QA intern, you help shape the Phillies Baseball Operations strategies by processing, analyzing, and interpreting large and complex data. You do more than just crunch the numbers; you carefully plan the design of your own studies by asking and answering the right questions, while also working collaboratively with other analysts and software engineers on larger projects.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-postings-philadelphia-phillies-software-engineers-quantitative-analysts/",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2017,
						month: 9,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "San Francisco Giants",
				title: "Baseball Operations Analyst",
				location: "San Francisco, CA",
				description: "The San Francisco Giants are seeking an Analyst to join the Baseball Operations department. This individual will be part of the analytics team and provide research and analysis to support front office, player development, and scouting staffs. This position will also work closely with the application development team to design and develop statistical models and tools using advanced data sources within new and existing applications. The ideal candidate will possess strong analytical skills, the ability to communicate effectively to non-technical people, and both passion and intellectual curiosity for the game of baseball.",
				link: "./docs/FBO44524%20–%20Baseball%20Operations%20Analyst.pdf",
				logo: "giants.png",
				date: {
					posted: {
						year: 2017,
						month: 9,
						day: 7
					},
					due: {
						year: 2017,
						month: 9,
						day: 22
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Dodgers",
				title: "Data Engineer",
				location: "Los Angeles, CA",
				description: "As the scope and quantity of data in baseball continue to rapidly increase, we need a highly-talented individual to manage the computational and informational complexity associated with that growth. The Data Engineer will work closely with our baseball systems and analytics teams to design, build, and maintain a database and computational platform for leading-edge baseball research.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=116288",
				logo: "dodgers.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Analyst - Football Operations",
				location: "Philadelphia, PA",
				description: "The Analyst position will help apply analytics within football operations. A successful candidate will be equipped to work with football data to draw insights and improve decision-making. Candidates should have the quantitative skills to analyze complex problems and the technical ability to implement their ideas effectively.",
				link: "http://footballjobs.teamworkonline.com/teamwork/r.cfm?i=115220",
				logo: "eagles.png",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Analytics Intern - Football Operations",
				location: "Philadelphia, PA",
				description: "The Analytics Intern will work with the football operations staff on a wide range of analytical topics. Candidates will primarily assist in managing and analyzing data. Successful candidates will have strong quantitative skills and the technical ability to implement ideas. The internship will expose candidates to the day-to-day work of a modern NFL front office.",
				link: "http://footballjobs.teamworkonline.com/teamwork/r.cfm?i=102137",
				logo: "eagles.png",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Indiana Pacers",
				title: "Senior Manager, Business Intelligence & Analytics",
				location: "Indianapolis, IN",
				description: "This position is responsible for partnering with organizational leaders across all business functions to understand key challenges and opportunities, structure problems, collect data, apply appropriate quantitative and qualitative research methods, and turn insights into recommendations to increase operational efficiency, improve the fan experience, and build PS&E’s brands. We are seeking a data practitioner who is passionate about enabling our business teams to maximize our research, data collection and analysis to drive our business forward.",
				link: "http://pacers.teamworkonline.com/teamwork/r.cfm?i=117138",
				logo: "pacers.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Seattle Mariners",
				title: "Sports Science/Performance Analytics Intern",
				location: "Seattle, WA",
				description: "We are seeking an individual with a passion for baseball and statistical analysis. The position will work directly alongside the analytics team with an emphasis on sports science. There will be ample opportunity to impact decision-making. Start and end dates are flexible with a preference towards immediate availability.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-seattle-mariners-sports-scienceperformance-analytics-intern/",
				logo: "mariners.gif",
				date: {
					posted: {
						year: 2017,
						month: 5,
						day: 19
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Chicago Cubs",
				title: "Baseball Systems Web Developer",
				location: "Chicago, IL",
				description: "This role will primarily focus on the development and maintenance of the Cubs internal baseball information system, including creating web interfaces and web tools for the user interface; building ETL processes; maintaining back-end databases; and troubleshooting data sources issues as needed.",
				link: "https://cubs.hirecentric.com/jobs/117478.html",
				logo: "cubs.gif",
				date: {
					posted: {
						year: 2017,
						month: 4,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Sacremento Kings",
				title: "Basketball Analytics Intern",
				location: "Sacremento, CA",
				description: "The Sacramento Kings seek a Basketball Analytics Intern who will contribute to the development of cutting-edge basketball analytics systems. The Basketball Analytics Intern will assist the Kings analytics group through the analysis and research of basketball information. The specific day-to-day responsibilities of this position will vary depending on the basketball calendar, but it requires a general knowledge of how to use objective data to answer basketball-related questions, with a strong preference for a candidate possessing an established foundation of statistical and database management skills. The position will require collaboration with the entire analytics group, including the VP of Strategy and Analytics.",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=112711",
				logo: "kings.gif",
				date: {
					posted: {
						year: 2017,
						month: 4,
						day: 25
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Houston Rockets",
				title: "Strategy & Analytics Summer Intern",
				location: "Houston, TX",
				description: "Responsibilities include but are not limited to: - Prepare research for customer experience, marketing, and sponsorship programs - Collect data from surveys, databases, and external sources - Analyze data and summarize key findings - Support sales, service, and marketing operations - Build and load prospect lists for call and email campaigns - Develop reports and dashboards to monitor campaign performance - Assist with business process improvement and data management - Perform data hygiene and ETL tasks between various systems - Prepare documentation of changes to business processes and data models - General support of the Strategy & Analytics department",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=112231",
				logo: "rockets.gif",
				date: {
					posted: {
						year: 2017,
						month: 4,
						day: 13
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Inside Edge",
				title: "Software/Analytics Engineer I",
				location: "Bloomington, MN",
				description: "Dream job with a successful sports analytics company!  Works with the Inside Edge technology team to develop data processing software, primarily using Python, to query and process SQL sports databases into sorted lists of stats/splits for use with Inside Edge's patented Remarkable tool.  May also develop Predictive Analytics related to sports data, for use in Fantasy and Daily Fantasy businesses.",
				link: "http://liveeventjobs.m.teamworkonline.com/Jobdetail.aspx?j=112584",
				logo: "inside-edge.jpg",
				date: {
					posted: {
						year: 2017,
						month: 4,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Washington Nationals",
				title: "Research & Development Internship",
				location: "Washington DC",
				description: "The Washington Nationals are seeking a motivated intern to join the organization’s Baseball Research and Development team for the upcoming season. The Research & Development internship includes an emphasis on computer programming and data analysis. The intern’s main responsibility will be to assist the R&D department with input, cleaning, and processing of baseball data into proprietary databases. There will also be assignments that require statistical analysis on large volumes of baseball-related data. Candidates must have significant experience with R and SQL, as well as an interest in publicly available sabermetrics research and data science.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-washington-nationals-research-development-internship/",
				logo: "nationals.gif",
				date: {
					posted: {
						year: 2017,
						month: 2,
						day: 9
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Phoenix Suns",
				title: "Basketball Operations Intern",
				location: "Phoenix, AZ",
				description: "Assist the Phoenix Suns front office staff with day-to-day operations including scouting credential requests, maintaining basketball operations databases, background research and player analysis, tracking Suns’ draft right’s held prospects, updating player magnets, providing transportation for players, scouting small college and under the radar prospects, and assisting with administrative needs. Additionally, assist in salary cap management and planning, player and team statistical analysis and various projects as assigned.",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=105827",
				logo: "suns.gif",
				date: {
					posted: {
						year: 2016,
						month: 12,
						day: 2
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Oklahoma City Thunder",
				title: "Data Scientist Intern",
				location: "Oklahoma City, OK",
				description: "As a data scientist intern, your work is critical to uncovering valuable insights that help shape the organization’s future - influencing strategic planning, decision-making, and performance to create the optimal conditions for talent to thrive. Working with colleagues, external suppliers, and internal and external data sources, you will work on every aspect of the data pipeline - from the building and maintaining information systems to research, analysis, and presentation. You will leverage data to impact the organization’s most significant decisions, supporting areas like strategic planning, evaluation, coaching, and physical science.",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=105799",
				logo: "thunder.gif",
				date: {
					posted: {
						year: 2016,
						month: 12,
						day: 1
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Milwaukee Brewers",
				title: "Baseball Operations Analyst",
				location: "Milwaukee, WI",
				description: "The Milwaukee Brewers are currently seeking an Intern in the Baseball Research and Development Department. The Intern will work with the Baseball R&D, Baseball Systems departments and the entire Baseball Operations Department to deliver research and tools to improve decision making. The position requires a person who has intellectual curiosity, is a self-starter and can communicate technical and analytical concepts effectively to non-technical people. Being passionate about using data, analysis and technology to improve decision making processes is also a key differentiator.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-milwaukee-brewers-baseball-research-development-senior-analyst-intern/",
				logo: "brewers.gif",
				date: {
					posted: {
						year: 2016,
						month: 12,
						day: 1
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "St. Louis Cardinals",
				title: "Baseball Operations Fellowship",
				location: "St. Louis, MO",
				description: "This position is responsible for conducting quantitative research to provide timely recommendations to decision makers within Baseball Operations.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-st-louis-cardinals-baseball-operations-fellowship-2/",
				logo: "cardinals.gif",
				date: {
					posted: {
						year: 2016,
						month: 11,
						day: 30
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Boston Red Sox",
				title: "Baseball Operations Analyst",
				location: "Boston, MA",
				description: "The Boston Red Sox are seeking an Analyst for the team’s Pitching Development and Baseball Research & Development groups. The role will focus primarily on using an analytical approach to evaluate pitcher performance and provide support to development staff in the field. The analyst will work closely with VP, Pitching Development and the R&D team to develop methods to improve the effective understanding and application of pitch tracking data throughout Baseball Operations.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-boston-red-sox-baseball-operations-analyst/",
				logo: "redsox.gif",
				date: {
					posted: {
						year: 2016,
						month: 11,
						day: 28
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Oakland Athletics",
				title: "Baseball Operations Analyst",
				location: "Oakland, CA",
				description: "The Oakland Athletics are currently seeking a Full-Time Baseball Operations Analyst. This position will report directly to the General Manager. The Baseball Operations Analyst will have responsibilities ranging from performing ad-hoc analysis, querying the team’s proprietary database, as well as in assisting in the creation of new analytical tools to support baseball operations.  This position will work with members of the front office to provide analysis and create reports for use across all areas of baseball operations.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=105287",
				logo: "athletics.gif",
				date: {
					posted: {
						year: 2016,
						month: 11,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Pittsburgh Pirates",
				title: "Baseball Informatics Internship",
				location: "Pittsburgh, PA",
				description: "This position consists of a variety of data and analytical tasks within the Baseball Operations department. Under the direction of the Baseball Informatics group, this position is responsible for the daily operation of several processes and various data maintenance and analytical projects including but not limited to operating and extending processes for data extraction, transformation, cleansing, and loading to and from internal and external data sources, both structured and unstructured data. Additionally, this position is responsible for other duties as assigned by the Baseball Informatics group.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-postings-pittsburgh-pirates-baseball-informatics-internships/",
				logo: "pirates.gif",
				date: {
					posted: {
						year: 2016,
						month: 11,
						day: 11
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Tampa Bay Rays",
				title: "Baseball Research & Development Intern",
				location: "St. Petersburg, FA",
				description: "We are seeking interns with a passion for winning through mathematics, data analysis, and computation. The internship positions will be with the Baseball Research and Development team in the Baseball Operations department. Start and end dates are flexible, and we will consider applicants who are available for only the summer of 2017. Please note that these positions have the potential to lead to a full-time employment offer, but such an offer is not guaranteed.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-tampa-bay-rays-baseball-research-development-intern-2/",
				logo: "rays.gif",
				date: {
					posted: {
						year: 2016,
						month: 11,
						day: 11
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Minnesota Twins",
				title: "Intern, Baseball Research",
				location: "Minneapolis, MN",
				description: "Assist in the day-to-day administrative operations of the Baseball Department, focusing on baseball research and advance scouting.",
				link: "https://recruiting.adp.com/srccar/RTI.home?c=1080741&d=External&r=5000137803306",
				logo: "twins.gif",
				date: {
					posted: {
						year: 2016,
						month: 10
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Detroit Tigers",
				title: "Intern, Baseball Analytics",
				location: "Detroit, MI",
				description: "The Detroit Tigers are looking for Baseball Analytics Interns who will assist with the day to day operations.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-postings-detroit-tigers-baseball-analytics-manager-data-architect-and-intern/",
				logo: "tigers.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 21
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Houston Astros",
				title: "Baseball Research & Development Analyst",
				location: "Houston, TX",
				description: "The Houston Astros are seeking an Analyst for the team’s Baseball Research and Development group. The Analyst will work closely with the Director of R&D and the analytics team to conduct research and develop methods that encourage the effective understanding and application of information throughout Baseball Operations.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-houston-astros-baseball-research-development-analyst/",
				logo: "astros.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 20
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Seattle Mariners",
				title: "Baseball Analytics Intern",
				location: "Seattle, WA",
				description: "We are seeking interns with a passion for baseball and statistical analysis. The position will work directly alongside the analytics team on a wide range of projects. Start and end dates are flexible, and we will consider applicants who are available for only the summer of 2017. While many candidates are no doubt capable, we desire a unique skillset that can impact, innovate and add value immediately.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-seattle-mariners-baseball-analytics-intern/",
				logo: "mariners.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 14
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Miami Marlins",
				title: "Baseball Analytics Intern",
				location: "Miami, FL",
				description: "The Baseball Analytics Intern will assist Baseball Operations decision-making through the analysis and research of baseball information. The specific day-to-day responsibilities of this position will vary depending on the baseball calendar, but will revolve around using objective data to answer baseball-related questions, with a strong preference for a candidate possessing an established foundation of statistical, programming, and database management skills. The Marlins are accepting both full year (January-December) and summer candidates at this time.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-miami-marlins-baseball-analytics-intern-2/",
				logo: "marlins.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 11
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Phillies",
				title: "Senior Quantitative Analyst, Baseball Research & Development",
				location: "Philadelphia, PA",
				description: "As a Senior Quantitative Analyst (QA), you help shape the Phillies Baseball Operations strategies by processing, analyzing, and interpreting large and complex data. You do more than just crunch the numbers; you serve as a lead and mentor to a growing team of analysts. You carefully plan the design of your own studies by asking and answering the right questions, while also providing guidance on statistical methods and techniques to make sure that other analysts can do the same.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=103331",
				logo: "phillies.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 7
					},
					due: {
						year: 2016,
						month: 10,
						day: 31
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Tampa Bay Rays",
				title: "Baseball Operations Data Engineer",
				location: "St. Petersburg, FL",
				description: "The Tampa Bay Rays are a professional baseball team looking for a Data Engineer to join our Baseball Operations team. This position will be responsible for ensuring that our database meets the highest standards of accuracy and integrity. This includes designing and implementing data import procedures, performing quality assurance checks, and finding and fixing data errors. This person will work closely with our Baseball Research & Development and Baseball Systems groups.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-tampa-bay-rays-baseball-operations-data-engineer/",
				logo: "rays.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 3
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Colorado Rockies",
				title: "Analyst – Baseball Research & Development",
				location: "Denver, CO",
				description: "This individual will collaborate with the Research and Development team and will assist in the development and maintenance of a player information and projection system along with other statistical analysis and on field strategy. This position requires strong statistical development skills and experience as well as a demonstrated ability for independent curiosity and a commitment to excellence while working within a team framework.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-postings-colorado-rockies-baseball-research-development-analyst-systems-developer-web-developer/",
				logo: "rockies.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 3
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Kansas City Royals",
				title: "Developer, Baseball Systems",
				location: "Kansas City, MO",
				description: "The Kansas City Royals Baseball Club is seeking a highly motivated developer to support baseball operations.  The ideal applicant will be able to manage multiple concurrent projects that facilitate enhanced communications, reporting, and other interactions between teams internal to the organization.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=102404",
				logo: "royals.gif",
				date: {
					posted: {
						year: 2016,
						month: 9,
						day: 20
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Angels",
				title: "Baseball Operations – Quantitative Analysis (Analytics) Internship",
				location: "Anaheim, CA",
				description: "The Los Angeles Angels are looking to hire a Quantitative Analysis Intern for the 2017 season.  This is a compensated position that will provide exposure to multiple departments within baseball operations.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=103089",
				logo: "angels.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 1
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Angels",
				title: "Baseball Operations Intern",
				location: "Anaheim, CA",
				description: "The Los Angeles Angels are looking to hire a Baseball Operations Intern for the 2017 season.  This is a compensated position (CA Min. Wage) that will provide exposure to multiple departments within baseball operations.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=103084",
				logo: "angels.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Indiana Pacers",
				title: "Basketball Analytics Internship",
				location: "Indianapolis, IN",
				description: "The Basketball Analytics Intern will work directly with the Indiana Pacers analytics team in support of the front office, performance staff, and coaching staff. The overall focus will be on helping develop internal software tools/metrics and maintaining current analytics infrastructure. Experience in the sports industry is not required, but applicants must be passionate about basketball.",
				link: "http://pacers.teamworkonline.com/teamwork/r.cfm?i=102885",
				logo: "pacers.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Jacksonville Jaguars",
				title: "Advanced Analytics Coordinator",
				location: "Jacksonville, FL",
				description: "The Advanced Analytics Coordinator will work in the Analytics department, focusing on data analysis through reporting, model building, and development of tools to convey results. The Analytics team is responsible for analyzing, interpreting, presenting, and communicating data to enhance processes, decision-making, and outcomes for the Jacksonville Jaguars.",
				link: "http://footballjobs.teamworkonline.com/teamwork/r.cfm?i=100005",
				logo: "jaguars.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Cincinnati Reds",
				title: "Baseball Operations Intern",
				location: "Cincinnati, OH",
				description: "The Cincinnati Reds are seeking a Baseball Operations Intern. This individual will provide daily support to all members of the Baseball Operations Department through a wide range of administrative tasks and projects.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=103203",
				logo: "reds.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Cincinnati Reds",
				title: "Data Scientist",
				location: "Cincinnati, OH",
				description: "Work with the Manager of Baseball Analytics to implement the department’s research and development efforts within new and existing applications. We envision the person in this position to play a major role in the creation of new baseball analytics concepts with the ultimate goal of enhancing on-field performance.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=103051",
				logo: "reds.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Houston Rockets",
				title: "Basketball Operations Analyst",
				location: "Houston, TX",
				description: "The Houston Rockets front office is looking to add a talented new member to the team. This person will work intimately with the entire front office, including GM Daryl Morey, to organize basketball data, build software tools, and analyze basketball games.",
				link: "http://nbateamjobs.teamworkonline.com/teamwork/r.cfm?i=101677",
				logo: "rockets.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Washington Nationals",
				title: "2017 Internship - Major League Operations",
				location: "Washington, DC",
				description: "Contribute to Washington Nationals Baseball Operations for the 2017 season as one of our highly valued interns. The Major League Operations internship includes assisting the Baseball Operations Department with day-to-day assignments along with long term projects centered on roster management, salary arbitration, transactions, and the economics of baseball.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=98561",
				logo: "nationals.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Washington Nationals",
				title: "Analyst, Baseball Research & Development",
				location: "Washington, DC",
				description: "The Washington Nationals are seeking a data analyst to join the organization’s Baseball Research and Development team. This role will focus on using data science to support Baseball Operations in player evaluation, roster construction and in-game tactics. This includes using machine learning techniques and predictive modeling to draw insights from our in house baseball datasets. The analyst will work closely with the existing R&D team including other analysts and developers to design and build decision-support systems and tools for use throughout the organization.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=100880",
				logo: "nationals.gif",
				date: {},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Sports Info Solutions",
				title: "Research & Development Associate",
				location: "Coplay, PA",
				description: "Sports Info Solutions (SIS) is looking for candidates to fill a full-time position in our R&D Department. The R&D Associate will work out of our office near Allentown, PA and will contribute as a member of our R&D team, supporting research for publications and future products.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-sports-info-solutions-research-development-associate/",
				logo: "bis.gif",
				date: {
					posted: {
						year: 2016,
						month: 10,
						day: 18
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Philadelphia Eagles",
				title: "Senior Analytics - Football Operations",
				location: "Philadelphia, PA",
				description: "The Senior Analytics role is responsible for helping apply analytics to units across the football operation. A successful candidate will be equipped to work with football data to draw insights and improve decision-making. Candidates should have the quantitative skills to analyze complex problems and the technical ability to implement their ideas effectively. Candidates will be exposed to all parts of the modern NFL front office, including player evaluation, game preparation, resource allocation, sports science, and player development.",
				link: "http://footballjobs.teamworkonline.com/teamwork/r.cfm?i=97942",
				logo: "eagles.png",
				date: {
					posted: {
						year: 2016,
						month: 6,
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Houston Astros",
				title: "Analytics Developer",
				location: "Houston, TX",
				description: "Reporting to the Director of Strategy & Analytics, the Analytics Developer will be primarily responsible for developing the tools and capabilities for data-driven insight into the business. This position will work with cross-functional teams developing the data extraction, modeling, and reporting capabilities across ticketing, retail, marketing, concessions and other sources as needed.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=93479",
				logo: "astros.gif",
				date: {
					posted: {
						year: 2016,
						month: 3,
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Angels of Anaheim",
				title: "Quantitative Analyst",
				location: "Anaheim, CA",
				description: "Los Angeles Angels are seeking a Data Scientist for the team’s Baseball Analytics group. The Baseball Information Analyst will work closely with the Director, Quantitative Analysis and our analytics team to research, develop, and test predictive models to support Baseball Operations.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=94287",
				logo: "angels.gif",
				date: {
					posted: {
						year: 2016,
						month: 3,
						day: 7
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Wasserman Media Group",
				title: "Baseball Analytics Intern",
				location: "Los Angeles, CA",
				description: "Wasserman Media Group is a global sports, entertainment, marketing and management company with expertise in media rights, corporate consulting, athlete management and partnerships. We represent the world’s most talented, committed athletes and provide them with the individual attention needed for them to garner success in all areas of their lives. Our Baseball division represents many of the biggest stars in the game today. The baseball analytics intern position begins in October 2015 and has a flexible end date. An in-person interview is preferred.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-wasserman-media-group-baseball-analytics-intern/",
				logo: "wasserman.png",
				date: {
					posted: {
						year: 2015,
						month: 9,
						day: 24
					}
				},
				show: false,
				active: false,
				isTeam: false
			},
			{
				company: "Miami Marlins",
				title: "Baseball Analytics Intern",
				location: "Miami, FL",
				description: "The Baseball Analytics Intern will assist Baseball Operations decision-making through the analysis and research of baseball information. The specific day-to-day responsibilities of this position will vary depending on the baseball calendar, but it requires a general knowledge of how to use objective data to answer baseball-related questions, with a strong preference for a candidate possessing an established foundation of statistical and database management skills. Interested applicants can email their materials to <a href='mailto:marlinsinternships@gmail.com'>marlinsinternships@gmail.com</a>.",
				link: "http://miamibaseball.teamworkonline.com/teamwork/r.cfm?i=92858",
				logo: "marlins.gif",
				date: {
					posted: {
						year: 2016,
						month: 2,
						day: 11
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Toronto Blue Jays",
				title: "Manager of Baseball Analytics",
				location: "Toronto, ON",
				description: "The primary focus of this position will be to learn how decisions are made in all areas of Baseball Operations, develop a familiarity with those processes and then develop tools and conduct research to incorporate data into the decision making process.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-toronto-blue-jays-manager-of-baseball-analytics/",
				logo: "bluejays.gif",
				date: {
					posted: {
						year: 2016,
						month: 2,
						day: 2
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "New York Mets",
				title: "Analyst, Baseball Research & Development",
				location: "New York",
				description: "The New York Mets are seeking a Data Analyst to work its Research and Development team. The employee will analyze baseball data in order to build and maintain predictive models that support the decision-making processes within Baseball Operations. The Analyst will report to the Manager, Baseball Research and Development.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=92337",
				logo: "mets.gif",
				date: {
					posted: {
						year: 2016,
						month: 2,
						day: 1
					},
					due   : {
						year: 2016,
						month: 2,
						day: 7
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Angels of Anaheim",
				title: "Quantitative Information Analyst Intern",
				location: "Anaheim, CA",
				description: "The Los Angeles Angels are looking to hire a Quantitative Information Analyst intern.  The compensated intern position requires availability from March 14, 2016 to approximately October 31, 2016.  The internship will provide exposure to all departments within baseball operations and will report to the Director of Quantitative Analysis.  Candidates must have a passion for baseball, independent thought, strong work ethic, and self-motivation.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=91425",
				logo: "angels.gif",
				date: {
					posted: {
						year: 2016,
						month: 1,
						day: 13
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Dodgers",
				title: "Research and Development Analyst",
				location: "Los Angeles, CA",
				description: "The Los Angeles Dodgers are seeking an entry-level analyst for the team's Baseball Research and Development (R&D) group. Our current focus is on identifying highly-talented, mathematically-oriented candidates as we seek to build an industry-leading analytics team.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=90096",
				logo: "dodgers.gif",
				date: {
					posted: {
						year: 2015,
						month: 12,
						day: 9
					},
					due   : {
						year: 2016,
						month: 1,
						day: 15
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Milwaukee Brewers",
				title: "Intern, Baseball Research & Development",
				location: "Milwaukee, WI",
				description: "The Milwaukee Brewers are currently seeking an Intern in the Baseball Research and Development Department. The Intern will work with the Baseball R&D, Baseball Systems departments and the entire Baseball Operations Department to deliver research and tools to improve decision making.  The position requires a person who has intellectual curiosity, is a self-starter and can communicate technical and analytical concepts effectively to non-technical people.  Being passionate about using data, analysis and technology to improve decision making processes is also a key differentiator.",
				link: "https://careers-brewers.icims.com/jobs/1226/intern---baseball-research-%26-development/job?mobile=false&width=942&height=500&bga=true&needsRedirect=false&jan1offset=-480&jun1offset=-420",
				logo: "brewers.gif",
				date: {
					posted: {
						year: 2015,
						month: 12,
						day: 4
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Los Angeles Angels of Anaheim",
				title: "Baseball Systems Developer",
				location: "Anaheim, CA",
				description: "The Los Angeles Angels are hiring an experienced software developer to build and maintain an aggregated player information and tracking system to help in the decision making process of the Baseball Operations Department.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-los-angeles-angels-of-anaheim-baseball-systems-developer/",
				logo: "angels.gif",
				date: {
					posted: {
						year: 2015,
						month: 12,
						day: 3
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Texas Rangers",
				title: "Baseball Operations Intern",
				location: "Arlington, Texas",
				description: "Interns assist in the day to day operation of the Baseball Operations department. Duties will include some of the following (depending on background): compiling and maintaining data, writing reports, developing visualizations, SQL queries, player evaluations, independent research. We’re looking for unique profiles and perspectives – how can your strengths complement our organization?",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=90216",
				logo: "rangers.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 24
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Tampa Bay Rays",
				title: "Internship (Baseball Research and Development)",
				location: "St. Petersburg, Florida",
				description: "We are seeking interns with a passion for winning through mathematics, data analysis, and computation. The internship positions will be with the team’s Baseball Research and Development group in the Baseball Operations department. Start and end dates are flexible, and we will consider applicants who are available for only the summer.",
				link: "http://www.fangraphs.com/blogs/instagraphs/job-posting-tampa-bay-rays-baseball-research-development-intern/",
				logo: "rays.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 20
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Cincinnati Reds",
				title: "Baseball Operations Analyst",
				location: "Cincinnati, Ohio",
				description: "The Cincinnati Reds are seeking an Analyst for the team's Baseball Analytics department.  The Analyst will work closely with the Senior Director of Baseball Analytics to enhance the department’s research and development efforts with respect to statistical models and applications.",
				link: "http://baseballjobs.teamworkonline.com/teamwork/r.cfm?i=89485",
				logo: "reds.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 20
					}
				},
				show: false,
				active: false,
				isTeam: true
			},
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
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "Chicago Cubs",
				title: "Analyst (Pitching Evaluation), Research & Development",
				location: "Chicago, Illinois",
				description: "The Chicago Cubs are seeking an Analyst for the team's Baseball Research and Development group.  The role will focus primarily on using an analytical approach for the evaluation and projection of pitcher performance. The analyst will work closely with the R&D team to develop methods to improve the effective understanding and application of in-game pitch data throughout Baseball Operations.",
				link: "https://cubs.hirecentric.com/internaljobs/90744.html",
				logo: "cubs.gif",
				date: {
					posted: {
						year: 2015,
						month: 11,
						day: 17
					}
				},
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
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
				show: false,
				active: false,
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
				show: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
				isTeam: true
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
				show: false,
				active: false,
				isTeam: true
			},
			{
				company: "FiveThirtyEight",
				title: "Sports Reporter Internship",
				location: "New York, NY",
				description: "FiveThirtyEight is is looking for a summer sports intern. The internship will be a mix of writing, research and contributing to short blog posts and longer features. You’ll be learning the precepts of sports journalism in general, and data-based sports coverage in particular.",
				link: "http://fivethirtyeight.com/features/were-hiring-a-summer-intern-for-sports-coverage/",
				logo: "538.jpg",
				date: {
					posted: {
						year: 2015,
						month: 12,
						day: 25
					}
				},
				show: false,
				active: false,
				isTeam: false
			},
			{
				company: "Second Spectrum",
				title: "Machine Learning Engineer",
				location: "Los Angeles, CA or Boston, MA",
				description: "Second Spectrum is seeking a Machine Learning Software Engineer to join our Data team.  At Second Spectrum the machine understanding of sports forms the foundation of all the products we deliver.  Machine Learning engineers have the opportunity to develop state of the art models whose results are used by coaches, broadcasters, and fans throughout the world.",
				link: "http://www.secondspectrum.com/careers-ml",
				logo: "second-spectrum.jpg",
				date: {},
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
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
				show: false,
				active: false,
				isTeam: false
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
				show: false,
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
				show: false,
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
				show: false,
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
		if (job.note) {
			result += '<p> <strong> Note: </strong>' + job.note + '</p>';
		}
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
		closedJobs = '<h2 class="center job-closed-text">Closed Jobs</h2>' +
			'<p>The following jobs were previously posted, but are no longer active. The contents here ' +
			'are provided as a reference for the types of jobs that may be available in the future. ' +
			'Please note that applications are no longer being accepted for these jobs, and many of the ' +
			'websites that are linked are no longer maintained.</p>';

		$.each(jobs, function(index, job) {
			if (job.show) {
				if (job.active) {
					activeJobs += Handlebars.helpers.job(job, true);
				} else {
					closedJobs += Handlebars.helpers.job(job, false);
				}
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
