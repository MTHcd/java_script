function largeSum(arr) {

  // let to make it modifiable > const type;
  let sum = 0; 

  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  // e.g. sum = 3798298374-9
  // check the cardinal of digits of the sum number;
  // obtained in previous question;

  function CountDigits(number) {
    let count = 0;
    while(number > 0) {
      number = Math.floor(number / 10);
      count += 1;
    }
    return count;
  }

  // removing extra-digits
  for (let j = 0; j <=  Math.max(CountDigits(sum) - 10, 0); j++) {
      sum = Math.floor(sum / 10);
      }
  
  return sum;  
  }

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

// CHECK: BigInt
// CHECK: On expression;
// CHECK: 

console.log(largeSum(testNums));
