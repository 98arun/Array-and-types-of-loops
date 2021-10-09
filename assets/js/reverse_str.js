/**
 * @question
 * Given a string that contains words separated by digits(0-9). Reverse words in place
 * Eg: asd1fa -> dsa1af
 **/
/**
 *#Algorithm

 * 1-Create a function called as reverseWords
 * 2-First we have to check it for a valid string
 * 3-If the string is valid then split the string it will convert it in an array
 *   3.1- use the regular expression shorthand class digit(/(\d)/).
 *        it will separate the characters and numbers
 * 4-Define a new variable name as result which holds a blank string
 * 5-Implement a for loop in an split array
 * 6-In a for loop we have to give some condition to separate a number and character
 * 7-Now in first condition if it is a number then do noting simply push it to the result variable
 * 8-In second condition if it is not a number then split it and call the reverseStr function
 * 9-In this reverseStr function we reverse the splitted array using loop
 * 10-End
 */

const reverseWords = (str) => {
  if (!str || typeof str !== "string") {
    return "It is not a valid string";
  }
  let arr = str.split(/(\d)/);
  let result = "";
  for (i = 0; arr.length > i; i++) {
    if (parseInt(arr[i]) !== NaN) {
      let arrStr = arr[i].split("");
      // console.log("LN24", arrStr);
      // result += arrStr.reverse().join("");
      result += reverseStr(arrStr);
    } else if (parseInt(arr[i]) === NaN) {
      result += arr[i];
    }
  }
  return result;
};

function reverseStr(str) {
  //This function iterates string left to right
  // let new = "";
  // for (i = new.length - 1; i >= 0; i--) {
  //   new += str[i];
  // }
  // return new;

  //This function iterates string right  to left
  let newStr = "";
  for (let char of str) {
    newStr = char + newStr;
  }
  return newStr;
}
console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f
