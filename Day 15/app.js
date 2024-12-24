// flatten hai lekin edge cases k Agr Input Bohot Zyada hi bara hai to kya hoga

// const flat = (arr, depth) => {
//   const stack = arr.map((item) => [item, depth]);
//   const result = [];

//   while (stack.length > 0) {
//     const [currentItem, currentDepth] = stack.pop();

//     if (Array.isArray(currentItem) && currentDepth > 0) {
//       stack.push(...currentItem.map((item) => [item, currentDepth - 1]));
//     } else {
//       result.push(currentItem);
//     }
//   }

//   return result.reverse();
// };

// console.log(flat([1, 2, [3, 4, [5, 6, 7, [9, 10]]]], 1));
// console.log(flat([1, 2, [3, 4, [5, 6, 7, [9, 10]]]], 0));

// Join two Arrays With Id

const join = (arr1, arr2) => {
  let obj = {};
  for (let i of arr1) {
    obj[i.id] = i;
  }
  for (let i of arr2) {
    obj[i.id] = obj[i.id] ? { ...obj[i.id], ...i } : i;
  }

  return Object.values(obj);
};

console.log(
  join(
    (arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ]),
    (arr2 = [{ id: 3, x: 5 }])
  )
);

console.log(
  join(
    [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
);
