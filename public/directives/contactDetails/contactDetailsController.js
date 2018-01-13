angular.module('LonelyHeart')
    .directive('contactDetails', [function() {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'directives/contactDetails/contactDetails.html'
        }
    }]);

