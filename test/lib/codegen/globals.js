'use strict';

var assert = require('assert');

var globalsCodegen = require('../../../lib/codegen/globals');

describe('Codegen: globals', function() {
    describe('generate', function() {
        it('Should generate code', function() {
            var result = "function() {\n    _.merge(Game, require('_generics'));\n    _.merge(Game, require('_utils'));\n}";

            assert.equal(globalsCodegen.generate(), result);
        });

        it('Should generate adaptive code if provided option globalModules', function() {
            var result = "function() {\n    _.merge(Game, require('foo'));\n}";

            assert.equal(globalsCodegen.generate({globalModules: ['foo']}), result);
        });

        it('Should generate code if options has globalModules and type is a string', function() {
            var result = "function() {\n    _.merge(Game, require('foo'));\n}";

            assert.equal(globalsCodegen.generate({globalModules: 'foo'}), result);
        });
    });
});