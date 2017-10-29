'use strict';

const fn = () => {};

let date = new Date();
let hours = date.getHours(), milli = date.getMilliseconds(), min = date.getMinutes(),
month = date.getMonth(), seconds = date.getSeconds(), day = date.getUTCDay();
let sum = hours + milli + min + month + seconds + day;

console.log(sum);