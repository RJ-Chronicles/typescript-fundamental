/*

1. Every value in TypeScript has a type.
2. A type is a label that describes the properties and methods that a value has.
3. TypeScript compiler uses types to analyze your code for hunting bugs and errors.

Types in Typescript:
    primitive:
        string
        number
        boolean
        undefined
        null

    Object
        Object
        functions
        arrays
        classes
*/

const inputName = document.querySelector("input") as HTMLInputElement;
//const st = inputName ?.value;
//property does not exist
//const pr = inputName.findValue();
