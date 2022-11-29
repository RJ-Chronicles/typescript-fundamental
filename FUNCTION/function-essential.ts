const doSomeWork = (x, xx, xxx) => {
  //=> const doSomeWork: (x: any, xx: any, xxx: any) => number | "something is still pending!"
  if (typeof x === "number") {
    return x;
  }
  return "something is still pending!";
};

console.log(doSomeWork("12", 55, 44));

type buildSomethingAppropriate = (x: number, y: number) => number;
const testYourWork: buildSomethingAppropriate = (x, y) => {
  return x + y;
};
//console.log(testYourWork(2,4,kl)) //Expected 2 arguments, but got 3.
//console.log(testYourWork(2,'78')) //Argument of type 'string' is not assignable to parameter of type 'number'
//------------------------OR-------------------
const allInOneHandler = (message: string, user: string): string => {
  //const allInOneHandler: (message: string, user: string) => string
  return `${user} : ${message}`;
};

console.log(allInOneHandler("Welcom", "Mars"));

//------------------------OR---------------------------
const inlineHandler: (message: string) => string = (message) => {
  return message;
};
