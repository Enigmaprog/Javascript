// ====================1====================
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello JS!");

// ====================2====================
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// ====================3====================
const logger = function() {
    console.log("Hello");
};

logger();

// ====================4====================
const calc = (a, b) => a + b;

const calc2 = (a, b) => {return a + b};

// =========================================

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr)
promotion(res);


// =========================================

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return 
    }
    console.log("Done")
}

test();

// =========================================

function doNothing() {};
console.log(doNothing() === undefined);

// =================tasks===================

function sayHello(name) {

    return `Привет, ${name}`
}

const result = sayHello('Дима')

console.log(result)

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1]
}

const result2 = returnNeighboringNumbers(9);

console.log(result2)


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

const result3 = getMathResult(10, 5);

console.log(result3);