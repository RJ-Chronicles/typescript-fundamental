//Type Guards allow you to narrow down the type of a variable within a conditional block.
var alphNumeric = function (x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return "Addition of two number : ".concat(x + y);
    }
    else if (typeof x === "string" && typeof y === "string") {
        return "The concatenate string : ".concat(x.concat(y));
    }
    throw new Error("Invalid Input values");
};
//--------------------------------instanceof-----------------------
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius;
    };
    return Circle;
}());
var calculateArea = function (shape) {
    if (shape instanceof Rectangle) {
        return "Area of rectangle as : ".concat(shape.area());
    }
    else {
        return "Area of circle as : ".concat(shape.area());
    }
};
var rect = new Rectangle(10, 20);
var circle = new Circle(20);
console.log(calculateArea(rect));
console.log(calculateArea(circle));
