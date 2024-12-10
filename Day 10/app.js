// Two Sum

function twoSum(arr, target) {
    // write your code below 
    let n = arr.length;
    let newArr = []
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            if(arr[i] + arr[j] === target) {
                newArr = [i, j]
            }
        }
    }
    return newArr
}


console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [1, 2]
console.log(twoSum([3,3], 6)) // [0, 1]