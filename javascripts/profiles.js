(function(window, document, undefined) {

	// data specifically for the members page
	var membersData = {
		header: "Member Profiles",
		description: "Get to know the contributors",
		members: [
			{
				name: 'Scott Powers',
				position: 'Co-President',
				joined: 2014,
				image: 'https://lh3.googleusercontent.com/bMun0W0Rf54Z9Nz48tkbaupLPe09EiJk-kegj5l9Grw=s623-no',
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
				image: 'images/portfolio-2.jpg',
				description: 'I was on the champion 2015 SABR Case Competition team!',
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
				image: 'images/portfolio-3.jpg',
				description: 'I like baseball and stuff',
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
				image: 'images/portfolio-4.jpg',
				description: 'I hold down all the finances',
				posts: [
					{
						title: 'Why We Love Sports Analytics and Richard Sherman',
						link: 'https://stanfordsportsanalytics.wordpress.com/2014/10/08/why-we-love-sports-analytics-and-richard-sherman/'
					}
				]
			},
			{
				name: 'General Member',
				joined: 2015,
				description: 'I like sports. My favorite team is the Stanford Cardinal.'
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
	                    '<p>{{ description }}</h4>',
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
	populatePage(membersTemplate, membersData, "#members");

})(this, this.document);
