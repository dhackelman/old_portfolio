(function () {

  const app = angular.module('PortfolioHosting', ['ui.router', 'LocalStorageModule']);

  angular.module('PortfolioHosting').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('in');

    $stateProvider.state('PortfolioParent', {
      url:'/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('PortfolioParent.about', {
        url: 'about',
        templateUrl: './templates/about.html',
        controller: 'AboutController as aboutCtrl'
    }).state('PortfolioParent.index', {
        url: '',
        templateUrl: './templates/home.html',
        controller: 'HomeController as homeCtrl'
    }).state('PortfolioParent.projects', {
        url: 'projects',
        templateUrl: './templates/projects.html',
        controller: 'ProjectController as projectCtrl'
    }).state('PortfolioParent.contact', {
      url: 'contact',
      templateUrl: './templates/contact.html',
      controller: 'ContactController as contactCtrl',
    }).state('PortfolioParent.projectDetail', {
      url: 'project-detail',
      templateUrl: './templates/project-detail.html',
      controller: 'DetailController as detailCtrl',
    });;
  });

})();
