/*
1) Tính tổng mảng
Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng
Ví dụ: [1,2,3] -> 6
*/
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3]));

/*
2) Tính tổng các số dương
Chỉ cộng các số > 0 trong mảng
Ví dụ: [-1, 2, 0, 5] -> 7
*/
function sumPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}
console.log(sumPositive([-1, 2, 0, 5]));

/*
3) Tìm số lớn nhất (max)
Trả về giá trị lớn nhất trong mảng
*/
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
console.log(findMax([3, 9, 2]));

/*
4) Tìm số nhỏ nhất (min)
Trả về giá trị nhỏ nhất trong mảng
*/
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}
console.log(findMin([3, 9, 2]));

/*
5) Tìm vị trí của max
Trả về index của phần tử lớn nhất (lấy phần tử đầu tiên nếu trùng)
*/
function indexOfMax(arr) {
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }
    return maxIndex;
}
console.log(indexOfMax([1, 7, 7, 2]));

/*
6) Đếm số chẵn
Đếm bao nhiêu số chia hết cho 2 trong mảng
*/
function countEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) count++;
    }
    return count;
}
console.log(countEven([1, 2, 4, 7]));

/*
7) Đếm số lẻ
Đếm bao nhiêu số lẻ trong mảng
*/
function countOdd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) count++;
    }
    return count;
}
console.log(countOdd([1, 2, 4, 7]));

/*
8) Tính trung bình cộng
Nếu mảng rỗng thì trả về 0
*/
function average(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([2, 4, 6]));

/*
9) Đảo ngược mảng
Không sử dụng hàm reverse()
*/
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([1, 2, 3]));

/*
10) Lọc các số lớn hơn x
Trả về mảng mới gồm các phần tử > x
*/
function filterGreaterThan(arr, x) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) result.push(arr[i]);
    }
    return result;
}
console.log(filterGreaterThan([1, 5, 2, 9], 4));

/*
11) Tìm số xuất hiện nhiều nhất
Nếu có nhiều số cùng tần suất, lấy số xuất hiện trước
*/
function mostFrequent(arr) {
    let maxCount = 0;
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++;
        }
        if (count > maxCount) {
            maxCount = count;
            result = arr[i];
        }
    }
    return result;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3]));

/*
12) Đếm số nguyên tố trong mảng
Số nguyên tố là số > 1 và chỉ chia hết cho 1 và chính nó
*/
function countPrime(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        let isPrime = n > 1;
        for (let j = 2; j <= Math.sqrt(n); j++) {
            if (n % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) total++;
    }
    return total;
}
console.log(countPrime([2, 3, 4, 5, 9]));

/*
13) Đảo chuỗi
Không dùng split().reverse().join()
*/
function reverseString(s) {
    let newStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
        newStr += s[i];
    }
    return newStr;
}
console.log(reverseString("hello"));

/*
14) Đếm số nguyên âm trong chuỗi
Nguyên âm: a, e, i, o, u (không phân biệt hoa thường)
*/
function countVowels(s) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) count++;
    }
    return count;
}
console.log(countVowels("Xin Chao"));

/*
15) Kiểm tra palindrome
Chuỗi đọc xuôi và ngược giống nhau
Bỏ qua ký tự đặc biệt, không phân biệt hoa thường
*/
function isPalindrome(s) {
    let clean = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9')
        ) {
            clean += char;
        }
    }
    for (let i = 0; i < clean.length / 2; i++) {
        if (clean[i] !== clean[clean.length - 1 - i]) return false;
    }
    return true;
}
console.log(isPalindrome("abba"));
