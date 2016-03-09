// TODO: guard against not context i.e. old browswers
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.left = 0;
canvas.style.top = 0;
canvas.style.zIndex = -1;


window.onresize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};


var ctx = canvas.getContext('2d');

document.addEventListener('mouseover', function() {
	showInfo();
});