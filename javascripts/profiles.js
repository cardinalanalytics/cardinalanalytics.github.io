(function(window, document, undefined) {

	// Create handlebars template
	var source = $('#members-template').html();
	var template = Handlebars.compile(source);

	var members = {
		members: [
			{
				name: 'Scott Powers',
				position: 'Co-President',
				joined: 2014,
				image: 'portfolio-1',
				description: 'Hi my name is Scott. I am describing myself.',
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
				image: 'portfolio-2',
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
				image: 'portfolio-3',
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
				image: 'portfolio-4',
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

	document.getElementById('members').innerHTML = template(members);

})(this, this.document);
