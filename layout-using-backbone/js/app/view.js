'use strict';

define([
	'jquery',
	'underscore',
	'backbone',
	'ContainerView',
	'./models/PanelList'

], function($, _, Backbone, ContainerView, PanelList) {

	var HomeView = Backbone.View.extend({

		el: $('#home'),

		model: new PanelList(),

		initialize: function() {

			// Add panels by populating model
			this.model.add({
				panelId: 'profilePanel',
				panelTitle: 'Person Details',
				panelBody: 'blah blah blah'
			});
			this.model.add({
				panelId: 'panel2',
				panelTitle: 'MainA-Container2',
				panelBody: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...'
			});
			this.model.add({
				panelId: 'panel3',
				panelTitle: 'MainA-Container3',
				panelBody: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...'
			});
			this.model.add({
				panelId: 'panel4',
				panelTitle: 'MainA-Container4',
				panelBody: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...'
			});

			this.render();
		},

		render: function() {
			this.container = new ContainerView(this.model);
		}
	});

	return HomeView;

});