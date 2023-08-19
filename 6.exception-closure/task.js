function parseCount(string) {
  try {
    let result = Number.parseFloat(string);
    if (Number.isNaN(result)) {
      throw new Error("Невалидное значение")
    }
    console.log(result);
    return result;
  } catch (error) {
      console.log(error);
  }
}


function validateCount(count) {
  try {
    let result = parseCount(count);
      return result;
  } catch (error) {
      return error; 
  }
}

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
      throw new Error("Треугольник с такими сторонами не существует")
    }
  }

  get perimeter() {
    return (this.a + this.b + this.c);
  }

  get area() {
    let p = this.perimeter / 2;
    return (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3) * 1;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует"
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует"
        }
    }
  }  
}