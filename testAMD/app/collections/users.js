define([
	'jquery',
	'underscore',
	'backbone',
	'app/models/user'
],
function ($, _, Backbone, User) {
	var Users = Backbone.Collection.extend({
		model: User
	});
	return Users;
});
