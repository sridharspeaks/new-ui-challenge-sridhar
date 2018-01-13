angular.module('LonelyHeart')
    .directive('resultList', [function() {
        return {
            restrict: 'E',
            scope: false,
            controller: 'ResultListController',
            templateUrl: 'directives/resultList/resultList.html'
        }
    }])
    .controller('ResultListController', ['$scope', '$filter', function($scope, $filter) {
        $scope.showContact = function(isShow, index) {
            if (isShow) {
                console.log($scope.resultList[index]);
                $scope.activeRecord = $scope.resultList[index];
                $scope.isShowContact = true;
            } else {
                $scope.isShowContact = false;
                $scope.activeRecord = {};
            }
        };
    }]);