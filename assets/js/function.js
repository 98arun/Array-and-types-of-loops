console.log("hey func");
//- Hoisting

// If we call the function before initializing the function state and function expression

// state(); // it will not give any error because function statement is available in memory execution context

// express(); // it will give error because it is a variable function we can't access the function before initialization.

// - Function Statement or function declaration

function state() {
  console.log("LN5 inside function statement");
}
state(); // return the function

// - Function Expression

let express = function () {
  console.log("LN10 inside the function expression");
};

express(); //return the function

// - Named Functions

// we can't access the name function outside the function we have to use it inside the function

let named = function nae() {
  console.log("LN25 inside the named function", nae);
};
named();

// - Generator Functions
function* generator() {
  let i = 0;
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
  // while (true) {
  // yield i++;
  // return 7;
  // }
}
let gen = generator();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());

// for (let value of generator()) {
//   console.log(value);
// }

// - Anonymous Functions

let anonymous = function (param) {
  console.log("LN38 inside the anonymous function", param);
};
anonymous(function () {
  a = 2;
}); // we can pass a function as a argument of a function that is called anonymous function

// - Function constructor in normal vs arrow
// - How this working in normal vs arrow
function add(a, b) {
  console.log(arguments);
  return a + b;
}
add(2, 3);
let sub = (a, b) => {
  // console.log(arguments); // we cant see arguments in arrow function
  return a - b;
};
console.log("LN80", sub(9, 3));

function car(name) {
  this.name = name;
}
// we can not use arrow function as a constructor
// const car = (name) => {
//   this.name = name;
// };
let carName = new car("BMW");
console.log(carName);

// - Deep Copy of a nested object

let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};
function clone(obj) {
  let result = {};
  for (var i in obj) {
    if (obj[i] != null && typeof obj[i] == "object") {
      result[i] = clone(obj[i]);
    } else result[i] = obj[i];
  }
  return result;
}

var newObj = clone(obj);
newObj.b.c = 20;
newObj.b.d.e = 22;

console.log("LN117 obj", obj); // { a: 1, b: { c: 2, d:{e:3} } }
console.log("LN117 newObj", newObj); // { a: 1, b: { c: 20, d:{e:22} } }
