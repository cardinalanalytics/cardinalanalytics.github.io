(function(window, document, undefined) {

	// data specifically for the members page
	var membersData = {
		header: "Member Profiles",
		description: "Get to know the contributors",
		navbarTitle: "Profiles",
		members: [
			{
				name: 'Scott Powers',
				position: 'Co-President',
				joined: 2014,
				image: 'images/scott-powers.jpg',
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
				]
			},
			{
				name: 'Vihan Lakshman',
				position: 'Co-President',
				joined: 2014,
				image: 'images/vihan-lakshman.jpg',
				description: "Vihan Lakshman is a majoring in Math and Computational Science. He covers Cardinal football and basketball for The Stanford Daily and KZSU student radio, and was also a member of the winning undergraduate team at the 2015 SABR Diamond Dollars Case Competition. Originally from Savannah, GA, Vihan is an ardent supporter of the Falcons, Braves, and Hawks.",
				posts: [
					{
						title: 'Examing MLB Postseason Cluster Luck: Or, Why the Playoffs Might Be a Crapshoot',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/03/24/examining-mlb-postseason-cluster-luck-or-why-the-playoffs-might-be-a-crapshoot/'
					}
				]
			},
			{
				name: 'Eli Shayer',
				position: 'Technology Officer',
				joined: 2014,
				image: 'images/eli-shayer.jpg',
				description: "Eli is a undergraduate student in the class of 2018. His favorite sport is baseball, and he is an avid fan of the Saint Louis Cardinals. He was on one of Stanford's teams at the 2015 SABR Analytics Conference Case Competition. As the tech officer, he made a good portion of this website!",
				posts: [
					{
						title: 'The Frictional Cost of a Call to the Bullpen',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/03/24/the-frictional-cost-of-a-call-to-the-bullpen/'
					},
					{
						title: 'A Fresh Take on Batting the Pitcher Eighth',
						link: 'https://stanfordsportsanalytics.wordpress.com/2015/05/06/a-fresh-take-on-batting-the-pitcher-eighth/'
					}
				]
			},
			{
				name: 'Sandy Huang',
				position: 'Financial Officer',
				joined: 2014,
				image: 'images/sandy-huang.jpg',
				description: "Sandy is a coterminal master's student from Kentucky studying Management Science & Engineering (MS&E). His undergrad degree was in Philosophy where he wrote a thesis on Nietzsche. In his free time, he enjoys reading books, listening to hip-hop, and playing chess. He roots for the Kentucky Wildcats, the Warriors, the Raiders, and of course the Stanford Cardinal.",
				posts: [
					{
						title: 'Why We Love Sports Analytics and Richard Sherman',
						link: 'https://stanfordsportsanalytics.wordpress.com/2014/10/08/why-we-love-sports-analytics-and-richard-sherman/'
					}
				]
			},
			{
				name: 'David Cameron',
				joined: 2015,
				image: 'images/david-cameron.jpg',
				description: 'Dave is a post-doctoral scholar in the Energy Resources Engineering Department, whose research involves optimizing monitoring networks for carbon storage operations. Originally from Australia, he developed a taste for ice-hockey after marrying a Canadian. Eh? Dave is real excited about his stat, which applies the Chess-rating system to provide real-time unbiased NHL player ratings. Check out his website at <a href="http://www.hockeystatsrevolution.com">www.hockeystatsrevolution.com</a>'
			},
			{
				name: 'Konstantinos Balafas',
				joined: 2014,
				image: 'images/konstantinos-balafas.jpg',
				description: "Kostas grew up in Athens, Greece and just finished his PhD in civil engineering where he detected earthquake damage in buildings from acceleration measurements. He loves soccer and AC Milan, trusts in Arsene, yet misses not being at the office for Champions’ League games. That last part made basketball (Rock Chalk!) his go-to sport for watching and bringing up at SSAC meetings/presentations. Right now, he’s looking to “take his talents” to data science and will never say no to a pickup game of soccer of basketball.",
				posts: [
					{
						title: 'The Importance of Having a High NBA Draft Pick',
						link: 'https://stanfordsportsanalytics.wordpress.com/2014/11/30/the-importance-of-having-a-high-nba-draft-pick/'
					}
				]
			}
		]
	};
	
	var membersTemplate = [
	'{{#with pageData}}',
	    '{{#if members}}',
	        '{{#each members}}',
	            '<div class="row">',
	                '<div class="col-xs-12 col-sm-6 col-md-3">',
	                    '<h3><b>{{ name }}</b></h3>',
	                    '{{#if position}} <h4>{{ position }}</h4> {{/if}}',
	                    '{{#if joined}} <h4>Member since {{ joined }}</h4> {{/if}}',
	                '</div>',
	                '<div class="col-xs-12 col-sm-6 col-md-3">',
	                    '{{#if image}} <img alt={{name}} src="{{image}}" height="120px"> {{/if}}',
	                '</div>',
	                '<div class="col-xs-12 col-md-6">',
	                    '<p>{{{ description }}}</h4>',
	                    '{{#if posts}}',
	                        '<h4>Blog posts:</h4>',
	                        '<ul style="list-style-type:disc">',
	                            '{{#each posts}}',
	                                '<li><a href="{{link}}">{{title}}</a></li>',
	                            '{{/each}}',
	                        '</ul>',
	                    '{{/if}}',
	                '</div>',
	            '</div>',
	            '<hr>',
	        '{{/each}}',
	    '{{else}}',
	        '<span>No members found.</span>',
	    '{{/if}}',
	'{{/with}}'
	].join('\n');

	// populate page with the above data
	populatePage(membersTemplate, membersData);

})(this, this.document);
