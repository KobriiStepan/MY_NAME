'use strict';

function random (min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
let mas = [], ms = 'qwertyuiopasdfghjklzxcvbnm   ';
for (let i = 0; i < 25; i++) {
	mas[i] =ms[random(0,25)];
	for (let j = 0; j<random(6,20); j++ ) {
		mas[i] += ms[random(0,ms.length - 1)]; 
	}
}
let tmp;
function sort_len (mas) { 
	for (let i = 0; i < 25; i++) {
		for (let j = 1; j < mas.length; j++){
			if ((mas[j].split(' ').length) > (mas[j - 1].split(' ').length)) {
				tmp = mas[j];
				mas[j] = mas[j - 1];
				mas[j - 1] = tmp;
			}
		}
	}
	return mas;
}
function sumvol (mas) {
  let mas2 = [];
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < mas[i].length; j++) {
	  mas2[i] = [];
	  mas2[i].push(mas[i][j]);
	  for (let z = 0; z < mas[i].length; z++) {
		if (mas[i][z] === mas[i][j]) {
		  mas2[i].push(mas[i][z]);
	    }
	  }
	}
  }
  return mas2;
}
console.log(mas);
console.log(sumvol(mas));