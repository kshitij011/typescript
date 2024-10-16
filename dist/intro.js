"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "Comp", age: 10 };
let userId = 3.3;
let hero;
const heros = ["thor", 23, true];
heros.map((hero) => {
    return hero;
});
// void is used if the function doen't return anything.
function add(a, b) {
    console.log(a, b);
}
// returning number
const addTwo = (a, b) => {
    // return `This is ${a} and ${b}`   this is not allowed as the return  type is number.
    return a + b;
};
// never
const throwErr = (errMsg) => {
    throw new Error(errMsg);
};
add(4, 5);
addTwo(4, 5);
console.log("Hello world!");
console.log(heros);
const throwError = () => {
    throwErr("invoked the wrong function");
};
throwError();
