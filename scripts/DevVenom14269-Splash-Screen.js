  let DevVenom14269_Splash_Screen = function () {
  let continueButton = function () {
    fill(255, 0, 200);
    rect((208/400)*width, (335/400)*height, (190/400)*width, (60/400)*height, 20);
    fill(245, 215, 50);
    text("Continue →", (210/400)*width, (375/400)*height + 30);
    if (mouseX > (205/400)*width && mouseX < (400/400)*width && mouseY > (332/400)*height && mouseY < (398/400)*height) {
      cursor(HAND);
      if (mouseIsPressed) {
        window.open("https://venom14269.w3spaces.com/landing/landing.html", target="_parent");
      }
    } else {
      cursor();
    }
  };
  textSize((35/400)*width);
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("DevVenom14269", (65/400)*width, (200/400)*height);
  continueButton();
};
let g = 255;
let b = 0;
let r = 0;
let backgroundChange = function () {
  background(r, g, b);
  if (g > 0 && r === 0) {
    background(r, g, b);
    g--;
    b++;
  } else if (b > 0 && g === 0) {
    background(r, g, b);
    b--;
    r++;
  } else if (r > 0 && b === 0) {
    background(r, g, b);
    r--;
    g++;
  }
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  backgroundChange();
  DevVenom14269_Splash_Screen();
}
