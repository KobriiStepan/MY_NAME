'use strict';

const str = 'Hello World';
const test = 'CJGFktfcKTCYT hvjuYVK'
const test1 = 'JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language.';
const test2 = 'Всем привет, на завтра нет дз';
const arr1 = ['Q','W','E','R','T','Y','U','I','O','P','H','A','S','D','F','G','J','K','L','Z','X','C','V','B','N','M','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ё','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю'];
const arr2 = ['q','w','e','r','t','y','u','i','o','p','h','a','s','d','f','g','j','k','l','z','x','c','v','b','n','m','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ё','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю'];
const testarr1 = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','ё','кю','в','й','дж','кс','к'];
const testarr2 = ['i','z','u','k','e','n','g','sh','shch','z','h','','f','u','v','a','p','r','o','l','d','z','e','ia','ch','s','m','i','t','','b','iu','io','q','w','y','j','x','c']

const zamm = (str,arr1,arr2) => {
  let string = '', boo;
  for (let i = 0; i < str.length; i++) {
  	boo = true;
  	for (let j = 0; j < arr1.length; j++) {
  	  if ((str[i] === arr1[j]) && (boo)) {
  	  	string += arr2[j];
  	  	boo = false;
  	  } 
  	}
  	if (boo) {
  	  string += str[i];
  	}
  } 
  return string;
}

console.log(zamm(str, arr1, arr2));							//тест на большую букву 
console.log(zamm(test, arr1, arr2));						//тоже самое
console.log(zamm(test1.toLowerCase(), testarr2, testarr1));	//транслит с англиского
console.log(zamm(test2.toLowerCase(), testarr1, testarr2));	//транслит с русского
