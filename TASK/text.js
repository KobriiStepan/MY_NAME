'use strict';

function fust (str,arg) {
	let len = str.length;
	let larg = arg.length;
	let fun;
	let obj = {};
	let boo = true;
	let w = -1;
	let str2 = '';
	let tmp;
	if (arg[0] === '-') fun = arg[1];
	switch (fun) {
		case 'l':
			return (len);
			break;
		case 'n':
			if ((arg[2] === '?') && (arg[3] !== '?')) {
				obj.number = true;
				let mass = [];
				for (let i = 0; i < len; i++) {
					switch (str[i]) {
						case '1':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '1') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 1;
								obj.n = mass;
							}
							boo =true;
							break;
						case '2':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '2') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 2;
								obj.n = mass;
							}
							boo =true;
							break;
						case '3':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '3') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 3;
								obj.n = mass;
							}
							boo =true;
							break;
						case '4':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '4') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 4;
								obj.n = mass;
							}
							boo =true;
							break;
						case '5':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '5') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 5;
								obj.n = mass;
							}
							boo =true;
							break;
						case '6':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '6') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 6;
								obj.n = mass;
							}
							boo =true;
							break;
						case '7':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '7') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 7;
								obj.n = mass;
							}
							boo =true;
							break;
						case '8':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '8') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 8;
								obj.n = mass;
							}
							boo =true;
							break;
						case '9':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '9') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 9;
								obj.n = mass;
							}
							boo =true;
							break;
						case '0':
							for (let j = 0; j < mass.length; j++){
								if (mass[j] == '0') {
									boo = false;
								}
							} 
							if (boo === true) {
								w = w + 1;
								mass[w] = 0;
								obj.n = mass;
							}
							boo =true;
							break;
						default:
							obj.number = false;
							break;
					}
				}
				return(obj);
			}
			if (arg[2] === '>') {
				for (let i = 0; i < len; i++) {
					if ((str[i] === '1') || (str[i] === '0') || (str[i] === '2') || (str[i] === '3') || (str[i] === '4') || (str[i] === '5') || (str[i] === '6') || (str[i] === '7') || (str[i] === '8') || (str[i] === '9')) {
						str2 += str[i];
					}
				}
				return(str2);
			}
			break;
		case 't':
			if ((arg[2] === '?') && (arg[3] === '?')) {
				let i = 5;
				w += 1;
				while (boo === true) { 
					let num = arg[i];
					if (arg[i + 1] !== ','){
						boo = false;
					}
					for (let i = 0; i < len; i++) {
						if (str[i] === num) {
							w += 1;
						}
					}
					i += 2;
				}
				return(w);
			}
			break;
		case 's':
			if (arg[2] === 'e') {
				if ((arg[4] === '-') && (arg[5] === 'l') && (arg[6] === '=')) {
					let mass = [];
					let num = +(arg.substring(7,larg));
					for (let i = num - 1; i < len ; i++) {
						if ((i % num) === 0 ) {
							w += 1;
							mass[w] = str.substring(i-num,i);
						}
					}
					return (mass);
				}
				if ((arg[4] === '-') && (arg[5] === 'l') && (arg[6] === '!')) {
					let mass = [];
					let num = +(arg.substring(7,larg));
					for (let i = num - 1; i < len ; i++) {
						if ((i % num) === 0 ) {
							w += 1;
							mass[w] = str.substring(i-num,i);
							if ((len - i) < num) {
								w+=1;
								mass[w] = str.substring(i,len);
							}
						}
					}
					return (mass);
				}
				if ((arg[4] === '-') && (arg[5] === 's') && (arg[6] === '|') && (arg[8] === '|')) {
					let mass = [];
					tmp = 0;
					for (let i = 0; i < len ; i++) {
						if ((str[i]) === arg[7] ) {
							w += 1;
							mass[w] = str.substring(tmp,i);
							tmp = i + 1;
						}
						if ((i + 1) === len ) {
							w += 1;
							mass[w] = str.substring(tmp,i+1);
						}
					}
					return (mass);
				}
			}
			break;
		default:
			return (str);
			break;
	}	
}
console.log(fust('bcda',''));
