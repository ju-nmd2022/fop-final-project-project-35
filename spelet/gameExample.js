let img1, img2, img3;
let bildArray = [];
let counter = 0;

function preload() {
  img1 = loadImage("spelet/Artboard2.png");
  img2 = loadImage("spelet/Artboard3.png");
  img3 = loadImage("spelet/Artboard4.png");
  img4 = loadImage("spelet/Artboard5.png");
  bildArray.push(img1, img2, img3, img4);
}

function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
  // Resize the images
  for (let i = 0; i < bildArray.length; i++) {
    bildArray[i].resize(bildArray[i].width / 6, bildArray[i].height / 6);
  }
}

let bildX = 0;
let bildY = 0;

function draw() {
  background(50, 50, 50);
  image(bildArray[counter], bildX, bildY);
  counter = (counter + 1) % bildArray.length;
  bildX = bildX + 4;
}
