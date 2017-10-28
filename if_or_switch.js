'use strict';

/*
1 - q
2 - w
3 - 2 + n
4 - n * n
5 - 3 - 1
6 - hello
default - no
*/

let n = 9;

//*
(n === 1) ? console.log('q') : ((n === 2) ? console.log('w') : ((n === 3) ? console.log(2 + n) : ((n === 4) ? console.log(n * n) : ((n === 5) ? console.log(3 - 1) : ((n === 6) ? console.log('hello') : console.log('no') )))));
/*/
if (n === 1) console.log('q');
if (n === 2) console.log('w');
if (n === 3) console.log(2 + n);
if (n === 4) console.log(n * n);
if (n === 5) console.log(3 - 1);
if (n === 6) console.log('hello');
if ((n > 6) || (n < 1)) console.log('no');
/*/
if (n === 1) {
	console.log('q');
}
else if (n === 2) {
	console.log('w');
}
else if (n === 3) {
	console.log(2 + n);
}
else if (n === 4) {
	console.log(n * n);
}
else if (n === 5) {
	console.log(3 - 1);
}
else if (n === 6) {
	console.log('hello');
}
else {
	console.log('no');
}
//*/

//*
switch (n) {
	case 1:
		console.log('q');
		break;
	case 2:
		console.log('w');
		break;
	case 3:
		console.log(2 + n);
		break;
	case 4:
		console.log(n * n);
		break;
	case 5:
		console.log(3 - 1);
		break;
	case 6:
		console.log('hello');
		break;
	default:
		console.log('no');
		break;
}
//*/
