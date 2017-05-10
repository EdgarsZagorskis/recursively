'use strict';

var expect = require('chai').expect;
var recursively = require('../index');

function multiply(item) {
    return item * 2;
}

describe('recursively', function () {

    describe('on array', function () {

        it('should multiply items in flat array', function () {
            var input = [1, 2];
            recursively(input, multiply);
            expect(input[0]).to.equal(2);
            expect(input[1]).to.equal(4);
        });

        it('should multiply items in nested array', function () {
            var input = [1, 2, [3, 4]];
            recursively(input, multiply);
            expect(input[0]).to.equal(2);
            expect(input[1]).to.equal(4);
            expect(input[2][0]).to.equal(6);
            expect(input[2][1]).to.equal(8);
        });

    });

    describe('on object', function () {

        it('should multiply values in flat object', function () {
            var input = {a: 1, b: 2};
            recursively(input, multiply);
            expect(input.a).to.equal(2);
            expect(input.b).to.equal(4);
        });

        it('should multiply values in nested object', function () {
            var input = {a: 1, b: 2, c: {c1: 3, c2: 4}};
            recursively(input, multiply);
            expect(input.a).to.equal(2);
            expect(input.b).to.equal(4);
            expect(input.c.c1).to.equal(6);
            expect(input.c.c2).to.equal(8);
        });

    });


    describe('on object and array mashup', function () {

        it('should find objects in array', function () {
            var input = [{a: 1, b: 2}];
            recursively(input, multiply);
            expect(input[0].a).to.equal(2);
            expect(input[0].b).to.equal(4);
        });

        it('should find arrays in object', function () {
            var input = {a: 1, b: 2, c: [3, 4]};
            recursively(input, multiply);
            expect(input.a).to.equal(2);
            expect(input.b).to.equal(4);
            expect(input.c[0]).to.equal(6);
            expect(input.c[1]).to.equal(8);
        });

        it('should find really deep data', function () {
            var input = {a: [{b: [{c: [{d: 1}]}]}]};
            recursively(input, multiply);
            expect(input.a[0].b[0].c[0].d).to.equal(2);
        })

    });


});