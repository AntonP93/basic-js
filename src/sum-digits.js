const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let nstring = (n+"").split('');
  let sum = 0
  for(let i = 0; i < nstring.length;i++){
    sum +=(+nstring[i])
  }
  if(!(sum.length===1)){
    sumString = (sum + "").split('');
    sumFinish=0
    for(let j = 0; j < sumString.length;j++){
      sumFinish +=(+sumString[j])
    }
    return  sumFinish; 
  } else {
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};
