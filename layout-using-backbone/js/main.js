'use strict';
//Configure require.js
require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ["jquery"]
		},
		jqueryUI: {
			deps: ["jquery"]
		},
		jquerySplitter: {
			deps: ["jquery"]
		}
	},
	paths: {
		jquery: 'lib/jquery-3.2.1.min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		bootstrap: 'lib/bootstrap.min',
		jqueryUI: 'lib/jquery-ui.min',
		jquerySplitter: 'lib/jquery-splitter',
		ContainerView: 'app/views/containerView',
		PanelsView: 'app/views/panelsView',
		ProfilePanelView: 'app/views/profilePanelView',
		EditProfileView: 'app/views/editProfileView'
	}
});

//Start up our App
require([
	'app/view',
], function(AppView) {
	// Initialize the application view
	new AppView();
});