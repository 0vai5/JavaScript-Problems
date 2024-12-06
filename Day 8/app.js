// Palindromic SubStrings


// function countPalindromes(s) {
//     let n = s.length;
//     let arr = [];

//     // Collect all substrings
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j <= n; j++) {
//             arr.push(s.substring(i, j));
//         }
//     }

//     let palindromicStr = 0;

//     // Check for palindromes
//     for (let i = 0; i < arr.length; i++) {
//         let subStr = arr[i];
//         let reversedStr = subStr.split('').reverse().join(''); // Reverse the string

//         if (subStr === reversedStr) { // Check if the substring is a palindrome
//             palindromicStr++;
//         }
//     }

//     return palindromicStr;
// }

// console.log(countPalindromes('abbaeae')); // 4
// console.log(countPalindromes('abba')); // 6
// console.log(countPalindromes('abab')); // 6