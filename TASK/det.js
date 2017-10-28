'use strict';

function rand (min,max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}
let n=rand(4,9);
function mass() {
	let mas= [];
	for (let i=0; i<n ; i++){
		mas[i]=[];
		for (let j=0; j<n; j++){
			mas[i][j]=rand(0,10);
		}
	}
	return mas;
}
function det (mas){
	console.log(mas);
	let det=1;
	for (let z=0; z<n; z++){
		det*=(mas[z][z]);
		for (let i=z+1; i<n; i++){
			let k=(mas[i][z]/mas[z][z]);
			for(let j=z; j<n; j++){
				mas[i][j]=Math.floor((mas[i][j])-(k*(mas[z][j])));
			}
		}
	}
	console.log(det);
	return(mas);
}
console.log(det(mass()));