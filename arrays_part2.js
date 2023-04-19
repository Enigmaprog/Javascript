const arr = [2, 13, 6, 1, -5, 7];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b; 
}

// arr.pop(); // метод, который удаляет последный элемент из массива
// arr.push(10); // метод, который добавляет новый элемент на последном индексе массива 

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("","");
const products = str.split(", ");
// products.sort();
console.log(products.join('; '));

// ==============================================TASKS============================================== 335 * 5 = 1675
 
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {

    let width;
    let length;
    let sumArea = 0;
    const area = [];
    let volume = 0;
    let square = 0;

    for (let i in data.shops) {
        width = data.shops[i].width;
        length = data.shops[i].length;
        area[i] = width * length;
    }
    
    for (let i in area) {
        sumArea += area[i];
    }

    volume = data.height * sumArea;

    if (volume * data.moneyPer1m3 <= data.budget) {
        console.log("Бюджета достаточно");
    } else {
        console.log("Бюджета недостаточно");
    }

    // data.shops.forEach(shop => {
    //     square += shop.width * shop.length;
    // });

    // volume = data.height * square;

    // if (data.budget - (volume * data.moneyPer1m3) >= 0) {
    //     return 'Бюджета достаточно';
    // } else {
    //     return 'Бюджета недостаточно';
    // }
}

isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

const res = sortStudentsByGroups(students);
console.log(res);