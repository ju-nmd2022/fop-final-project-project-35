let studentsArray = [];
let activeStudents = [];

// Create objects for each student and store their information
let student1 = {
  name: 1,
  x: 0,
  y: 0,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
  directionX: 0,
  directionY: 0,
  maxlife: 30,
};

let student2 = {
  name: 2,
  x: 0,
  y: 100,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
  directionX: 0,
  directionY: 0,
  maxlife: 30,
};

let student3 = {
  name: 3,
  x: 0,
  y: 200,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
  directionX: 0,
  directionY: 0,
  maxlife: 30,
};

let student4 = {
  name: 4,
  x: 0,
  y: 300,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
  directionX: 0,
  directionY: 0,
  maxlife: 30,
};

let student5 = {
  name: 5,
  x: 0,
  y: 400,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
  directionX: 0,
  directionY: 0,
  maxlife: 30,
};

let student6 = {
  name: 6,
  x: 0,
  y: 500,
  modes: {
    still: [],
    walking: [],
  },
  currentMode: "still",
  dragging: false,
  directionX: 0,
  directionY: 0,
  maxlife: 30,
};

function preload() {
  // Student 1
  student1.modes.still.push(loadImage("images/1.png"));
  student1.modes.walking.push(loadImage("images/1.1.png"));
  student1.modes.walking.push(loadImage("images/1.2.png"));
  student1.modes.walking.push(loadImage("images/1.3.png"));
  student1.modes.walking.push(loadImage("images/1.4.png"));

  // Student 2
  student2.modes.still.push(loadImage("images/2.png"));
  student2.modes.walking.push(loadImage("images/2.1.png"));
  student2.modes.walking.push(loadImage("images/2.2.png"));
  student2.modes.walking.push(loadImage("images/2.3.png"));
  student2.modes.walking.push(loadImage("images/2.4.png"));

  // Student 3
  student3.modes.still.push(loadImage("images/3.png"));
  student3.modes.walking.push(loadImage("images/3.1.png"));
  student3.modes.walking.push(loadImage("images/3.2.png"));
  student3.modes.walking.push(loadImage("images/3.3.png"));
  student3.modes.walking.push(loadImage("images/3.4.png"));

  // Student 4
  student4.modes.still.push(loadImage("images/4.png"));
  student4.modes.walking.push(loadImage("images/4.1.png"));
  student4.modes.walking.push(loadImage("images/4.2.png"));
  student4.modes.walking.push(loadImage("images/4.3.png"));
  student4.modes.walking.push(loadImage("images/4.4.png"));

  // Student 5
  student5.modes.still.push(loadImage("images/5.png"));
  student5.modes.walking.push(loadImage("images/5.1.png"));
  student5.modes.walking.push(loadImage("images/5.2.png"));
  student5.modes.walking.push(loadImage("images/5.3.png"));
  student5.modes.walking.push(loadImage("images/5.4.png"));

  // Student 6
  student6.modes.still.push(loadImage("images/6.png"));
  student6.modes.walking.push(loadImage("images/6.1.png"));
  student6.modes.walking.push(loadImage("images/6.2.png"));
  student6.modes.walking.push(loadImage("images/6.3.png"));
  student6.modes.walking.push(loadImage("images/6.4.png"));

  //pushing in students in studentsArray
  studentsArray.push(
    student1,
    student2,
    student3,
    student4,
    student5,
    student6
  );
}

let counter = 0;
let studentNumber = 6;

function setup() {
  createCanvas(screen.width - 30, screen.height - 140);
  frameRate(3);
}

function drawStudents(student) {
  let img = student.modes.walking[counter % 4];
  image(img, student.x, student.y);
}

function updateStudents(student) {
  student.x = student.x + Math.random() * 10 - 5;
  student.y = student.y + Math.random() * 10 - 5;
}

function spawnStudents() {
  if (activeStudents.length === 0) {
    for (let i = 0; i < studentNumber; i++) {
      let student = studentsArray[i % 6];
      activeStudents.push(student);
    }
  }
}

function draw() {
  background("pink");
  push();
  noSmooth();
  if (keyIsPressed === true) {
    spawnStudents();
    console.log(activeStudents);
  }
  for (let student of activeStudents) {
    updateStudents(student);
    drawStudents(student);
  }
  counter = counter + 1;
  pop();
  console.log(activeStudents);
}

draw();
