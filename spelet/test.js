let studentsArray = [];
let activeStudents = [];
let lifted = undefined;

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

let student3 = {
  name: 3,
  x: 0,
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
  x: 0,
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
  x: 0,
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

  //loading the image of classroom
  classroomImage = loadImage("images/classroom.png");
}

let counter = 0;
let studentNumber = 10;
let lifeTimer = 300;

function setup() {
  createCanvas(screen.width - 30, screen.height - 170);
  frameRate(60);
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
    rotate(rotation);
    rotation = rotation + 0.03 * sin(frameCount * 0.2);
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
}

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

function draw() {
  background("pink");
  push();
  noSmooth();
  image(classroomImage, 50, 50);

  if (keyIsPressed === true) {
    spawnStudents();
  }
  for (let student of activeStudents) {
    updateStudents(student);
    drawStudents(student);
    //making them move to the other side of screen
    offScreenWalk(student);
  }
  counter = counter + 1;

  pop();
}

draw();
