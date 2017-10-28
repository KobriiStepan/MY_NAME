'use strict';

const rand = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [], _arr = [];
const lengtharr = rand(10,20);

for (let i = 0; i < lengtharr; i++) {
  arr.push(rand(0,9));//push
  _arr[i] = rand(0,9);//[i] element
}

console.log('1 arr = ' + arr + ' 2 aar = ' + _arr);

arr = arr.sort();
_arr = _arr.sort().reverse();

console.log('1 sort > = ' + arr + ' 2 sort < = ' + _arr);