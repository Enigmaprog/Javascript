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

// true values - 1, 2, 3, 4, 5

console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); //NaN
console.log(undefined && 2 && NaN); //undefined
console.log(1 && 2 && 3); //3
console.log(!1 && 2 || !3); //false
console.log( 25 || null && !3); // 25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log( 5 === 5 && 3 > 1 || 5); // true
console.log(0 || NaN || false || null); // null
console.log(typeof(NaN)); // number
console.log(typeof(+'4')); // number