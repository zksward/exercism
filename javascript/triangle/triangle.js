export class Triangle {
  constructor(a, b, c) {
    const isTriangle = [
      a + b > c, 
      b + c > a, 
      a + c > b
    ].every(b => b);

    this.a = a;
    this.b = b;
    this.c = c;
    this.isTriangle = isTriangle;
  }

  isEquilateral() {
    return this.isTriangle && (this.a == this.b && this.b == this.c);
  }

  isIsosceles() {
    return this.isTriangle && [
      this.a == this.b, 
      this.b == this.c,
      this.a == this.c 
    ].some(b => b)
  }

  isScalene() {
    return this.isTriangle && (this.a != this.b && this.b != this.c);
  }
}
