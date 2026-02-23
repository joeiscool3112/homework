//sum array
let arr = [1, 2, 3, 4];
 if (!Array.isArray(arr)) {
    console.log("Error");
  } else {
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

// max in array 
let arr = [3, 7, 2, 9, 5];
if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Error");
  } 
  else {
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
  }

console.log(max);

// min in array
let arr = [3, 7, 2, 9, 5];
if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Error");
  } else {
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
  }

console.log(min);

//count positive num in arr
let arr = [-1, 3, -5, 4, 6];
if (!Array.isArray(arr)) {
    console.log("Error");
  } else {
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    count++;
  }
}
  }

console.log(count);

//count negative num in array
let arr = [-1, 3, -5, 4, 6];
if (!Array.isArray(arr)) {
    console.log("Error");
  } else {
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count++;
  }
}
  }
console.log(count); 

//reverse array
let arr = [1, 2, 3, 4];
if (!Array.isArray(arr)) {
    console.log("Error");
  } else {
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}}

console.log(reversed);

//merge arrays
let a = [1, 2];
let b = [3, 4];
if (!Array.isArray(a) || !Array.isArray(b)) {
    console.log("Error");
  } else {
let merged = [];

for (let i = 0; i < a.length; i++) {
  merged.push(a[i]);
}

for (let i = 0; i < b.length; i++) {
  merged.push(b[i]);
}}

console.log(merged); 

//================================
//string

//đảo ngược chuỗi
let str = "olleh";
 if (typeof str !== "string") {
    console.log("Error");
  } else {
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}}

console.log(reversed);
//count freq
let str = "hello";
if (typeof char !== "string" || char.length !== 1) {
    console.log("Error");
  } else {
let char = "l";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    count++;
  }
}}

console.log(count);

//palindrome
let str = "RaceCar";
 if (typeof str !== "string") {
    console.log("Error");
  } else {
let lower = str.toLowerCase();
let reversed = "";

for (let i = lower.length - 1; i >= 0; i--) {
  reversed += lower[i];
}

if (lower === reversed) {
  console.log(true);
} else {
  console.log(false);
}
  }