(function() {
    angular.module('PortfolioHosting').service('getData', function($http) {
        function fetchData(url) {
           return $http({
            method: 'GET',
            url: './data/projects.json'
          });
        }
        return {
          get: fetchData,
        };
      });
  })();
