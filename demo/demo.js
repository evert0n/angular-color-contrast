var demo = angular.module('demoApp', ['colorContrast']);

demo.controller('demoCtrl', function($scope, $http) {
  $http.get('https://api.github.com/repos/angular/angular.js/labels')
    .then(function(response) {
      $scope.labels = response.data;
    });
});
