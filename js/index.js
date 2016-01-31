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
				content: "The next general meeting will be February 7th at 8pm in Education 210."
			},
			{
				image: "comments",
				title: "Announcements",
				content: "Look forward to the sport-specific subgroups that will bring together members with common interests. We will also have workshops to help people get started!"
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
