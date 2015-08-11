app.service('dataService', function($http, $q) {
    
    this.getBirdData = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/birds'
        }).then(function(res) {
            console.log(res);
            deferred.resolve(res)
        })
        return deferred.promise();
    };
    
    
    
    
});