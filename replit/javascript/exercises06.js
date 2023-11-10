// Repeating X
function repeatingX(str) {
  let lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length - 1; i++) {
    if (lowerCaseStr[i] === "x" && lowerCaseStr[i + 1] === "x") {
      return true;
    }
  }
  return false;
}

// Is Perfect Square
function isPerfectSquare(num) {
  return Math.sqrt(num) % 1 === 0 ? true : false;
}

// Converter
function convertTemperature(temp, unit) {
  if (unit === "Celsius") {
    return (temp * 9) / 5 + 32;
  } else if (unit === "Fahrenheit") {
    return ((temp - 32) * 5) / 9;
  }
}

// Sum of Even Numbers
function sumOfEvenNumbers(arr) {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

// Capitalize Odd Index
function capsOdds(arr) {
  return arr.map((elem, index) => {
    if (index % 2 !== 0) {
      return elem.toUpperCase();
    }
    return elem;
  });
}

// Camel Case Converter
function toCamelCase(str) {
  if (isCamelCase(str)) return str;
  const words = str.trim().split(" ");
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return camelCaseWords.join("");
}

function isCamelCase(word) {
  return /^[a-z]+(?:[A-Z][a-z]*)*$/.test(word);
}

// Snake Case Converter
function toSnakeCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, "_");
}

// Alternating Cases
function alternatingCases(str) {
  var result = "";
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (/[A-Za-z]/.test(char)) {
      if (shouldCapitalize) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }

      shouldCapitalize = !shouldCapitalize;
    } else {
      result += char;
    }
  }

  return result;
}
// Neutral Strings
function isNeutral(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "+" && str2[i] === "+") {
      result += "+";
    } else if (str1[i] === "-" && str2[i] === "-") {
      result += "-";
    } else {
      result += "0";
    }
  }
  return result;
}

// Negative or Positive
function isTrueOrFalse(str) {
  let positiveWords = 0;
  let negativeWords = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const words = str.toLowerCase().match(/[a-z]+/g);
  if (words) {
    words.forEach((word) => {
      if (alphabet.indexOf(word.charAt(0)) < 13) {
        positiveWords++;
      } else {
        negativeWords++;
      }
    });
  }

  return positiveWords >= negativeWords;
}
