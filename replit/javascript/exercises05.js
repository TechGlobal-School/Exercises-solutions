// Make negative
function makeNegative(num) {
  return parseInt(num) <= 0 ? num : -num;
}

// Sum of Number is Even or Odd
const isSumEvenOrOdd = (n1, n2, n3) => {
  let sum = n1 + n2 + n3;
  return sum % 2 === 0 ? "even" : "odd";
};


// Two Decimal Points
function decimal2(numbers) {
  return numbers.map((num) => Number(num.toFixed(2)));
}

// X to the Power of N
function myPow(x, n) {,
  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 0; i < Math.abs(n); i++) {
    result *= x;
  }

  if (n < 0) {
    return 1 / result;
  }

  return result;
}

// Longest Word
function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Count Vowels and Consonants
function countVC(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if (char.match(/[a-z]/i)) {
      consonantsCount++;
    }
  }

  return {
    vowels: vowelsCount,
    consonants: consonantsCount,
  };
}

// Count Characters
function countChars(str) {
  let count = {};
  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      count.letters = (count.letters || 0) + 1;
    } else if (/[0-9]/.test(char)) {
      count.numbers = (count.numbers || 0) + 1;
    } else if (/\S/.test(char)) {
      count.specials = (count.specials || 0) + 1;
    }
  }
  return count;
}

// Maximum Occurring Character
function maxOccurrences(str) {
  if (str.trim() === "") {
    return "";
  }

  const count = {};
  const cleanStr = str.replace(/\s+/g, "");

  for (let char of cleanStr) {
    count[char] = (count[char] || 0) + 1;
  }

  let maxCount = 0;
  let maxChar = "";

  for (let char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Removing Star

// Roman to Number
function romanToInt(romanNumeral) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    if (i > 0 && romanMap[romanNumeral[i]] > romanMap[romanNumeral[i - 1]]) {
      result += romanMap[romanNumeral[i]] - 2 * romanMap[romanNumeral[i - 1]];
    } else {
      result += romanMap[romanNumeral[i]];
    }
  }

  return result;
}