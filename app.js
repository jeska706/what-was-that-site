var app = angular.module('interestingSites', []);

app.controller('MainCtrl', ['$scope', function($scope){
    $scope.test = 'controller is connected';

    $scope.links = [
        {address: "link 1", stars: 5},
        {address: "link 2", stars: 10},
        {address: "link 3", stars: 2},
        {address: "link 4", stars: 2},
        {address: "link 5", stars: 8},
    ];

    $scope.addLink = function(){
        $scope.links.push({address: "A new link", stars: 0});
    };
}]);
