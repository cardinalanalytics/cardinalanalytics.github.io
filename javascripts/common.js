populatePage = function(pageTemplate, pageData, divId) {

	// Create handlebars template
	var templates = {};
	templates.pageTemplate = Handlebars.compile(pageTemplate);
	templates.banner = Handlebars.compile(Templates.banner);
	templates.title = Handlebars.compile(Templates.title);
	templates.callToAction = Handlebars.compile(Templates.callToAction);
	templates.footer = Handlebars.compile(Templates.footer);

	var links = {};
	links.home = { name: "Home", link: "www.stanfordsportsanalytics.com" };
	links.twitter = { name: "Twitter", link: "www.twitter.com/stanfordsac" };
	links.facebook = { name: "Facebook", link: "www.facebook.com/stanfordsportsanalytics" };
	links.blog = { name: "Blog", link: "www.stanfordsportsanalytics.wordpress.com" };

	var buttons = {};
	buttons.banner = [
		{text: links.home.name, link: links.home.link, color: "dark"},
		{text: "Profiles", link: "www.stanfordsportsanalytics.com/profiles", color: "dark"},
		{text: "Blog", link: "http://stanfordsportsanalytics.wordpress.com", color: "dark", target: "new"}
	];
	buttons.mailList = {text: "Join our mailing list!", link: "//mailman.stanford.edu/mailman/listinfo/sportsanalytics", color: "light", target: "new"};

	var data = {};
	data.links = links;
	data.buttons = buttons;
	data.year = new Date().getFullYear();
	data.pageData = pageData

	$("#banner").html(templates.banner(data));
	$("#title").html(templates.title(data));
	$("#call-to-action").html(templates.callToAction(data));
	$("#footer").html(templates.footer(data));
	$(divId).html(templates.pageTemplate(data));

};
