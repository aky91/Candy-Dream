//Akash Yadav
//@MNNIT Allahabad
//9th Feb 2019

//https://editor.p5js.org/mellomania/full/GOHib_BvR

let x;
let y;

let xspeed;
let yspeed;

let dvd;
let r,g,b;

function preload(){
	dvd = loadImage("rsz_dvd_logo.png");
}

function setup() {
  createCanvas(800, 600);
	x = random(width-dvd.width);
	y = random(height-dvd.height);
	xspeed = 5;
	yspeed = 5;
	colorful();
}

function colorful(){
	r = random(255);
	g = random(255);
	b = random(255);
}

function draw() {
  background(0);
	//rect(x, y, 80, 60);
	tint(r,g,b);
	image(dvd, x,y);
	
	x = x + xspeed;
	y = y + yspeed;
	
	
	if(x+dvd.width >= width || x <= 0){
		xspeed = -xspeed;
		colorful();
	}
	
	if(y+dvd.height >= height || y <= 0){
		yspeed = -yspeed;
		colorful();
	}
}
