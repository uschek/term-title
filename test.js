import test from 'ava';
import fs from 'fs';

test.cb('read file', t => {
  fs.readFile('index.js', 'utf-8', (err, data) => {
    if (!err && data.match(/\\u001b\]/)) {
      t.pass();
      t.end();
      return;
    }

    t.fail();
    t.end();
  });
});
