//TypeScript adds a type system to help you avoid many problems with dynamic types in JavaScript.
//JavaScript is dynamically typed. It offers flexibility but also creates many problems.
//TypeScript adds an optional type system to JavaScript to solve these problems.
var singer = "Dua Lipa";
console.log(singer);
//Following also allowed in pure js but it will throw compile time error in ts because the type of singer variable is string
// singer = 890;
// singer = true;
// singer = ['abc', 89];
var fetProduct = function (id) {
    return {
        id: id,
        name: "10 Prime",
        description: "awesome product ".concat(id)
    };
};
var product = fetProduct(10);
var fetProductDetails = function (id) {
    return {
        id: id,
        name: "Samsung",
        description: "Buy one get one",
        inStock: true
    };
};
var product1;
var product2;
//product1.description = 93; : not allowed bcz type of description id string
//Run Time error
//console.log(product2.id);
console.log(typeof product2);
product1 = fetProductDetails(10);
product2 = fetProductDetails(20);
console.log(typeof product2);
console.log(product2);
var student = /** @class */ (function () {
    function student(name, age) {
        this.age = age;
        this.name = name;
    }
    student.prototype.showStudent = function () {
        console.log("I am ".concat(this.name, " and I am ").concat(this.age, " years old"));
    };
    return student;
}());
var std = new student("Mars", 18);
std.showStudent();
