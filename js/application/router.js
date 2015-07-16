/** @jsx React.DOM */
define([
    'react',
    'backbone'
], function(React, Backbone){
    "use strict";

    var Router = Backbone.Router.extend({

        "initialize" : function(){
            Backbone.history.start();
        },

        "routes" : {
            "" : "index"
        },

        "index": function() {
            require(['jsx!view/index'], function(View) {
                var currentView = new View();

                React.renderComponent(currentView, document.getElementById('content'));
            });
        }
    });

    return Router;
});