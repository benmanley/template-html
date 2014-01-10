# template-html
## About
Template-html is a bare-bones, responsive html5 template for static sites. It uses CodeKit's .kit extension to allow easy updating of shared page components such as masthead and footer. 

It includes two optional modules – a progressively enhanced image gallery and a basic contact form.

## Requirements
To use the template you will need the following tools and libraries:

### Required
* [CodeKit](http://incident57.com/codekit/)
* [SASS](http://sass-lang.com)

### Optional
* [Modernizr](http://modernizr.com)
* [HiSRC](https://github.com/teleject/hisrc)
* [jQuery](http://jquery.com)
* [Bourbon](http://bourbon.io)
* [faviconit](http://faviconit.com) 

## Getting started

### Adding site-wide metadata
Edit the following `.scss` files to customise your site:

* _*meta-favicons.scss	 – Insert favicon links here. I use [faviconit](http://faviconit.com) to generate favicons and code. 
* _*meta-metadata
** `$site-title` – added to the beginning of `<title>`
** `$site-masthead` – added to the page `<header>`. May or may not be the same as `$site-title`.
** `$site-description` – the meta description for your site.
** `$site-viewport` – a default value for meta viewport.
** `$prefix-open-graph` – default value to add the open-graph namespace.
** `$og-title` – sets a value for `property="og:title"` 
** `$og-type` – sets a value for `property="og:type"`
** `$og-url` – sets a value for `property="og:url"`
** `$og-image` – sets a value for `property="og:image"`
** `$og-description` – sets a value for `property="og:description"`
* `_*meta-nofollow` – default value for meta robots. 
* `_*meta-open-graph` – adds [open graph](http://ogp.me) meta tags. They can be customised using the variables in `_*meta-metadata.scss`.

### default-html.html

This file contains many standard HTML elements and allows you to see how they display as you style your site. This file should be deleted before launching your finished site. It's adapted from Jukka Korpela's [Test display of HTML elements](http://www.cs.tut.fi/~jkorpela/www/testel.html).

### Creating a new page
If you're unfamiliar with CodeKit's .kit language, [read this first](http://incident57.com/codekit/kit.php).

In *CodeKit > html, create two new .kit files. Say we want to end up with default-html.html, we create:

1. default-html.kit
2. content-default-html.kit

#### default-html.kit
Add the following .kit variables and imports. Optionally, you can add local `$og-*` variables to override the master variables in `_*meta-metadata`.

```html
<!-- $page-id = page-default-html -->
<!-- $page-title = Default HTML -->
<!-- $stylesheet = css/stylesheet.css -->
<!-- @import *meta-metadata.kit, *01-open.kit, *02b-head-nofollow.kit, *03-masthead.kit, *04-navigation.kit, content-default-html.kit, *05-footer.kit, *06-scripts.kit, *07-close.kit -->
```
* `$page-id` – added to `<body>` as an id
* `$page-title` – added to `<title>` after `$site-title`
* `$stylesheet` – the URL of the page's stylesheet
* @import – creates the document using the .kit files you specify. In this example, the page contains:
** *01-open.kit – the doctype and `<html>` tag
** *02b-head-nofollow.kit – `<head>` including `<meta name="robots" content="noindex, nofollow">`
** *03-masthead.kit – `<body>` + `<header>`
** *04-navigation.kit – main `<nav>`
** content-default-html.kit - the page content
** *05-footer.kit – `<footer>`
** *06-scripts.kit – `<script>` tags
** *07-close.kit – closing `</body>` and `</html>` tags

#### content-default-html.kit
This is where you add any content unique to the page you are creating. 

### stylesheet.scss
`stylesheet.scss` imports the following files:

#### Local
* `_fonts.scss` – add your @font-face rules here, then add `font-family` names to `_variables.scss`
* `_layout.scss` – includes base styles; edit as required
* `_module-form.scss` (optional) – base styles for the form module
* `_module-gallery.scss` (optional) – base styles for the gallery module
* `_print` – some styles are included to fix the image gallery for print layouts; edit as required
* `_variables.scss` – base variables for fonts, colour scheme and page dimensions; edit as required

#### External

* `bourbon.scss` (optional) – this automatically imports [Bourbon](http://bourbon.io)

This template also uses the following files from [benmanley/framework-base](https://github.com/benmanley/framework-base)
* `reset-html5.scss` – a bare-bones reset including `display:block` for common HMTL5 elements to allow support for IE in combination with a javascript shiv.
* `mixins.scss` – mixins for golden ratios, fonts, properties that use rems but fall back to pixels, plus cross browser support for various properties
