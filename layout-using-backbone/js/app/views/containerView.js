'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'jquerySplitter',
	'PanelsView',
	'EditProfileView',
	'app/models/User'
], function($, _, Backbone, jquerySplitter, PanelsView, EditProfileView, User) {

	var ContainerView = Backbone.View.extend({

		el: $('#container'),

		initialize: function(model) {

			this.model = model;
			this.model.user = new User();

			// Add splitter functionality
			this.addSplitter();

			this.render();
		},

		render: function() {

			this.panels = new PanelsView(this.model);
			this.editUserProfileView = new EditProfileView(this.model);

		},

		addSplitter: function() {
			var splitter = this.$el.split({
				orientation: 'vertical',
				limit: 10,
				position: '80%', // if there is no percentage it interpret it as pixels
				onDrag: function(event) {
					// console.log(splitter.position());
				}
			});

			var splitter = this.$el.find('#containerLeft').split({
				orientation: 'vertical',
				limit: 10,
				position: '20%', // if there is no percentage it interpret it as pixels
				onDrag: function(event) {
					// console.log(splitter.position());
				}
			});
		}

	});

	return ContainerView;

});