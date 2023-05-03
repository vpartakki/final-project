let state = 0;
let imgIndex = 1;
let imgArray1 = [];
let imgArray2 = [];
let bgColor = [255, 255, 0]; // yellow

function preload() {
  for (let i = 1; i <= 5; i++) {
    imgArray1.push(loadImage(i + ".png"));
  }
  for (let i = 0; i < 5; i++) {
    imgArray2.push(loadImage(String.fromCharCode(97 + i) + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(bgColor);
  switch (state) {
    case 0:
      text("Victoria's World - Welcome to a world of many mediums", width / 2, height / 3);
      drawButton(width / 4, height * 2 / 3, "Left Reality", function() {
        state = 1;
        imgIndex = 1;
        setInterval(function() {
          imgIndex = (imgIndex + 1) % imgArray1.length;
        }, 1000);
      });
      drawButton(width / 2, height * 2 / 3, "Color?", function() {
        bgColor = [random(256), random(256), random(256)];
      });
      drawButton(width * 3 / 4, height * 2 / 3, "Right Reality", function() {
        state = 2;
        imgIndex = 0;
        setInterval(function() {
          imgIndex = (imgIndex + 1) % imgArray2.length;
        }, 1000);
      });
      break;
    case 1:
      image(imgArray1[imgIndex], width / 2, height / 2);
      drawButton(width / 2, height * 3 / 4, "Return?", function() {
        state = 0;
      });
      break;
    case 2:
      image(imgArray2[imgIndex], width / 2, height / 2);
      drawButton(width / 2, height * 3 / 4, "Return?", function() {
        state = 0;
      });
      break;
  }
}

function drawButton(x, y, label, onClick) {
  rect(x, y, 100, 50);
  textSize(16);
  text(label, x, y);
  if (mouseIsPressed &&
      mouseX > x - 50 && mouseX < x + 50 &&
      mouseY > y - 25 && mouseY < y + 25) {
    onClick();
  }
}
