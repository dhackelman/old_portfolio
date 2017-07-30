'use strict';

(function () {

  var app = angular.module('PortfolioHosting', ['ui.router', 'LocalStorageModule']);

  angular.module('PortfolioHosting').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('in');

    $stateProvider.state('PortfolioParent', {
      url: '/',
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
      controller: 'ContactController as contactCtrl'
    }).state('PortfolioParent.projectDetail', {
      url: 'project-detail',
      templateUrl: './templates/project-detail.html',
      controller: 'DetailController as detailCtrl'
    });;
  });
})();
'use strict';

(function () {
  angular.module('PortfolioHosting').controller('AboutController', function ($q, getData, $state) {
    var _this = this;

    $q.when(getData.get2('./data/users.json')).then(function (response) {
      _this.allFriends = response.data;
      console.log(response.data);
    });
  });
})();
'use strict';

(function () {
  angular.module('PortfolioHosting').controller('HomeController', function (StorageService, $state) {
    console.log('here');
  });
})();
'use strict';

(function () {
  angular.module('PortfolioHosting').controller('ProjectController', function ($q, getData, $state) {
    var _this = this;

    $q.when(getData.get('./data/projects.json')).then(function (response) {
      _this.allProjects = response.data.projects;
      console.log(_this.allProjects);
    });

    this.showDetails = function () {
      $state.go('PortfolioParent.projectDetail');
    };
  });
})();
'use strict';

(function () {
  angular.module('PortfolioHosting').controller('DetailController', function (StorageService) {

    console.log('fuck you');
  });
})();
'use strict';

(function () {
  angular.module('PortfolioHosting').service('getData', function ($http) {
    function fetchData(url) {
      return $http({
        method: 'GET',
        url: './data/projects.json'
      });
    }
    return {
      get: fetchData
    };
  });
})();
'use strict';

(function (ng) {
    "use strict";

    ng.module('PortfolioHosting').service('StorageService', function (localStorageService) {
        function setItems(key, value) {
            localStorageService.set(key, value);
        }

        function getItems(key) {
            return localStorageService.get(key);
        }

        return {
            set: setItems,
            get: getItems
        };
    });
})(angular);