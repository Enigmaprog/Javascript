// function temp(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function temp(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * temp(x, n - 1)
//     } 
// }

// console.log(temp(2, 1)) // 2 
// console.log(temp(2, 2)) // 4 
// console.log(temp(2, 3)) // 8  
// console.log(temp(2, 4)) // 16

// рекурсия - это функция, которая запускает внутри себя

// x = 2, n = 1, => 2,
// x = 2, n = 2, 2 * [(x = 2, n = 2 - 1) => 2] = 2 * 2 => 4
// x = 2, n = 3, 2 * [(x = 2, n = 3 - 1)] => 4] = 2 * 4 => 8
// x = 2, n = 4, 2 * [(x = 2, n = 4 - 1)] => 8] = 2 * 8 => 16

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// console.log(Object.values(object1)); // [ 'somestring', 42, false ]

// метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ahn',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(data)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));

// console.log(Object.values(students));

// for (let i of Object.values(students)) {
//     console.log(i.length);
// }

function getTotalProgressByRescursion(data) {
    if (Array.isArray(data)) {
        students += course.length;
        let total = 0;

        for (let i = 0; i < course.length; i++) {
            total += course[i].progress;
        }

        return [total, data.length]
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRescursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRescursion(students);

console.log(result[0]/result[1]);