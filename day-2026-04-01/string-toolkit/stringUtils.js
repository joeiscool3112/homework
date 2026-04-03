// 1. capitalize(str) → "hello world" → "Hello World"
function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize("hello world"));

// 2. countWords(str) → "The quick brown fox" → 4
function countWords(str) {
    return str.trim().split(' ').length;
}
console.log(countWords("The quick brown fox"));

// 3. isPalindrome(str) → "racecar" → true, "hello" → false
function isPalindrome(str) {
    const cleanStr = str.replace(/\s/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
// 4. truncate(str, maxLength) → "Hello World", 7 → "Hello W..."
function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
}
console.log(truncate("Hello World", 7));


module.exports = { capitalize, countWords, isPalindrome, truncate };