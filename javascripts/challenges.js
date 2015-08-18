(function(window, document, undefined) {

	// data specifically for the about page
	var challengesData = {
		header: "Challenges",
		description: "Data challenges to get you started!",
		navbarTitle: "Challenges"
	};
	
	// Handlebars template for the about page
	var challengesTemplate = [
		'Challenges content'
	].join('\n');

	// populate page with the above data
	populatePage(challengesTemplate, challengesData, 1);

})(this, this.document);
