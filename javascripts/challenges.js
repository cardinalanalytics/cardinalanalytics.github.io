(function(window, document, undefined) {

	// data specifically for the about page
	var challengesData = {
		header: "Data Challenges",
		description: "Data challenges to get you started!",
		navbarTitle: "Challenges",
		challenges: [
			{
				title: "All-Star Mistakes",
				description: [
					'Since 1933, Major League Baseball has been hosting one or more All-Star games every summer. The rosters are selected by a combination of fans, fellow players and managers. Since the rosters are selected at mid-season, they do not represent a judgment on who has the best season overall. The first data challenge is to come up with a nine-man team of the worst All-Stars in history. This means, we&#39;re looking for eight position players (DH optional) and a pitcher (not necessarily a starter) who were all-stars (not necessarily all the same year) during seasons in which things went poorly for the player statistically. Judgment on "worst" is entirely subjective.',
					'The second part of the challenge is to field a team of the best non All-Stars. In other words, players who had tremendous seasons but were not selected to the game.',
					'We&#39;ve composed and cleaned two datasets for you that can be directly loaded into Excel or any other data analysis tool you choose to use.',
					'We&#39;ve also provided the R source code used to produce this file. All data is from the <b>Lahman</b> database, accessed via the R package of the same name.',
					'Your analysis can be as simple or complex as you want. Things like visualizations or graphics are great. Feel free to pull in more advanced or derived statistics. This should be fun! At our 1/26 meeting we&#39;ll all take a minute or two to run through our approach and the team we&#39;ve come up with. We may put a few of these up on the blog.',
				],
				files: [
					{
						type: ".csv",
						link: "challenges/batting.csv",
						name: "All-Star Position Players",
					},
					{
						type: ".csv",
						link: "challenges/pitching.csv",
						name: "All-Star Pitchers",
					},
					{
						type: ".R",
						link: "challenges/create_dataset.R",
						name: "",
					},
				],
				author: "John Sears",
				date: "January 13, 2015",
			}
		]
	};
	
	// Handlebars template for the about page
	var challengesTemplate = [
	'<div class="container">',
		'{{#each pageData.challenges}}',
		'<h2>{{title}}</h2>',
		'<h3>By {{author}}</h3>',
		'<h4>{{date}}</h4>',
			'<div class="row">',
				'<div class="col-xs-10">',
					'{{#each description}}',
					'<p>{{{this}}}</p>',
					'{{/each}}',
				'</div>',
				'<div class="col-xs-2">',
					'{{#each files}}',
					'<a href="{{link}}" class="btn btn-light">{{name}}</a>',
					'{{/each}}',
				'</div>',
			'</div>',
		'<hr/>',
		'{{/each}}',
	'</div>'
	].join('\n');

	// populate page with the above data
	populatePage(challengesTemplate, challengesData);

})(this, this.document);
