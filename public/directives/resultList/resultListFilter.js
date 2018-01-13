angular.module('Utilities', []).
filter('calAge', function() {
    return function(dateStr) {
        return moment().diff(dateStr, 'years');
    }
})
