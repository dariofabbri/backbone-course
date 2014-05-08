define([
	'jquery',
	'underscore',
	'backbone'
],
function ($, _, Backbone) {
	
	var UserItemView = Backbone.View.extend({

		tagName: 'li',

		template: _.template('<%=name%>'),

		events: {
			'click': 'showUserName'
		},

		render: function () {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			return this;
		},

		showUserName: function () {
			alert('User ' + this.model.get('name') + ' clicked!');
		}
	});
	return UserItemView;
});
