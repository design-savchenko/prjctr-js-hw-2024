"use strict";

// //First part homework

function recursiveOddSumTo(number) {
 if (number > 0) {
     let sum = number % 2 === 0 ? 0 : number;
 return sum + recursiveOddSumTo(number - 1)
} else {
    return 0;
}
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// //Second part homework

function iterativeOddSumTo(number) {

let sum = 0;

for (let i = 1; i <= number; i += 2) {
sum += i;
}
return sum;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25

