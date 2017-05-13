'use strict';

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var EditProfileView = Backbone.View.extend({

		el: $('#home'),

		template: _.template($("#editProfileTemplate").html()),

		events: {
			'submit #editProfileForm': 'updateUserProfile'
		},

		initialize: function(model) {
			this.model = model;
			console.log("Edit Profile view initialized");
			
			this.render();
		},

		render: function() {
			this.$el.append(this.template(this.model));
		},

		updateUserProfile: function(event) {
			event.preventDefault();

			this.model.user.set({
				name: $('#personName').val(),
				email: $('#personEmail').val(),
				phoneNum: $('#personPhoneNum').val(),
				description: $('#description').val()
			});

			// for force model trigger
			// this.model.user.trigger('change', this.model.user);

			// Hide the modal box
			$('#editProfileModal').modal('hide');

			// Clear form data
			$(event.target).trigger("reset");

			return false;
		}

	});

	return EditProfileView;

});