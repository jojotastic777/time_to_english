/*
 * time_to_english
 *
 *
 * Copyright (c) 2017 jojotastic777
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (time) {
  var timePhrase = "It's ";
  var timeSplit = time.split(":");
  timeSplit[0] = parseInt(timeSplit[0], 10);
  timeSplit[1] = parseInt(timeSplit[1], 10);

  function numToWord (num) {
    var ones = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'];
    var tens = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty'];

    if (num < 20) {
      return ones[num];
    } else if (num%10 !== 0) {
      return tens[Math.floor(num/10)] + ' ' + ones[num%10];
    } else {
      return tens[Math.floor(num/10)];
    }
  }

  timePhrase += numToWord(timeSplit[0]%12);

  if (timeSplit[1] < 10 && timeSplit[1] > 0) {
    timePhrase += ' oh';
  }

  if (timeSplit[1] !== 0) {
    timePhrase += ' ' + numToWord(timeSplit[1]);
  }

  if (Math.floor(timeSplit[0]/12) !== 1) {
    timePhrase += ' am';
  } else {
    timePhrase += ' pm';
  }

  return timePhrase;
};
