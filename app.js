var app = angular.module('interestingSites', []);

app.controller('MainCtrl', ['$scope', function($scope){
    $scope.test = 'controller is connected';

    $scope.links = [
        {title: "link 1", stars: 5},
        {title: "link 2", stars: 10},
        {title: "link 3", stars: 2},
        {title: "link 4", stars: 2},
        {title: "link 5", stars: 8},
    ];

    
}]);
