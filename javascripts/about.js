(function(window, document, undefined) {

	// data specifically for the about page
	var aboutData = {
		header: "About Us",
		description: "Learn about the Stanford Sports Analytics Club",
		navbarTitle: "About"
	};
	
	// Handlebars template for the about page
	var aboutTemplate = [
		'<p>The Stanford Sports Analytics Club is a student organization dedicated to the quantitative analytics of sports. We seek to both foster a community of Stanford students interested in sports analytics, and to serve as a platform for the sports research performed by the members of this community. Since our inception in the 2014-2015 school year, the club has provided an opportunity for members to learn the skills of sports analytics, perform their own research, engage in meaningful conversations about sports analytics, participate in sports analytics competitions, and interact with leaders in the sports analytics community and sports professionals.</p>',
		'<p>If you are interested in participating in the club, please consider joining our mailing list <a href="#call-to-action">below</a>. A sampling of our work can be found on our <a href="http://www.stanfordsportsanalytics.wordpress.com" target="new">blog</a>. Our social media presence includes a <a href="http://www.twitter.com/stanfordsac" target="new">Twitter</a> account and a <a href="http://www.facebook.com/stanfordsportsanalytics" target="new">Facebook</a> account. These accounts will both be updated with information regularly during the school year.</p>'
	].join('\n');

	// populate page with the above data
	populatePage(aboutTemplate, aboutData);

})(this, this.document);
