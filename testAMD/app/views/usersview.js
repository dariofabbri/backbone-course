define([
	'jquery',
	'underscore',
	'backbone',
	'views/useritemview'
],
function ($, _, Backbone, UserItemView) {

	var UsersView = Backbone.View.extend({
		tagName: 'ul',

		events: {
		'click li': 'showUserName'
		},

		render: function() {
			var userItemView;

			this.$el.empty();

			this.collection.each(function (model) {
				userItemView = new UserItemView({
					model: model
				});
				this.$el.append(userItemView.render().el);
			}, this);

			return this;
		}
	});

	return UsersView;
});
