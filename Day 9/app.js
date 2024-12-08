// sab se pehle ham use krenge recursions ham sab se pehle ek dekhenge k arr

function rotateArray(steps, arr) {
  // write your code below
  if (arr.length === 0) return arr;
  let n = arr.length;

  let expectedArr = [];
  for (let i = 0; i <= steps; i++) {
    expectedArr = arr.slice(n - steps).concat(arr.slice(0, n - steps));
  }

  return expectedArr;
}

console.log(rotateArray(2, [1, 2, 3, 4, 5])); // [3,4,5,1,2]
console.log(rotateArray(3, [1, 2, 3, 4, 5])); // [4,5,1,2,3]

function findMedianSortedArrays(nums1, nums2) {
  // write your code below
  let nums = [...nums1, ...nums2];
  nums.sort();

  let n = nums.length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += nums[i];
  }

  return total / n;
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
