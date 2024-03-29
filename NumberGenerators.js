// ===================================================
//                Random numbers
// ===================================================
// LINK from Syntax.fm https://syntax.fm/show/419/js-one-liners

// ================== Random fraction ===================
// Returns a pseudorandom number between 0 and 1.
console.log(Math.random()); // e.g. 0.5507373088534073

// ================== Random whole number 0 - 9 ===================
// Math.floor() rounds DOWN to the nearest whole number, "Returns the greatest integer less than or equal to its numeric argument." While Math.ceil() rounds UP.
const randomWholeNum = () => Math.floor(Math.random() * 9);
console.log(randomWholeNum()); // e.g. 7

// ================== Random whole number within an inclusive range ===================
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(20, 40)); // e.g. 22

// ================== Pseudo-ID number generator ===================
// From Syntax.fm. Returns a random 14-15(max) digit number
const getPseudoID = () => Math.floor(Math.random() * 1e15);
console.log(getPseudoID()); // e.g. 817153692721458

// Generates a random, 10 character, letter/number string. Useful for a temporary id
const randomString = () => Math.random().toString(36).slice(2, 12);
console.log(randomString()); // e.g. d7ao6b82ij

// ===================================================
//      parseInt() Converts a string to an integer
// ===================================================
// ================== Convert string to a whole number ===================
// parseInt() first parameter has to be a string
console.log('⚡parseInt("56") >>', parseInt('56')) // 56

// ================== Convert a binary number string to a whole number ===================
function convertToInteger(str) {
    return parseInt(str, 2); // parseInt second parameter "radix", (2) denotes a binary number which is/has a number base of 2. 2 for binary, 10 for decimal, 16 for hexadecimal
}
console.log(convertToInteger('10011')); // 19

// ===================================================
// parseFloat() Converts a string to a floating point number
// ===================================================
function convertToDecimal(str) {
    console.log(typeof str)
    return parseFloat(str);
}
console.log(convertToDecimal('51.006')); // 51.006

// ===================================================
//                      Date & Time
// ===================================================
// ================== Date ===================
let date = () => new Date();
console.log(date()); // 2022-08-25T15:50:09.959Z

let date2 = () => new Date().toDateString();
console.log(date2()); // Sat Dec 03 2022

let date3 = () => new Date().toLocaleDateString();
console.log(date3()); // 12/3/2022

// From Syntax.fm. Maybe only works with internet??
export const today = () => Temporal.Now.plainDateISO();
console.log(today());

// ================== Time ===================
const time = () => new Date().toLocaleTimeString();
console.log(time()); // 11:52:28 AM

const time = () => new Date().toTimeString();
console.log(time()); // 11:57:00 GMT-0600 (Central Standard Time)

// ================== Date and Time ===================
const dateTime = () => {
console.log(new Date().toDateString(), new Date().toLocaleTimeString()); 
}
dateTime(); // Sat Dec 03 2022 12:08:12 PM


