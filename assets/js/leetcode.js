/**
 * @Question
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

/**
 #Algorithm
 * @description we have to create the function name as findPath
 * @param       This findPath function will take two parameter like object and string
 * @requires    The string will separate by using split as '.'
 * @returns     If the value is existing it will return the value otherwise it will return undefined
 */

var myObj = {
  a: {
    b: {
      c: 12,
      j: false,
      d: 11,
    },
    k: null,
  },
};
// const deepFreeze = (obj) => {
//   Object.keys(obj).forEach((prop) => {
//     if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
//       deepFreeze(obj[prop]);
//     }
//   });
//   return Object.freeze(obj);
// };
// deepFreeze(myObj);
console.log("LN36", myObj);

function findPath(myObj, str) {
  // Check if it is not a valid string and obj

  if (!str || typeof str !== "string") {
    return "It is not a valid string";
  }
  if (!myObj || myObj.constructor.name !== "Object") {
    return "It is not a valid object";
  }

  // Converting string into an array

  const array = str.split(".");
  // let objMap = { ...myObj };
  let objMap = JSON.parse(JSON.stringify(myObj));
  // let objMap = {myObj}
  objMap.a.b.c = 11;
  objMap.a.b.j = true;
  // console.log("LN54", objMap);

  for (let item of array) {
    // console.log(!objMap);

    if (!objMap || objMap.constructor.name !== "Object") {
      return;
    }
    objMap = objMap[item];
  }
  return objMap;
}

// console.log(findPath(myObj, "a.b")); // {c: 12, j: false}
// console.log(findPath(myObj, "a.b.c")); // 12
console.log(findPath(myObj, "a.b.d")); // undefined
// console.log(findPath(myObj, "a.c")); // undefined
// console.log(findPath(myObj, "a.b.c.d")); // undefined
// console.log(findPath(myObj, "a.b.c.d.e")); // undefined
// console.log(findPath(myObj, "a.b.j")); //false
// console.log(findPath(myObj, "a.b.j.k")); //undefined
// console.log(findPath(myObj, "a.k")); //null
