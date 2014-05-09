require.config({
	baseUrl: 'app',
	paths: {
		jquery: '../libs/jquery',
		underscore: '../libs/underscore',
		backbone: '../libs/backbone'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: ['underscore', 'jquery']
		}
	}
});

requirejs([
	'jquery',
	'collections/users',
	'views/usersview'
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
