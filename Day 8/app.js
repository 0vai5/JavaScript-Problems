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





// function fibinocci (n) {
//     if(n <= 1) {
//         return n;
//     }

//     return fibinocci(n-1) + fibinocci(n-2);
// }

// console.log(fibinocci(9)); // 34
// console.log(fibinocci(10)); // 55

// function areAnagrams(str1, str2) {
//   var normalStr1 = str1.toLowerCase().split("").sort().join("");

//   var normalStr2 = str2.toLowerCase().split("").sort().join("");

//   return normalStr1 === normalStr2;
// }

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world")); // false

//     return palindromicStr;
// }

// console.log(countPalindromes('abbaeae')); // 4
// console.log(countPalindromes('abba')); // 6
// console.log(countPalindromes('abab')); // 6
