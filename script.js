const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.beginPath();
context.arc(canvas.width/2, canvas.height/2, 100, 0, 2 * Math.PI);
context.fillStyle = 'black';
context.fill();

context.beginPath();
context.arc(canvas.width/2 - 30, canvas.height/2 - 30, 20, 0, 2 * Math.PI);
context.fillStyle = 'white';
context.fill();

context.beginPath();
context.arc(canvas.width/2 + 30, canvas.height/2 - 30, 20, 0, 2 * Math.PI);
context.fillStyle = 'white';
context.fill();

context.beginPath();
context.arc(canvas.width/2 - 30, canvas.height/2 - 30, 10, 0, 2 * Math.PI);
context.fillStyle = 'black';
context.fill();

context.beginPath();
context.arc(canvas.width/2 + 30, canvas.height/2 - 30, 10, 0, 2 * Math.PI);
context.fillStyle = 'black';
context.fill();

context.beginPath();
context.moveTo(canvas.width/2 - 50, canvas.height/2 + 30);
context.lineTo(canvas.width/2 - 20, canvas.height/2 + 70);
context.lineTo(canvas.width/2 + 20, canvas.height/2 + 70);
context.lineTo(canvas.width/2 + 50, canvas.height/2 + 30);
context.closePath();
context.fillStyle = 'brown';
context.fill();
