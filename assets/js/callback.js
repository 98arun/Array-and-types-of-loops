function calculate(num1, num2, callbackFunction) {
  return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
  return num1 * num2;
}

function calcSum(num1, num2) {
  return num1 + num2;
}
// alerts 75, the product of 5 and 15
console.log(calculate(5, 15, calcProduct));
// alerts 20, the sum of 5 and 15
console.log(calculate(5, 15, calcSum));

//create callback
const message = function () {
  console.log("This message is shown after 6 seconds");
};

setTimeout(message, 6000);

// create anonymous callback function
setTimeout(function () {
  console.log("This message is shown after 3 seconds");
}, 3000);

//create arrow callback function
setTimeout(() => {
  console.log("This message is shown after 1 seconds");
}, 1000);

//add event listener is also a callback function

function addEvent() {
  let count = 0;
  document.getElementById("clicked").addEventListener("click", function () {
    console.log("Button is clicked", ++count);
  });
}
addEvent();

//create a callback function

const posts = [
  { title: "one", body: "this is one" },
  { title: "two", body: "this is two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>\n`;
    });
    console.log(output);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "three", body: "this is three" }, getPosts);
