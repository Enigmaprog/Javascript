const arr = [2, 13, 6, 1, -5, 7];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b; 
}

// arr.pop(); // метод, который удаляет последный элемент из массива
// arr.push(10); // метод, который добавляет новый элемент на последном индексе массива 

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// const str = prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));