'use strict';

function random (min,max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}
let n = random(5,20);
console.log(n);
let mas = [];
for (let i = 0; i<n; i++) {
  mas[i]=[];
  for (let j = 0; j<n; j++) {
    mas[i][j] = random (1,9);
    if (((i === 0) || (i === n - 1)) || ((j === 0) || (j === n - 1))) {
      mas[i][j] = 0;
    } 
  }
}
console.log(mas);
