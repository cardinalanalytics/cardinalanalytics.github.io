var Templates = {};

Templates.banner = [
'<div class="col-xs-12 col-sm-3 col-md-3">',
    '<a href="http://stanfordsportsanalytics.com/" target="_parent"><img alt="Stanford Sports Analytics Club" src="https://lh3.googleusercontent.com/LzcHfBQXmDdcmpFcp59uA1SDpwOxPpIJmbKqcJO2L0Q=w182-h103-no"></a>',
'</div>',
'<div class="col-xs-12 col-sm-8 col-md-9">',
    '{{#each buttons.banner}}',
    '<a href="{{ link }}" class="btn btn-lg btn-{{ color }}" target="{{#if target}}new{{else}}_parent{{/if}}">{{ text }}</a>',
    '{{/each}}',
'</div>'
].join('\n');

Templates.header = [
'{{#with pageData}}',
'<h1 class="page-title">Stanford Sports Analytics Club: {{ header }}</h1>',
'<p class="lead page-description">{{ description }}</p>',
'{{/with}}'
].join('\n');

Templates.callToAction = [
'<div class="container">',
    '<div class="row">',
        '<div class="col-xs-12 text-center">',
            '<h3>Get Involved</h3>',
            '{{#with buttons.mailList}}',
            '<a href="{{ link }}" class="btn btn-lg btn-{{ color }}" target="{{#if target}}new{{else}}_parent{{/if}}">{{ text }}</a>',
            '{{/with}}',
        '</div>',
    '</div>',
'</div>'
].join('\n');

Templates.footer = [
'<div class="container">',
    '<div class="row">',
        '<div class="col-xs-12 text-center">',
            '<ul class="list-inline contact">',
                '<li><a href="{{ links.facebook.link }}" target="_parent"><i class="fa fa-facebook fa-fw fa-3x"></i></a></li>',
                '<li><a href="{{ links.twitter.link }}" target="_parent"><i class="fa fa-twitter fa-fw fa-3x"></i></a></li>',
            '</ul>',
            '<hr class="small">',
            '<p class="text-muted">Copyright &copy; Stanford Sports Analytics Club {{ year }}</p>',
        '</div>',
    '</div>',
'</div>'
].join('\n');

Templates.sidebar = [
'<div class="sidebar-module sidebar-module-inset">',
    '<h4>About</h4>',
    '<p>Stanford Sports Analytics Club is devoted to fostering a community of serious quantitative research into sports. If you are interested in joining, please add yourself to our mailing list below, or attend our weekly meetings.</p>',
'</div>',
'<div class="sidebar-module">',
    '<h4>Elsewhere</h4>',
    '<ol class="list-unstyled">',
        '<li><a href="{{ links.twitter.link }}" target="_parent">{{ links.twitter.name}}</a></li>',
        '<li><a href="{{ links.facebook.link }}" target="_parent">{{ links.facebook.name }}</a></li>',
        '<li><a href="{{ links.blog.link }}" target="_parent">{{ links.blog.name }}</a></li>',
    '</ol>',
'</div>',
].join('\n');
