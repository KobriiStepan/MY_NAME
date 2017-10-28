'use strict';

let mas = ['Мясо рыба помидор баклажан','вода газировка кока-кола спрайт',
'город поселок село столица','белый черный красный зеленый',
'программист строитель инженер водитель','Киев Москав Афины Берлин',
'Бразилия Аргентина Колумбия Чили'];
let w = -1, mas2 = [],a = [true,true,true,true,true,true];
for (let i = 0; i < mas.length; i++) {
	w += 1;
	mas2[w] = '';
	for (let j = 0; j < mas[i].length; j++) {
		if ((mas[i][j] === 'а') && (a[0])) {
			a[0] = false;
			mas2[w] += 'a';
		}
		if ((mas[i][j] === 'о') && (a[1])) {
			a[1] = false;
			mas2[w] += 'о';
		}
		if ((mas[i][j] === 'у') && (a[2])) {
			a[2] = false;
			mas2[w] += 'у';
		}
		if ((mas[i][j] === 'и') && (a[3])) {
			a[3] = false;
			mas2[w] += 'и';
		}
		if ((mas[i][j] === 'е') && (a[4])) {
			a[4] = false;
			mas2[w] += 'е';
		}
		if ((mas[i][j] === 'ы') && (a[5])) {
			a[5] = false;
			mas2[w] += 'ы';
		}
	}
	a[0] =true;
	a[1] =true;
	a[2] =true;
	a[3] =true;
	a[4] =true;
	a[5] =true;
}
console.log(mas2);
const newarr = mas.map(elem => elem.replace(/е|ы|и|у|а|о/, ''));
console.log(newarr);