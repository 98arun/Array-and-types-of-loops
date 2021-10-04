console.log("hey loops");
//there are three types of loops for , while , do-while

// for loop

for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

// while loop
let j = 0;
while (j < 10) {
  //   console.log(j);
  j++;
}

// do-while loop
let k = 0;
do {
  //   console.log(k);
  k++;
} while (k < 10);

//forEach
let array = [2, 4, 5, 6, 7, 890, 6];
array.forEach(function (ele) {
  //   console.log(ele);
});

// for (let i = 0; i < array.length; i++) {
//   let ele = arr[i];
//   console.log(ele);
// }

//for in loop
// we can use for in loop to iterate the key of object

let obj = {
  name: "arun",
  os: "window",
};
for (let key in obj) {
  //   console.log(`${key} of obj is ${obj[key]}`);
}

// for of loop
// we can use for of loop iterate the array

let names = ["harsh", "sunny", "sonu"];
for (let items of names) {
  //   console.log(items);
}

//which loop is faster like for , for of , forEach

const arr = [...Array(500).keys()];
console.log(arr);
// traditional for loop
console.time("for");
var output = "";
for (var i = 0; i < arr.length; i++) {
  output = output + arr[i];
}
console.timeEnd("for");

// for of loop

console.time("for of");
var output1 = "";
for (let value of arr) {
  output1 = output1 + value;
}
console.timeEnd("for of");

//for each loop
console.time("forEach");
var output2 = "";
arr.forEach((value) => {
  output2 = output2 + value;
});
console.timeEnd("forEach");

// if we take more than 1000 of values then for loop is faster or if we take less than of 1000 then for of loop is faster or its also depend on the browser
