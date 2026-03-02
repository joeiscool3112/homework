// Bài 1: Swap hai số KHÔNG dùng biến temp
let a = 10, b = 20;
// Your code here
let total = a + b;
c = total - a;
d = total - b;
a = c; b = d;
console.log(a, b); // Output: 20 10

// Bài 2: Tính BMI (Body Mass Index)
// BMI = weight / (height * height)
// weight (kg), height (m)
// Return: "Underweight" (<18.5), "Normal" (18.5-24.9), 
//         "Overweight" (25-29.9), "Obese" (>=30)
function calculateBMI(weight, height) {
  // Your code
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } 
  else if (bmi < 25) {
    return "Normal";
  } 
  else if (bmi < 30) {
    return "Overweight";
  } 
  else {
    return "Obese";
  }

}
console.log(calculateBMI(175, 60))

// Bài 3: Tính tiền tip
// Hóa đơn < 500k → tip 20%
// Hóa đơn >= 500k → tip 15%
function calculateTip(bill) {
  // Return total = bill + tip

  let tip;

  if (bill < 500000) {
    tip = bill * 0.2;
  } else {
    tip = bill * 0.15;
  }
const total = bill + tip;
  return total;
}
console.log(calculateTip(400))

// Bài 4: FizzBuzz (1-100)
// Nếu chia hết 3 → "Fizz"
// Nếu chia hết 5 → "Buzz"
// Nếu chia hết cả 3 và 5 → "FizzBuzz"
// Còn lại → in số đó
function fizzBuzz(i) {
  // Your code
       if (i % 3 === 0 && i % 5 != 0) {
      console.log("Fizz");
    } else if (i % 3 != 0 && i % 5 === 0) {
      console.log("Buzz"); }
      else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } 
    else if (i % 3 != 0 && i % 5 != 0) {
      console.log(i);
    }
  }
console.log(fizzBuzz(35))
// Bài 5: Kiểm tra năm nhuận
// Leap year if: (chia hết 4 AND không chia hết 100) OR chia hết 400
function isLeapYear(year) {
  // Your code
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2000))

// Bài 6: Tìm số ngày trong tháng
// Input: month (1-12), year
// Xử lý đúng tháng 2 với năm nhuận
function getDaysInMonth(month, year) {
  // Your code
  if (month === 2) {
    if (isLeapYear(year)) {
      return 29;
    } else {
      return 28;
    }
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}
console.log(getDaysInMonth(12, 2000))

// Bài 7: In tam giác sao
// Input: n = 5
// Output:
// *
// **
// ***
// ****
// *****
function printTriangle(n) {
  // Your code
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}
console.log(printTriangle(5))
// Bài 8: In tam giác số
// Input: n = 4
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
function printNumberTriangle(n) {
  // Your code
   for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line);
  }
}
console.log(printNumberTriangle(4));

// Bài 9: Tính giai thừa (factorial)
// 5! = 5 × 4 × 3 × 2 × 1 = 120
function factorial(n) {
  // Your code
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
console.log(factorial(5));

// Bài 10: Kiểm tra số nguyên tố
function isPrime(num) {
  // Your code
   if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(24));
// Bài 11: Tìm tất cả số nguyên tố từ 1 đến n
function findPrimes(n) {
  // Return array of primes
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
console.log(findPrimes(25));
// Bài 12: Currency Converter
// rates = { USD: 1, VND: 24000, EUR: 0.92, JPY: 148 }
// convertCurrency(100, 'USD', 'VND', rates) → 2400000
function convertCurrency(amount, fromCurrency, toCurrency, rates) {
  // Your code
  let usdAmount = amount / rates[fromCurrency];
  let result = usdAmount * rates[toCurrency];
  return result;
  
}
const rates = {
  USD: 1,
  VND: 24000,
  EUR: 0.92,
  JPY: 148
};
console.log(convertCurrency(100, 'USD', 'VND', rates));