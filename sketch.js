let imgAmount = 28;
let img = [];

let pg;

let TILES_X = 45;
let TILES_Y = 45;

let wh;

let TILE_W, TILE_H;

let counter = 0;

let dates = [
  "3rd September 2025",
  "31st December 2021",
  "2nd October 2021",
  "13th June 2023",
  "16th June 2023",
  "16th June 2023",
  "22nd June 2023",
  "9th September 2024",
  "11th September 2024",
  "10th October 2025",
  "11th September 2024",
  "12th September 2024",
  "1st September 2023",
  "2nd September 2022",
  "18th July 2022",
  "15th August 2025",
  "16th August 2025",
  "28th August 2023",
  "2nd September 2025",
  "2nd September 2025",
  "2nd September 2025",
  "8th October 2022",
  "13th November 2021",
  "9th September 2024",
  "10th September 2024",
  "12th September 2024",
  "13th February 2025",
  "15th March 2025",
];

function preload() {
  for (let i = 0; i < imgAmount; i++) {
    img[i] = loadImage("images/Image" + i + ".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowWidth);
  pg = createGraphics(TILES_X, TILES_Y);

  for (let i = 0; i < imgAmount; i++) {
    img[i].resize(TILES_X, TILES_Y);
  }

  if (windowWidth < 400) {
    wh = 200;
  } else {
    wh = 400;
  }

  TILE_W = wh / TILES_X;
  TILE_H = wh / TILES_Y;

  counter = int(random(0, 28));

  textSize(25);
}

function draw() {
  background(255);
  noStroke();

  pg.push();
  pg.tint(255, 10);
  pg.image(img[counter], 0, 0);
  pg.pop();

  if (frameCount % 300 == 0) {
    counter = int(random(0, 28));
  }
  // if (counter > 27) {
  //   counter = 0;
  // }

  textAlign(CENTER, CENTER);
  fill(100, 180, 20);
  text(dates[counter], width / 2, height / 2 + 250);
  console.log(dates[counter]);

  translate(width / 2 - wh / 2, height / 2 - wh / 2);
  translate(TILE_W / 2, TILE_H / 2);

  for (let x = 0; x < TILES_X; x++) {
    for (let y = 0; y < TILES_Y; y++) {
      let c = pg.get(x, y);
      let b = brightness(c);

      // console.log(b);
      let sze = map(b, 100, 255, 0, TILE_W * 2);

      // fill(0);

      push();
      translate(x * TILE_W, y * TILE_H);
      circle(0, 0, sze);
      pop();

      console.log(counter);

      // image(img, 0, 0);
    }
  }
}
