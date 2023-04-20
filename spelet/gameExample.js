let img1, img2, img3;
let bildArray = [];
let counter = 0;

function preload() {
  img1 = loadImage("Artboard1new.png");
  img2 = loadImage("Artboard3.png");
  img3 = loadImage("Artboard4.png");
  img4 = loadImage("Artboard5.png");
  bildArray.push(img1, img2, img3, img4);
}

function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
  // Resize the images
}

let bildX = 0;
let bildY = 0;

function draw() {
  background(50, 50, 50);
  image(bildArray[counter], bildX, bildY);
  counter = (counter + 1) % bildArray.length;
  bildX = bildX + 4;
}
