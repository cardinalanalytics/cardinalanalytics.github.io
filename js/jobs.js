(function(window, document, undefined) {

	// data specifically for the jobs page
	var jobsData = {
		header: "Job Postings",
		description: "Opportunities to work in sports analytics",
		navbarTitle: "Job Postings",
		jobs: [
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				show: true,
				active: true,
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
				active: true,
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
				show: true,
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
				show: true,
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
				show: true,
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
				show: true,
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
				show: true,
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
