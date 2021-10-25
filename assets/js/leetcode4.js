console.log("Inside leetcode 4th assignment");

/**
 * @description Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
  //   if (!num1 || typeof num1 !== "string") {
  //     console.log(num1, typeof num1);
  //     return "It is not a valid string";
  //   }
  //   return "It is  a valid string";
  //   if (!num2 || typeof num2 !== "string") {
  //     console.log(num2);
  //     return "It is not a valid string";
  //   }
  if (parseInt(num1) !== NaN && parseInt(num2) !== NaN) {
    result = parseInt(num1) + parseInt(num2);
    console.log(parseInt(num1), parseInt(num2), result);

    return result.toString();
  }
  return "invalid data";
}
addStrings("9333852702227987", "85731737104263");
