'use strict';

var time_to_english = require('../lib/time_to_english.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

/*exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(time_to_english.awesome(), 'awesome', 'should be awesome.');
    test.done();
  },
};*/

module.exports.time_to_english = {
  '00:00': function (test) {
    test.expect(1);
    test.equal(time_to_english('00:00'), "It's twelve am");
    test.done();
  },
  '01:30': function (test) {
    test.expect(1);
    test.equal(time_to_english('01:30'), "It's one thirty am");
    test.done();
  },
  '12:05': function (test) {
    test.expect(1);
    test.equal(time_to_english('12:05'), "It's twelve oh five pm");
    test.done();
  },
  '14:01': function (test) {
    test.expect(1);
    test.equal(time_to_english('14:01'), "It's two oh one pm");
    test.done();
  },
  '20:29': function (test) {
    test.expect(1);
    test.equal(time_to_english('20:29'), "It's eight twenty nine pm");
    test.done();
  },
  '21:00': function (test) {
    test.expect(1);
    test.equal(time_to_english('21:00'), "It's nine pm");
    test.done();
  }
};
