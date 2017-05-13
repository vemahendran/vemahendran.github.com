'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'jqueryUI',
	'ProfilePanelView'
], function($, _, Backbone, jqueryUI, ProfilePanelView) {

	var PanelsView = Backbone.View.extend({

		el: $('#panelListContainer'),

		template: _.template($("#panelListTemplate").html()),

		initialize: function(model) {
			this.model = model;

			// Add event listener for user profile data
			this.listenTo(this.model.user, "change", this.render);

			this.render();
		},

		render: function() {
			
			this.$el.empty();
			this.$el.append(this.template(this.model));

			// Add draggble feature
			this.applyDraggable();

			// Filter profilePanel view
			var profilePanelView = this.$el.find('#profilePanel');
			profilePanelView.empty();
			profilePanelView.append(new ProfilePanelView(this.model).el);

		},

		applyDraggable: function() {

			var panelList = this.$el.find('#panelList');

			panelList.sortable({
				handle: '.panel-heading',
				update: function() {
					$('.panel', panelList).each(function(index, elem) {
						var $listItem = $(elem),
							newIndex = $listItem.index();
						// Persist the new indices.
					});
				}
			});
		}

	});

	return PanelsView;

});