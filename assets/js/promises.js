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
