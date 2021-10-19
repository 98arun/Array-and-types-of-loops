/**
 * Create a function name called as maxProfit
 * In this function it takes a parameter as array like [7,1,2,6,5,4].
 * let assign a variable as min which take a minimum number
 * now assign profit as 0
 * Now we have to initialize a loop inside the function which iterates the array (6 times).
 * If the value of first parameter is less then minimum value then min value equals to parameter of first value.
 * Now in second condition if the profit is less then p[i]-min then profit equals to profit = p[i]-min
 * At last return the profit so we get our maxProfit.
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
