// Sum of Square of Special Elements

// function sumOfSquare(nums) {
//   let n = nums.length;
//   let total = 0;
//   for (let i = 0; i < n; i++) {
//     if (n % (i + 1) === 0) {
//       total += nums[i] * nums[i];
//     }
//   }

//   return total;
// }

// console.log(sumOfSquare([1, 2, 3, 4]));
// console.log(sumOfSquare([2, 7, 1, 19, 18, 3]));


// Sum of all odd length subArrays

function sumOddLengthSubArrays(arr) {
    let n = arr.length
    let total = 0
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let subArr = arr.slice(i, j + 1)
            if(subArr.length % 2 !== 0) {
                for(let k = 0; k < subArr.length;k++){
                total += subArr[k]
            }
            }
        }
    }

    return total
}

console.log(sumOddLengthSubArrays([1, 4, 2, 5, 3])) // 58
console.log(sumOddLengthSubArrays([1, 2])) // 3