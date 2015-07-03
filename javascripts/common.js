// A script to automate the use of templates common to multiple web pages.
// Used as a function into which the content specific to a page is passed
// as a variable, as well as the corresponding data and ID of te HTML
// element that will hold the content. Additionally compiles and renders
// HTML for the banner, header, sidebar, call to action, and footer.
// Also contains common data, such as the links.

populatePage = function(pageTemplate, pageData, divId) {

	// Create handlebars template
	var templates = {};
	templates.pageTemplate = Handlebars.compile(pageTemplate);
	templates.banner = Handlebars.compile(Templates.banner);
	templates.header = Handlebars.compile(Templates.header);
	templates.sidebar = Handlebars.compile(Templates.sidebar);
	templates.callToAction = Handlebars.compile(Templates.callToAction);
	templates.footer = Handlebars.compile(Templates.footer);

	var links = {};
	links.home = { name: "Home", link: "http://www.stanfordsportsanalytics.com" };
	links.twitter = { name: "Twitter", link: "http://www.twitter.com/stanfordsac" };
	links.facebook = { name: "Facebook", link: "http://www.facebook.com/stanfordsportsanalytics" };
	links.blog = { name: "Blog", link: "http://www.stanfordsportsanalytics.wordpress.com" };

	var buttons = {};
	buttons.banner = [
		{text: links.home.name, link: links.home.link, color: "dark"},
		{text: "About Us", link: "http://www.stanfordsportsanalytics.com/about", color: "dark"},
		{text: "Profiles", link: "http://www.stanfordsportsanalytics.com/profiles", color: "dark"},
		{text: links.blog.name, link: links.blog.link, color: "dark", target: "new"}
	];
	buttons.mailList = {text: "Join our mailing list!", link: "//mailman.stanford.edu/mailman/listinfo/sportsanalytics", color: "light", target: "new"};

	var data = {};
	data.links = links;
	data.buttons = buttons;
	data.year = new Date().getFullYear();
	data.pageData = pageData

	populateElement = function(divId, template, data) {
		var $element = $(divId);
		if ($element.length) {
			$element.html(template(data));
		}
	}

	populateElement("#banner", templates.banner, data);
	populateElement("#header", templates.header, data);
	populateElement("#sidebar", templates.sidebar, data);
	populateElement("#call-to-action", templates.callToAction, data);
	populateElement("#footer", templates.footer, data);
	populateElement(divId, templates.pageTemplate, data);
};
