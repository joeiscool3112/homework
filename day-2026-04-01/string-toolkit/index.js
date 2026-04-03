const stringUtils = require('./stringUtils');

console.log(stringUtils.capitalize("hello world")); // "Hello World"
console.log(stringUtils.countWords("The quick brown fox")); // 4
console.log(stringUtils.isPalindrome("racecar")); // true
console.log(stringUtils.isPalindrome("hello")); // false
console.log(stringUtils.truncate("Hello World", 7)); // "Hello W..."