app.service('dataService', function($http, $q) {
    
    this.getBirdData = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://mean-stack-c9-dustinmyers.c9.io/api/birds'
        }).then(function(res) {
            console.log('dataService ln 9 - res.data.message: ', res.data.message);
            var birdString = res.data.message;
            deferred.resolve(birdString);
        });
        return deferred.promise;
    };
    
    
    
    
});