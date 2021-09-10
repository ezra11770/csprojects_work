function setup() {
  createCanvas(400, 400);
  background(0);
}

let x = 200;
let y = 200;
let vx = 1;
let vy = 2;
let w = 0;
let h = 0;
let c = (random(255), random(255), random(255));

function draw() {

  for (let i = 0; i < 10; i++) {
  stroke(c)
  fill(0);
  ellipse(200, 200, w, h);
  h++;
  w++;
  }



x += vx;
y += vy;

if (x + 25 > width || x - 25 < 0)
  vx *= -1;

if (y + 25 > height || y - 25 < 0)
  vy *= -1;

}



function mousePressed() {

}
