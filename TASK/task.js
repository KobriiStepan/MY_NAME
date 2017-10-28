'use strict';

let mas = ['Mozart1','Bethoven1','Till Lindelma','Ryxad Kruspe','Paul Landers',
'Json Vaite','Json Friz','Tre Kull','Maik Dern','Billy Jo','Den Reinols',
'Vein Sermon','Mark Shinoda','Jo Xan','Bred Delson','Rob Burdon','Devid Faler',
'Jems Hetfilt','Lars Ulrix','Kirk Xemmmet','Robert Truxildo','Jon Lenon',
'Ringo Star','Poll Makarin','Jorj Xarison'];

let z,a,z1;
let boo = true;
let mas2 = [];
for (z of mas){
	a = z.split('');
	for (z1 of a) {
		if ((z1 === '1') || (z1 === '2') || (z1 === '3') || 
			(z1 === '4') || (z1 === '5') || (z1 === '6') || 
			(z1 === '7') || (z1 === '8') || (z1 === '9') || 
			(z1 === '0')) {
			boo = false;
		}
	}
	if (boo === true) {
		mas2.push(z);
	}
	boo = true;
}
console.log(mas2);