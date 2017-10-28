'use strict';

function random (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function sh (t,f) {
	if (random(1,f) <= t) {return true;}
	else {return false;};
}
/*let a = 0,b = 0;
for (let i = 0; i < 10000; i++) {
	if (sh(3,6) === true) {a += 1}
	else {b += 1};
}
console.log(a);
console.log(b);*/
let mother = {
	zdor: random (20,80),
	ym: random (30,100),
	logika: random (20,60),
	gumanitar: sh(1,2),
	money: random (1,100),
	harka: random (20,90),
	rutor: random (20,100),
	fan: random (20,60),
	yava: random(10,100)
};

let father = {
	zdor: random (30,100),
	ym: random (20,90),
	logika: random (30,100),
	gumanitar: sh(1,2),
	money: random (1,100),
	harka: random (10,100),
	rutor: random (20,80),
	fan: random (10,70),
	yava: random(10,100)
};

let name_girl_mas = ['Aнастасия','Ангелина','Виктория','Анна','Инна','Ева','Алина',
	'Катерина','Мария'];
let name_boy_mas = ['Владислав','Володя','Виктор','Олександр','Анатолий','Джон','Бил'];
let you = sh(1,2)? 'boy':'girl';
let name_mother = name_girl_mas[random(0,(name_girl_mas.length - 1))];
let name_father = name_boy_mas[random(0,(name_boy_mas.length - 1))];

let you_name;
if (you === 'boy') {
	you_name = name_boy_mas[random(0,(name_boy_mas.length - 1))];
}  
else {
	you_name = name_girl_mas[random(0,(name_girl_mas.length - 1))];
};

let you_x = {
	zdor: (((mother.zdor) + (father.zdor)) / 2),
	ym: ((((mother.ym + father.ym) / 2))),
	logika: ((((mother.logika + father.logika) / 2))),
	gumanitar: (mother.gumanitar === father.gumanitar) ? mother.gumanitar : sh(1,2),
	money: (((((mother.money - 10) + father.money) / 2))),
	harka: ((((mother.harka + father.harka) / 2))),
	rutor: ((((mother.rutor + father.rutor) / 2))),
	fan: ((((mother.fan + father.fan) / 2))),
	yava: ((((mother.yava + father.yava) / 2)))
};
console.log('Твою маму зовут ' + name_mother);
console.log('Твоего папу зовут ' + name_father);
console.log('Тебя зовут ' + you_name);
if (you === 'girl') {
	you_x.zdor -= 20; 
}
if (father.zdor > 70) {
	you_x.zdor += 10;
}
if (mother.zdor > 70) {
	you_x.zdor += 15;
}
if (mother.ym > 70) {
	you_x.ym += 15;
}
if (father.ym > 70) {
	you_x.ym += 5;
}
if (you === 'boy') {
	you_x.ym -= 5;
}
if ((mother.rutor > 70) || (father.rutor > 70)) {
	you_x.rutor += 10;
}
if ((mother.fan > 70) || (father.fan > 70)) {
	you_x.fan += 10;
}
if ((you_x.ym < 75)) {
	you_x.gumanitar === true;
}
let life = true, age = 0, speak = false, firstgo = false, frends = 0;
let lifemother = true, lifefather = true, detsad = false, school = false,
schoolclass = 0, music =false, draw = false, schoolmusic = false, war = 0,
schooldraw = false, bal = 0, at = 0, school21 = false, school22 = false,
school23 = false;
function shems (str) {
		life = false;
	}
while (life === true) {
	age += 1;
	if (age === 1) {
		console.log('Вы родились');
	}
	console.log('Год:' + age);
	console.log('');
	if ((school) && (war < 3)) {
		schoolclass +=1;
		console.log('Вы перешли в ' + schoolclass + ' класс');
	}
	if ((war > 0) && (sh (1,5))) {
		war = 0;
		console.log('Воска союзников отклонили атаку');
		console.log('Уровень опасности ' + war);
	}
	if (war !== 0) {
		console.log('Война продолжается');
		console.log('Уровень опасности ' + war);
	}
	else if ((war > 0) && (sh (1,3))) {
		war += 1;
		console.log('Война стает опаснее');
		console.log('Уровень опасности ' + war);
	};
	if (age === 1) {
		if (you_x.zdor > 50) {
			console.log('Вы зделали первый шаг');
			firstgo = true;
		}
	}

	if ((at > 8 ) && (!(school))) {
		console.log('Вы поступили в университет');
		school21 = true;
		at = 0;
	}
	if ((at > 5) && (at < 9) && (!(school))) {
		console.log('Вы поступили в техникум');
		school22 = true;
		at = 0;
	}
	if ((at > 2) && (at < 6) && (!(school))) {
		console.log('Вы поступили в училище');
		school23 = true;
		at = 0;
	}

	if (schoolclass === 5) {
		if (you_x.ym > 60) bal += 1;
		if (you_x.logika > 50) bal += 1;
		if (!(you_x.gumanitar)) bal += 1;
		if (you_x.rutor > 40) bal += 1;
		if (sh(1,2)) bal += 1;
		console.log('Бал за экзамен ' + bal);
		you_x.ym += (2 * bal);
		you_x.logika += (bal);
		bal = 0;
	}

	if (schoolclass === 9) {
		if (you_x.ym > 70) bal += 1;
		if (you_x.logika > 60) bal += 1;
		if (!(you_x.gumanitar)) bal += 1;
		if (you_x.rutor > 50) bal += 1;
		if (sh(1,2)) bal += 1;
		console.log('Бал за экзамен ' + bal);
		you_x.ym += (2 * bal + 1);
		you_x.logika += (bal + 1);
		at += bal;
		bal = 0;
		if ((sh(1,3)) && (you_x.gumanitar)) {
			school = false;
			console.log('Вы закочили школу');
			console.log('Бал атестата ' + at + '/10');
			schoolclass = 0;
		}
	}

	if (schoolclass === 11) {
		if (you_x.ym > 80) bal += 1;
		if (you_x.logika > 70) bal += 1;
		if (!(you_x.gumanitar)) bal += 1;
		if (you_x.rutor > 60) bal += 1;
		if (sh(1,2)) bal += 1;
		console.log('бал за экзамен ' + bal);
		you_x.ym += (2 * bal + 6);
		you_x.logika += (bal + 4);
		school = false;
		at += bal;
		bal = 0;
		console.log('Вы закочили школу');
		console.log('Бал атестата ' + at + '/10');
		schoolclass = 0;
	}
	if (age === 2) {
		if ((you_x.ym > 80) || (you_x.gumanitar === true)) {
			console.log('Вы научились говорить');
			speak = true;
		}
		if (firstgo === false) {
			console.log('Вы зделали первый шаг');
		}
		if (you_x.money > 70) {
			console.log('Вас отдали в детский сад');
			detsad = true;
			if ((sh(1,2)) === true) {
				frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
			}
		}
	}

	if (age === 3) {
		if (speak === false) {
			console.log('Вы научились говорить');
			speak = true;
		}
		if (((mother.rutor > 40) || (father.rutor > 50)) && (speak === true)) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if (detsad === false) {
			console.log('Вас отдали в детский сад');
			detsad = true;
			if ((sh(1,2)) === true) {
				frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
			}
		}
	}

	if (age === 4) {
		if ((mother.rutor > 70) || (father.rutor > 80)) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((sh(1,20)) === true) {
			you_x.zdor -= 20;
			console.log('Произошла катострофа и вы получили травму');
			if (frends >= 2) {
				console.log('Вы посорились с другом');
				frends -= 1;
				console.log('Количество друзей ' + frends);
			}
		}
		if (you_x.money > 50) {
			console.log('Вы поехали с родителями в путешествие');
		}
		if (you_x.harka > 60) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if (you_x.gumanitar) {
			console.log('Вы научились читать');
		}
	}
	if (age === 5) {
		if (you_x.gumanitar === false) {
			console.log('Вы пошли в школу');
			school = true;
			schoolclass += 1;
			console.log(schoolclass + ' класс');
			console.log('Вы научились читать');
		}
		if (you_x.money > 65) {
			console.log('Вы поехали в детский лагерь');
		}
		if ((you_x.rutor < 50) && (frends >= 2)) {
			console.log('Вы посорились с другом');
			frends -= 1;
			console.log('Количество друзей ' + frends);
		}
		if (sh(1,7)) {
			console.log('Вы увлеклись рисованием');
			draw = true;
		}
		if (sh(1,7)) {
			console.log('Вы увлеклись музыкой');
			music = true;
		}
		if (you_x.money > 50) {
			console.log('Вам купили новый велосипед');
		}
	}
	if (age === 6){
		if ((you_x.ym > 40 ) && (!(school))) {
			console.log('Вы пошли в школу');
			school = true;
			schoolclass += 1;
			console.log(schoolclass + ' класс');
		}
		if ((music) && (you_x.money > 60)) {
			console.log('Вы пошли в музыкальную школу');
			schoolmusic = true;
		}
		if ((draw) && (you_x.money > 50)) {
			console.log('Вы пошли в школу рисования');
			schooldraw = true;
		}
		if ((sh(1,4)) && (!(draw))) {
			console.log('Вы увлеклись рисованием');
			draw = true;
		}
		if ((sh(1,4)) && (!(music))) {
			console.log('Вы увлеклись музыкой');
			music = true;
		}
		if (!(you_x.gumanitar)) {
			console.log('Вы научились считать');
		}
		if (you_x.fan > 50) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((you_x.money > 65) && (sh(2,3))) {
			console.log ('Вы поехали на море');
		}
	}
	if (age === 7){
		if (!(school)) {
			console.log('Вы пошли в школу');
			school = true;
			schoolclass += 1;
			console.log(schoolclass + ' класс');
		}
		if ((music) && (you_x.money > 60) && (!(schoolmusic))) {
			console.log('Вы пошли в музыкальную школу');
			schoolmusic = true;
		}
		if ((draw) && (you_x.money > 50) && (!(schooldraw))) {
			console.log('Вы пошли в школу рисования');
			schooldraw = true;
		}
		if ((sh(1,4)) && (!(draw))) {
			console.log('Вы увлеклись рисованием');
			draw = true;
		}
		if ((sh(1,4)) && (!(music))) {
			console.log('Вы увлеклись музыкой');
			music = true;
		}
		if (you_x.yava > 50) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((you_x.money > 65) && (sh(2,3))) {
			console.log ('Вы поехали на море');
		}
		if ((you_x.money > 80) && (sh(1,2))){
			console.log('Вы переехали в другой город');
		}
		if ((sh(1,5)) && (frends > 0)) {
			frends -= 1;
			console.log('Вы посорились с другом');
			console.log('Количество друзей ' + frends);
		}
	}
	if (age === 8){
		if ((music) && (you_x.money > 60) && (!(schoolmusic))) {
			console.log('Вы пошли в музыкальную школу');
			schoolmusic = true;
		}
		if ((draw) && (you_x.money > 50) && (!(schooldraw))) {
			console.log('Вы пошли в школу рисования');
			schooldraw = true;
		}
		if ((sh(1,4)) && (!(draw))) {
			console.log('Вы увлеклись рисованием');
			draw = true;
		}
		if ((sh(1,4)) && (!(music))) {
			console.log('Вы увлеклись музыкой');
			music = true;
		}
		if (you_x.logika > 70) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((you_x.money > 65) && (sh(2,3))) {
			console.log ('Вы поехали на море');
		}
		if ((you_x.money > 80) && (sh(1,2))){
			console.log('Вам купили новый компютер');
		}
		if ((sh(1,4)) && (frends > 0)) {
			frends -= 1;
			console.log('Вы посорились с другом');
			console.log('Количество друзей ' + frends);
		}
	}
	if (age === 9){
		if ((music) && (you_x.money > 60) && (!(schoolmusic))) {
			console.log('Вы пошли в музыкальную школу');
			schoolmusic = true;
		}
		if ((draw) && (you_x.money > 50) && (!(schooldraw))) {
			console.log('Вы пошли в школу рисования');
			schooldraw = true;
		}
		if (sh(1,3)) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((you_x.money > 65) && (sh(1,3))) {
			console.log ('Вы поехали на море');
		}
		if ((you_x.money > 80) && (sh(1,2))){
			console.log('Вам купили новый телефон');
		}
		if ((sh(1,5)) && (frends > 0)) {
			frends -= 1;
			console.log('Вы посорились с другом');
			console.log('Количество друзей ' + frends);
		}
	}
	if (age === 10){
		if (sh(1,3)) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((you_x.money > 65) && (sh(1,3)) && (war < 2)) {
			console.log ('Вы поехали на море');
		}
		if ((you_x.money > 80) && (sh(1,4))){
			console.log('У вас дома зделали ремонт');
		}
		if (you_x.yava > 50) {
			console.log('Вы увлеклись компютерными играми');
		}
		if ((sh(1,5)) && (frends > 0)) {
			frends -= 1;
			console.log('Вы посорились с другом');
			console.log('Количество друзей ' + frends);
		}
	}
	if (age === 11){
		if (sh(1,3)) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((you_x.money > 68) && (sh(1,3)) && (war < 2)) {
			console.log ('Вы поехали на море');
		}
		if ((you_x.money > 95) && (sh(1,4))){
			console.log('Вам купили новый дом');
		}
		if ((you_x.yava > 70) && (frends < 3)) {
			console.log('Вы превратились в задрота');
		}
		if ((sh(1,5)) && (frends > 0)) {
			frends -= 1;
			console.log('Вы посорились с другом');
			console.log('Количество друзей ' + frends);
		}
	}
	if (age === 12){
		if (sh(1,3)) {
			frends += 1;
			console.log('У вас появился новый друг');
			console.log('Количество друзей ' + frends);
		}
		if ((you_x.money > 68) && (sh(1,3)) && (war < 2)) {
			console.log ('Вы поехали на море');
		}
		if ((you_x.money > 54) && (sh(1,2)) && (war < 2)) {
			console.log ('Вы поехали на фестеваль');
		}
		if ((sh(1,5)) && (frends > 0)) {
			frends -= 1;
			console.log('Вы посорились с другом');
			console.log('Количество друзей ' + frends);
		}
	}

	if (age >= 50) {
		life = false;
	}
	if (((sh(1,150 - age)) === true) && (lifefather === true)) {
		console.log('-----------> У вас умер отец');
		lifefather = false;
		you_x.fan -= 20;
	}
	if (((sh(1,150 - age)) === true) && (lifemother === true)) {
		console.log('-----------> У вас умерла мать');
		lifemother = false;
		you_x.fan -= 20;
	}
	if ((sh(1,8)) && (war === 0 )) {
			war = 1;
			console.log('В вашей стране началась война');
			console.log('Уровень опасности ' + war);
		}
	console.log('');
}