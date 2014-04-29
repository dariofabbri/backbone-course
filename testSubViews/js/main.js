(function($) {

	var User = Backbone.Model.extend();

	var Users = Backbone.Collection.extend({
		model: User
	});

	var users = new Users([{
		id: 1,
		name: 'Dario',
	}, {
		id: 2,
		name: 'Beatrice'
	}]);

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

	var usersView = new UsersView({
		collection: users
	});

	$(document).ready(function() {
		$(document.body).append(usersView.render().el);
	});
})(jQuery);
