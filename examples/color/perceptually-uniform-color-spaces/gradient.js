function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function setup()
{
  createCanvas(600, 430);
	noStroke();

  var numRects = 10;
  var w = width / 10;

  colorMode(HSL);
  for(var i = 0; i < numRects; i++) {
    fill(i * 18, 100, 50);
    rect(i * w, 0, w, height/2);
  }

  colorMode(RGB);
  translate(0, height/2);
  for(var i = 0; i < numRects; i++) {
    fillHsluv(i * 18, 100, 50);
    rect(i * w, 0, w, height/2);
  }

  noLoop();
}
