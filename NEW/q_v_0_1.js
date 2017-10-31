'use strict';

let string = 'Hello World!';

function shuf (string) {
	function rand (mi,ma) {
		return Math.floor(Math.random() * (ma - mi + 1) + mi);
	}
	let arr = string.split('');
	let str = '';
	let key = rand(1,9);
	for (let i = 0; i < rand(string.length / 2,string.length); i++){
		str += (String.fromCharCode(rand(50,170)));
	}
	str += '~';			// ;)
	for (let i = 0; i < string.length; i++) {
		str += (String.fromCharCode(string.charCodeAt(i) + (15 * key)));
		str += (String.fromCharCode(rand(50,170)));
	}
	str += '№';
	str += key;
	str += rand (1,9);
	for (let i = 0; i < rand(string.length / 2,string.length); i++) {
		str += (String.fromCharCode(rand(50,170)));
	}
	return str;
}

function deshuf (string) {
	let str = '';
	let stt = '';
	let tmp = 0;
	let key = 0;
	let a = 0;
	for (let i = 0; i < string.length; i++) {
		if ((string[i] === '~') && (tmp === 0)) {
			tmp = 1;
		}
		if ((string[i] === '№') && (tmp === 1)) {
			tmp = 2;
		}
		if (tmp === 1) {
			a++;
			if ((a % 2) === 0) {
				str += string[i];
			}
		}
		if (string[i] === '№') {
			key = i + 1;
		}
		if ((i === key) && (tmp === 2)) {
			key = +(string[i]);
			tmp = 3;
		}
	}
	for (let i = 0; i < str.length; i++) {
		stt += String.fromCharCode(str.charCodeAt(i) - (15 * key) );
	}
	return stt;
}

console.log(string);
let stt = shuf(string);

console.log(stt);
console.log(deshuf(stt));

console.log('');

let test = 'My name is [MY_NAME]!';
console.log(test);

test = shuf(test);
console.log(test);

test = deshuf(test);
console.log(test);