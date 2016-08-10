angular
	.module('myApp', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home', {
				url: '/',
				controller: "businessController",
				templateUrl: "templates/business.html"
			})
			.state('businessById', {
				url: '/businesses/:id',
				controller: "businessByIdController",
				templateUrl: "templates/business-detail.html"
			})
			.state('entrepreneurs', {
				url: '/entrepreneurs',
				controller: "entrepreneursController",
				templateUrl: "templates/entrepreneurs.html"
			})
			.state('entrepreneursById', {
				url: '/entrepreneurs/:id',
				controller: "entrepreneursByIdController",
				templateUrl: "templates/entrepreneur-detail.html"
			})


	});
