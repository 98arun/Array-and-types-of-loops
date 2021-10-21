async function git() {
  console.log("LN2 inside git function");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("LN4 before response");
  console.log("LN5", res);
  const users = await res.json();
  console.log("LN6 users");
  return users;
}
console.log("LN10 before calling git");
const a = git;
console.log("LN12 after calling git");
console.log("LN13", a());
a().then((data) => console.log("LN14", data));
console.log("LN15 end");

// function y() {
//   console.log(this.length);
// }
// y();
// var test = {
//   length: 5,
//   method: function (y) {
//     arguments[0]();
//   },
// };
// console.log(test.method(y, 1)); // 2
