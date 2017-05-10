'use strict';

/** Because currently on NPM all isObject-ish packages treat array as object which is .... dumb... */

var isArray = function (item) {
    return item.constructor === Array
};

var isObject = function (item) {
    return item.constructor === Object
};

function isCollection(item) {
    return isArray(item) || isObject(item);
}

/**
 * Recursively run callback on items in a Javascript collection - array or object
 * @param collection
 * @param callback
 */
function recursively(collection, callback) {
    if (isArray(collection)) {
        collection.forEach(function (val, index) {
            if (isCollection(val)) {
                recursively(val, callback);
            } else {
                collection[index] = callback(val);
            }
        });
    }
    if (isObject(collection)) {
        Object.keys(collection).forEach(function (key) {
            var val = collection[key];
            if (isCollection(val)) {
                recursively(val, callback);
            } else {
                collection[key] = callback(val);
            }
        });
    }
}

module.exports = recursively;
