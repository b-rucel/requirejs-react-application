// Administration -- main
// application/main.js

require.config({
    "urlArgs" : "v="+(+new Date),
    "deps"    : ['main'],
    "paths"   : {
        "jquery": "../../vendor/jquery/dist/jquery",
        "underscore": "../../vendor/lodash/dist/lodash.compat",
        "backbone": "../../vendor/backbone-amd/backbone",

        // Underscore text is not necessary with react.js but if you need to load text, css, etc. you can uncomment the next line
        // text: '../../vendor/requirejs-text/text',
        "jsx" : "../../vendor/react/jsx",
        "JSXTransformer": "../../vendor/react/JSXTransformer",
        "react": "../../vendor/react/react-with-addons"
    },
    "shim": {
        // Works without the following shims but if you run into problems with dependency you can try to uncomment the following lines as needed.
        // 
        // backbone: {
        //     deps: ['underscore', 'jquery'],
        //     exports: 'Backbone'
        // },
        // underscore: {
        //     exports: '_'
        // },
        // JSXTransformer: {
        //     exports: 'JSXTransformer'
        // }
    }
});

// kickstart my heart!!
define([
    'jsx!router',
    'app'
],
function(Router, app) {
    'use strict';

    var router = new Router();

    router.on("route", function(route, params) {
        app.event.trigger('route:change', route);
    });
});