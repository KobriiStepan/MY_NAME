'use strict';

function random (r,min,max) {
	if (r <= 0) {
		return (Math.random() * (max - min) + min);
	}
	if (r > 0) {
		return (Math.floor(Math.random() * (max - min + 1) + min));
	}
}
