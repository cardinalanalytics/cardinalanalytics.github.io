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
				name: 'Silas Morsink',
				position: 'President',
				joined: 2017,
				image: 'images/profiles/silas.png',
				description: "Silas is a junior from Bethesda, Maryland studying economics and statistics. He is currently the president of the club, and has been involved with the club’s projects with Stanford Baseball, Women’s Volleyball, and Football. He has also done projects in baseball, soccer, and tennis analytics. In his free time not spent on sports, he enjoys running, playing the piano, and backpacking.",
				posts: [
					{
						title: "Economists Think MLB Pitchers are Weird (Probably)",
						link: 'https://stanfordsportsanalytics.wordpress.com/2019/09/26/economists-think-mlb-pitchers-are-weird-probably/',
					}
				],
				id: "silas",
			},
			{
				name: 'Matt Colon',
				position: 'Vice President',
				joined: 2017,
				image: 'images/profiles/matt-colon.jpg',
				description: 'Matt is a junior studying Mathematical and Computational Science with a minor in Economics. Despite growing up in New Jersey, Matt is a huge Tampa Bay Buccaneers fan. Matt also loves to play basketball, as well as root on his favorite basketball player, Kyrie Irving, who Matt consistently insists hit <a href="https://www.wsj.com/articles/the-biggest-shot-in-nba-history-1482235610">the statistically most clutch shot of all time</a> to help the Cavs secure the 2016 NBA Finals.',
				id: "matt",
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
		],
		members_hide: [
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
				id: "scott",
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
				name: 'Nick Canova',
				image: 'images/profiles/nick-canova-alumni.jpg',
				description: "Nick got a Masters In Data Science in 2017 and is currently working on CBB Analytics, his college basketball startup. He was a VP of the club for a year. In addition to the startup, he has worked part-time at two other sports startups doing statistics and data science work.",
				links: [
					{
						title: 'CBB Analytics',
						link: 'https://cbbanalytics.com/',
					}
				],
				id: "nick",
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
								'<h4>Blog posts:</h4>',
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
								'<h4>Blog posts:</h4>',
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