'use strict';

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var User = Backbone.Model.extend({
		defaults: {
			name: 'Venkatesan',
			email: 'test@gmail.com',
			phoneNum: '9942342353',
			description: 'asd fdsf dsa fadsdfd'
		},

		intialize: function() {
			console.log('User has been intialized');

			// Lets hook up some event handers to listen to model change

			this.on('change', function() {
				console.log('- Values for this model have changed.');
			});


		}
	});

	return User;

});