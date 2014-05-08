require.config({
	baseUrl: 'libs',
	paths: {
		jquery: 'jquery',
		underscore: 'underscore/underscore',
		backbone: 'backbone/backbone'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: ['underscore', 'jquery']
		}
	}
});

requirejs([
	'jquery,
	'app/collections/users',
	'app/views/usersview'
],
function ($, Users, UsersView) {

	var users = new Users([{
    id: 1,
		name: 'Dario',
	}, {
		id: 2,
		name: 'Beatrice'
	}]);


  var usersView = new UsersView({
		collection: users
	});

	$(document).ready(function() {
		$(document.body).append(usersView.render().el);
	});
});
