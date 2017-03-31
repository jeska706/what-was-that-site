var app = angular.module('interestingSites', []);

app.controller('MainCtrl', ['$scope', function($scope){
    $scope.test = 'controller is connected';

    $scope.newSites = [
        {siteName: "link 1", stars: 5},
        {siteName: "link 2", stars: 10},
        {siteName: "link 3", stars: 2},
        {siteName: "link 4", stars: 2},
        {siteName: "link 5", stars: 8},
    ];

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
}]);
