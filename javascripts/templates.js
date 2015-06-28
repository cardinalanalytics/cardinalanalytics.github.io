var Templates = {};

Templates.members = [
'{{#if members}}',
    '{{#each members}}',
        '<div class="row">',
            '<div class="col-xs-12 col-sm-6 col-md-3">',
                '<h3><b>{{ name }}</b></h3>',
                '{{#if position}} <h4>{{ position }}</h4> {{/if}}',
                '{{#if joined}} <h4>Member since {{ joined }}</h4> {{/if}}',
            '</div>',
            '<div class="col-xs-12 col-sm-6 col-md-3">',
                '{{#if image}} <img alt={{name}} src="images/{{image}}" height="120px"> {{/if}}',
            '</div>',
            '<div class="col-xs-12 col-md-6">',
                '<p>{{ description }}</h4>',
                '{{#if posts}}',
                    '<h4>Blog posts:</h4>',
                    '<ul style="list-style-type:disc">',
                        '{{#each posts}}',
                            '<li><a href="{{link}}">{{title}}</a></li>',
                        '{{/each}}',
                    '</ul>',
                '{{/if}}',
            '</div>',
        '</div>',
        '<hr>',
    '{{/each}}',
'{{else}}',
    '<span>No members found.</span>',
'{{/if}}'
].join('\n');

Templates.banner = [
'<div class="col-xs-12 col-sm-3 col-md-3">',
    '<a href="http://stanfordsportsanalytics.com/"><img alt="Stanford Sports Analytics Club" src="https://lh3.googleusercontent.com/LzcHfBQXmDdcmpFcp59uA1SDpwOxPpIJmbKqcJO2L0Q=w182-h103-no"></a>',
'</div>',
'<div class="col-xs-12 col-sm-8 col-md-9">',
    '<a href="http://stanfordsportsanalytics.com" class="btn btn-lg btn-dark">Home</a>',
    '<a href="http://stanfordsportsanalytics.com/profiles" class="btn btn-lg btn-dark">Members</a>',
    '<a href="http://stanfordsportsanalytics.wordpress.com" class="btn btn-lg btn-dark" target="new">Blog</a>',
'</div>'
].join('\n');

Templates.title = [
'<h1 class="page-title">Stanford Sports Analytics Club: Member Profiles</h1>',
'<p class="lead page-description">Get to know our members</p>'
].join('\n');

Templates.callToAction = [
'<div class="container">',
    '<div class="row">',
        '<div class="col-lg-12 text-center">',
            '<h3>Get Involved</h3>',
            '<a href="//mailman.stanford.edu/mailman/listinfo/sportsanalytics" class="btn btn-lg btn-light">Join our mailing list!</a>',
        '</div>',
    '</div>',
'</div>'
].join('\n');

Templates.footer = [
'<div class="container">',
    '<div class="row">',
        '<div class="col-lg-10 col-lg-offset-1 text-center">',
            '<ul class="list-inline contact">',
                '<li><a href="https://www.facebook.com/stanfordsportsanalytics"><i class="fa fa-facebook fa-fw fa-3x"></i></a></li>',
                '<li><a href="http://twitter.com/stanfordsac"><i class="fa fa-twitter fa-fw fa-3x"></i></a></li>',
            '</ul>',
            '<hr class="small">',
            '<p class="text-muted">Copyright &copy; Stanford Sports Analytics Club 2015</p>',
        '</div>',
    '</div>',
'</div>'
].join('\n');
