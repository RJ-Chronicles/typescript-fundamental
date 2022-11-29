const merge = <S, R>(obj: S, obj2: R) => {
  return {
    ...obj2,
    ...obj,
  };
};

//------------not work for this input as it looking for the key value pai{OBJECT}-----------
console.log(merge({ name: "jack" }, 20)); //=> TypeScript doesn’t issue any error.

//In order to denote the constraint, you use the extends keyword. For example:
const mergeObj = <R extends object, S extends object>(el: R, el2: S) => {
  return {
    ...el,
    ...el2,
  };
};
console.log(mergeObj({ name: "jack" }, { age: 20 }));
//console.log(mergeObj({ name: "jack" }, 20));=> Argument of type 'number' is not assignable to parameter of type 'object'

//Use extends keyof to constrain a type that is the property of another object.

const getPersonName = <T extends object, U extends keyof T>(
  person: T,
  key: U
) => {
  return person[key];
};
console.log(getPersonName({ name: "rj-chronicle", age: 24 }, "name"));
//console.log(getPersonName({name:'rj-chronicle', age:24}, 'salary'));=>Argument of type '"salary"' is not assignable to parameter of type '"name" | "age
