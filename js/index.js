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
				content: "The first SSAC meeting of the school year will be Sunday, October 4th at 9pm in Old Union 200. We hope to see you there!"
			},
			{
				image: "comments",
				title: "Announcements",
				content: "Make sure you're on the mailing list to stay up-to-date."
			},
			{
				image: "shield",
				title: "Officers",
				content: '<ul class="officers-list"><li>Vihan Lakshman</li><li>Scott Powers</li><li>Sandy Huang</li><li>Eli Shayer</li></ul>'
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
