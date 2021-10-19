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
let a = git();
console.log("LN12 after calling git");
console.log("LN13", a);
a.then((data) => console.log("LN14", data));
console.log("LN15 end");
