(function(window, document, undefined) {

	// data specifically for the about page
	var aboutData = {
		header: "About Us",
		description: "Learn about the Stanford Sports Analytics Club",
		navbarTitle: "About",
		paragraphs: [
			'The Stanford Sports Analytics Club is a student organization dedicated to the quantitative analytics of sports. We seek to both foster a community of Stanford students interested in sports analytics, and to serve as a platform for the sports research performed by the members of this community. Since our inception in the 2014-2015 school year, the club has provided an opportunity for members to learn the skills of sports analytics, perform their own research, engage in meaningful conversations about sports analytics, participate in sports analytics competitions, and interact with leaders in the sports analytics community and sports professionals.',
			'The club was founded in 2014 by John Sears and Vihan Lakshman. The pair served as co-presidents for the club&#39;s first year, the 2014-2015 school year. The first year featured many exciting events. SSAC met with sports executives such as Billy Beane of the Oakland Athletics, Kirk Lacob of the Golden State Warriors, and Doug Wilson of the San Jose Sharks. Two SSAC teams competed in the SABR Analytics Conference Case Competition, including the champion undergraduate team. Perhaps most importantly, a community of sports analytics was fostered on the Stanford campus that will endure into the future.',
			'If you are interested in participating in the club, please consider joining our mailing list <a href="#call-to-action">below</a>. A sampling of our work can be found on our <a href="http://www.stanfordsportsanalytics.wordpress.com" target="new">blog</a>. Our social media presence includes a <a href="http://www.twitter.com/stanfordsac" target="new">Twitter</a> account and a <a href="http://www.facebook.com/stanfordsportsanalytics" target="new">Facebook</a> account. These accounts will both be updated with information regularly during the school year.'
		]
	};
	
	// Handlebars template for the about page
	var aboutTemplate = [
		'{{#each pageData.paragraphs}}',
		'<p>{{{this}}}</p>',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(aboutTemplate, aboutData);

})(this, this.document);
