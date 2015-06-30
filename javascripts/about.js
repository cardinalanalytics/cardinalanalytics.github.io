(function(window, document, undefined) {

	// data specifically for the about page
	var aboutData = {
		header: "Member Profiles",
		description: "Get to know the contributors",
	};
	
	// Handlebars template for the about page
	var aboutTemplate = [
        '<h3>Content about SSAC</h3>
	].join('\n');

	// populate page with the above data
	populatePage(aboutTemplate, aboutData, "#about");

})(this, this.document);
