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

	var UsersView = Backbone.View.extend({
		tagName: 'ul',

		events: {
			'click li': 'showUserName'
		},

		render: function() {
			var html = '';

			this.collection.each(function(model) {
				html += '<li data-id="' + model.get('id') + '">' + model.get('name') + '</li>';
			}, this);

			this.$el.html(html);
			return this;
		},

		showUserName: function(e) {
			var userId = $(e.target).attr('data-id');
			var user = this.collection.get(userId);

			if(!user) {
				throw 'Could not find specified user.';
			}

			alert('Clicked on: ' + user.get('name'));
		}
	});

	var usersView = new UsersView({
		collection: users
	});

	$(document).ready(function() {
		$(document.body).append(usersView.render().el);
	});
})(jQuery);
