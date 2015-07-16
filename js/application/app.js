// global app object
define([
    'jquery',
    'underscore',
    'backbone'
],
function($, _, Backbone) {
    var app = {
        initialize: function() {

        },
        events: _.extend({}, Backbone.Events)
    };

    return app;
});