// function replace(array, valueToReplace, newValue) {
//   // your code here
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     array[i] == valueToReplace
//       ? newArray.push(newValue)
//       : newArray.push(array[i]);
//   }
//   return newArray;
// }

// function replace(array, valueToReplace, newValue) {
//   // your code here
//   const newArray = [];
//   array.forEach((element) => {
//     element == valueToReplace
//       ? newArray.push(newValue)
//       : newArray.push(element);
//   });
//   return newArray;
// }

// function replace(array, valueToReplace, newValue) {
//   // your code herepwd

//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] == valueToReplace ? newValue : array[i];
//   }
//   return array;
// }
// function replace(array, valueToReplace, newValue) {
//   // your code here
//   const newArray = [];
//   array.forEach((element, index) => {
//     array[index] = element == valueToReplace ? newValue : element;
//   });
//   return array;
// }

// function replace(array, valueToReplace, newValue) {
//   // your code here

//   //const newArray = [];
//   const newArray = array.map((element) => {
//     return valueToReplace == element ? newValue : element;
//   });
//   return newArray;
// }

// function replace(array, valueToReplace, newValue) {
//   // your code here

//   //const newArray = [];
//   const newArray = array.reduce((acc, element) => {
//     acc.push(valueToReplace == element ? newValue : element);
//     return acc;
//   }, []);

//   return newArray;
// }

// console.log(replace([1, 2, 3, 4, 5, 4, 3, 2, 1], 2, "bananas")); // [1,"bananas",3,4,5,4,3,"bananas",1]

//console.log(array); // [1,"bananas",3,4,5,4,3,"bananas",1]

//[ 1, 'bananas', 3, 4, 5, 4, 3, 'bananas', 1 ]
//[0, 1, NaN,   3, 4,5, 4,   3, NaN, 1]

// function buildHiddenArray() {
//   let hiddenArray = [];

//   const exposedInterface = {
//     push: (val) => hiddenArray.push(val),
//     pop: () => hiddenArray.pop(),
//     getValue: (index) => hiddenArray[index],
//     getAllValues: () => [...hiddenArray],
//     setValue: (index, val) => [(hiddenArray[index] = val)],
//   };

//   return exposedInterface;
// }

// let hiddenArray = buildHiddenArray();
// hiddenArray.push(10);
// hiddenArray.push(5);
// hiddenArray.push(20);
// hiddenArray.getValue(0); // 10
// hiddenArray.getValue(1); // 5
// hiddenArray.getValue(2); // 20
// hiddenArray.setValue(1, 40);
// hiddenArray.getValue(1); // 40
// let allValues = hiddenArray.getAllValues(); // [10, 40, 20]
// console.log(allValues);
// allValues[1] = 100;
// allValues; // [10, 100, 20]
// hiddenArray.getAllValues(); // [10, 40, 20]
// hiddenArray.pop(); // 20
// hiddenArray.pop(); // 40
// hiddenArray.pop(); // 10
// hiddenArray.pop(); // undefined
// console.log(hiddenArray.getAllValues()); // []

// let a = { friendList: undefined };
// let b = { friendList: [] };

// delete b.friendList;

// console.log("friendList" in a);
// console.log("friendList" in b);

// let x = {
//   a: 5,
//   b: true,
//   c: 11,
//   d: "hello",
//   e: true,
//   f: 5,
//   g: 11,
// };

// for (let key in x) {
//   if (typeof x[key] === "number") {
//     delete x[key]; //+= 1;
//   }
// }
// console.log(x);

// let keys = ["one", "two", "three"];
// let vals = [11, 15, 27];

// let obj = {};

// for (let i = 0; i < keys.length; i++) {
//   obj[keys[i]] = vals[i];
//   /* store the value in the obj with the correct key */
// }
// console.log(obj);

// let teacher = {
//   name: "Laurence Banderstamp",
//   age: 32,
//   salary: 36200,
//   title: "Associate Professor",
// };

// let promotionLookup = {
//   Instructor: {
//     newTitle: "Assistant Professor",
//     salaryIncrease: 0.2, // 20%
//   },
//   "Assistant Professor": {
//     newTitle: "Associate Professor",
//     salaryIncrease: 0.25, // 25%
//   },
//   "Associate Professor": {
//     newTitle: "Professor",
//     salaryIncrease: 0.33, // 33%
//   },
// };

// // let's give teacher a promotion:
// let currentTitle = teacher.title; /* what goes here, use teacher */
// let nextTitle =
//   promotionLookup[teacher.title]
//     .newTitle; /* what goes here, use promotionLookup */
// let salaryBump =
//   promotionLookup[teacher.title]
//     .salaryIncrease; /* what goes here, use promotionLookup */

// teacher.title = nextTitle;
// teacher.salary = teacher.salary + teacher.salary * salaryBump;
// console.log(teacher);

/* 
 * A Tragedy Occurs:
 * Sadly, a mugging has happened.  In a dark alley, an unnamed mugger has shot and killed both parents of Bruce Wayne.
 * 
 * 1. Remove two bullets from the mugger's pistol.
 * 
 * 2. Remove the wallet and pearls from thomasWayne and marthaWayne respectively, and give them to the mugger.
 * 
/* 3. Remove the parents array from bruceWayne, and set the property isBatman to true
/* 
/* Important Notes
/*   Do not change the code that creates the objects.  Instead use ways to access properties add properties, or remove properties.
/* Also, if you you need to access a value to assign it elsewhere, do so before deleting it.
/* 
/* Don't forget how to remove elements from arrays... pop and shift still exist!

*/

// // DO NOT CHANGE THESE OBJECTS HERE
// let thomasWayne = {
//   wallet: { cash: 400 },
// };

// let marthaWayne = {
//   pearls: { value: 100 },
// };

// let bruceWayne = {
//   parents: [thomasWayne, marthaWayne],
// };

// let mugger = {
//   pistol: {
//     bullets: [true, true, true],
//   },
// };
// mugger.pistol.bullets.shift();
// mugger.pistol.bullets.shift();
// mugger.wallet = thomasWayne.wallet;
// mugger.pearls = marthaWayne.pearls;
// delete thomasWayne.wallet;
// delete marthaWayne.pearls;
// delete bruceWayne.parents;
// console.log(marthaWayne);
// console.log(bruceWayne);
// console.log(mugger);

// const countBits = (n) => n.toString(2).split('').reduce((acc, n) => { if (n == '1') acc++; return acc }, 0)

// function convertToBinary(n) {
//   if (n == 0) return '0';
//   if (n == 1) return '1';
//   return convertToBinary(Math.floor(+n / 2)) + (+n % 2).toString();
// }

// console.log(convertToBinary(0));
// console.log(countBits(127));

// const disemvowel = str =>
//   str.split('').map(letter => letter.toLowerCase() == 'a' || letter.toLowerCase() == 'e' || letter.toLowerCase() == 'i' || letter.toLowerCase() == 'o' || letter.toLowerCase() == 'u' ? '' : letter).join('');

// console.log(disemvowel('The quick brown fox jumpped over the lazy dOg.'))

// const firstNonRepeatingLetter = str => {
//   let nrIndex;
//   str.split('').forEach((ltr, index, strArray) => {
//     if (ltr !== ' ' && strArray.filter(el => el.toLowerCase() == ltr.toLowerCase()).length == 1 && !nrIndex) { nrIndex = index }
//   });
//   if(nrIndex)
//   return str.split('')[nrIndex];
// }

// const str = 'cccccccccccc'
// console.log(firstNonRepeatingLetter(str))

// function firstNonRepeatingLetter(s) {
//   return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1 )] || '';
// }

// const order = (words) => {
//   // ...

//   let wordsSum = words.split(' ').reduce((acc, word) => {
//     word.split('').forEach(ltr => {
//       (+ltr > 0 && +ltr <= 9) ? acc.push({ index: +ltr, word: word }) : '';
//     });
//     return acc;
//   }, []).sort((a, b) => a.index - b.index).reduce((acc, ws) => acc + ' ' + ws.word, '');
//   return wordsSum.trim();
// }
// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'))

// function arrayDiff(a, b) {
//   return a.filter((el) => typeof b.find((elb) => el == elb) === "undefined");
// }

// const a = [1, 2, 3];
// console.log(a.find((el) => el == 1));
// console.log(arrayDiff([1, 2, 3], [1, 2]));

// function createPhoneNumber(numbers) {
//   return numbers.reduce(
//     (acc, el, index) =>
//       index == 0
//         ? "(" + el
//         : index == 2
//         ? acc + el + ") "
//         : index == 5
//         ? acc + el + "-"
//         : acc + el,
//     ""
//   );
// }
// //(123) 456-7890
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// function findOdd(A) {
//   return A.find((a) => A.filter((b) => a == b).length % 2 == 1);
// }

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// function revrot(str, sz) {
//   let result = "";
//   let result1 = "";
//   result = str.split("").reduce((acc, i) => {
//     if (i % sz == 0 && str.length - i >= sz) {
//       let cubedSum = str
//         .slice(i, sz + i)
//         .split("")
//         .reduce((cs, el) => cs + Math.pow(+el, 3), 0);
//       result1 =
//         cubedSum % 2 == 0
//           ? str
//               .slice(i, sz + i)
//               .split("")
//               .reverse()
//               .join("")
//           : str.slice(i + 1, sz + i) + str.slice(i, i + 1);
//       acc = acc + result1;
//       //console.log(str.slice(i, sz + i), cubedSum);
//       return acc;
//     }
//   }, "");
//   return result;
// }
// console.log(revrot("123456987654", 6)); //--> "234561876549"
// // console.log(revrot("123456987653", 6)); // --> "234561356789"
// // console.log(revrot("66443875", 4)); //--> "44668753"
// // console.log(revrot("66443875", 8)); //--> "64438756"
// // console.log(revrot("664438769", 8)); //--> "67834466"
// // console.log(revrot("123456779", 8)); //--> "23456771"
// console.log(revrot("733049910872815764", 5)); //330479108928157

// function solution(s) {
//   return s
//     .split("")
//     .map((c) => (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90 ? " " + c : c))
//     .join("");
// }
// console.log(solution("camelCasing"));

// function sumPairs(ints, s) {
//   let matchIndex, prevMatchIndex, curretNumber;
//   ints.forEach((int, idx, ints) => {
//     matchIndex = ints
//       .filter((el, i) => i >= idx)
//       .findIndex((num, index) => index > 0 && num + int == s);

//     if (prevMatchIndex == undefined && matchIndex !== -1) {
//       prevMatchIndex = matchIndex + idx;
//       curretNumber = int;
//     } else if (int < curretNumber && matchIndex !== -1) {
//       prevMatchIndex = matchIndex + idx;
//       curretNumber = int;
//     }
//   });

//   return curretNumber == undefined
//     ? undefined
//     : [curretNumber, ints[prevMatchIndex]];
// }
// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(sumPairs([5, 9, 13, -3], 10));
// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
// // console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));

// // function sumPairs(ints, s) {
// //   let matchingNumber, currentNumber;
// //   ints.forEach((int, idx, ints) => {
// //     match = ints.find((num, i) => i > idx && num + int == s);
// //     if (
// //       match !== undefined &&
// //       (matchingNumber == undefined || int < currentNumber)
// //     ) {
// //       matchingNumber = match; //[0];
// //       currentNumber = int;
// //     }
// //   });

// //   return currentNumber == undefined
// //     ? undefined
// //     : [currentNumber, matchingNumber];
// // }

// // console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); //, [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
// // // console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); //, [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
// // // console.log(sumPairs([20, -13, 40], -7)); //, undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
// // // console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); //, [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
// // // console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); //, [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
// // // console.log(sumPairs([4, -2, 3, 3, 4], 8)); //, [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
// // // console.log(sumPairs([0, 2, 0], 0)); //, [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
// // // console.log(sumPairs([5, 9, 13, -3], 10)); //, [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");

// // function twoNumberSum(array, targetSum) {
// //   // Write your code here.
// //   let otherNum = [];
// //   for (let i = 0; i < array.length; i++) {
// //     if (otherNum.indexOf(array[i]) > -1) {
// //       return [array[i], targetSum - array[i]];
// //     } else otherNum.push(targetSum - array[i]);
// //   }
// // }
// // console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// // const { Router } = require("express");
// // const apiGetTags = require("./apiGetTags");
// // const apiCreateTags = require("./apiCreateTags");
// // const apiGetLinksByTagName = require("./apiGetLinksByTagName");
// // const tagsRouter = Router();

// // tagsRouter.get("/", apiGetTags);
// // tagsRouter.post("/", apiCreateTags);
// // tagsRouter.get("/:tagname/links", apiGetLinksByTagName);

// // module.exports = tagsRouter;

// // const { getAllTags } = require("../db/index");

// // const apiGetTags = async (req, res, next) => {
// //   try {
// //     const tags = await getAllTags();

// //     res.send(tags);
// //   } catch (error) {
// //     console.log(error);
// //     return error;
// //   }
// // };

// // module.exports = apiGetTags;

// // /* CSS HEX */
// // --pale-spring-bud: #ccd5aeff;
// // --light-goldenrod-yellow: #e9edc9ff;
// // --cornsilk: #fefae0ff;
// // --papaya-whip: #faedcdff;
// // --fawn: #d4a373ff;

// // /* CSS HSL */
// // --pale-spring-bud: hsla(74, 32%, 76%, 1);
// // --light-goldenrod-yellow: hsla(67, 50%, 86%, 1);
// // --cornsilk: hsla(52, 94%, 94%, 1);
// // --papaya-whip: hsla(43, 82%, 89%, 1);
// // --fawn: hsla(30, 53%, 64%, 1);

// // /* SCSS HEX */
// // $pale-spring-bud: #ccd5aeff;
// // $light-goldenrod-yellow: #e9edc9ff;
// // $cornsilk: #fefae0ff;
// // $papaya-whip: #faedcdff;
// // $fawn: #d4a373ff;

// // /* SCSS HSL */
// // $pale-spring-bud: hsla(74, 32%, 76%, 1);
// // $light-goldenrod-yellow: hsla(67, 50%, 86%, 1);
// // $cornsilk: hsla(52, 94%, 94%, 1);
// // $papaya-whip: hsla(43, 82%, 89%, 1);
// // $fawn: hsla(30, 53%, 64%, 1);

// // /* SCSS RGB */
// // $pale-spring-bud: rgba(204, 213, 174, 1);
// // $light-goldenrod-yellow: rgba(233, 237, 201, 1);
// // $cornsilk: rgba(254, 250, 224, 1);
// // $papaya-whip: rgba(250, 237, 205, 1);
// // $fawn: rgba(212, 163, 115, 1);

// // /* SCSS Gradient */
// // $gradient-top: linear-gradient(0deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-right: linear-gradient(90deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-bottom: linear-gradient(180deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-left: linear-gradient(270deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-top-right: linear-gradient(45deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-bottom-right: linear-gradient(135deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-top-left: linear-gradient(225deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-bottom-left: linear-gradient(315deg, #ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);
// // $gradient-radial: radial-gradient(#ccd5aeff, #e9edc9ff, #fefae0ff, #faedcdff, #d4a373ff);

// function maxProfitWithKTransactions(prices, k) {
//   if (!prices || prices.length == 0) {
//     return;
//   }

//   let evenProfits = [];
//   let oddProfits = [];
//   let currentProfits = [];
//   let previousProfits = [];
//   // console.log(prices.length);
//   for (let i = 0; i < prices.length; i++) {
//     evenProfits.push(0);
//     oddProfits.push(0);
//   }

//   for (let t = 1; t <= k + 1; t++) {
//     let maxThusFar = Number.NEGATIVE_INFINITY;
//     if (t % 2 == 1) {
//       currentProfits = [...oddProfits];
//       previousProfits = [...evenProfits];
//     } else {
//       currentProfits = [...evenProfits];
//       previousProfits = [...oddProfits];
//     }
//     for (let d = 1; d < prices.length; d++) {
//       console.log(t, d, currentProfits);
//       maxThusFar = Math.max(maxThusFar, previousProfits[d - 1] - prices[d - 1]);
//       currentProfits[d] = Math.max(
//         currentProfits[d - 1],
//         maxThusFar + prices[d]
//       );
//     }
//     console.log(t, currentProfits);
//   }
//   return k % 2 == 0
//     ? evenProfits[evenProfits.length - 1]
//     : oddProfits[oddProfits.length - 1];
// }

// function maxProfitWithKTransactions1(prices, k) {
//   if (!prices || prices.length == 0) {
//     return;
//   }

//   const profits = [];

//   for (let i = 0; i <= k; i++) {
//     profits.push([]);
//     for (let k = 0; k < prices.length; k++) {
//       profits[i].push(0);
//       profits[i][k] = 0;
//     }
//   }
//   console.log(profits);
//   for (let t = 1; t <= k + 1; t++) {
//     let maxThusFar = Number.NEGATIVE_INFINITY;

//     for (let d = 1; d < prices.length; d++) {
//       maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]);
//       profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d]);
//     }
//   }
//   return profits[profits.length - 1][profits[profits.length - 1].length - 1];
// }

// console.log(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2));
// //console.log(maxProfitWithKTransactions1([5, 11, 3, 50, 60, 90], 3));

// function pairs(nums, target) {
//   const hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     let n = nums[i];
//     if (n in hash) return [nums[hash[n]], nums[i]];
//     else {
//       key = target - n;
//       hash[key] = i;
//     }
//   }
// }

// function isValidSubsequence(array, sequence) {
//   debugger;
//   // Write your code here.
//   let isSubSequence = true;
//   let currentIndex, prevIndex;
//   let i = 0;
//   while (isSubSequence && i <= sequence.length - 1) {
//     currentIndex = array.indexOf(sequence[i]);

//     if (i == 0) {
//       prevIndex = currentIndex;
//     }
//     isSubSequence = prevIndex > currentIndex||currentIndex==-1 ? false : true;
//     prevIndex = currentIndex;
//     i++;
//   }
//   return isSubSequence;
// }

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// console.log(
//   isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10])
// );
// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [4, 5, 1, 22, 25, 6, -1, 8, 10]
// }

// function tournamentWinner(competitions, results) {
//   // Write your code here.
//   let str = "";
//   let winners = {};
//   for (let i = 0; i <= results.length - 1; i++) {
//     let winner = results[i] == 0 ? competitions[i][0] : competitions[i][1];
//     let loser = results[i] == 0 ? competitions[i][1] : competitions[i][0];
//     winners[winner] = winners[winner] ? winners[winner] + 6 : 6;
//     winners[loser] = 0;
//   }
//   let maxKey = Object.keys(winners)[0];
//   for (k in winners) {
//     if (winners[k] > winners[maxKey]) {
//       maxKey = k;
//     }
//   }
//   return winners[maxKey];
// }

// console.log(
//   tournamentWinner(
//     [
//       ["HTML", "C#"],
//       ["C#", "Python"],
//       ["Python", "HTML"],
//     ],
//     [0, 0, 1]
//   )
// );

[12, 3, 1, 2, -6, 5, -8, 6];

// function threeNumberSum(array, targetSum) {
//   const results = [];
//   // Write your code here.
//   for (let i = 0; i < array.length; i++) {
//     let n2, n3;
//     newTarget = targetSum - array[i];
//     let hash = {};
//     for (let j = i + 1; j < array.length; j++) {
//       n2 = array[j];
//       if (n2 in hash) {
//         n3 = array[hash[n2]];
//         results.push([array[i], n2, n3].sort((a, b) => a - b));
//       } else {
//         let key = newTarget - n2;
//         hash[key] = j;
//       }
//     }
//   }
//   return results
//     .sort((a, b) => b[1] - a[1])
//     .sort((a, b) => b[2] - a[2])
//     .sort((a, b) => b[3] - a[3]);
// }
//console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

// function smallestDifference({ arrayOne, arrayTwo }) {
//   arrayTwo.sort((a, b) => a - b);
//   arrayOne.sort((a, b) => a - b);
//   let left = 0;
//   let right = 0;
//   let diff;
//   let prevDif = diff;
//   let difIndex1 = 0,
//     difIndex2 = 0;
//   let found = false;

//   while (left < arrayOne.length && right < arrayTwo.length && !found) {
//     if (arrayOne[left] < arrayTwo[right]) {
//       diff = arrayTwo[right] - arrayOne[left];
//       left++;
//     } else if (arrayOne[left] > arrayTwo[right]) {
//       diff = arrayOne[left] - arrayTwo[right];
//       right++;
//     } else {
//       found = true;
//     }

//     if (prevDif > diff || !prevDif) {
//       prevDif = diff;
//       difIndex1 = left; //== arrayOne.length ? arrayOne.length - 1 : left;
//       difIndex2 = right; //== arrayTwo.length ? arrayTwo.length - 1 : right;
//       console.log(arrayOne, arrayTwo, difIndex1, difIndex2, diff, prevDif);
//     }
//   }

//   return [arrayOne[difIndex1], arrayTwo[difIndex2]];
// }
// -1 ? console.log(true) : console.log(false, "---");
// console.log(
//   smallestDifference({
//     arrayOne: [-1, 5, 10, 20, 28, 3],
//     arrayTwo: [26, 134, 135, 15, 17],
//   })
// );
// console.log(
//   smallestDifference({
//     arrayOne: [240, 124, 86, 111, 2, 84, 954, 27, 89],
//     arrayTwo: [1, 3, 954, 19, 8],
//   })
// );

// function groupAnagrams(words) {
//   // Write your code here.

// 	let anagramArray={}
// 	for(let i=0;i<words.length;i++){
// 		let sortedWord=words[i].split('').sort().join('')

// 		if(sortedWord in anagramArray){
// 			anagramArray[sortedWord].push(words[i])
// 		}else {
// 			anagramArray[sortedWord]=[words[i]]

// // 		}
// // 	}
// // 	return Object.values(anagramArray)
// // }

// function validIPAddresses(string) {
//   // Write your code here.

// 	for(let i=1;i<Math.min(string.length,4);i++){
// 		let oct1=string.slice(0,i)
//     if(!isValidPart(oct1)) continue
// 		for(let j=i+1;j<i+Math.min(string.length-i,4);j++){
// 			let oct2=string.slice(i,j)
//       if(!isValidPart(oct2)) continue
// 			for(let k=j+1;k<j + Math.min(string.length-j,4);k++){
// 				let oct3=string.slice(j,k)
//         let oct4=string.slice(k)
//         if(isValidPart(oct3)&&isValidPart(oct4)){console.log(oct1,oct2,oct3,oct4)}

// 			}}}

//   return [];
// }

// function isValidPart(string){
//   const stringAsInt = parseInt(string)
//   if(stringAsInt>255) return false;
//   return string.length === stringAsInt.toString().length
// }

// validIPAddresses('1921680')

// function fourNumberSum(array,targetSum){

//   const allPairSums={}
//   const quadruplets=[]
//   for(let i=1;i<array.length-1;i++){
//     for(let j=i+1;j<array.length;j++){
//       const currentSum=array[i]+array[j];
//       const difference = targetSum-currentSum
//       if(difference in allPairSums){
//         for(const pair of allPairSums[difference]){
//           quadruplets.push(pair.concat([array[i],array[j]]))
//         }
//       }
//     }
//     for(let k=0; k<i; k++){
//       const currentSum = array[i]+array[k];
//       if(!(currentSum in allPairSums)){
//         allPairSums[currentSum]=[[array[k],array[i]]]
//       }else{
//         allPairSums[currentSum].push([array[k],array[i]])
//       }
//     }
//   }
//   return quadruplets;
// }
// console.log(fourNumberSum([7,6,4,-1,1,2],16))

// function isZigzag(numbers) {
//   let num1, num2, num3;
//   let results = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (i + 3 > numbers.length) {
//       //results.push(0);
//       return results;
//     }
//     num1 = numbers[i];
//     num2 = numbers[i + 1];
//     num3 = numbers[i + 2];

//     if ((num1 < num2 && num2 > num3) || (num1 > num2 && num2 < num3)) {
//       results.push(1);
//     } else {
//       results.push(0);
//     }
//   }
//   return results;
// }

// function countWaysToSplit(s) {
//   let count = 0;
//   let len1, len2, len3;
//   for (let i = 0; i < s.length - 1; i++) {
//     for (let j = i + 1; j < s.length - 1; j++) {
//       len1 = getNumbOf1s(s.slice(0, i + 1));
//       len2 = getNumbOf1s(s.slice(i + 1, j + 1));
//       len3 = getNumbOf1s(s.slice(j + 1));
//       if (len1 == len2 && len3 == len2) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// function getNumbOf1s(s) {
//   return s.split("").filter((e) => e == 1).length;
// }
// console.log(countWaysToSplit("10101"));

// function minimumPathSum(grid) {}

// f

// You are given a string s. Your task is to count the number of ways of splitting s into three non-empty parts a, b and c (s = a + b + c) in such a way that a + b, b + c and c + a are all different strings.

// NOTE: + refers to string concatenation.

// Example

// For s = "xzxzx", the output should be countWaysToSplit(s) = 5.

// Consider all the ways to split s into three non-empty parts:

// If a = "x", b = "z" and c = "xzx", then all a + b = "xz", b + c = "zxzx" and c + a = xzxx are different.
// If a = "x", b = "zx" and c = "zx", then all a + b = "xzx", b + c = "zxzx" and c + a = zxx are different.
// If a = "x", b = "zxz" and c = "x", then all a + b = "xzxz", b + c = "zxzx" and c + a = xx are different.
// If a = "xz", b = "x" and c = "zx", then a + b = b + c = "xzx". Hence, this split is not counted.
// If a = "xz", b = "xz" and c = "x", then all a + b = "xzxz", b + c = "xzx" and c + a = xxz are different.
// If a = "xzx", b = "z" and c = "x", then all a + b = "xzxz", b + c = "zx" and c + a = xxzx are different.
// Since there are five valid ways to split s, the answer is 5.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string to split.

// Guaranteed constraints:
// 3 ≤ s.length ≤ 100.

// [output] integer

// The number of ways to split the given string.

// You've created a meal plan for the next few days, and prepared a list of products that you'll need as ingredients for each day's meal. There are many shops around you that sell the products you're looking for, but you only have time to visit one or two stores each day.

// Given the following information, your task is to find the minimum cost you'll need to spend on each meal:

// cntProducts - an integer representing the total number of products you'll be using in all of your meals;
// quantities - a rectangular matrix of integers, where quantities[i][j] represents the amount of product j available in shop i;
// costs - a rectangular matrix of integers, where costs[i][j] represents the cost of buying product j from shop i;
// meals - a rectangular matrix of integers, where meals[m][j] represents the amount of product j required to make the mth meal.
// Return an array of length meals.length representing the minimum cost of each meal (assuming you can only visit up to two shops each day).

// NOTE:

// You only like to use fresh ingredients, so you'll need to buy new products from the shops each day (you may not use leftovers from a previous day).
// Each store re-stocks their merchandise every night, so the amounts in the quantities array are available each day.
// It's guaranteed that it will always be possible to buy all the products needed for each meal by visiting only one or two shops.
// Example

// For cntProducts = 2,
// quantities = [[1, 3],
//               [2, 1],
//               [1, 3]]
// costs = [[2, 4],
//          [5, 2],
//          [4, 1]]
// and

// meals = [[1, 1],
//          [2, 2],
//          [3, 4]]
// the output should be choosingShops(cntProducts, quantities, costs, meals) = [3, 8, 19].

// There are 3 shops and 2 products in total.

// To cook the first meal you need to buy one product 0 and one product 1. The most optimal way is to buy them in the first and third shops respectively: buying one product 0 in the first shop costs 2 * 1 = 2 and buying one product 1 in the third shop costs 1 * 1 = 1. So you pay 2 + 1 = 3 units of money for this meal.
// To cook the second meal you need to buy two of product 0 and two of product 1. The optimal way is to buy one product 0 in the first shop, and then buy one product 0 and two product 1s in the third shop. This way, you spend (1 * 2) + (1 * 4 + 2 * 1) = 8 units of money.
// To cook the third meal you need to buy three of product 0 and four of product 1. The optimal way is to buy two product 0s and one product 1 in the second shop, and then buy one product 0 and three product 1s in the third shop. This way, you spend (2 * 5 + 1 * 2) + (1 * 4 + 3 * 1) = 19 units of money.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer cntProducts

// An integer representing the number of different products in all shops.

// Guaranteed constraints:
// 2 ≤ cntProducts ≤ 50.

// [input] array.array.integer quantities

// A matrix of integers representing the quantities for every product in every shop.

// Guaranteed constraints:
// 2 ≤ quantities.length ≤ 50,
// quantities[i].length = cntProducts,
// 0 ≤ quantities[i][j] ≤ 1000.

// [input] array.array.integer costs

// A matrix of integers representing the costs for every product in every shop.

// Guaranteed constraints:
// costs.length = quantities.length,
// costs[i].length = cntProducts,
// 1 ≤ costs[i][j] ≤ 1000.

// [input] array.array.integer meals

// A matrix representing the list of required ingredients for each meal you need to process.

// Guaranteed constraints:
// 1 ≤ meals.length ≤ 50,
// meals[i].length = cntProducts,
// 0 ≤ meals[i][j] ≤ 2000.

// [output] array.integer

// Return an array of integers of length meals.length, where the ith element represents the minimum cost for buying the products to cook the ith

// meal, visiting only one or two shops.

// -------------------------

// It's lunch time, and three friends are planning to go to a restaurant together. There are n restaurants available, so to make it easier to choose, they number the restaurants from 1 to n and each friend puts the restaurants in order from most preferable to least preferable.

// You are given a two-dimensional array of integers preferences, where preferences[0] represents the preferences of the first friend, preferences[1] - of the second one and preferences[2] - of the third one. For example, if preferences[i] = [3, 1, 2], this means that the ith friend likes restaurant 3 the most, followed by restaurant 1, and they like restaurant 2 the least.

// Your task is to help the friends to choose a restaurant, according to the following criteria: They'll agree on restaurant i if there are no other restaurants that two or more of the friends would prefer more than i.

// If the friends can't agree on a restaurant, return -1.

// Example

// For

// preferences = [[1, 2, 3, 4],
//                [3, 1, 4, 2],
//                [4, 2, 1, 3]]
// the output should be preferredRestaurant(preferences) = 1.

// Restaurant 1 is friend 1's first choice; they wouldn't prefer any other restaurant.
// Friend 2 would only prefer restaurant 3 over restaurant 1.
// Friend 3 would prefer either restaurant 4 or 2 over restaurant 1.
// Even though friends 2 and 3 have other preferences, there's no one other restaurant that they'd both prefer to go to. So the friends will choose restaurant 1.

// For

// preferences = [[1, 2, 3],
//                [2, 3, 1],
//                [3, 1, 2]]
// the output should be preferredRestaurant(preferences) = -1.

// Restaurant 1 is more preferable by the first and the third friends than the restaurant 2.
// Restaurant 2 is more preferable by the first and the second friends than the restaurant 3.
// Restaurant 3 is more preferable by the second and the third friends than the restaurant 1.
// None of the restaurants meet their criteria, so the friends can't agree on a restaurant.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer preferences

// An array of 3 arrays of integers, representing the restaurant preferences of three friends. It is guaranteed that the preferences array for each friend is correct, i.e. it contains a permutation of numbers from 1 to n.

// Guaranteed constraints:
// preferences.length = 3,
// 1 ≤ preferences[0].length ≤ 105,
// preferences[i].length = preferences[0].length.

// [output] integer

// An integer representing the number of the chosen restaurant, or -1 otherwise.

// var balancedStringSplit = function (s) {
//   let sa = s.split("");
//   console.log(sa);
//   let prevLet;
//   let curLet;
//   let curLetNum = 1;
//   let prevLetNum;
//   curLet = sa[0];
//   let results = [];
//   for (let i = 0; i < sa.length; i++) {
//     if (curLet !== sa[i] && prevLet) {
//       console.log(curLet, prevLet, sa[i]);
//       results.push([
//         s.slice(i - 2 * prevLetNum, i - curLetNum),
//         s.slice(i - curLetNum, i - 1),
//       ]);
//       curLetNum = 1;
//       prevLet = null;
//       prevletNum = 0;
//       curLet = sa[i];
//     } else {
//       curLetNum++;
//     }
//     console.log(curLetNum);
//   }
//   return results;
// };

// console.log(balancedStringSplit("RLRRLLRLRL"));

// var addTwoNumbers = (l1, l2) => {
//   let i = 0;
//   let sumArr = [];
//   let carryOver = 0;
//   let x = 0;
//   let num1, num2;
//   while (i < l1.length || i < l2.length) {
//     num1 = i >= l1.length ? 0 : l1[i];
//     num2 = i >= l2.length ? 0 : l2[i];
//     x = num1 + num2 + carryOver;
//     sumArr.push(x % 10);
//     carryOver = getCarryOver(x);
//     i++;
//   }
//   if (carryOver > 0) sumArr.push(carryOver);
//   return [...sumArr];
// };
// function getCarryOver(x) {
//   if (x - 10 >= 0) {
//     return Math.floor(x / 10);
//   } else {
//     return 0;
//   }
// }
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// //console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// console.log(addTwoNumbers([9, 9, 9, 9], [9, 9, 9, 9, 9, 9, 9]));

// const preferredRestaurant = (preferences) => {
//   const map = {};
//   for (let i = 0; i < preferences.length; i++) {
//     for (let j = 0; j < preferences[i].length; j++) {
//       if (map[preferences[i][j]]) {
//         map[preferences[i][j]] += preferences[i].length - j;
//       } else {
//         map[preferences[i][j]] = preferences[i].length - j;
//       }
//     }
//   }
//   let max = -Infinity;
//   let maxKey;
//   let maxValCount;
//   Object.entries(map).forEach(([key, value]) => {
//     if (value > max) {
//       max = value;
//       maxKey = key;
//     }
//   });
//   maxValCount = Object.values(map).filter((val) => val === max).length;
//   if (maxValCount > 1) {
//     console.log(-1);
//   } else {
//     console.log(maxKey);
//   }
// };

// preferredRestaurant([
//   [3, 1, 4, 2],
//   [4, 2, 1, 3],
//   [1, 2, 3, 4],
// ]);

// preferredRestaurant([
//   [1, 2, 3],
//   [2, 3, 1],
//   [2, 1, 3],
// ]);
// preferredRestaurant([
//   [1, 2, 3],
//   [2, 3, 1],
//   [3, 1, 2],
// ]);
// var convert = function (s, numRows) {
//   let i = 0;
//   let j = 0;
//   let direction = 0;
//   let result = [];

//   if (s.length < numRows) return s;
//   if (numRows == 1) return s;
//   while (i <= s.length - 1) {
//     if (result[j]) {
//       result[j] = result[j] + s.slice(i, i + 1);
//     } else {
//       result[j] = [s.slice(i, i + 1)];
//     }
//     if (j == numRows - 1) {
//       direction = 1;
//     } else if (j == 0) {
//       direction = 0;
//     }

//     if (direction == 0) {
//       j++;
//     } else {
//       j--;
//     }
//     i++;
//   }

//   return result.reduce((acc, w) => acc + w, []);
// };

// console.log(convert("PAYPALISHIRING", 4));

// var shortestWordDistance = function (wordsDict, word1, word2) {
//   map = {};
//   let posWord1, posWord2;
//   let minDist = Infinity;

//   // if (wordsDict.filter((d) => d == word1).length == 1 && word1 == word2)
//   //   return 1;
//   for (let i = 0; i < wordsDict.length; i++) {
//     if (wordsDict[i] == word1) {
//       if (word1 == word2) {
//         posWord2 = posWord1;
//         posWord1 = i;
//       } else {
//         posWord1 = i;
//       }
//     }
//     if (wordsDict[i] == word2 && word1 !== word2) {
//       posWord2 = i;
//     }
//     if (Math.min(minDist, Math.abs(posWord1 - posWord2)) < minDist) {
//       minDist = Math.abs(posWord1 - posWord2);
//     }
//   }
//   return minDist;
// };

// console.log(
//   shortestWordDistance(
//     ["practice", "makes", "perfect", "coding", "makes"],
//     "makes",
//     "coding"
//   )
// );

// console.log(
//   shortestWordDistance(
//     ["practice", "makes", "perfect", "coding", "makes"],
//     "makes",
//     "makes"
//   )
// );

// console.log(shortestWordDistance(["a", "a", "b", "b"], "a", "b"));

// function minDiffOfArrays(a, b) {
//   let minDiff = Infinity;
//   let sum = 0;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       //if (i !== j) {
//       if (i == j) continue;
//       let c = [...a];
//       c[i] = a[j];
//       for (let k = 0; k < b.length; k++) {
//         sum = sum + Math.abs(c[k] - b[k]);
//       }
//       console.log(c, b, sum);
//       minDiff = Math.min(sum, minDiff);
//       //}
//       sum = 0;
//     }
//   }
//   return minDiff;
// }

// console.log(minDiffOfArrays([1, 3, 5], [5, 3, 1]));

// const lengthOfLongestSubstring = (s) => {
//   const strArray = s.split("");
//   const map = {};
//   let left = 0,
//     right = 0;

//   let res = 0;
//   for (let i = 0; i < strArray.length; i++) {
//     let r = strArray[i];
//     if (!map[r]) {
//       map[r] = 1;
//     } else {
//       map[r]++;
//     }
//     while (map[r] > 1) {
//       let l = strArray[left];
//       map[l]--;
//       left++;
//     }
//     res = Math.max(res, right - left + 1);
//     right++;
//   }
//   console.log(strArray.splice(left, res).join(""));
//   return res;
// };

// console.log(lengthOfLongestSubstring("pwwkew"));

const lengthOfLongestSubstring = (s) => {
  const strArray = s.split("");
  const map = {};
  let i = 0;

  let res = 0;
  for (let j = 0; j < strArray.length; j++) {
    if (map[strArray[j]]) {
      i = Math.max(map[strArray[j]], i);
    }

    res = Math.max(res, j - i + 1);
    map[strArray[j]] = j + 1;
  }
  console.log(strArray.splice(i, res).join(""));
  return res;
};
console.log(lengthOfLongestSubstring("pwwkew"));
