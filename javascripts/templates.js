// The templates common to all pages
var Templates = {};

// The common banner
Templates.navbar = [
'<nav class="navbar navbar-default navbar-fixed-top">',
    '<div class="container">',
        '<div class="navbar-header">',
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#ssac-navbar-collapse" aria-expanded="false">',
                '<span class="sr-only">Toggle navigation</span>',
                '<span class="icon-bar"></span>',
                '<span class="icon-bar"></span>',
                '<span class="icon-bar"></span>',
            '</button>',
            '<a class="navbar-brand" href="/"><img alt="Stanford Sports Analytics Club" src="https://lh3.googleusercontent.com/LzcHfBQXmDdcmpFcp59uA1SDpwOxPpIJmbKqcJO2L0Q=w182-h103-no" id="ssac-logo"></a>',
        '</div>',
        '<div class="collapse navbar-collapse">',
            '<ul class="nav navbar-nav">',
                '<li><a href="http://www.stanfordsportsanalytics.com">Home</a></li>',
                '<li><a href="http://www.stanfordsportsanalytics.com/about.html">About Us</a></li>',
                '<li><a href="http://www.stanfordsportsanalytics.com/profiles.html">Profiles</a></li>',
                '<li><a href="www.stanfordsportsanalytics.wordpress.com">Blog</a></li>',
            '</ul>',
        '</div>',
    '</div>',
'</nav>'
].join('\n');

// the header for pages including the title and subtitle
Templates.header = [
'{{#with pageData}}',
'<h1 class="page-title">Stanford Sports Analytics Club: {{ header }}</h1>',
'<h3 class="lead page-description">{{ description }}</h3>',
'{{/with}}'
].join('\n');

// The "callToAction," which includes the link to the mail list sign-up
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

// footer, which contains links to facebook and twitter, and a copyright
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

// the sidebar, with a short "About" and links to twitter, facebook, and the blog
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
