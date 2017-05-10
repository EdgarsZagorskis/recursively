Recursively JavaScript
==========

[![Build Status](https://travis-ci.org/EdgarsZagorskis/recursively.svg?branch=master)](https://travis-ci.org/EdgarsZagorskis/recursively)

Recursively run JavaScript callback function on each item in an array or property in an object

## Installation
 
    npm install @edgarszagorskis/recursively
    
## Usage

    var recursively = require('@edgarszagorskis/recursively');
    
    var input = [1, 2, 3, [41, 42, 43]];
    
    var output = recursively(input, function(item){
        return item * 2;
    });
    
    // output will be [2, 4, 6, [42, 84, 86]]
    
## Test

    npm test
    
## Contribution

welcomed....