//grade

function getGrade(score) {
  if (typeof score !== "number" || isNaN(score) || score < 0 || score > 100) {
    return "Invalid score";
  }

  let grade;

  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  return grade;
}

//day of week
function getDayOfWeek(dayNumber) {
  if (
    typeof dayNumber !== "number" ||
    !Number.isInteger(dayNumber) ||
    dayNumber < 1 ||
    dayNumber > 7
  ) {
    return "Invalid day number";
  }

  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
  }
}

//age
function classifyAge(age) {
  if (
    typeof age !== "number" ||
    isNaN(age) ||
    age < 0 ||
    !Number.isInteger(age)
  ) {
    return "Invalid age";
  }

  switch (true) {
    case age <= 12:
      return "Child";
    case age <= 19:
      return "Teen";
    case age <= 59:
      return "Adult";
    default:
      return "Senior";
  }
}

//------------
//for of function
function sumArray(arr) {
  let isValid = Array.isArray(arr);
  let sum = 0;

  if (isValid) {
    for (const num of arr) {
      if (typeof num !== "number" || isNaN(num)) {
        isValid = false;
      } else {
        sum += num;
      }
    }
  }

  if (isValid) {
    return sum;
  } else {
    return "Invalid input";
  }
}

//max
function findMax(arr) {
  let isValid = true;
  let max;

  if (!Array.isArray(arr) || arr.length === 0) {
    isValid = false;
  } else {
    max = arr[0];

    for (const num of arr) {
      if (typeof num !== "number" || isNaN(num)) {
        isValid = false;
      } else if (num > max) {
        max = num;
      }
    }
  }

  if (isValid) {
    console.log("Max =", max);
  } else {
    console.log("Invalid input");
  }
}

//count positive
function countPositive(arr) {
  let isValid = true;
  let count = 0;

  if (!Array.isArray(arr)) {
    isValid = false;
  } else {
    for (const num of arr) {
      if (typeof num !== "number" || isNaN(num)) {
        isValid = false;
      } else if (num > 0) {
        count++;
      }
    }
  }

  if (isValid) {
    console.log("Positive count =", count);
  } else {
    console.log("Invalid input");
  }
}

//while function
//reverse string
function reverseString(str) {
  let isValid = true;
  let reversed = "";
  let i;

  if (typeof str !== "string") {
    isValid = false;
  } else {
    i = str.length - 1;

    while (i >= 0) {
      reversed += str[i];
      i--;
    }
  }

  if (isValid) {
    console.log("Reversed =", reversed);
  } else {
    console.log("Invalid input");
  }
}

//count digits
function countDigits(num) {
  let isValid = true;
  let count = 0;

  if (typeof num !== "number" || isNaN(num)) {
    isValid = false;
  } else {
    num = Math.abs(num);

    if (num === 0) {
      count = 1;
    } else {
      while (num > 0) {
        num = Math.floor(num / 10);
        count++;
      }
    }
  }

  if (isValid) {
    console.log("Digit count =", count);
  } else {
    console.log("Invalid input");
  }
}