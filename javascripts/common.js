(function(window, document, undefined) {

	// Create handlebars template
	var templates = {};
	templates.banner = Handlebars.compile(Templates.banner);
	templates.title = Handlebars.compile(Templates.title);
	templates.callToAction = Handlebars.compile(Templates.callToAction);
	templates.footer = Handlebars.compile(Templates.footer);

	var links = {};
	links.home = { name: "Home", link: "www.stanfordsportsanalytics.com" };
	links.twitter = { name: "Twitter", link: "www.twitter.com/stanfordsac" };
	links.facebook = { name: "Facebook", link: "www.facebook.com/stanfordsportsanalytics" };
	links.blog = { name: "Blog", link: "www.stanfordsportsanalytics.wordpress.com" };

	$('#banner').html(templates.banner());
	$('#title').html(templates.title());
	$('#call-to-action').html(templates.callToAction());
	$('#footer').html(templates.footer());

})(this, this.document);
