const canvas=document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width=200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,300,50);
car.draw(ctx);