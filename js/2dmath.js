export class Point {
  x = 0;
  y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  vectorTo(p) {
    return new Vector(p.x - this.x, p.y - this.y);
  }
  add(v) {
    return new Point(this.x + v.x, this.y + v.y);
  }
}

export class Position {
  x = 0;
  y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  inBox(x1, y1, x2, y2) {
    return this.x >= x1 && this.x <= x2 && this.y <= y2 && this.y >= y1;
  }

  vectorTo(p) {
    return new Vector(p.x - this.x, p.y - this.y);
  }
  add(v) {
    return new Position(this.x + v.x, this.y + v.y);
  }
}

export class Vector {
  x = 0;
  y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  magnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  normalize() {
    let normX = this.x / this.magnitude();
    let normY = this.y / this.magnitude();
    return new Vector(normX, normY);
  }

  normalize2() {
    let normX = this.x / this.magnitude();
    let normY = this.y / this.magnitude();
    this.x = normX;
    this.Y = normY;
  }

  setMagnitude(m) {
    return this.normalize().multiply(m);
  }

  setMagnitude2(m) {
    const newV = this.normalize().multiply(m);
    this.x = newV.x;
    this.y = newV.y;
  }

  angle() {
    return Math.atan2(this.x, -this.y);
  }

  rotate(beta) {
    let newX = Math.cos(beta) * this.x - Math.sin(beta) * this.y;
    let newY = Math.sin(beta) * this.x + Math.cos(beta) * this.y;
    return new Vector(newX, newY);
  }

  rotate2(beta) {
    let newX = Math.cos(beta) * this.x - Math.sin(beta) * this.y;
    let newY = Math.sin(beta) * this.x + Math.cos(beta) * this.y;

    this.x = newX;
    this.y = newY;
  }

  multiply(by) {
    return new Vector(this.x * by, this.y * by);
  }
  divide(by) {
    return new Vector(this.x / by, this.y / by);
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }
}

export class Box {
  x = 0;
  y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
