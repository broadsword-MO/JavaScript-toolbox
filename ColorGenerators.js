// ===================================================
//                   Random Colors
// ===================================================
// * LINK from Medium: https://tapajyoti-bose.medium.com/7-killer-one-liners-in-javascript-33db6798f5bf

// Generate a random hex color
// Take the random number, convert to hexadecimal, cut off the '0.' at the beginning, add a zero on the end if the hex number is shorter than 6 characters
const randomHexColor = () =>
    `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
console.log(randomHexColor()); // e.g. #7fc1ca

// Paul Irish random hex color generator (I added .padEnd() for infrequent shortness)
// Round the random number down, multiply times the +16 million colors number, convert to hexadecimal, add a zero on the end if the hex number is shorter than 6 characters
const paulIrishColor = () =>
    `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padEnd(6, '0')}`;
console.log(paulIrishColor()); // e.g. #c61085

// Tapajyoti Bose random hex color generator. I added the .padEnd()
const generateRandomHexColor = () =>
    `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0')}`;
console.log(generateRandomHexColor());

// ================== Mine ===================
// My rgb() color generator. RGB range: full
const dougColor = () => {
    const num = () => Math.round(Math.random() * 255);
    return `rgb(${num()},${num()},${num()})`;
};
console.log(dougColor()); // e.g. rgb(252,169,32)

// My rgb() light-ish color generator. RGB range: 128-255
const dougLightishColor = () => {
    const num = () => Math.round(Math.random() * 128 + 127);
    return `rgb(${num()},${num()},${num()})`;
};
console.log(dougLightishColor()); // e.g. rgb(221,134,240)

// My rgb() darkish color generator. RGB range: 0-128
const dougDarkishColor = () => {
    const num = () => Math.round(Math.random() * 128);
    return `rgb(${num()},${num()},${num()})`;
};
console.log(dougDarkishColor()); // e.g. rgb(121,63,97)

// My rgb() dark color generator. RGB range: 0-64
const dougDarkColor = () => {
    const num = () => Math.round(Math.random() * 64);
    return `rgb(${num()},${num()},${num()})`;
};
console.log(dougDarkColor()); // e.g. rgb(45,48,3)

// My rgba() color generator. RGBa range: 0-255, 0-1.0
const dougColorAlpha = () => {
    const num = () => Math.round(Math.random() * 255);
    return `rgba(${num()}, ${num()}, ${num()}, ${Math.random().toFixed(1)})`;
};
console.log(dougColorAlpha()); // e.g. rgba(12, 81, 167, 0.3)
