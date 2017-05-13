'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    './Panel'
], function($, _, Backbone, Panel) {

    var PanelList = Backbone.Collection.extend({
        model: Panel,

        initialize: function() {
            console.log("Collection got initializeed");
        }
    });

    return PanelList;

});