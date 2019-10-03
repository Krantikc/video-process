
new p5();
  
var capture;

function setup() {
  createCanvas(480, 480);
  //pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
  capture.loadPixels();
 // console.log(capture.pixels);
  
  // for (var i = 0; i < width; i+4) {
  //   console.log(capture.pixels[i]);
  // }
  //var red = Color(255, 0, 0, 0);
  var stepSize = 4;
  for (var x = 0; x < capture.width; x += stepSize) {
    for (var y = 0; y < capture.height; y += stepSize) {
      var index = ((y*capture.width) + x) * 4;
      // The code for your filter will go here!
      //console.log(capture.pixels[index]);

      if (capture.pixels[index] > 150 && capture.pixels[index + 1] < 120 && capture.pixels[index + 2] < 120) {
        capture.pixels[index] = 0;
        capture.pixels[index + 1] = 255;
        //capture.pixels[index + 2] = 0;
       // capture.pixels[index + 3] = 1;
      }
     // capture.updatePixels();
    }
  }
  capture.updatePixels();
}