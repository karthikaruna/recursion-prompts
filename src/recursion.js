/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) return null;
  else if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  const arrayToPass = [...array];

  if (!arrayToPass.length) return 0;
  else if (arrayToPass.length === 1) return array[0];
  else {
    arrayToPass[0] = arrayToPass[0] + arrayToPass[1];
    arrayToPass.splice(1, 1);
    return sum(arrayToPass);
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  const arrayToPass = [...array],
    { isArray } = Array;

  if (!arrayToPass.length) {
    return 0;
  } else if (arrayToPass.length === 1) {
    return isArray(arrayToPass[0]) ? arraySum(arrayToPass[0]) : arrayToPass[0];
  } else {
    arrayToPass[0] = 
      (isArray(arrayToPass[0]) ? arraySum(arrayToPass[0]) : arrayToPass[0])
        + (isArray(arrayToPass[1]) ? arraySum(arrayToPass[1]) : arrayToPass[1]);

    arrayToPass.splice(1, 1);
    return arraySum(arrayToPass);
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  const num = Math.abs(n);

  if (num === 1) {
    return false;
  } else if (num === 0 || num === 2) {
    return true;
  } else {
    return isEven(n < 0 ? n + 2 : n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  const minusOne = n => n > 0 ? n - 1 : n + 1;

  if (n === 0) {
    return 0;
  } else if (Math.abs(n) === 1 || Math.abs(n) === 2) {
    return minusOne(n);
  } else {
    return minusOne(n) + sumBelow(minusOne(n));
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  let accum, nextElement;

  if (typeof x === 'number') {
    if (x === y) return [];
    
    accum = [];
    nextElement = x < y ? x + 1 : x - 1;
  } else {
    accum = [...x];
    const lastElement = accum[accum.length - 1];
    nextElement = lastElement < y ? lastElement + 1 : lastElement - 1;
  }

  if (nextElement !== y) {
    accum.push(nextElement);
    return range(accum, y);
  } else {
    return accum;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp === -1) {
    return 1 / base;
  } else {
    if (exp < 0) {
      return 1 / (base * exponent(base, -exp - 1));
    } else {
      return base * exponent(base, exp - 1);
    }
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    if (n % 2 !== 0) {
      return false;
    } else {
      return powerOfTwo(n / 2);
    }
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 1) {
    return string;
  } else {
    return reverse(string.slice(1)) + string[0];
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length === 1 || string.length === 0) {
    return true;
  } else {
    if (string[0].toUpperCase() === string[string.length - 1].toUpperCase()) {
      return palindrome(string.slice(1, string.length - 1));
    } else {
      return false;
    }
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  } else if (y === 1 || y === -1) {
    return 0;
  } else {
    if (x < 0) {
      if (y < 0) {
        if (x - y > 0) {
          return x;
        } else {
          return modulo(x - y, y);
        }
      } else {
        if (x + y > 0) {
          return x;
        } else {
          return modulo(x + y, y);
        }
      }
    } else {
      if (y < 0) {
        if (x + y < 0) {
          return x;
        } else {
          return modulo(x + y, y);
        }
      } else {
        if (x - y < 0) {
          return x;
        } else {
          return modulo(x - y, y);
        }
      }
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  const abs = n => n < 0 ? -n : n;
  
  if (y === 0) {
    return 0;
  } else if (y === 1) {
    return x;
  } else if (y === -1) {
    return -x;
  } else {
    const result = abs(x) + abs(multiply(x, y > 0 ? y - 1 : y + 1));
    return (x > 0 && y > 0) || (x < 0 && y < 0)
      ? result
      : -result;
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  const abs = n => n < 0 ? -n : n;

  if (x === 0 && y === 0) {
    return NaN;
  } else if (abs(y) > abs(x)) {
    return 0;
  } else if (y === 1) {
    return x;
  } else if (y === -1) {
    return -x;
  } else if (abs(x) - abs(y) >= abs(y)) {
    const result = 1 + abs(divide(abs(x) - abs(y), abs(y)));
    return (x > 0 && y > 0) || (x < 0 && y < 0)
      ? result
      : -result;
  } else {
    return 1;
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  const min = (u, v) => u <= v ? u : v;

  if (x <= 0 || y <= 0) {
    return null;
  } else if (x === 1 || y === 1) {
    return 1;
  } else if (x % min(x, y) === 0 && y % min(x, y) === 0) {
    return min(x, y);
  } else {
    x <= y ? y -= x : x -= y;
    return gcd(x, y);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === '' || str2 === '') {
    return str1 === str2;
  } else {
    if (str1[0] === str2[0]) {
      return compareStr(str1.slice(1), str2.slice(1));
    } else {
      return false;
    }
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  const lastIndex = str.length - 1;
  if (str.length === 1) {
    return [str];
  } else {
    return [...createArray(str.slice(0, lastIndex)), str[lastIndex]];
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  const lastIndex = array.length - 1;
  if (array.length === 1) {
    return array;
  } else {
    return [array[lastIndex], ...reverseArr(array.slice(0, lastIndex))];
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  const array = (Array.isArray(value) && value.length) ? [...value] : [value];
  
  if (array.length !== length) {
    return buildList([...array, array[0]], length);
  } else {
    return array;
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (typeof n === 'number') {
    n = Array(n).fill(0).map((item, index) => index + 1);
  } else {
    const transform = x => {
      if (x % 15 === 0) {
        return 'FizzBuzz';
      } else if (x % 5 === 0) {
        return 'Buzz';
      } else if (x % 3 === 0) {
        return 'Fizz';
      } else {
        return String(x);
      }
    },
      lastIndex = n.length - 1;

    if (n.length === 1) {
      return [transform(n[0])];
    } else {
      return [...fizzBuzz(n.slice(0, lastIndex)), transform(n[lastIndex])];
    }
  }

  return fizzBuzz(n);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  const arr = [...array],
    lastIndex = arr.length - 1;

  if (!arr.length) {
    return 0;
  } else if (arr[lastIndex] === value) {
    arr.pop();
    return 1 + countOccurrence(arr, value);
  } else {
    arr.pop();
    return countOccurrence(arr, value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  const arr = [...array],
    lastIndex = arr.length - 1;

  if (!arr.length) {
    return arr;
  } else if (arr.length === 1) {
    return [callback(arr[0])];
  } else {
    return [...rMap(arr.slice(0, lastIndex), callback), callback(arr[lastIndex])];
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = obj[key] ? 1 : 0;

  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      count += countKeysInObj(obj[k], key);
    }
  }

  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;

  for (let k in obj) {
    if (obj[k] === value) {
      count++;
    } else {
      if (typeof obj[k] === 'object') {
        count += countValuesInObj(obj[k], value);
      }
    }
  }

  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (obj[oldKey]) {
    const temp = obj[oldKey];
    delete obj[oldKey];
    obj[newKey] = temp;
  }

  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      replaceKeysInObj(obj[k], oldKey, newKey);
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  } else {
    let arr = fibonacci(n - 1);
    const lastIndex = arr.length - 1;

    arr = [...arr, arr[lastIndex] + arr[lastIndex - 1]];
    return arr;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } else {
    const lastElement = array.pop();
    return [...capitalizeWords(array), lastElement.toUpperCase()];
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  const cfl = str => str[0].toUpperCase() + str.slice(1);

  if (array.length === 1) {
    return [cfl(array[0])];
  } else {
    const lastElement = array.pop();
    return [...capitalizeFirst(array), cfl(lastElement)];
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let count = 0;

  for (let k in obj) {
    if (typeof obj[k] === 'number') {
      if (obj[k] % 2 === 0) {
        count += obj[k];
      } 
    } else if (typeof obj[k] === 'object') {
      count += nestedEvenSum(obj[k]);
    }
  }

  return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      arr.push(array[i]);
    } else {
      arr = [...arr, ...flatten(array[i])];
    }
  }

  return arr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  obj = obj || {};

  if (!str.length) {
    return obj;
  } else {
    if (obj[str[0]]) {
      obj[str[0]]++;
    } else {
      obj[str[0]] = 1;
    }

    return letterTally(str.slice(1), obj);
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  const listDupe = [...list];

  if (!listDupe.length) {
    return listDupe;
  } else {
    const firstElement = listDupe.shift();

    if (listDupe[0] === firstElement) {
      return compress(listDupe);
    } else {
      return [firstElement, ...compress(listDupe)];
    }
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (!array.length) {
    return array;
  } else {
    const lastElement = array.pop();
    lastElement.push(aug);
    return [...augmentElements(array, aug), lastElement];
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  const listDupe = [...array];

  if (!listDupe.length) {
    return listDupe;
  } else {
    const firstElement = listDupe.shift();

    if (firstElement === 0 && listDupe[0] === firstElement) {
      return minimizeZeroes(listDupe);
    } else {
      return [firstElement, ...minimizeZeroes(listDupe)];
    }
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  const arr = [...array],
    lastIndex = arr.length - 1,
    n = n => n < 0 ? n : -n,
    p = n => n > 0 ? n : -n;

  if (arr.length === 1) return [Math.abs(arr[0])];
  else if (arr.length === 2) return [Math.abs(arr[0]), n(arr[1])];
  else {
    return [...alternateSign(arr.slice(0, lastIndex - 1)), p(arr[lastIndex - 1]), n(arr[lastIndex])];
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  const numberMap = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten'
  },
    stringAsArray = str.split(' '),
    lastIndex = stringAsArray.length - 1,
    mapOrDefault = word => numberMap[word] || word;

  if (str.split(' ').length === 1) return mapOrDefault(str);
  return [numToText(stringAsArray.slice(0, lastIndex).join(' ')), mapOrDefault(stringAsArray[lastIndex])].join(' ');
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  let count = 0;
  node = node || document.querySelector('html');

  if (node.tagName === tag.toUpperCase()) count++;
  if (node.children.length) {
    for (let i = 0; i < node.children.length; i++) {
      count += tagCount(tag, node.children[i]);
    }
  }

  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  const minIndex = min === undefined ? 0 : min,
    maxIndex = max === undefined ? array.length - 1 : max,
    midIndex = Math.floor((minIndex + maxIndex) / 2);

  if (array[midIndex] === target) return midIndex;
  else if (minIndex < maxIndex) {
    if (array[midIndex] < target) {
      return binarySearch(array, target, midIndex + 1, maxIndex);
    } else {
      return binarySearch(array, target, minIndex, midIndex - 1);
    }
  }
  else return null;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  const arr = [...array],
    // util
    sortAndMerge = (leftArray, rightArray) => {
      let sortedAndMergedArray = [];

      while (leftArray.length && rightArray.length) {
        let min;

        if (leftArray[0] <= rightArray[0]) {
          min = leftArray.shift();
        } else {
          min = rightArray.shift();
        }

        sortedAndMergedArray.push(min);
      }

      if (leftArray.length) sortedAndMergedArray = [...sortedAndMergedArray, ...leftArray];
      if (rightArray.length) sortedAndMergedArray = [...sortedAndMergedArray, ...rightArray];

      return sortedAndMergedArray;
    };

  // the meaty part
  if (arr.length <= 1) return arr;
  else {
    const midIndex = Math.floor(arr.length / 2),
      leftArray = arr.slice(0, midIndex),
      rightArray = arr.slice(midIndex, arr.length);

    const leftPartition = mergeSort(leftArray),
      rightPartition = mergeSort(rightArray);

    return sortAndMerge(leftPartition, rightPartition);
  } 
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  const inputClone = Array.isArray(input) ? [] : {};

  for (const key in input) {
    if (typeof input[key] === 'object') {
      inputClone[key] = clone(input[key]);
    } else {
      inputClone[key] = input[key];
    }
  }

  return inputClone;
};
