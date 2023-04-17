const arr = [1, 2, 3, 6, 8];

// arr.pop(); // метод, который удаляет последный элемент из массива
// arr.push(10); // метод, который добавляет новый элемент на последном индексе массива 

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr) {
//     console.log(value);
// }

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = promt("","");
const products = str.split(", ");
console.log(products);