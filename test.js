//arrays
let studentsArray = [];
let activeStudents = [];
let talkingGarritArray = [];

//start
let gameState = "startScreen";
let counter = 0;

/*






STUDENT OBJECTS

*/

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

/*






LOADING IMAGES AND PUSH INTO ARRAY

*/

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

  //progress bar
  progressGarrit = loadImage("images/progressCircle.png");
  progressGarritSad = loadImage("images/progressCircleSad.png");
  progressGarritHappy = loadImage("images/progressCircleHappy.png");

  //talking garrit
  talkingGarrit1 = loadImage("images/garritTalk1.png");
  talkingGarrit2 = loadImage("images/garritTalk2.png");
  talkingGarrit3 = loadImage("images/garritTalk3.png");

  talkingGarritArray.push(talkingGarrit1, talkingGarrit2, talkingGarrit3);
}

/*






SETUP

*/

function setup() {
  createCanvas(screen.width, screen.height - 220);
  frameRate(60);
}

/*






SOUNDS

*/

//variables for sound functions
const talkingGarrit = document.createElement("audio");
const talkingGarritSource = document.createElement("source");

const happySound = document.createElement("audio");
const happySoundSource = document.createElement("source");

const pickSound = document.createElement("audio");
const pickSoundSource = document.createElement("source");

const placeSound = document.createElement("audio");
const placeSoundSource = document.createElement("source");

//sound functions
function talkingGarritFunction() {
  talkingGarritSource.setAttribute("src", "sound/talking.mp3");
  talkingGarritSource.setAttribute("type", "audio/mpeg");
  talkingGarrit.appendChild(talkingGarritSource);
  document.body.appendChild(talkingGarrit);

  talkingGarrit.addEventListener("ended", function () {
    talkingGarrit.currentTime = 0;
    talkingGarrit.play();
  });

  talkingGarrit.play();
}

function happySoundFunction() {
  happySoundSource.setAttribute("src", "sound/happy.mp3");
  happySoundSource.setAttribute("type", "audio/mpeg");
  happySound.appendChild(happySoundSource);
  document.body.appendChild(happySound);

  happySound.currentTime = 0;

  happySound.addEventListener("ended", function () {
    happySound.currentTime = 0;
    happySound.play();
  });

  happySound.play();
}

function pickSoundFunction() {
  pickSoundSource.setAttribute("src", "sound/pick.mp3");
  pickSoundSource.setAttribute("type", "audio/mpeg");
  pickSound.appendChild(pickSoundSource);
  document.body.appendChild(pickSound);

  pickSound.currentTime = 0.78;

  pickSound.play();
}

function placeSoundFunction() {
  placeSoundSource.setAttribute("src", "sound/place.mp3");
  placeSoundSource.setAttribute("type", "audio/mpeg");
  placeSound.appendChild(placeSoundSource);
  document.body.appendChild(placeSound);

  placeSound.currentTime = 0.13;

  placeSound.play();
}

/*






START SCREEN

*/

let startButton;
let increaseButton;
let decreaseButton;

function startScreen() {
  let garritImg = talkingGarritArray[Math.floor(counter / 16) % 3];
  image(
    garritImg,
    width / 2 - 450,
    height / 2 - 200,
    garritImg.width * 1.6,
    garritImg.height * 1.6
  );

  textFont("monospace");
  textStyle(BOLD);

  push();
  push();
  stroke(0, 0, 0);
  strokeWeight(4);
  beginShape();
  vertex(width / 2 + 20, height / 2 - 20);
  vertex(width / 2 + 95, height / 2 - 100);
  bezierVertex(
    width / 2 + 95,
    height / 2 - 100,
    width / 2 + 85,
    height / 3 + 5,
    width / 2 + 80,
    height / 3 - 30
  );
  bezierVertex(
    width / 2 + 80,
    height / 3 - 30,
    width / 2 + 50,
    height / 3 - 150,
    width - width / 4,
    height / 3 - 155
  );
  bezierVertex(
    width - width / 4,
    height / 3 - 155,
    width / 2 + 620,
    height / 3 - 160,
    width / 2 + 625,
    height / 3 - 30
  );
  bezierVertex(
    width / 2 + 625,
    height / 3 - 30,
    width / 2 + 620,
    height / 3 + 100,
    width - width / 4,
    height / 3 + 95
  );
  bezierVertex(
    width - width / 4,
    height / 3 + 95,
    width - width / 4 - 120,
    height / 3 + 95,
    width - width / 4 - 220,
    height / 3 + 50
  );
  vertex(width / 2 + 20, height / 2 - 20);
  endShape();
  pop();
  textSize(25);
  textAlign(CENTER);
  textLeading(28);
  text(
    "Please help me gather all the students so I can start the Lab session!",
    width - width / 4 - 225,
    height / 3 - 95,
    450
  );
  pop();

  push();
  textSize(14);
  textAlign(CENTER);
  textStyle(NORMAL);
  text(
    "Click and drag the students to the classroom and then press the button when you have catched them all",
    width - width / 4 - 182,
    height / 3 + 12,
    380
  );
  pop();

  push();
  textSize(60);
  stroke(0, 0, 0);
  strokeWeight(10);
  fill("white");
  textAlign(CENTER);
  text(studentNumber, width / 2 + 1, height - 185);
  pop();

  //startbutton
  push();
  strokeWeight(4);
  textSize(45);
  fill("darkOrange");
  rect(width / 2 - 95, height - 150, 190, 60, 100);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(8);
  text("START", width / 2 - 68, height - 106);
  pop();

  //increaseButton
  push();
  fill("darkOrange");
  strokeWeight(4);
  textSize(40);
  ellipse(width / 2 + 80, height - 200, 50, 50);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(8);
  text("+", width / 2 + 68, height - 187);
  pop();

  //decreaseButton
  push();
  fill("darkOrange");
  strokeWeight(4);
  textSize(40);
  ellipse(width / 2 - 80, height - 200, 50, 50);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(8);
  text("-", width / 2 - 92, height - 189);
  pop();
}

/*






NEXT SCREEN

*/

function nextScreen() {
  textFont("monospace");
  textAlign(LEFT);
  push();
  textSize(60);
  stroke(0, 0, 0);
  strokeWeight(10);
  fill("white");
  textAlign(CENTER);
  text(studentNumber, width / 2 + 1, height - 185);
  pop();

  //startbutton
  push();
  strokeWeight(4);
  textSize(45);
  fill("darkOrange");
  rect(width / 2 - 95, height - 150, 190, 60, 100);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(8);
  text("START", width / 2 - 68, height - 106);
  pop();

  //increaseButton
  push();
  fill("darkOrange");
  strokeWeight(4);
  textSize(40);
  ellipse(width / 2 + 80, height - 200, 50, 50);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(8);
  text("+", width / 2 + 68, height - 187);
  pop();

  //decreaseButton
  push();
  fill("darkOrange");
  strokeWeight(4);
  textSize(40);
  ellipse(width / 2 - 80, height - 200, 50, 50);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(8);
  text("-", width / 2 - 92, height - 189);
  pop();
  //text
  push();
  noStroke();
  fill("black");
  textStyle(BOLD);
  textSize(55);
  textAlign(CENTER);
  textLeading(40);
  text("Good job!", width / 2 - 310, height / 3 - 95, 650);
  textSize(30);
  textStyle(NORMAL);
  text(
    "Are you quick enough to handle even more students this time?",
    width / 2 - 310,
    height / 3 + 40,
    650
  );
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

/*






WALKING / STILL AND DIRECTION

*/

let lifeTimer = 300;

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

/*






SPAWN STUDENTS AS INDIVIDUAL OBJECTS

*/

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

/*






STUDENTS WALK IN ON OPPOSITE SIDE 

*/

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

/*






EVERYTHING FOR MOUSE PRESSED

*/

let lifted = undefined;
let clickableButton = false;
let studentNumber = 1;

//first screen page
const firstScreenElement = document.querySelector(".firstscreen");
firstScreenElement.style.display = "block";

function mousePressed() {
  //hide first screen and play talking sound
  if (firstScreenElement.style.display === "block") {
    firstScreenElement.style.display = "none";
    talkingGarritFunction();
  }

  //clicking garrit button and finished game
  let distGarritButton = dist(width - 196, height - 110, mouseX, mouseY);

  if (clickableButton === true && distGarritButton < 120) {
    for (student of activeStudents) {
      if (student.classroom) {
        student.classroom = false;
      }
    }
    happySoundFunction();
    studentsInClass = 0;
    gameState = "nextScreen";
    activeStudents = [];
    talkingGarrit.pause();
  }

  //picking upp student and pick up sound
  for (student of activeStudents) {
    if (
      mouseX > student.x &&
      mouseX < student.x + 68 &&
      mouseY > student.y &&
      mouseY < student.y + 80
    ) {
      pickSoundFunction();
      lifted = student;
      student.currentMode = "dragged";

      break;
    }
  }

  //Increase and decrease button
  if (gameState === "startScreen" || gameState === "nextScreen") {
    if (dist(mouseX, mouseY, width / 2 + 80, height - 200) < 25) {
      studentNumber = studentNumber + 1;
    }
    if (
      dist(mouseX, mouseY, width / 2 - 80, height - 200) < 25 &&
      studentNumber > 1
    ) {
      studentNumber = studentNumber - 1;
    }

    //start game with start button, spawn students in random places and pause other sounds
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
      talkingGarrit.pause();
      happySound.pause();
    }
  }
}

/*






MATCH MOUSE-X/Y TO STUDENT

*/

function mouseDragged() {
  if (lifted !== undefined) {
    student.x = mouseX - 34;
    student.y = mouseY - 50;
  }
}

/*






RELEASE STUDENT AND PLACE SOUND

*/

function mouseReleased() {
  if (lifted !== undefined) {
    placeSoundFunction();
    student.currentMode = "still";
    lifted = undefined;
    rotation = 0;
  }
}

/*






CHECK IF STUDENT IS INSIDE CLASSROOM AND UPDATE NUMBER ON GARRIT BUTTON

*/

let studentsInClass = 0;

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
  } else if (
    student.classroom === true &&
    (student.x < 3 || student.x > 320 || student.y < 0 || student.y > 380)
  ) {
    student.classroom = false;
    studentsInClass = studentsInClass - 1;
  }
}

/*






COMPARES STUDENTS AND CHANGES ORDER IN ARRAY, WHO IS SHOWN IN FRONT

*/

function compareNumbers(a, b) {
  return a.y - b.y;
}

/*






DRAW GARRIT BUTTON, GARRIT MOODS, BLINKING BUTTON WHEN DONE

*/

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

  colorMode(HSB, 100);
  if (studentsInClass === activeStudents.length) {
    fill(5, (frameCount % 20) + 50, 100);
  } else {
    fill(5, 70, 100);
  }
  arc(
    width - 196,
    height - 110,
    158,
    158,
    -90,
    (studentsInClass / activeStudents.length) * 360 - 90
  );
  pop();
  textAlign(CENTER);
  push();
  stroke(0, 0, 0);
  strokeWeight(1.5);

  colorMode(HSB, 100);
  if (studentsInClass === activeStudents.length) {
    fill(34, (frameCount % 20) + 3, 85);
  } else {
    fill(34, 30, 85);
  }

  circle(width - 196, height - 110, 120, 120);

  pop();
  //text
  textSize(35);
  strokeWeight(5);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  text(studentsInClass, width - 196, height - 130);
  textSize(20);
  push();
  noStroke();
  textStyle(BOLD);
  fill(0, 0, 0);
  text(" of ", width - 196, height - 103);
  pop();
  textSize(35);
  text(activeStudents.length, width - 196, height - 65);
}

/*






ACTIVATE GARRIT BUTTON

*/

function activateButton() {
  if (studentsInClass / activeStudents.length === 1) {
    clickableButton = true;
  } else {
    clickableButton = false;
  }
}

/*






STUDENTS RUN AWAY WHEN CURSOR APPROACHES

*/

function runFromCursor() {
  for (let i = 0; i < activeStudents.length; i++) {
    let student = activeStudents[i];
    if (lifted === undefined && student.currentMode === "walking") {
      let x = student.x;
      let y = student.y;

      let distance = dist(mouseX, mouseY, x, y);

      // Set the direction based on the mouse position
      let directionX = mouseX < x ? 1 : -1; // -1 = left, 1 = right
      let directionY = mouseY < y ? 1 : -1;

      // Update the student's position based on the distance and direction
      if (distance < 100) {
        student.x += directionX * 1.5;
        student.y += directionY * 1.5;
      }
    }
  }
}

/*






DRAWING ALL NECESSARY FUNCTIONS, CHANGING GAME STATES

*/

function draw() {
  background("pink");
  counter = counter + 1;
  if (gameState === "startScreen") {
    startScreen();
  } else if (gameState === "gameScreen") {
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

    pop();

    drawProgressBar();
  } else if (gameState === "nextScreen") {
    nextScreen();
  }
}

draw();
