class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const p = new Rectangle(20, 30);

console.log(p);

// Aggiungere calcolo area

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  area() {
    return this.height * this.width;
  }
}

const square = new Square(30);

console.log(square);

console.log(square.area());
