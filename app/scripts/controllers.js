'use strict';

(function () {

	angular
		.module('myevent.controllers', ['myevent.services'])
		.controller('PostListCtrl', PostListCtrl)
	    .controller('PostDetailCtrl', PostDetailCtrl)
	    .controller('PostCreateCtrl', PostCreateCtrl);

	function PostListCtrl (Post) {
		this.posts = Post.query();
	}

	function PostDetailCtrl ($routeParams, Post, Comment) {
		this.post = {};
		this.comments = {};
		this.user = {}

		var self = this; // Para guardar la referencia

		Post.query({ id: $routeParams.postId }).$promise.then(
			//Success
			function (data) {
				self.post = data[0];
				self.user = User.query({ id: self.user.userId });
			},
			//Error
			function (error) {
				console.log(error);
			}
		);

		this.comments = Comment.query({ postId: $routeParams.postId });
	}

	function PostCreateCtrl (Post) {
		var self = this;
		this.create = function() {
			Post.save(self.post);
		};
	}

})();