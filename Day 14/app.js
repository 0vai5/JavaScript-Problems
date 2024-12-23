// To Be or Not Do be

// var expect = function (val) {
//   function toBe(val2) {
//     if (val === val2) {
//       return true;
//     } else {
//       throw new Error("Not Equal");
//     }
//   }

//   function notToBe(val2) {
//     if (val !== val2) {
//       return true;
//     } else {
//       throw new Error("Equal");
//     }
//   }

//   return {
//     toBe,
//     notToBe,
//   };
// };

// // Test cases
// try {
//   console.log(expect(5).toBe(5)); // true
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   console.log(expect(5).toBe(3)); // Error: Not Equal
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   console.log(expect(5).notToBe(null)); // equal
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   console.log(expect(5).notToBe(5)); // Error: Equal
// } catch (e) {
//   console.error(e.message);
// }

// Sum of Promises

// var addTwoPromises = async function (promise1, promise2) {
//   var val1 = await promise1;
//   var val2 = await promise2;

//   return val1 + val2;
// };

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// });

// addTwoPromises(promise1, promise2).then((result) => {
//   console.log(result); // 8
// });
