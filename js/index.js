(function(window, document, undefined) {

	indexData = {
		navbarTitle: "Home",
		serviceItems: [
			{
				image: "bar-chart",
				title: "What We Do",
				content: "Stanford Sports Analytics Club is devoted to fostering a community of serious quanitative research into sports. If you are interested in joining, please add yourself to our mailing list below."
			},
			{
				image: "calendar",
				title: "Upcoming Meetings",
				content: "Our meetings in spring quarter of the 2016-2017 school year will be weekly on Sundays at 8pm in Old Union 200."
			},
			{
				image: "comments",
				title: "Announcements",
				content: "On April 27th we will host Dr. Dave Schrader as a guest speaker! Join us in Old Union 200 starting at 8pm for this exciting guest presentation."
			},
			{
				image: "shield",
				title: "Officers",
				content: '<ul class="officers-list"><li>Eli Shayer</li><li>Travis Chen</li><li>Nick Canova</li><li>Peter Lee</li></ul>'
			}
		]
	};

	indexTemplate = [
		'{{#with pageData}}',
        '<div class="container">',
            '<div class="row text-center">',
                '<div class="col-lg-12">',
                    '<h2>Additional Information</h2>',
                    '<hr class="small">',
                    '<div class="row">',
                    	'{{#each serviceItems}}',
                        '<div class="col-md-3 col-sm-6">',
                            '<div class="service-item">',
                                '<span class="fa-stack fa-4x">',
                                	'<i class="fa fa-circle fa-stack-2x"></i>',
                                	'<i class="fa fa-{{image}} fa-stack-1x text-primary"></i>',
                            	'</span>',
                                '<h4><strong>{{title}}</strong></h4>',
                                '<p>{{{content}}}</p>',
                            '</div>',
                        '</div>',
                        '{{/each}}',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
        '{{/with}}',
	].join('\n');

	populatePage(indexTemplate, indexData);

	// set the minimum height of the service items to the same value based
	// on the largest initial height
	var maxHeight = 0;
	var $serviceItems = $(".service-item");
	$.each($serviceItems, function(index, item) {
		maxHeight = item.offsetHeight > maxHeight ? item.offsetHeight : maxHeight;
	});
	$serviceItems.css("min-height", maxHeight);

})(this, this.document);
