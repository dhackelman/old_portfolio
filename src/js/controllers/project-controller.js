(function() {
  angular.module('PortfolioHosting').controller('ProjectController', function($q, getData, $state) {
      $q.when(getData.get('./data/projects.json')).then((response) => {
        this.allProjects = response.data.projects;
        console.log(this.allProjects);
    });

    this.showDetails = function() {
      $state.go('PortfolioParent.projectDetail');
    }
  });
})();
