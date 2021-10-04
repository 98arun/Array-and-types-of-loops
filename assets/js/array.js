console.log("hey array");
let arr = [1, 2, 3, null, undefined, "arun", true, {}];
console.log(arr);
// prototype 'at' is used for getting the index value
let index = 2;

console.log(`index of ${index} the value is ${arr.at(index)}`);

index = -2;

console.log(`index of ${index} the value is ${arr.at(index)}`);

// prototype 'concat' is used for merge two or more array

let num = [100, 200, 300];

let newArr = num.concat(arr);

console.log(newArr);
// expected [100, 200, 300, 1, 2, 3, null, undefined, 'arun', true, {…}]

// prototype 'copyWithin'(target, start, end)

// it will change first index with third
console.log(newArr.copyWithin(0, 3, 4));
// expected output: [1, 200, 300, 1, 2, 3, null, undefined, 'arun', true, {…}]

// it will start with first and change with third
console.log(newArr.copyWithin(0, 3)); // expected output:[1, 2, 3, null, undefined, 'arun', true, {…}, 'arun', true, {…}]
// prototype 'entries' returns as key value pair

const array = newArr.entries();

console.log(array.next().value);
// expected output: Array [0, 1]

console.log(array.next().value);
// expected output: Array [1, 2]
// if we use for loop then it will iterate all the key value of an array
for (let [index, element] of newArr.entries()) console.log(index, element);

// prototype "every" checks the function condition
const array1 = (parameter) => parameter < 40;

const array2 = [1, 30, 39, 29, 10, 13];

console.log(array2.every(array1));
// expected output: true

// prototype "fill" is used for fill the value in an array

// fill with value 0 from position 2 to 4
console.log(array2.fill(0, 2, 4));
// expected output: [1, 30, 0, 0, 10, 13]

// fill with value 5 from position 1
console.log(array2.fill(5, 1));
// expected output: [1, 5, 5, 5, 5, 5]

// fill with value 6 from position 0 to last

console.log(array2.fill(6));
// expected output: [6, 6, 6, 6, 6, 6]

// prototype 'find()' & 'findIndex'  returns the value of the first element in the provided array
const array3 = [5, 12, 8, 130, 44];
var findIndex = array3.findIndex((element) => element === 12);

var found = array3.find((element) => element === 12);
console.log(found);
console.log(findIndex);

var found = array3.find((element) => element > 12);
var findIndex = array3.findIndex((element) => element > 12);

console.log(found);
console.log(findIndex);

var found = array3.find((element) => element < 12);
console.log(found);

// prototype " filter"

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result1 = words.filter((word) => word.length > 6);
// if the word length is greater than 6 then it will return all the words
console.log(result1);

//Prototype 'flat()'  creates a new array with all sub-array elements concatenated
const arr11 = [0, 1, 2, [3, 4]];

console.log(arr11.flat());
// expected output: [0, 1, 2, 3, 4]

// prototype "forEach" iterates all the values of array
words.forEach((element) => console.log(element));

// Array.from  iterates the words
console.log(Array.from("word"));
//output: ["w","o","r","d"]

// prototype "includes" define the key is included in array or not
console.log(arr11.includes(2));
// output: true

// prototype "indexOf" define the index of that key
console.log(words.indexOf("present"));

// prototype "isArray" define it is array or not
console.log(Array.isArray([1, 2, 3])); // true

// prototype "join" creates and returns a new string by concatenating all of the elements.
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(""));
// expected output: "FireAirWater"
console.log(elements.join("-"));
// expected output: "Fire-Air-Water"
