'use strict';

const obj = {
	name: 'Stepan',
	city: 'Vinniza',
	born: 2000,
	object: {
		s: 't',
		e: 'p',
		a: 'n'
	},
	mas: [1,2,3,4,5,6,7,8,9,8,9,6,5,4],
	booleon: true
}

console.log(obj);

obj.city = 'Kiev';
obj.object.a = 'r';
obj.mas[13] = 0; 
obj.booleon = false;
delete obj.city;

console.log(obj);
let ss1 = '';
let ss = '12345';
let nn = +(ss.substring(2,ss.length));
console.log(nn);
