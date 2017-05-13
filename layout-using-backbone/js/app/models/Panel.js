'use strict';

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var Panel = Backbone.Model.extend({
		defaults: {
			panelId: '3221',
			panelTitle: '322314',
			panelBody: '23124'
		},


		intialize: function() {
			console.log('Panel has been intialized');

			// Lets hook up some event handers to listen to model change
			this.on('change:Panel', function() {
				console.log('Message from specific listener: Panel has been changed');
			});
		}
	});

	return Panel;

});