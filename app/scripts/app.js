'use strict';
(function () {
	angular
		angular.module('myevent', ['ngRoute', 'myevent.controllers', 'myevent.templates'])
		.config(config);

	function config ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.when('/', {
			templateUrl: '/views/post-list.tpl.html',
			controller: 'PostListCtrl',
			controllerAs: 'postlist'
		}).when('/post/:postId', {
			templateUrl: '/views/post-detail.tpl.html',
			controller: 'PostDetailCtrl',
			controllerAs: 'postdetail'
		}).when('/new', {
			templateUrl: '/views/post-create.tpl.html',
			controller: 'PostCreateCtrl',
			controllerAs: 'postcreate'
		});
	}

})();