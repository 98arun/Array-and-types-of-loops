/**
 * @question
 * Given a string that contains words separated by digits(0-9). Reverse words in place
 * Eg: asd1fa -> dsa1af
 **/
/**
 *
 * @description 1-Create a function called as reverseWords
 *              2-First we have to check it for a valid string
 *              3-if the string is valid then split the string it will convert in an array
 *              4- then reverse the string
 *              5- but there is a catch we have to reverse only words not numbers
 */

const reverseWords = (str) => {
  if (!str || typeof str !== "string") {
    return "It is not a valid string";
  }
  let words = str.split("").reverse().join("");
  //   console.log("LN20", words);
  return words;
};

// console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
// console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
// console.log(reverseWords("asd")); // dsa
// console.log(reverseWords("asd1f")); // dsa1f
