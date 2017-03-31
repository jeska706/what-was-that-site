var app = angular.module('interestingSites', ['ui.router']);



app.factory('newSites', [function(){
    var o = {
        newSites: []
    };
    return o;
}]);

app.controller('MainCtrl', ['$scope', 'newSites', function($scope, newSites){
    $scope.test = 'controller is connected';

    $scope.newSites = newSites.newSites;

    $scope.addSite = function(){
        if(!$scope.siteName || $scope.siteName === '') { return; }
        $scope.newSites.push({
            siteName: $scope.siteName,
            address: $scope.address,
            comment: $scope.comment,
            stars: 0
        });
        console.log('addlink route hit');
        $scope.siteName = '';
        $scope.address = '';
        $scope.comment = '';
    };

    $scope.incrementStars = function(newSite){
        newSite.stars += 1;
    };
    $scope.decreaseStars = function(newSite){
        newSite.stars -= 1;
    };
}]);
