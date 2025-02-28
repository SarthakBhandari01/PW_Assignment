class shape {
  draw() {
    console.log("drawing a shape");
  }
}
class circle extends shape {
  draw() {
    console.log("drawing a circle");
  }
}

class rectangle extends shape {
  draw() {
    console.log("drawing a rectangle");
  }
}

const s1 = new circle();
s1.draw();
const s2 = new shape();
s2.draw();
const s3 = new rectangle();
s3.draw();
