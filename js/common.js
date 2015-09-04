// A script to automate the use of templates common to multiple web pages.
// Used as a function into which the content specific to a page is passed
// as a variable, as well as the corresponding data and ID of te HTML
// element that will hold the content. Additionally compiles and renders
// HTML for the navbar, header, sidebar, call to action, and footer.
// Also contains common data, such as the links.

populatePage = function(pageTemplate, pageData, pathLevel) {
	function safeHandlebarsCompile(template) {
		try {
			return Handlebars.compile(template);
		} catch(err) {
			return null;
		}
	}

	// Create handlebars template
	var templates = {};
	templates.pageTemplate = safeHandlebarsCompile(pageTemplate);
	templates.navbar = safeHandlebarsCompile(Templates.navbar);
	templates.header = safeHandlebarsCompile(Templates.header);
	templates.sidebar = safeHandlebarsCompile(Templates.sidebar);
	templates.callToAction = safeHandlebarsCompile(Templates.callToAction);
	templates.footer = safeHandlebarsCompile(Templates.footer);

	// links common to the entire site
	var links = {};
	links.home = { name: "Home", link: "http://www.stanfordsportsanalytics.com" };
	links.twitter = { name: "Twitter", link: "http://www.twitter.com/stanfordsac" };
	links.facebook = { name: "Facebook", link: "http://www.facebook.com/stanfordsportsanalytics" };
	links.blog = { name: "Blog", link: "http://www.stanfordsportsanalytics.wordpress.com" };
	links.email = { name: "Email", link: "mailto:stanfordsportsanalytics@gmail.com" };

	// buttons, split into buttons that belong on the navbar and the rest
	var buttons = {};
	buttons.navbar = [
		{text: links.home.name, link: "index.html", target: "_parent"},
		{text: "About", link: "about.html", target: "_parent"},
		{text: "Profiles", link: "profiles.html", target: "_parent"},
		{text: "Challenges", link: "challenges.html", target: "_parent"},
		{text: links.blog.name, link: links.blog.link, target: "new"}
	];
	buttons.mailList = {text: "Join our mailing list!", link: "//mailman.stanford.edu/mailman/listinfo/sportsanalytics", color: "light", target: "new"};

	// move all of the sources of data into a single object for a standardized Handlebars call
	var data = {};
	data.links = links;
	data.buttons = buttons;
	data.year = new Date().getFullYear();
	data.pageData = pageData;
	data.path = "../".repeat(pathLevel ? pathLevel : 0);

	// function to render a Handlebars template with data, and place the result into the element with id divId
	function populateElement(divId, template, data) {
		var $element = $(divId);
		if ($element.length && template && data) {
			$element.html(template(data));
		}
	}

	// populates each of the common elements and the element specified in the function call
	populateElement("#navbar", templates.navbar, data);
	populateElement("#header", templates.header, data);
	populateElement("#sidebar", templates.sidebar, data);
	populateElement("#call-to-action", templates.callToAction, data);
	populateElement("#footer", templates.footer, data);
	populateElement("#content", templates.pageTemplate, data);

	// set the active tab in the navbar
	$.each($("#navbar-tabs")[0].children, function(index, li) {
		// have to remove the final character from the li text
		if (li.innerText.substring(0, li.innerText.length - 1) === data.pageData.navbarTitle) {
			li.className += "active";
			li.children[0].innerHTML += '<span class="sr-only"> (current)</span>';
		}
	});
};

// common handlebars helpers and associated helper functions

// helper function to turn a month into text
function getTextualMonth(month) {
	switch (month) {
		case 1: return "January";
		case 2: return "February";
		case 3: return "March";
		case 4: return "April";
		case 5: return "May";
		case 6: return "June";
		case 7: return "July";
		case 8: return "August";
		case 9: return "September";
		case 10: return "October";
		case 11: return "November";
		case 12: return "December";
		default: return "Error"
	}
}

// helper function to turn a date into text
function getTextualDate(date) {
	var result = "";
	result += getTextualMonth(date.month) + " ";
	if (date.day) {
		result += date.day + ", ";
	}
	result += date.year;
	return result;
}

/* Converts a numerical date into a textual date in a Handlebars helper
 * Assumes the following date object format, with the example textually
 * being "August 26, 2015." Does not require a specific day:
 *
 * date: {
 *     day: 26,
 *     month: 8,
 *     year: 2015
 * }
 */
Handlebars.registerHelper("textualDate", function(date) {
	return new Handlebars.SafeString(getTextualDate(date));
});

// helper function to write a full name
function fullName(name) {
	return name.firstName + " " + name.lastName;
}

/* Writes a byline for any length of an authors array. Accepts either a single
 * name or names in an array, with each name as an object with the first and
 * last name seperated. Example:
 * name: {
 *     firstName: "Eli",
 *     lastName: "Shayer"
 * }
 */
 
Handlebars.registerHelper("byline", function(authors) {
	// forms byline with the one author, two authors, and three or more authors cases
	var result = "";
	if ($.isArray(authors)) {
		if (authors.length === 1) {
			result += fullName(authors[0]);
		} else if (authors.length === 2) {
			result += fullName(authors[0]) + " and " + fullName(authors[1]);
		} else {
			for (var i = 0; i < authors.length; i++) {
				result += fullName(authors[i]);
				if (i + 1 < authors.length) {
					result += ", ";
				}
				if (i + 2 === authors.length) {
					result += "and ";
				}
			}
		}
	} else {
		result += fullName(authors);
	}
	return new Handlebars.SafeString(result);
});

// helper function to form a date object
function writeDate(year, month, day) {
	return {
		year: year,
		month: month,
		day: day
	}
}

// names array as constants
var NAMES = {
	ELI: {
		firstName: "Eli",
		lastName: "Shayer"
	},
	SCOTT: {
		firstName: "Scott",
		lastName: "Powers"
	},
	VIHAN: {
		firstName: "Vihan",
		lastName: "Lakshman"
	},
	KONSTANTINOS: {
		firstName: "Konstantinos",
		lastName: "Balafas"
	},
	SANDY: {
		firstName: "Sandy",
		lastName: "Huang"
	}
};
