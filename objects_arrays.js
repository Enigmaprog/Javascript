"use strict";
const arr = [1, 2, 3];

arr[10] = '3456';

console.log(arr);

const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    } 
}
const b = 'b';
// arrObj.b = '1234';
arrObj[b] = '1234';

console.log(arrObj['b']);
console.log(arrObj.a);

console.log(arrObj[1]);
console.log(arr[1]);

// const obj = {a: 1, b: 2};

// const obj2 = {
//     'Anna': 500,
//     'Alice': 800
// }; 

const storeName = 'e-mart';

const storeDescription = {
    budget: 10000,
    employees: ['john', 'ethan', 'oliver'],
    products: {
        'bugatti': 500,
        'ferrari': 1000,
    },
    open: true
}
