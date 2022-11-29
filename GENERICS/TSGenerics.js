//Use TypeScript generics to develop reusable, generalized, and type-safe functions, interfaces, and classes.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getRandomElementNumber = function (element) {
    var randomIndex = Math.floor(Math.random() * element.length);
    return element[randomIndex];
};
var getRandomElementString = function (element) {
    var randomIndex = Math.floor(Math.random() * element.length);
    return element[randomIndex];
};
//Creating a new function every time you want to get a random element from a new array type is not scalable.
console.log(getRandomElementNumber([20, 23, 43, 22, 53, 29]));
console.log(getRandomElementString(["blue", "orange", "pink", "yello"]));
//The following shows a generic function that returns the random element from an array of type T:
var getRandoElement = function (element) {
    var randomIndex = Math.floor(Math.random() * element.length);
    return element[randomIndex];
};
console.log(getRandoElement([20, 23, 43, 22, 53, 29]));
console.log(getRandoElement([true, false, false, true]));
console.log(getRandoElement(["red", "gree", "blue"]));
//Generic functions with multiple types
var combineObjects = function (element1, element2) {
    return __assign(__assign({}, element1), element2);
};
var employee = { name: "emily blunt", age: 39 };
var career = { profession: "actress" };
console.log(combineObjects(employee, career));
console.log(combineObjects(employee, [12, 33, 43]));
