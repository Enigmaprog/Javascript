// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries); // 1

// const hamburger = 0;
// const fries = null;
// const cola = 0;
// const nuggets = 2;

// console.log(hamburger || cola || fries); // null

if (hamburger && fries) {
    console.log("I am full");
}

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Everyone is full!');
} else {
    console.log('We are leaving');
}

console.log(hamburger === 3 && cola === 2 || nuggets && fries === 3); // true
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); // 2

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport); // done

console.log(NaN || 2 || undefined);