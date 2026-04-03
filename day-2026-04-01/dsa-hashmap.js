// Bài 1: Valid Anagram (LeetCode #242)
// Kiểm tra hai chuỗi chữ có phải đảo chữ của nhau không.
// Input: s = "anagram", t = "nagaram" -> Output: true
// ⚠️ Dùng Hash Map (Object/Map) để đếm tần suất chữ cái.
function isAnagram(s, t) {
  // Your code
}
console.log("1:", isAnagram("anagram", "nagaram")); // true
console.log("1:", isAnagram("rat", "car")); // false

// Bài 2: First Unique Character in a String (LeetCode #387)
// Tìm ký tự đầu tiên không bị lặp lại trong chuỗi và trả về vị trí (index).
// Input: "leetcode" -> Output: 0 ('l' là ký tự đầu tiên không lặp)
// Input: "loveleetcode" -> Output: 2 ('v')
// ⚠️ Dùng Array hoặc Hash Map để lưu tần suất.
function firstUniqChar(s) {
  // Your code
}
console.log("2:", firstUniqChar("leetcode")); // 0
console.log("2:", firstUniqChar("aabb")); // -1