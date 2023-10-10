(function(window, document, undefined) {

	// data specifically for the members page
	var membersData = {
		header: "Member Profiles",
		description: "Get to know our club members",
		navbarTitle: "Profiles",
		overview: [
			"These are some of our most active members, who have given a presentation to the club on their own sports analytics research or contributed to a club project. Some of them have written up their work in posts on our club blog, which you can access via the links below.",
			"If you want to work on a project, each of these members is a great resource to help get you started! They have the experience and the knowledge to give you a head start."
		],
		members: [
			{
				name: 'Piper Van Wagenen',
				position: 'Co-President',
				joined: 2021,
				image: 'images/profiles/Piper-Van-Wagenen.jpg',
				description: "Piper is a junior from Darien, Connecticut studying Psychology with a concentration in Neuroscience. She is the current co-president, and has formerly served as a class officer. She has experience working as a sports research intern at RocNation Sports and as an investment and athlete relations intern at Patricof Co. She was a diver for 10 years and her favorite sport to analyze is baseball. Outside of SSAC, Piper loves to write, teach coding classes, do neuroscience research and work on social media and marketing teams for startups!",
				id: "piper",
			},
			{
				name: 'Will Furlow',
				position: 'Co-President',
				joined: 2021,
				image: 'images/profiles/Will-Furlow.png',
				description: "Will is a Junior from Chicago, Illinois studying Mathematical and Computational Science with a minor in Classics. He is currently co-president along with Piper. Will is a big St. Louis Cardinals fan and loves to watch and analyze baseball. He has experience doing projects in soccer, basketball, and baseball. In his free time, he enjoys playing recreational sports with his friends, learning more about data analytics, and reading.",
				id: "will",
			},
			{
				name: '',
				position: '',
				joined: '',
				image: null,
				description: '',
				id: " ",
			},
			{
				name: 'Justin Dea-Mattson',
				position: 'Financial Officer',
				joined: 2018,
				image: 'images/profiles/justin-dea-mattson.jpg',
				description: 'Justin is a senior studying Computer Science. Born and raised primarily in the Bay Area, Justin is largely a Bay Area sports fan rooting for the Warriors, 49ers, and Giants and his favorite sports are basketball and soccer. Justin has worked on projects for Stanford Volleyball and Stanford Football. In his free time Justin also loves to play recreational sports of all kinds to stay active.',
				id: "justin",
			},
			{
				name: 'Matias Shundi',
				position: 'Technology Officer',
				joined: 2020,
				image: 'images/profiles/matias-shundi.png',
				description: 'Matias is a sophomore from Chapel Hill, North Carolina studying math and computer science. His favorite sports are basketball and football. He has worked with the Stanford Men\'s Basketball Team, and is currently doing sports analytics research with Professor George Foster. In his free time he loves playing basketball as well as competitive chess and Scrabble.',
				id: "matias",
			},
		],
		members_hide: [
			{
				name: 'Jacob Neidig',
				position: 'Vice President',
				joined: 2019,
				image: 'images/profiles/jacob-neidig.jpg',
				description: "Jacob is a sophomore from Elgin, Texas studying Political Science and Sociology. He currently splits his college loyalties between Stanford and UT Austin while his pro teams are centered around Boston (Celtics, Pats, Red Sox, etc.). Jacob is a huge football fan and can be found most weekends during fall in front of a TV. Outside of SSAC, he enjoys being in the outdoors, playing card games, and spending time with friends.",
				id: "jacob",
			},
			{
				name: 'Matt Colon',
				position: 'Senior Rep/Tech Officer, Former Co-President',
				joined: 2017,
				image: 'images/profiles/matt-colon.jpg',
				description: 'Matt is a senior studying Mathematical and Computational Science with minors in Economics and Spanish. Despite growing up in New Jersey, he is a huge Tampa Bay Buccaneers fan. He also loves to play basketball, as well as root on his favorite basketball player, Kyrie Irving, who he consistently insists hit <a href="https://www.wsj.com/articles/the-biggest-shot-in-nba-history-1482235610">the statistically most clutch shot of all time</a> to help the Cavs secure the 2016 NBA Finals.',
				posts: [
					{
						title: "What Your Team Should Do in Round 2 of the 2020 NFL Draft",
						link: 'https://stanfordsportsanalytics.wordpress.com/2020/04/24/what-your-team-should-do-in-round-2-of-the-2020-nfl-draft/',
					}
				],
				id: "matt",
			},
			{
				name: 'Mac Bagwell',
				joined: 2019,
				image: 'images/profiles/mac-bagwell.jpg',
				description: "Mac is a senior majoring in Mathematical and Computational Science. He is a lifelong baseball fan; his favorite team is the Chicago Cubs, even though he was born and raised in Wisconsin. He was most recently involved in the club's baseball project, but he enjoys watching or analyzing any sport.",
				id: 'mac',
			},
			{
				name: 'Silas Morsink',
				position: 'President',
				joined: 2017,
				image: 'images/profiles/silas.png',
				description: "Silas is a senior from Bethesda, Maryland studying economics and statistics. He is currently the president of the club, and has been involved with the club’s projects with Stanford Baseball, Women’s Volleyball, and Football. He has also done projects in baseball, soccer, and tennis analytics. In his free time not spent on sports, he enjoys running, playing the piano, and backpacking.",
				posts: [
					{
						title: "Economists Think MLB Pitchers are Weird (Probably)",
						link: 'https://stanfordsportsanalytics.wordpress.com/2019/09/26/economists-think-mlb-pitchers-are-weird-probably/',
					}
				],
				id: "silas",
			},
			{
				name: 'Alexander Stroud',
				position: 'VP/Tech Officer',
				joined: 2016,
				image: 'images/profiles/alexander-stroud.jpg',
				description: "Zander majored in Mathematical and Computational Science, and is currently coterming in Statistics. In summer 2018, he interned for the Tampa Bay Rays, and he has done extensive work in baseball analytics for Stanford Baseball and startups like Pando Pooling. Beyond baseball, he is excited by and will eagerly converse about the growing analytics movements in basketball, football, soccer, and any other sport!",
				posts: [
					{
						title: "In Search of a Winning Strategy: Comparing FiveThirtyEight.com's CARM-ELO Predictions to Las Vegas Point Spreads",
						link: 'https://stanfordsportsanalytics.wordpress.com/2017/06/18/in-search-of-a-winning-strategy-comparing-fivethirtyeight-coms-carm-elo-predictions-to-las-vegas-point-spreads/'
					}
				],
				id: "zander",
			},
			{
				name: 'Julia Thompson',
				position: 'Financial Officer',
				joined: 2017,
				image: 'images/profiles/julia-thompson.jpg',
				description: "Julia Thompson is a junior at Stanford majoring in aeronautics and astronautics. She loves gymnastics and baseball and is thrilled to be celebrating the Nationals’ first trip to the World Series.  She is also involved in the Stanford Student Space Initiative, where she’s co-leading a project to launch a rocket off a balloon. In her free time, she stays engaged in politics, writing, guitar, and ice skating.",
				id: 'julia',
			},
			{
				name: 'Travis Chen',
				joined: 2015,
				image: 'images/profiles/travis-chen.jpg',
				description: "Travis is a senior (class of 2018) studying Computer Science. His favorite sports are basketball and football, and he roots for the Spurs, the Raiders, and the Seahawks. In his free time he plays the cello, basketball, ultimate frisbee, and occasionally forays into the realm sports betting.",
				id: "travis",
			},			
			{
				name: 'Jerold Yu',
				joined: 2016,
				image: 'images/profiles/jerold-yu.jpg',
				description: "Jerold is a third-year undergraduate studying Mathematical and Computational Science. Raised in San Francisco, he grew up rooting for the Giants and Warriors, and hopes to one day contribute to a franchise's success through sports analytics. In his free time, Jerold likes to rock climb, run, do yoga, bake/cook, and try new things.",
				id: "jerold",
			},		
			{
				name: 'Scott Powers',
				joined: 2014,
				image: 'images/profiles/scott-powers.jpg',
				description: "Scott is a PhD student in statistics and an analytics consultant to the Oakland Athletics. In the 2016 spring quarter he will lecture Stanford's STATS 50: Analytic Methods in Sports. Outside of work, he is a catcher on the club baseball team and a setter on the club volleyball team.",
				posts: [
					{
						title: 'The Frictional Cost of a Call to the Bullpen',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/03/24/the-frictional-cost-of-a-call-to-the-bullpen/'
					},
					{
						title: 'A Fresh Take on Batting the Pitcher Eighth',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/05/06/a-fresh-take-on-batting-the-pitcher-eighth/'
					}
				],
				id: "scott_hide",
			},
			{
				name: 'Vihan Lakshman',
				joined: 2014,
				image: 'images/profiles/vihan-lakshman.jpg',
				description: "Vihan Lakshman is a majoring in Math and Computational Science. He covers Cardinal football and basketball for The Stanford Daily and KZSU student radio, and was also a member of the winning undergraduate team at the 2015 SABR Diamond Dollars Case Competition. Originally from Savannah, GA, Vihan is an ardent supporter of the Falcons, Braves, and Hawks.",
				posts: [
					{
						title: 'Examing MLB Postseason Cluster Luck: Or, Why the Playoffs Might Be a Crapshoot',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/03/24/examining-mlb-postseason-cluster-luck-or-why-the-playoffs-might-be-a-crapshoot/'
					}
				],
				id: "vihan",
			},
			{
				name: 'Sandy Huang',
				joined: 2014,
				image: 'images/profiles/sandy-huang.jpg',
				description: "Sandy is a coterminal master's student from Kentucky studying Management Science & Engineering (MS&E). His undergrad degree was in Philosophy where he wrote a thesis on Nietzsche. In his free time, he enjoys reading books, listening to hip-hop, and playing chess. He roots for the Kentucky Wildcats, the Warriors, the Raiders, and of course the Stanford Cardinal.",
				posts: [
					{
						title: 'Why We Love Sports Analytics and Richard Sherman',
						link: 'https://stanfordsportsanalytics.wordpress.com/2014/10/08/why-we-love-sports-analytics-and-richard-sherman/'
					}
				],
				id: "sandy",
			},
			{
				name: 'Peter Lee',
				joined: 2015,
				image: 'images/profiles/peter-lee.jpg',
				description: "Peter is a MS student in Statistics, and a graduate analytics assistant with Stanford's women's basketball team. His favorite sport is basketball, and favorite basketball writer Zach Lowe. Peter also has an economics degree from Vassar, where he was also captain of the Quidditch team, and played well enough to make it on to Team USA. Originally from LA, he's a huge fan of the Lakers, Dodgers, and is especially excited for the Rams to come back to LA!",
				id: "peter",
			}
		],
		alumoverview: [
			"Many of our alumni are still active in the sports analytics world. See what they've been up to since leaving Stanford!"
		],
		alumni: [
			{
				name: 'Alexander Stroud',
				image: 'images/profiles/alexander-stroud.jpg',
				description: "Zander majored in Mathematical and Computational Science, and is cotermed in Statistics at Stanford. While a member of the club, Zander did extensive work on analytics projects for Stanford Baseball. In summer 2018, he interned for the Tampa Bay Rays, and currently, he works as a Data Scientist for Pando Pooling.",
				posts: [
					{
						title: "In Search of a Winning Strategy: Comparing FiveThirtyEight.com's CARM-ELO Predictions to Las Vegas Point Spreads",
						link: 'https://stanfordsportsanalytics.wordpress.com/2017/06/18/in-search-of-a-winning-strategy-comparing-fivethirtyeight-coms-carm-elo-predictions-to-las-vegas-point-spreads/'
					}
				],
				id: "zander",
				show: true,
			},
			{
				name: 'Ryan Chen',
				image: 'images/profiles/ryan-chen-alumni.jpg',
				description: "Ryan is entering his 3rd season as a basketball data scientist with the Orlando Magic. While with SSAC, he contributed to club efforts in winning the 2017 NBA Hackathon and the 2016 UNC Basketball Analytics Summit Case Competition as well as writing for the (now-defunct) basketball blog 16 Wins A Ring.",
				links: [
					{
						title: 'Personal Site',
						link: 'http://www.ryandchen.net/',
					},
					{
						title: 'LinkedIn',
						link: 'https://www.linkedin.com/in/ryandchen/',
					}
				],
				id: "ryan",
				show: true,
			},
			{
				name: 'Eli Shayer',
				image: 'images/profiles/eli-shayer-2.jpg',
				description: "Eli graduated in 2018 with a bachelor's in Mathematical and Computational Science, a master's in Statistics, and a minor in History. He has worked for the Chicago Cubs since 2016 as an intern, a developer, and currently is an analyst. In his four years as a member of SSAC he served terms as tech officer, president, and co-president.",
				posts: [
					{
						title: 'A Fresh Take on Batting the Pitcher Eighth',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/05/06/a-fresh-take-on-batting-the-pitcher-eighth/'
					}
				],
				id: "eli",
				show: true,
			},
			{
				name: 'Nick Canova',
				image: 'images/profiles/nick-canova-alumni.jpg',
				description: "Nick got a Masters in Data Science in 2017 and is currently working on CBB Analytics, his college basketball startup. He was a VP of the club for a year. In addition to the startup, he has worked part-time at two other sports startups doing statistics and data science work.",
				links: [
					{
						title: 'CBB Analytics',
						link: 'https://cbbanalytics.com/',
					}
				],
				id: "nick",
				show: true,
			},
			{
				name: 'Chris Pickard',
				image: 'images/profiles/chris-pickard-alumni.png',
				description: "Chris Pickard is currently an analyst with the Sacramento Kings. In his role, Chris splits time principally supporting management with tools and analysis to guide team strategy, personnel decisions and roster evaluations and leading complex technical projects to further improve data driven processes within the organization. While in school, Chris finished 2nd in the inaugural NBA Hackathon and spent the 2016-2017 season as an analyst with the Los Angeles Clippers supporting their basketball analytics and research team. In addition to his time with SSAC, Chris spent four years as a member of the Men’s Varsity Swimming team earning All-American, Academic All-American and team captain honors while earning both his B.S. (2015) and M.S. (2017), both in Civil Engineering. ",
				id: "chris",
				show: true,
			},
			{
				name: 'Scott Powers',
				image: 'images/profiles/scott-powers-alumni.jpg',
				description: "Scott defended his PhD thesis under Rob Tibshirani in 2017 and then joined the LA Dodgers as a senior analyst in R&D. He was promoted to Director of Quantitative Analysis in 2018. At Stanford, Scott played catcher on the club baseball team and setter on the club volleyball team.",
				id: "scott",
				posts: [
					{
						title: 'The Frictional Cost of a Call to the Bullpen',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/03/24/the-frictional-cost-of-a-call-to-the-bullpen/'
					},
					{
						title: 'A Fresh Take on Batting the Pitcher Eighth',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/05/06/a-fresh-take-on-batting-the-pitcher-eighth/'
					}
				],
				show: true,
			}
		]
	};
	
	var membersTemplate = [
	'{{#with pageData}}',
		'<div class="row">',
			'<div class="col-xs-12 col-sm-9">',
				'<div class="row" id="overview">',
					'<div class="col-xs-12">',
						'<h2 class="profiles-overview">Overview</h2>',
						'{{#each overview}}',
						'<p>{{{this}}}</p>',
						'{{/each}}',
						'<hr/>',
					'</div>',
				'</div>',
				'{{#each members}}',
					'<div class="row ssac-profile" id="{{ id }}">',
						'<div class="col-xs-6 col-md-3">',
							'<h3 class="profile-name"><b>{{ name }}</b></h3>',
							'{{#if position}} <h4>{{ position }}</h4> {{/if}}',
							'{{#if joined}} <h4>Member since {{ joined }}</h4> {{/if}}',
						'</div>',
						'<div class="col-xs-6 col-md-3">',
							'{{#if image}} <img alt={{ name }} src="{{ image }}" height="120px"> {{else}} <img alt={{ name }} src="images/profiles/tree.png" height="120px"> {{/if}}',
						'</div>',
						'<div class="col-xs-12 col-md-6">',
							'<p>{{{ description }}}</p>',
							'{{#if posts}}',
								'<h4>SSAC Blog posts:</h4>',
									'<ul class="post-list">',
									'{{#each posts}}',
										'<li><a href="{{ link }}">{{ title }}</a></li>',
									'{{/each}}',
								'</ul>',
							'{{/if}}',
						'</div>',
					'</div>',
					'<hr>',
				'{{/each}}',
				'<div class="row" id="alumoverview">',
					'<div class="col-xs-12">',
						'<h2 class="profiles-alumni">Alumni</h2>',
						'{{#each alumoverview}}',
						'<p>{{{this}}}</p>',
						'{{/each}}',
						'<hr/>',
					'</div>',
				'</div>',
				'{{#each alumni}}',
					'<div class="row ssac-profile" id="{{ id }}">',
						'<div class="col-xs-6 col-md-3">',
							'<h3 class="profile-name"><b>{{ name }}</b></h3>',
							'{{#if joined}} <h4>Member since {{ joined }}</h4> {{/if}}',
							'{{#if grad}} <h4>Graduated {{ grad }}</h4> {{/if}}',
							'{{#each links}}',
								'<a href="{{ link }}">{{ title }}</a><br>',
							'{{/each}}',
						'</div>',
						'<div class="col-xs-6 col-md-3">',
							'{{#if image}} <img alt={{ name }} src="{{ image }}" height="120px"> {{else}} <img alt={{ name }} src="images/profiles/tree.png" height="120px"> {{/if}}',
						'</div>',
						'<div class="col-xs-12 col-md-6">',
							'<p>{{{ description }}}</p>',
							'{{#if posts}}',
								'<h4>SSAC Blog posts:</h4>',
									'<ul class="post-list">',
									'{{#each posts}}',
										'<li><a href="{{ link }}">{{ title }}</a></li>',
									'{{/each}}',
								'</ul>',
							'{{/if}}',
						'</div>',
					'</div>',
					'<hr>',
				'{{/each}}',
			'</div>',
			'<div class="col-xs-3">',
				'<ul class="members-list">',
					'<li id="overview-li"><a href="#overview"><strong>Overview</strong></a></li>',
					'{{#each members}}',
						'<li id="{{ id }}-li"><a href="#{{ id }}">{{ name }}</a></li>',
					'{{/each}}',
					'<li id="alumoverview-li"><a href="#alumoverview"><strong>Alumni</strong></a></li>',
					'{{#each alumni}}',
						'<li id="{{ id }}-li"><a href="#{{ id }}">{{ name }}</a></li>',
					'{{/each}}',
				'</ul>',
			'</div>',
		'</div>',
	'{{/with}}'
	].join('\n');

	// populate page with the above data
	populatePage(membersTemplate, membersData);

})(this, this.document);

// navbar height in pixels with a small buffer
var NAVBAR_HEIGHT = 51;
var BUFFER = 10;

// selected class name
var selectedClass = "selected-member";

// find the top and bottom profiles for members-list display manipulation
var $allProfiles = $(".ssac-profile");
var $firstProfile = $($allProfiles[0]);
var $lastProfile = $($allProfiles[$allProfiles.length - 1]);

// use those two profiles and the overview to get breakpoints
var overviewBreakpoint, topBreakpoint, bottomBreakpoint;
setBreakpoints = function() {
	overviewBreakpoint = $("#overview").offset().top;
	topBreakpoint = $firstProfile.offset().top;
	bottomBreakpoint = $lastProfile.offset().top;
};
setBreakpoints();

// resets the breakpoints upon resize of the window
$(window).resize(setBreakpoints);

// cache jQuery objects for efficiency
var $membersList = $(".members-list");
var $window = $(window);

// respond every time a scroll occurs
$window.scroll(function () {
	// position the members list on the screen based on the scroll location
	var screenTop = $window.scrollTop() + NAVBAR_HEIGHT + BUFFER;
	// if above all profiles, normaml position and no members are selected
	if (screenTop < overviewBreakpoint) {
		$membersList.css({
			position: "relative",
			top: ""
		});
		$("." + selectedClass).toggleClass(selectedClass, false);
	// if below the entire member list, lock it into place at the bottom
	} else if (screenTop > $lastProfile.offset().top) {
		$membersList.css({
			position: "relative",
			top: bottomBreakpoint - overviewBreakpoint
		});
	} else { // if viewing, keep the position fixed and set one member as active
		$membersList.css({
			position: "fixed",
			top: NAVBAR_HEIGHT + BUFFER
		});
		// if screen is at the bottom, set the last member to active
		// buffer of 1 pixel for rounding
		if($(document).height() - $window.scrollTop() - $window.height() <= 1) {
			$("." + selectedClass).toggleClass(selectedClass, false);
			$("#" + $lastProfile[0].id + "-li").toggleClass(selectedClass, true);
		}
		// if above all profiles, the overview is active
		else if (screenTop < topBreakpoint) {
			$("." + selectedClass).toggleClass(selectedClass, false);
			$("#overview-li").toggleClass(selectedClass, true);
		} else {
			// if not the overview, set the active member
			var activeMemberSet = false;
			$allProfiles.each(function() {
				var $profile = $(this);
				var id = $profile.attr('id');
				// protect against setting the active member again after it has been set
				if (!activeMemberSet) {
					// if the current profile is the viewed profile
					if ($profile.offset().top + $profile.outerHeight() > screenTop) {
						var listId = "#" + id + "-li";
						// protect against setting the current member when it would result in no change
						if (!$(listId).hasClass(selectedClass)) {
							$("." + selectedClass).toggleClass(selectedClass, false);
							$(listId).toggleClass(selectedClass, true);
						}
						activeMemberSet = true;	
					}
				}
			});
		}
	}
});
