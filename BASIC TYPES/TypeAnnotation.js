//TypeScript uses type annotations to explicitly specify types for identifiers such variables, functions, objects, etc.
//primitive
var state = "Maharashtra";
var contact;
contact = 985857489;
//contact = "985857489" => Type 'string' is not assignable to type 'number
var isValid = true;
var isRecordExist;
//non-primitive
var hobbies;
hobbies = ["Reading", "Cycling", "Programming"];
var person2 = {
    name: "Jack",
    age: 12,
    salary: 40000
};
//Function arguments & return types
var greetingFun;
greetingFun = function (name) {
    return "Hi ".concat(name);
};
console.log(greetingFun("Srock"));
var fetchRecords;
var fetchRecords2 = function (userId) {
    return {
        id: userId,
        productName: "Laptop",
        price: 3000000,
        inStock: true
    };
};
console.log(typeof fetchRecords2(10));
