'use strict';

const a = (a) => console.log(a);
const b = (a) => {
  return a ? 'true' : 'false';
}
a(b(true));//true
a(b(false));//false
a(b('true'));//true
a(b('false'));//true
a(b(0));//false
a(b(1));//true
a(b('0'));//true
a(b('1'));//true
a(b('00'));//true
a(b(11));//true
a(b('abcdefg'));
a(b(34));