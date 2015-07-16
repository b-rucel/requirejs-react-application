/** @jsx React.DOM */
define([
    // core
    'underscore',
    'backbone',
    'react',
], function(_, Backbone, React) {

    var reactClass = React.createClass({
    
        "render" : function() {
            return (
                <div className="row">
                    <div className="col-xs-6 col-md-3">
                        <a href="#" className="thumbnail">
                            <img src="http://placehold.it/350x150" alt="..." />
                        </a>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <a href="#" className="thumbnail">
                            <img src="http://placehold.it/350x150" alt="..." />
                        </a>
                    </div>
                </div>
            );
        }
    });

    return reactClass;
});