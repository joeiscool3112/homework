// EASY LEVEL

// 1. Reverse Words in String
// Input: "Hello World"
// Output: "World Hello"
function reverseWords(str) {
  // Your code
  return str.split(" ").reverse().join(" ");
}
console.log("1: ", reverseWords("Hello World"));

// 2. Count vowels (a, e, i, o, u)
// Input: "JavaScript"
// Output: 3
function countVowels(str) {
  // Your code
  let temp = [];
  let sum = 0;
  temp = str.split("");
  for (let letter of temp) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      sum += 1;
    }
  }
  return sum;
}
console.log("2: ", countVowels("Javascript"))

// 3. Find Longest Word
// Input: "The quick brown fox"
// Output: "quick" (or "brown")
function findLongestWord(str) {
  // Your code
  let temp = [];
  let max = 0;
  let max_letter = "";
  temp = str.split(" ");
  for (let word of temp) {
    if (word.length > max) {
      max_letter = word;
      max = word.length;
    }
  }
  return max_letter;
}
console.log("3: ", findLongestWord("The quick brown fox"));

// 4. Remove Duplicates from Array
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function removeDuplicates1(arr) {
  // Cách 1: dùng Set
  return [...new Set(arr)];
}

function removeDuplicates2(arr) {
  // Cách 2: dùng filter + indexOf
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
}
console.log("4: cach 1", removeDuplicates1([1, 2, 2, 3, 4, 4, 5]), "cach 2: ", removeDuplicates2([1, 2, 2, 3, 4, 4, 5]));


// MEDIUM LEVEL

// 5. Find Missing Number
// Cho array [1,2,3,4,6,7,8] (thiếu số 5)
// Tìm số missing từ 1 đến n
// HINT: Tổng 1→n = n(n+1)/2
function findMissingNumber(arr) {
  // Your code
  let Result = [];
  let max = Math.max(...arr);
  for ( let i = 1; i <= max; i++) {
    if (arr.includes(i)) {
    }
    else {
    Result.push(i);
    }
  }
  return Result;
}
console.log("5: ",findMissingNumber([1,2,3,4,6,7,8,10]));
// 6. Group Anagrams
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
function groupAnagrams(arr) {
  const map = new Map();
  for (let word of arr) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  return Array.from(map.values());
}

console.log("6: ", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


// 7. Array Intersection (phần tử chung)
// Input: [1,2,2,1], [2,2]
// Output: [2]
function intersection(arr1, arr2) {
  // Your code
  const set2 = new Set(arr2);
  const result = new Set();
  for (let x of arr1) {
    if (set2.has(x)) result.add(x);
  }
  return [...result];
}
console.log("7: ", intersection([1,2,2,1], [2,2])); 

// 8. Move Zeros to End
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// KHÔNG tạo array mới, modify in-place
function moveZeros(arr) {
  // Your code
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;
      pos++;
    }
  }

  return arr; 
}
console.log("8: ", moveZeros([0,1,0,3,12]));

// HARD LEVEL

// 9. Rotate Array
// Input: arr = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Giải thích: rotate right 3 positions
function rotateArray(arr, k) {
  // HINT: slice() và concat()
}

// 10. Product of Array Except Self
// Input: [1,2,3,4]
// Output: [24,12,8,6]
// Giải thích: [2×3×4, 1×3×4, 1×2×4, 1×2×3]
// KHÔNG dùng division operator
function productExceptSelf(arr) {
  // HINT: Left products × Right products
}