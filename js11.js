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
//   // your code here

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
function revrot(str, sz) {
  let result = "";
  let result1 = "";
  result = str.split("").reduce((acc, i) => {
    if (i % sz == 0 && str.length - i >= sz) {
      let cubedSum = str
        .slice(i, sz + i)
        .split("")
        .reduce((cs, el) => cs + Math.pow(+el, 3), 0);
      result1 =
        cubedSum % 2 == 0
          ? str
              .slice(i, sz + i)
              .split("")
              .reverse()
              .join("")
          : str.slice(i + 1, sz + i) + str.slice(i, i + 1);
      acc = acc + result1;
      //console.log(str.slice(i, sz + i), cubedSum);
      return acc;
    }
  }, "");
  return result;
}
console.log(revrot("123456987654", 6)); //--> "234561876549"
// console.log(revrot("123456987653", 6)); // --> "234561356789"
// console.log(revrot("66443875", 4)); //--> "44668753"
// console.log(revrot("66443875", 8)); //--> "64438756"
// console.log(revrot("664438769", 8)); //--> "67834466"
// console.log(revrot("123456779", 8)); //--> "23456771"
console.log(revrot("733049910872815764", 5)); //330479108928157
