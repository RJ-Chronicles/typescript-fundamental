//TypeScript guesses the type based on the value assigned to it;

let Monday = "Back and Biceps";
console.log(typeof Monday); //will print String
//Monday = 30; => Type 'number' is not assignable to type 'string'

//Type of id parameter is number because we assigned numeric default value and return type will be number bcz we are
//returning numeric data;

const findMaxSal = (id = 10) => {
  return 30000 + id;
};
console.log(findMaxSal(1));

//The best common type algorithm

const score = [10, 48, 20, undefined, null, 48, "Fax"];
console.log(typeof score);

const per: {
  marks: [number, string, number];
} = {
  marks: [20, "text", 300],
};

per.marks.push("text3");

console.log(per);

let temp: [number, string, number];
temp = [40, "Temp", 200];
temp.push("Okay");
console.log(typeof temp);
