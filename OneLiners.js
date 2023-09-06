// ===================================================
//                      Arrays
// ===================================================
// LINK from Medium: https://tapajyoti-bose.medium.com/7-killer-one-liners-in-javascript-33db6798f5bf
// LINK From Medium https://javascript.plainenglish.io/javascript-one-liners-3fe0b0155311
// LINK from Syntax.fm https://syntax.fm/show/419/js-one-liners
// LINK from Dev.to https://dev.to/ashishdonga/7-killer-javascript-one-liners-you-must-know-nhm

// ================== Numbers ===================
// Get the smallest numerical element of an array. Replace Math.min() for Math.max() to get largest number
const getSmallestNum = (arr) =>
    arr.reduce((smallest, num) => Math.min(smallest, num));
const array = [13, 7, 11, 3, 9, 15, 22];
console.log(getSmallestNum(array)); // 3

// Get the sum
const sum = (numArr) => numArr.reduce((sum, num) => sum + num, 0);

// Get the average of a numerical array
const getAverage = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;
const array = [5, 13, 9, 11, 10, 15, 7]; // Totals 70
console.log(getAverage(array)); // 10

// ================== Any ===================
// Shuffle an array in place,such as for a game with a deck of cards. Has 0(n log n) time complexity. Note: Array.sort() mutates the array, but the spread op first makes a copy of it
const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
const array = [13, 7, 11, 3, 9, 15, 22];
const abc = ['a', 'c', 'b'];
console.log(shuffleArray(array)); // [ 13, 7, 9, 15, 11, 22, 3 ] (varies)

// ================== Check if a variable is an array ===================
// Use the native Array.isArray() method
let fruit = 'apple';
let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
console.log(Array.isArray(fruit)); // false
console.log(Array.isArray(fruits)); //true

// ================== Check if an array is empty ===================
let arr0 = [];
let arr1 = [2, 4, 6, 8, 10];
const arrIsEmpty = (arr) => Array.isArray(arr) && arr.length === 0;
console.log(arrIsEmpty(arr0)); // true
console.log(arrIsEmpty(arr1)); // false

// ===================================================
//                       Assorted
// ===================================================
// ================== Color generators ===================
// LINK ColorGenerators.js

// ================== Number generators ===================
// LINK NumberGenerators.js

// Reverse a string. Spread operator handles non-standard stuff fine, but .split() doesn't
const reverseString = (str) => [...str].reverse().join('');
console.log(reverseString('java😒script')); // 'tpircs😒avaj'

// ================== Unique Elements ===================
// JavaScript's implementation of a "hash list" is called a "Set". This pulls all the unique elements from an array
const getUnique = (arr) => [...new Set(arr)];
const arr = [1, 1, 2, 3, 3, 4, 4, 4, 5, 5];
console.log(getUnique(arr)); // [ 1, 2, 3, 4, 5 ]

// ================== Extract domain name from an email ===================
let getDomain = (email) => email.substring(email.indexOf('@') + 1);
console.log(getDomain('admin@ashishdonga.me')); // ashishdonga.me

// ================== Sleep Function ===================
// JavaScript has NO built-in sleep function to wait for a given duration before continuing the execution flow of the code.
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// console.log('sleep');
// setTimeout(() => console.log('awake'), 5000);

// const sleeper = (() => {
//     console.log('sleep');
//     sleep(5000);
//     console.log('awake');
// })();

const sleeper = (() => {
    let doneWaiting = true; // Needs to be implemented still
    console.log(Date(), 'sleep');
    setTimeout(() => console.log(Date(), 'awake'), 5000);
})();

// ===================================================
//         For web apps/browsers specifically
// ===================================================

// ================== Edit anything(make any page editable) ===================
document.designMode = 'on';

// ================== Copy to clipboard for browsers/web apps ===================
// To get the text that a user selects or highlights on a web page
const getSelectedText = () => window.getSelection().toString();
console.log(getSelectedText());

// This works for most, per caniuse.com. For 100% support, use an `input` and copy its contents
const copyToClipboard = (text) =>
    navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
console.log(copyToClipboard('Hello World!'));

// ================== Detect Dark Mode for browsers/web apps ===================
const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDarkMode());

// ================== Scroll to top ===================
// 'behavior: "smooth"' is optional. Exchange "start" for "end" to scroll to bottom
const scrollToTop = (element) =>
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

// ================== Refresh/Reload a Page Automatically ===================
// Refresh after a fixed time use the setTimeOut() method. Using the code below our web page will reload every 3 seconds:

setTimeout(() => {document.location.reload()}, 3000);
