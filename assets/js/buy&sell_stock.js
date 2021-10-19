/**
 * Create a function name called as maxProfit
 * In this function it takes a parameter as array like [7,1,2,6,5,4].
 * Now we have to initialize a loop inside the function which iterates the array (6 times).
 * After iteration it pick one value from array then sort the array suppose it picks 2 and sort them as [4,5,6].
 * Now we have a picked value and a sorted array. now it pick the bigger value on the 
   sorted array suppose in this array [4,5,6] it pick 6 and subtract it from first picked value as 6-2=4
    and pushed it on a new array.[4,',',',']
 * After the loop was completed 6 times we have a new array like [4,1,0,2,5]. we have to sort it again as [0,1,2,4,5]
   and pick the bigger value as 5 from the new array so that value is our maxProfit.
 */

const maxProfit = (p) => {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] < min) {
      min = p[i];
    } else if (p[i] - min > profit) {
      profit = p[i] - min;
    }
  }
  return profit;
};
let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
