// Bug 1: Hàm này không tính đúng sum
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Bug 2: Hàm này không filter đúng
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 1);
}

// Bug 3: Check palindrome không chính xác
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
// Test case fail: isPalindrome("A man a plan a canal Panama")
// Expected: true, Got: false

// Bug 4: Find max không đúng
function findMax(numbers) {
  let max = 0;
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
// Test case fail: findMax([-5, -1, -10]) → Expected: -1, Got: 0

// Bug 5: Average calculation sai
function calculateAverage(scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;
}
// Test case fail: calculateAverage([]) → Expected: 0, Got: NaN

// Bug 6: Capitalize first letter không work
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}
// Test case fail: capitalizeWords("  hello  world  ")