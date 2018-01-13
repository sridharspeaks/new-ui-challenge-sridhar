angular.module('LonelyHeart')
    .directive('topNav', [function() {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'directives/topNav/topNav.html'
        }
    }]);