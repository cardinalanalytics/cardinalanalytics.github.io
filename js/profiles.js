(function(window, document, undefined) {

	// data specifically for the members page
	var membersData = {
		header: "Member Profiles",
		description: "Get to know the contributors",
		navbarTitle: "Profiles",
		overview: [
			"These are some of our most active members, who have given a presentation to the club on their own sports analytics research. Many of them have also written up their work in a blog post. You can peruse those blog posts in the links below.",
			"If you want to work on a project, each of these members is a great resource to help get you started! They have the experience and the knowledge to give you a head start. And once you present, you can appear here too!"
		],
		members: [
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
				id: "scott"
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
				name: 'Eli Shayer',
				position: 'President',
				joined: 2014,
				image: 'images/profiles/eli-shayer.jpg',
				description: "Eli is an undergraduate student in the class of 2018 from Anchorage, Alaska. His favorite sport is baseball, and he is an avid fan of the Saint Louis Cardinals. He was on one of Stanford's teams at the 2015 SABR Analytics Conference Case Competition. As the tech officer, he made a good portion of this website!",
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
				id: "eli",
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
				name: 'David Cameron',
				joined: 2015,
				image: 'images/profiles/david-cameron.jpg',
				description: 'Dave is a post-doctoral scholar in the Energy Resources Engineering Department, whose research involves optimizing monitoring networks for carbon storage operations. Originally from Australia, he developed a taste for ice-hockey after marrying a Canadian. Eh? Dave is real excited about his stat, which applies the Chess-rating system to provide real-time unbiased NHL player ratings. Check out his website at <a href="http://www.hockeystatsrevolution.com">www.hockeystatsrevolution.com</a>',
				id: "david",
			},
			{
				name: 'Konstantinos Balafas',
				joined: 2014,
				image: 'images/profiles/konstantinos-balafas.jpg',
				description: "Kostas grew up in Athens, Greece and just finished his PhD in civil engineering where he detected earthquake damage in buildings from acceleration measurements. He loves soccer and AC Milan, trusts in Arsene, yet misses not being at the office for Champions’ League games. That last part made basketball (Rock Chalk!) his go-to sport for watching and bringing up at SSAC meetings/presentations. Right now, he’s looking to “take his talents” to data science and will never say no to a pickup game of soccer of basketball.",
				posts: [
					{
						title: 'The Importance of Having a High NBA Draft Pick',
						link: 'https://stanfordsportsanalytics.wordpress.com/2014/11/30/the-importance-of-having-a-high-nba-draft-pick/'
					}
				],
				id: "konstantinos",
			},
			{
				name: 'Glenn Baxter',
				joined: 2015,
				image: 'images/profiles/glenn-baxter.jpg',
				description: "Glenn is a third-year undergraduate majoring in Economics and minoring in Computer Science. In the classroom, he loves statistics and learning about the global economy, but outside, in his free time, Glenn enjoys everything Sports. You can find him playing pickup basketball or soccer, tossing the pigskin, and (as his fraternity's Athletic Chair) immersing himself in Stanford's intramural sports. A Bay Area native, Glenn passionately roots for the Giants, Niners, Sharks, and Warriors. ",
				id: "glenn",
			},
			{
				name: 'Travis Chen',
				position: 'Vice President',
				joined: 2015,
				image: 'images/profiles/travis-chen.png',
				description: "Travis is a second-year undergrad in the class of 2018 studying Computer Science. His favorite sports are basketball and football, and he roots for the Spurs, the Sacramento Kings, and the Seahawks despite his Bay Area roots.",
				id: "travis",
			},
			{
				name: 'Peter Lee',
				position: 'Financial Officer',
				joined: 2015,
				image: 'images/profiles/peter-lee.jpg',
				description: "Peter is a MS student in Statistics, and a graduate analytics assistant with Stanford's women's basketball team. His favorite sport is basketball, and favorite basketball writer Zach Lowe. Peter also has an economics degree from Vassar, where he was also captain of the Quidditch team, and played well enough to make it on to Team USA. Originally from LA, he's a huge fan of the Lakers, Dodgers, and is especially excited for the Rams to come back to LA!",
				id: "peter",
			},
			{
				name: 'Ryan Chen',
				joined: 2015,
				image: 'images/profiles/ryan-chen.png',
				description: "Ryan is a first-year PhD student in Management Science & Engineering. He holds bachelor's degrees in Industrial & Operations Engineering and Music Performance from the University of Michigan. Due to being born in New Jersey, growing up in Florida, and going to college in Michigan, his sports rooting interests make almost no sense: Michigan Wolverines football, basketball, and hockey, Orlando Magic, Detroit Tigers, New York Jets, Manchester City, Orlando City SC, & Detroit Red Wings. Check out his personal website " + '<a href="http://www.ryandchen.net/">here</a>.',
				id: "ryan",
			},
			{
				name: 'Alec Powell',
				joined: 2014,
				image: 'images/profiles/alec-powell.jpg',
				description: "Alec is a senior majoring in Computer Science. Throughout his Stanford career, he has been involved with athletics, whether through KZSU Sports radio, Club Baseball, or several CS projects involving sports analytics - the most successful of which was for the winning team at the 2015 SABR Diamond Dollars Case Competition. A baseball fanatic hailing from Oakton, VA, Alec is a lifelong Baltimore Orioles fan.",
				id: "alec",
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
							'{{#if image}} <img alt={{ name }} src="{{ image }}" height="120px"> {{/if}}',
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
					'<li id="overview-li"><a href="#overview">Overview</a></li>',
					'{{#each members}}',
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