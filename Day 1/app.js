// Search Data in an array of products using Recursions

// const products = [
//     { name: 'Samsung Galaxy S8', price: 600 },
//     { name: 'Google Pixel', price: 800 },
//     { name: 'iPhone 7', price: 900 },
//     { name: 'Samsung Galaxy S7', price: 500 },
//     { name: 'HTC 10', price: 400 },
//     { name: 'Sony Xperia XZ', price: 300 }
// ]

// function searchArray(arr, searchQuery) {
//     if (arr.length === 0) return;
//     const product = arr[0];
//     const productName = product.name.toLowerCase();
//     if (productName === searchQuery.toLowerCase()) return product;
//     return searchArray(arr.slice(1), searchQuery.toLowerCase());
// }

// console.log(searchArray(products, "samsung galaxy s7")); // { name: 'Samsung Galaxy S7', price: 500 }



// Remove duplicates from an array

// function removeDuplicates(arr) {
//     if (arr.length === 0) return []; 
//     const first = arr[0];
//     const rest = arr.slice(1);
//     const filteredArr = rest.filter(item => item !== first);
//     return [first, ...removeDuplicates(filteredArr)];
// }

// console.log(removeDuplicates(["hello", "hi", "hi", "hehe", "hello"]));


// Flatten the array

// function arrayflattener(arr) {
//     if (arr.length === 0) return [];
//     const flattened = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             const nestedFlattened = arrayflattener(arr[i]);
//             flattened.push(...nestedFlattened);
//         } else {
//             flattened.push(arr[i]);
//         }
//     }
//     return flattened;
// }

// console.log(arrayflattener([1, 2, [3, 4], 5, [6, 7]])); // [1, 2, 3, 4, 5, 6, 7]
