let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = 1; i < 8; i ++) {
    
    // console.log(num);
    // num++;

    if(i === 6) {
        // break;
        continue;
    }
    console.log(i);
}


let result = '';
const length = 7;

for (let i = 1; i < length; i ++) {
    result += '*';
    console.log(result);
}

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}


//=======================task-3========================

function tasks() {
    let x = 5;
    while (x <= 10) {
        console.log(x);
        x++;
    }

    for (let i = 20; i > 10; i--) {
        if (i === 13) {
            break;
        } else {
            console.log(i);
        }
    }

    for (let i = 2; i <= 10; i++) {
        if(i%2 === 0) {
            console.log(i);
        }
    }

    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }

    arr = []
    for (let i = 5; i <= 10; i++) {
        arr[i - 5] = i;
    }
    console.log(arr);
}
    
//====================================================


//=======================task-4========================

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);

    return result;
}


function secondTask() {
    const data = [5, 10, 'Shoping', 20, 'Hemowork'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = data[i] + ' - done';
        }
    }

    console.log(data);

    return data;
}

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    size = data.length - 1;

    for(let i = 0; i < data.length; i++) {
        result[i] = data[size];
        size --;
    }

    console.log(result);

    return result;
}

//====================================================