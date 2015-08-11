app.controller('MainCtrl', function($scope, dataService) {
    
    $scope.birds;
    
    $scope.getBirds = function() {
        dataService.getBirdData().then(function(res) {
            $scope.birds = res;
            console.log('MainCtrl ln 8 - $scope.birds: ', $scope.birds);
        });
    };
    
    
    
});