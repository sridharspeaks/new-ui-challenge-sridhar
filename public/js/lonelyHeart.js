angular.module('LonelyHeart', ['Utilities']);

function buildUrlWithQueryData(url, queryData) {
    if (queryData && typeof queryData == 'object') {
        url += '?';
        Object.keys(queryData).forEach(function(key) {
            url += key + '=' + queryData[key] + '&';
        });

        url = url.substr(0, url.length - 1);
    } else if (queryData && typeof queryData == 'string') {
        url = url + '/' + queryData;
    }
    return url;
}

