// //////////////////////
let students = [];

// // Create objects for each student and store their information
let student1 = {
  name: "John",
  x: 0,
  y: 0,
  imageArray: [],
};

let student2 = {
  name: "Sarah",
  x: 30,
  y: 100,
  imageArray: [],
};

let student3 = {
  name: "Mark",
  x: 0,
  y: 200,
  imageArray: [],
};

let student4 = {
  name: "Lovisa",
  x: 0,
  y: 300,
  imageArray: [],
};

let student5 = {
  name: "Mathilda",
  x: 30,
  y: 400,
  imageArray: [],
};

let student6 = {
  name: "Sven",
  x: 0,
  y: 500,
  imageArray: [],
};

// Load images and push them to each student's imageArray property
function preload() {
  student1.imageArray.push(loadImage("images/1.1.png"));
  student1.imageArray.push(loadImage("images/1.2.png"));
  student1.imageArray.push(loadImage("images/1.3.png"));
  student1.imageArray.push(loadImage("images/1.4.png"));

  student2.imageArray.push(loadImage("images/2.1.png"));
  student2.imageArray.push(loadImage("images/2.2.png"));
  student2.imageArray.push(loadImage("images/2.3.png"));
  student2.imageArray.push(loadImage("images/2.4.png"));

  student3.imageArray.push(loadImage("images/3.1.png"));
  student3.imageArray.push(loadImage("images/3.2.png"));
  student3.imageArray.push(loadImage("images/3.3.png"));
  student3.imageArray.push(loadImage("images/3.4.png"));

  student4.imageArray.push(loadImage("images/4.1.png"));
  student4.imageArray.push(loadImage("images/4.2.png"));
  student4.imageArray.push(loadImage("images/4.3.png"));
  student4.imageArray.push(loadImage("images/4.4.png"));

  student5.imageArray.push(loadImage("images/5.1.png"));
  student5.imageArray.push(loadImage("images/5.2.png"));
  student5.imageArray.push(loadImage("images/5.3.png"));
  student5.imageArray.push(loadImage("images/5.4.png"));

  student6.imageArray.push(loadImage("images/6.1.png"));
  student6.imageArray.push(loadImage("images/6.2.png"));
  student6.imageArray.push(loadImage("images/6.3.png"));
  student6.imageArray.push(loadImage("images/6.4.png"));
}

// Add the students to the students array
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
students.push(student5);
students.push(student6);

function setup() {
  createCanvas(screen.width - 30, screen.height - 140);
  frameRate(6);
  // Resize the images
}

let counter = 0;

function draw() {
  background("pink");

  // Loop through the students array and draw their current image
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let imageArray = student.imageArray;
    let x = student.x;
    let y = student.y;
    image(imageArray[counter], x, y);
  }

  counter = (counter + 1) % 4;
}

////////////////////7

let students = [];

// Create objects for each student and store their information
let student1 = {
  x: 0,
  y: 0,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
};

let student2 = {
  x: 0,
  y: 100,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
};

let student3 = {
  x: 0,
  y: 200,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
};

let student4 = {
  x: 0,
  y: 300,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
};

let student5 = {
  x: 0,
  y: 400,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
};

let student6 = {
  x: 0,
  y: 500,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
};
