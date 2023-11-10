// To Initials
function toInitials(name) {
  let initials = name
    .split(" ")
    .map((word) => word[0])
    .join(". ");
  return initials + ".";
}

// Has Numbers
function hasNumbers(str) {
  return /\d/.test(str);
}

// Length of Elements
function elementLength(arr) {
  return arr.map((item) => item.length);
}

// Sum of Array is Even or Odd
function isArraySumEvenOrOdd(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum % 2 === 0 ? "even" : "odd";
}
// Reverse String
function reverse(str) {
  return str.split("").reverse().join("");
}

// Reverse Each Word in a String
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
// Median of Two Sorted Arrays
function findMedian(arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const length = mergedArray.length;
  if (length % 2 === 0) {
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
}

// Calculate Factorial
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

// Calculate GCD (Greatest Common Divisor)
function calculateGCD(a, b) {
  if (!b) {
    return a;
  }
  return calculateGCD(b, a % b);
}

// Calculate LCM (Least Common Multiple)
function calculateLCM(a, b) {
  return (a * b) / calculateGCD(a, b);
}

function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return calculateGCD(b, a % b);
  }
}
