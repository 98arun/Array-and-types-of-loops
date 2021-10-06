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

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};
console.log(obj);

function findPath(obj, string) {}

/*
console.log(findPAth(obj, 'a.b.c')); // 12
console.log(findPAth(obj, 'a.b')); // {c: 12, j: false}
console.log(findPAth(obj, 'a.b.d')); // undefined
console.log(findPAth(obj, 'a.c')); // undefined
console.log(findPAth(obj, 'a.b.c.d')); // undefined
console.log(findPAth(obj, 'a.b.c.d.e')); // undefined
console.log(findPAth(obj, 'a.b.j')); //false
console.log(findPAth(obj, 'a.b.j.k')); //undefined
console.log(findPAth(obj, 'a.k')); //null */
