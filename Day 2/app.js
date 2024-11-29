// Missing Numbers

// function missingNumbers(arr) {
//     let missing = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!arr.includes(i)) {
//             missing.push(i)
//         }
//     }

//     let finalArr = [...arr, ...missing];

//     finalArr.sort((a, b) => a - b);

//     return finalArr;
// }

// console.log(missingNumbers([1, 3, 4, 6, 7, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Longest String of Unique Characters

function longestUniqueSubStr (str) {
    let obj = {};
    let max = 0;
    let start = 0;

    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]] >= 0) {
            start = obj[str[i]] + 1;
        } 

        obj[str[i]] = i;

        max = Math.max(i - start + 1, max)
    }

    return max
}


console.log(longestUniqueSubStr('abcabcbb')); // 3
console.log(longestUniqueSubStr('bbbbb')); // 1
console.log(longestUniqueSubStr('pwwkew')); // 3
console.log(longestUniqueSubStr('')); // 0