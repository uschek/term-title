'use strict';
module.exports = function (str) {
  str = str || '';
  process.stdout.write('\u001b]0;' + str + '\u0007');
};
