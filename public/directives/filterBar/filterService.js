angular.module('LonelyHeart')
    .factory('FilterService', ['$http', '$q', function($http, $q) {
        return {
            getList: function (queryParams) {
                var defered = $q.defer();
                queryParams.results = 10;
                var url = buildUrlWithQueryData('https://randomuser.me/api/', queryParams);

                $http.get(url).success(function (response) {
                    defered.resolve(response);
                }).error(function (response) {
                    defered.reject(response);
                });
                return defered.promise;
            }
        }
   }]);
