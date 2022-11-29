//TypeScript adds a type system to help you avoid many problems with dynamic types in JavaScript.
//JavaScript is dynamically typed. It offers flexibility but also creates many problems.
//TypeScript adds an optional type system to JavaScript to solve these problems.

let singer = "Dua Lipa";
console.log(singer);
//Following also allowed in pure js but it will throw compile time error in ts because the type of singer variable is string
// singer = 890;
// singer = true;
// singer = ['abc', 89];

const fetProduct = (id) => {
  return {
    id: id,
    name: "10 Prime",
    description: `awesome product ${id}`,
  };
};

const product = fetProduct(10);
//Not allowed because there is no property with 'Name'
//console.log(product.Name)

type prod = {
  id: number;
  name: string;
  description: string;
  inStock: boolean;
};
interface prodObject {
  id: number;
  name: string;
  description: string;
}
const fetProductDetails = (id: number): prod => {
  return {
    id: id,
    name: "Samsung",
    description: "Buy one get one",
    inStock: true,
  };
};
let product1: prod = {
  id: 12,
  name: "Cup",
  description: "Affordable",
  inStock: true,
};
let product2: prodObject;

//product1.description = 93; : not allowed bcz type of description id string
//Run Time error
//console.log(product2.id);
console.log(typeof product2);
product1 = fetProductDetails(10);
product2 = fetProductDetails(20);
console.log(typeof product2);
console.log(product2);
class student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  showStudent() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

const std = new student("Mars", 18);
std.showStudent();
