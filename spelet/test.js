let studentsArray = [];
let activeStudents = [];
let lifted = undefined;
let gameState = "startScreen";

// Create objects for each student and store their information
let student1 = {
  name: 1,
  x: 200,
  y: 100,
  modes: {
    still: [],
    walking: [],
    dragged: [],
  },
  currentMode: "walking",
  directionX: 0,
  directionY: 0,
  maxlife: 0,
  classroom: false,
};

let student2 = {
  name: 2,
  x: 0,
  y: 500,
  modes: {
    still: [],
    walking: [],
    dragged: [],
  },
  currentMode: "walking",
  directionX: 0,
  directionY: 0,
  maxlife: 0,
  classroom: false,
};

let student3 = {
  name: 3,
  x: 400,
  y: 200,
  modes: {
    still: [],
    walking: [],
    dragged: [],
  },
  currentMode: "walking",
  directionX: 0,
  directionY: 0,
  maxlife: 0,
  classroom: false,
};

let student4 = {
  name: 4,
  x: 500,
  y: 300,
  modes: {
    still: [],
    walking: [],
    dragged: [],
  },
  currentMode: "walking",
  directionX: 0,
  directionY: 0,
  maxlife: 0,
  classroom: false,
};

let student5 = {
  name: 5,
  x: 0,
  y: 400,
  modes: {
    still: [],
    walking: [],
    dragged: [],
  },
  currentMode: "walking",
  directionX: 0,
  directionY: 0,
  maxlife: 0,
  classroom: false,
};

let student6 = {
  name: 6,
  x: 900,
  y: 500,
  modes: {
    still: [],
    walking: [],
    dragged: [],
  },
  currentMode: "still",
  directionX: 0,
  directionY: 0,
  maxlife: 0,
  classroom: false,
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

  //loadingg the image of classroom
  classroomImage = loadImage("images/classroom.png");
  //prigress bar
  progressGarrit = loadImage("images/progressCircle.png");
  progressGarritSad = loadImage("images/progressCircleSad.png");
  progressGarritHappy = loadImage("images/progressCircleHappy.png");
}

let counter = 0;
let studentNumber = 1;
let lifeTimer = 300;
let classroomLifeTimer = 500;

let studentsInClass = 0;
let clickableButton = false;

function startPage() {}

function setup() {
  createCanvas(screen.width - 30, screen.height - 170);
  frameRate(60);
}
let startButton;
let increaseButton;
let decreaseButton;

function startScreen() {
  background(0, 0, 0);

  textFont("fantasy");
  circle(width / 2, height / 2 - 50, 200);
  ellipse(width - width / 4, height / 3, 500, 200);
  text("hello, blablabla bla", width - width / 4 - 150, height / 3);

  push();
  textSize(60);

  fill(255, 255, 255);
  text(studentNumber, width / 2, height - 185);
  pop();

  //startbutton
  push();

  textSize(40);
  rect(width / 2 - 95, height - 150, 190, 60, 100);
  fill(255, 40, 20);
  text("START", width / 2 - 63, height - 105);
  pop();

  //increaseButton
  push();

  textSize(40);
  ellipse(width / 2 + 80, height - 200, 50, 50);
  text("+", width / 2 + 68, height - 185);
  pop();

  //decreaseButton
  push();

  textSize(40);
  ellipse(width / 2 - 80, height - 200, 50, 50);
  text("-", width / 2 - 78, height - 185);
  pop();
}

function nextScreen() {
  background(0, 0, 0);

  textFont("fantasy");

  text("hello, blablabla bla", width - 150, height / 3);

  push();
  textSize(60);

  fill(255, 255, 255);
  text(studentNumber, width / 2, height - 185);
  pop();

  //startbutton
  push();

  textSize(40);
  rect(width / 2 - 95, height - 150, 190, 60, 100);
  fill(255, 40, 20);
  text("START", width / 2 - 63, height - 105);
  pop();

  //increaseButton
  push();

  textSize(40);
  ellipse(width / 2 + 80, height - 200, 50, 50);
  text("+", width / 2 + 68, height - 185);
  pop();

  //decreaseButton
  push();

  textSize(40);
  ellipse(width / 2 - 80, height - 200, 50, 50);
  text("-", width / 2 - 78, height - 185);
  pop();
}

let rotation = 0;

function drawStudents(student) {
  if (student.currentMode === "walking") {
    let img = student.modes.walking[Math.floor(counter / 6) % 4];
    image(img, student.x, student.y);
  } else if (student.currentMode === "still") {
    let img = student.modes.still[0];
    image(img, student.x, student.y);
  } else if (student.currentMode === "dragged") {
    let img = student.modes.walking[Math.floor(counter / 3) % 4];
    push();
    fill(0, 0, 0, 50);
    noStroke();
    ellipse(student.x + 38, student.y + 95, 50, 20);
    pop();
    push();
    translate(student.x + img.width / 2, student.y + img.height / 2);
    let rotation = 30 * sin(frameCount * 4.5);
    rotate(rotation);

    image(
      img,
      0 - img.width / 2,
      0 - img.height / 2,
      img.width * 1.1,
      img.height * 1.1
    );
    pop();
  }
}

//if in classroom change to another lifetimer
function updateStudents(student) {
  if (student.currentMode !== "dragged") {
    if (student.maxlife === undefined) {
      student.maxlife = 0;
    }

    // change the direction every 30 frames
    if (student.maxlife % lifeTimer === 0) {
      student.randomX = Math.random() * 3 - 1.5;
      student.randomY = Math.random() * 3 - 1.5;
      let state = Math.floor(Math.random() * 2);
      if (state === 0) {
        student.currentMode = "walking";
      } else {
        student.currentMode = "still";
      }
    }

    if (student.maxlife < lifeTimer) {
      if (student.currentMode === "walking") {
        student.x = student.x + student.randomX;
        student.y = student.y + student.randomY;
      }
    }

    student.maxlife = student.maxlife + 1;

    // Reset the counter when 30
    if (student.maxlife === lifeTimer) {
      student.maxlife = 0;
    }
  }
}

function spawnStudents() {
  if (activeStudents.length === 0) {
    for (let i = 0; i < studentNumber; i++) {
      if (i < studentsArray.length) {
        let student = studentsArray[i];
        activeStudents.push(student);
      } else {
        let student = Object.assign(
          {},
          studentsArray[i % studentsArray.length]
        );
        activeStudents.push(student);
      }
    }
  }
}

function offScreenWalk(student) {
  if (student.x < -50) {
    student.x = width;
  } else if (student.x > width) {
    student.x = -50;
  } else if (student.y < -70) {
    student.y = height - 2;
  } else if (student.y > height) {
    student.y = -70;
  }
}

function mousePressed() {
  let distGarritButton = dist(width - 196, height - 110, mouseX, mouseY);
  if (clickableButton === true && distGarritButton < 120) {
    gameState = "nextScreen";
    activeStudents = [];

    console.log("bla");
  }
  for (student of activeStudents) {
    if (
      mouseX > student.x &&
      mouseX < student.x + 68 &&
      mouseY > student.y &&
      mouseY < student.y + 80
    ) {
      lifted = student;
      student.currentMode = "dragged";
      console.log(student);
      break;
    }
  }
  if (gameState === "startScreen" || gameState === "nextScreen") {
    if (dist(mouseX, mouseY, width / 2 + 80, height - 200) < 25) {
      studentNumber = studentNumber + 1;
    }
    if (
      dist(mouseX, mouseY, width / 2 - 80, height - 200) < 25 &&
      studentNumber > 0
    ) {
      studentNumber = studentNumber - 1;
    }
    if (
      mouseX > width / 2 - 95 &&
      mouseX < width / 2 + 95 &&
      mouseY > height - 150 &&
      mouseY < height - 90
    ) {
      for (student of studentsArray) {
        student.x = Math.random() * width;
        student.y = Math.random() * height;
      }
      spawnStudents();

      gameState = "gameScreen";
    }
  }
}
width / 2 - 95, height - 150, 190, 60;

function mouseDragged() {
  if (lifted !== undefined) {
    student.x = mouseX - 34;
    student.y = mouseY - 50;
  }
}

function mouseReleased() {
  if (lifted !== undefined) {
    student.currentMode = "still";
    lifted = undefined;
    rotation = 0;
  }
}

// for every student if student.classroom === true then +1 else +0 in a completedStudents variable
function classroomCheck(student) {
  if (
    student.classroom === false &&
    student.x > 3 &&
    student.x < 320 &&
    student.y > 0 &&
    student.y < 380
  ) {
    student.classroom = true;
    studentsInClass = studentsInClass + 1;
    console.log(studentsInClass);
  } else if (
    student.classroom === true &&
    (student.x < 3 || student.x > 320 || student.y < 0 || student.y > 380)
  ) {
    student.classroom = false;
    studentsInClass = studentsInClass - 1;
    console.log(studentsInClass);
  }
}
//comparing array order
function compareNumbers(a, b) {
  return a.y - b.y;
}

function drawProgressBar() {
  noStroke();
  if (studentsInClass / activeStudents.length === 1) {
    image(
      progressGarritHappy,
      width - 300,
      height - 315,
      progressGarritHappy.width * 0.7,
      progressGarritHappy.height * 0.7
    );
  } else if (studentsInClass / activeStudents.length > 0.5) {
    image(
      progressGarrit,
      width - 300,
      height - 315,
      progressGarrit.width * 0.7,
      progressGarrit.height * 0.7
    );
  } else {
    image(
      progressGarritSad,
      width - 300,
      height - 315,
      progressGarrit.width * 0.7,
      progressGarrit.height * 0.7
    );
  }

  angleMode(DEGREES);
  push();
  fill("white");
  stroke("black");
  strokeWeight(2);
  circle(width - 196, height - 110, 160, 160);
  pop();
  push();
  fill(130, 34, 24);
  arc(
    width - 196,
    height - 110,
    158,
    158,
    -90,
    (studentsInClass / activeStudents.length) * 270
  );
  pop();
  push();
  fill("yellow");
  circle(width - 196, height - 110, 120, 120);
  pop();
  //text
  textSize(35);
  text(studentsInClass, width - 210, height - 130);
  textSize(20);
  text(" of ", width - 210, height - 105);
  textSize(35);
  text(activeStudents.length, width - 210, height - 70);
}

function activateButton() {
  if (studentsInClass / activeStudents.length === 1) {
    console.log("yeee");
    clickableButton = true;
  } else {
    clickableButton = false;
  }
}

function runFromCursor() {
  for (let i = 0; i < activeStudents.length; i++) {
    let student = activeStudents[i];
    if (lifted === undefined && student.currentMode === "walking") {
      let x = student.x;
      let y = student.y;

      // Check the distance between the student and the mouse
      let distance = dist(mouseX, mouseY, x, y);

      // Set the direction based on the mouse position
      let directionX = mouseX < x ? 1 : -1; // -1 for left, 1 for right
      let directionY = mouseY < y ? 1 : -1; // -1 for left, 1 for right

      // Update the student's position based on the distance and direction
      if (distance < 100) {
        student.x += directionX * 1.5; // Adjust the speed of movement as needed
        student.y += directionY * 1.5;
      }
    }
  }
}

function draw() {
  if (gameState === "startScreen") {
    startScreen();
  } else if (gameState === "gameScreen") {
    background("pink");
    activateButton();

    push();

    push();
    noSmooth();
    image(classroomImage, 50, 50);

    activeStudents.sort(compareNumbers);

    //make them run

    runFromCursor();
    for (let student of activeStudents) {
      updateStudents(student);
      drawStudents(student);
      //making them move to the other side of screen
      offScreenWalk(student);
      classroomCheck(student);
    }
    if (lifted !== undefined) {
      drawStudents(lifted);
    }
    counter = counter + 1;

    pop();

    drawProgressBar();
  } else if (gameState === "nextScreen") {
    nextScreen();
  }
}

draw();
