'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap'
], function($, _, Backbone, bootstrap) {

	var ProfilePanelView = Backbone.View.extend({

		template: _.template($("#profilePanelTemplate").html()),

		initialize: function(model) {
			console.log("Initialized ProfilePanelView");
			this.model = model;
			this.render();
		},

		render: function() {

			// Filter profile model alone
			var profileModel = this.model.filter(function(panel) {
				return (panel.get('panelId') === 'profilePanel');
			});

			// For easy of use, append to main model
			this.model.profilePanel = profileModel[0];
			this.$el.append(this.template(this.model));
		},

		editUserProfile: function(event) {
			$('#editProfileModal').on('show.bs.modal', function(event) {
				var button = $(event.relatedTarget) // Button that triggered the modal
				var recipient = button.data('whatever') // Extract info from data-* attributes
					// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
					// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
				var modal = $(this)
				modal.find('.modal-title').text('New message to ' + recipient)
				modal.find('.modal-body input').val(recipient)
			});
		}

	});

	return ProfilePanelView;

});