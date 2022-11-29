//introduce optional types to javascript
var firstName = "Vivekanand";
console.log(firstName);
var prop1 = "name";
var prop2 = "salary";
var person = {};
person[prop1] = "Vivekanand";
person[prop2] = 40000000;
console.log(person);
//TS will help you to fix buggy code
var performAddition = function (x, y) {
    return x + y;
};
var result = performAddition(4, 5);
console.log(result);
//This will create an issue with plain js code. We can avoid this by using type guard or opation types feature of ts
result = performAddition("4", 8);
console.log(result);
var performAddition2 = function (x, y) {
    return x + y;
};
var res2 = performAddition2(4, 5);
//Not allowed :Argument of type 'string' is not assignable to parameter of type 'number'.
res2 = performAddition2("5", 8);
