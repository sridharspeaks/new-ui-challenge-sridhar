angular.module('LonelyHeart')
    .directive('filterBar', [function() {
        return {
            restrict: 'E',
            scope: false,
            controller: 'FilterBarController',
            templateUrl: 'directives/filterBar/filterBar.html'
        }
    }])
    .controller('FilterBarController', ['$scope', '$filter', 'FilterService', function($scope, $filter, FilterService) {
            var resultList = [];

            $scope.search = function(isOnLoad) {
                if (isOnLoad===true) {
                    var query = {ageMin: $scope.ageMin, ageMax: $scope.ageMax};
                    FilterService.getList(query)
                        .then(function (response) {
                            resultList = response.results;
                            $scope.resultList = resultList;
                        });
                } else {
                    var filteredResultList = _.filter(resultList, function(record) {
                                return (
                                    ($scope.gender == '0' || (record.gender == (($scope.gender == '1') ? 'male' : 'female'))) &&
                                    $filter('calAge')(record.dob) >= $scope.ageMin &&
                                    $filter('calAge')(record.dob) <= $scope.ageMax
                                );
                            });

                    $scope.resultList = filteredResultList;
                 }
            }
            $scope.resetForm = function() {
                $scope.gender = '0';
                $scope.ageMin = 18;
                $scope.ageMax = 90;
                $scope.isShowContact = false;
                $scope.activeRecord = {};
                $scope.search();
            };
            $scope.resetForm();

            $scope.search(true);

    }]);