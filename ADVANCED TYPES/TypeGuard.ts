//Type Guards allow you to narrow down the type of a variable within a conditional block.
//Use the typeof and instanceof operators to implement type guards in the conditional blocks
//--------------------------------typeof-----------------------------------------------
type alphnumeric = number | string;

const alphNumeric = (x: alphnumeric, y: alphnumeric): alphnumeric => {
  if (typeof x === "number" && typeof y === "number") {
    return `Addition of two number : ${x + y}`;
  } else if (typeof x === "string" && typeof y === "string") {
    return `The concatenate string : ${x.concat(y)}`;
  }
  throw new Error("Invalid Input values");
};

interface Area {
  area(): number;
}

//--------------------------------instanceof-----------------------
class Rectangle implements Area {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
  sayHi(): void {
    console.log("hi");
  }
}
class Circle implements Area {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius;
  }
}
const calculateArea = (shape: Area) => {
  if (shape instanceof Rectangle) {
    shape.sayHi();
    return `Area of rectangle as : ${shape.area()}`;
  } else {
    return `Area of circle as : ${shape.area()}`;
  }
};
const rect = new Rectangle(10, 20);
const circle = new Circle(20);

console.log(calculateArea(rect));
console.log(calculateArea(circle));
