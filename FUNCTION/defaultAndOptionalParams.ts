//Use the parameter?: type syntax to make a parameter optional.
const someRandomeWork: (x: number, y: number, z?: number) => number = (
  x,
  y,
  z
) => {
  if (typeof z !== "undefined") {
    return x * y * z;
  }
  return x * y;
};
console.log(someRandomeWork(13, 43, 44));
console.log(someRandomeWork(32, 5, undefined));
console.log(someRandomeWork(8, 4));

//Default parameter
const defaultDailyWork = (user: string = "Default User"): string => {
  return `We are glad to welcome you, ${user}`;
};
console.log(defaultDailyWork());
console.log(defaultDailyWork("Mars"));
console.log(defaultDailyWork(undefined));

//Rest parameter in ts

const restParameters = (
  x: number,
  y: number,
  ...restParams: number[]
): number => {
  let total = x + y;
  restParams.forEach((rest) => (total += rest));
  //restParams.map(rest => total+= rest);

  return total;
};
let restArray1: number[] = [10, 20, 30, 56, 44, 33, 22, 45];

//console.log(restParameters(...restArray1)); //=> A spread argument must either have a tuple type or be passed to a rest parameter
let restArray: [number, number, number] = [10, 20, 30];
console.log(restParameters(...restArray));
