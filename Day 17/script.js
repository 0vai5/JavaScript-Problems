// First Occurance in a String

const firstOccurance = (haystack, needle) => {
    const n = haystack.length;
    const m = needle.length;

    if(m === 0) return 0;

    for(let i = 0; i < n - m + 1; i++) {
        if(haystack.substring(i, i + m) === needle) return i;
    }

    return -1;
};

console.log(firstOccurance("sadareyousad", "sad")); //0
console.log(firstOccurance("leetcode", "leeto")) // -1