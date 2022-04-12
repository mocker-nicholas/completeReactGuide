////////////////////////////////////////////
////////////// JS Refresh //////////////////
////////////////////////////////////////////

// Let and Const
var oldVar = "I can change if you reassign me";
const constant = "I can never change";
let dynamic = "I can change if you want me to";

// Arrow Functions
const arrowFunction = () => {
  console.log("This is my arrow function");
  console.log(this);
  // "this" refers
};

const oneLiner = (number) => number * 2;

////////////////////////////////////////////
////////////// Exports and Imports //////////////////
////////////////////////////////////////////
// If there is only one thing we can "export default"
// If there are many exports we write "export" in front of everything
// If you have mutliple exports you can import with
// - import {stuff, things} from 'jsfile.js'
// - import * as everything from 'jsFile.js'
// -- Then you can access everything.stuff and everything.things

////////////////////////////////////////////
////////////// Old Classes //////////////////
////////////////////////////////////////////
// class Human {
//   constructor() {
//     this.gender = "male";
//     this.age = "28";
//   }
// }

// class Person extends Human {
//   // Set your properties
//   constructor() {
//     // call super if class is extended. Super invokes the parent contructor
//     super();
//     this.name = "Nick";
//   }

//   // Methods
//   printName() {
//     console.log(this.name);
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// const person = new Person();
// person.printGender();
// person.printName();

////////////////////////////////////////////
////////////// New Class Syntax //////////////////
////////////////////////////////////////////
// class Human {
//   gender = "male";
//   printGender = () => {
//     console.log(this.gender);
//   };
// }

// class Person extends Human {
//   // Set your properties
//   name = "Nick";

//   // Methods
//   printName = () => {
//     console.log(this.name);
//   };
// }

// const person = new Person();
// person.printGender();
// person.printName();

////////////////////////////////////////////
////////////// Spread and Rest //////////////////
////////////////////////////////////////////
// used to add new items to an array
// const oldArr = [1, 2, 3];
// const spreadArr = [...oldArr, 4, 5, 6];
// console.log(spreadArr);

// const oldObject = {
//   first: "nick",
// };
// const spreadObject = { ...oldObject, last: "orth" };
// console.log(spreadObject);

// Rest spreads arguments into and array and passes them into a function
// const restFunc = (...args) => {
//   return args.reduce((current, accumulator) => {
//     console.log(current);
//     return current + accumulator;
//   });
// };

// console.log(restFunc(1, 2, 3, 4, 5, 6));

////////////////////////////////////////////
////////////// Destructuring //////////////////
////////////////////////////////////////////
// const desArr = ["nick", "Kelly", "jarod"];
// const [cool1, , cool3] = desArr;
// console.log(cool1, cool3);

// objects work the same way

////////////////////////////////////////////
////////////// Primative Types //////////////////
////////////////////////////////////////////
// Numbers are primitive types
// Objects and arrays are reference types
// References are stored in memory,
// and we create a new thing we store a pointer to that place in memory.

////////////////////////////////////////////
////////////// Array Functions //////////////////
////////////////////////////////////////////
// .map takes in each element of an array, runs a function on it, and returns the new element
// and returns a new array with a new values.
const numbers = [1, 2, 3];

// map returns a value
const double = numbers.map((num) => {
  return num * 2;
});

// forEach does not
const each = numbers.forEach((num) => {
  console.log(num * 2);
});

// Others to know

console.log(each);
