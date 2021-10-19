// Normal order function

const radius = [3, 1, 2, 4, 6];
const area = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

const circumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(area(radius));
console.log(circumference(radius));

// console.log(radius.map(area));

//Higher order function

const areas = function (radius) {
  return Math.PI * radius * radius;
};
const circum = function (radius) {
  return 2 * Math.PI * radius;
};
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, areas));
console.log(calculate(radius, circum));
console.log("using map", radius.map(areas));
// console.log("using array.prototype", radius.calculate(areas));

// make it similar to map function
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log("using array.prototype", radius.calculate(areas));
