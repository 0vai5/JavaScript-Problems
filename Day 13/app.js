// Apply Transform Over Each Element in Array

// var map = function (arr, fn) {
//   var newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = fn(arr[i], i);
//   }

//   return newArr;
// };

// console.log(
//   map([1, 2, 3], function (x) {
//     return x * 2;
//   })
// ); // [2, 4, 6]
// console.log(
//   map([1, 2, 3], function (x) {
//     return x + 1;
//   })
// ); // [2, 3, 4]
// console.log(
//   map([1, 2, 3], function (x, i) {
//     return arr[i] - 1;
//   })
// ); // [0, 1, 2]

// Filter Elements from Array

var filter = function (arr, fn) {
  var filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    var elem = fn(arr[i], i);
    if (elem) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

console.log(
  filter([1, 2, 3], function (x) {
    return x > 10;
  })
); // []
console.log(
  filter([1, 2, 3], function (x) {
    return x > 1;
  })
); // [2, 3]
console.log(
  filter([1, 2, 3], function (x) {
    return arr[x] % 2 === 0;
  })
); // [2]
