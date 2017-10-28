'use strict';
//let a=prompt('Text','');
let a='hello';
let n=10;
let k=0;
for (let i=0;i<n;i++) {
	k=string.charCodeAt(a[i]);
	k=k+1;
	a[i]=(String.fromCharCode(k));
}
console.log(a);