'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();
//const webUITheme = require('mono-fractal')({});
//const nighthawkTheme = require("@gotoandplay/nighthawk");

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Visual Identity');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, '/public'));


/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

/**
 * UI Theme : mono
 */
//fractal.web.theme(webUITheme); // use the sub-classed theme
/*fractal.web.theme(nighthawkTheme({
  // specify locale for build date in the sidebar
  lang: 'et',
  // specify custom brand color to personalize theme
  brandColor: '#FACD3D'
}));*/

// ------------------------
const lowercase = require('./helpers/lowercase');

/**
 * Adding helpers or custom function to hbs templates to do basic transformation
 */
const hbs = require('@frctl/handlebars')({
  helpers: {
    // Call the function in hbs file with : {{lowercase "Title"}}
    // Example of function directly include in the variable
    uppercase: function(str) {
      return str.toUpperCase();
    },
    // Example of function include from another file
    // Source : https://stackoverflow.com/questions/38296667/getting-unexpected-token-export
    lowercase: function (str) {
      return lowercase.toLowerCase(str);
    }
  }
});

fractal.components.engine(hbs);