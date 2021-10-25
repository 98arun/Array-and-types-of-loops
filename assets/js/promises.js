console.log("Inside promise");
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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 1000);
  });
}

createPost({ title: "three", body: "this is three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// async and await

// async function init() {
//   await createPost({
//     title: "three",
//     body: "this is three",
//   });
//   getPosts();
// }
// init();

// promise.all()

const promise1 = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Resolve: Promise1");
  } else {
    reject("Error1: Something went wrong");
  }
});
const promise2 = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Resolve: Promise2");
  } else {
    reject("Error2: Something went wrong");
  }
});
const promise3 = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Resolve: Promise3");
  } else {
    reject("Error3: Something went wrong");
  }
});

Promise.all([promise1, promise2, promise3])
  .then((message) => {
    console.log(".all", message);
  })
  .catch((message) => {
    console.log(".all", message);
  });

// promise.race() it takes the first promise if it fulfilled or rejected
Promise.race([promise1, promise2, promise3])
  .then((message) => {
    console.log(".race", message);
  })
  .catch((message) => {
    console.log(".race", message);
  });

// promise.allSettled()

Promise.allSettled([promise1, promise2, promise3])
  .then((message) => {
    console.log(".allSettled", message);
  })
  .catch((message) => {
    console.log(".allSettled", message);
  });

// promise.any() returns a single and quick output. it ignore the rejection and settled as soon as any of the promises you feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError.
Promise.any([promise1, promise2, promise3])
  .then((message) => {
    console.log(".any", message);
  })
  .catch((message) => {
    console.log(".any", message);
  });

// promise chaining

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 100);
});

promise
  .then((result) => {
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
    return result * 2;
  })
  .catch((e) => {
    console.log("error", e);
  });

// (() => {
//   let one = (two = 0);
//   one += two + 1;
//   return one;
// })();

// console.log(typeof one);
// console.log(typeof two);
