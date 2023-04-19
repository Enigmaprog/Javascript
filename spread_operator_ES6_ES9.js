// ==========================================OBJECTS================================================

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
};

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // поверхностная копия объекта

newNumbers.a = 10;
newNumbers.c.x = 45;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 25
};

// console.log(Object.assign(numbers, add)); // assign - метод, который соединяет объекты

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

// ==========================================ARRAY================================================

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // slice - метод, который копирует массив

newArray[1] = 'adasdasda'
console.log(newArray);
console.log(oldArray);

// есть два типа копии объекта - клубокая копия объекта и поверхностная копия объекта
// ES6 - оператор разворота (копирования) для массива
// ES9 - оператор разворота (копирования) для объекта
// spread operator - оператор разворота

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7]
log(...num);

const array = ["a", '"b'];
const newArray = [...array];
console.log(newArray);

const q = {
    one: 1,
    two: 2
};

const newObj =  {...q};

console.log(newObj);

// ==========================================TASKS=OF=OBJECTS===================================

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;

    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

// ==========================================TASKS=OF=ARRAY===================================

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из: ';

    for (let i in arr) {
        str += `${arr[i]} `;
    }

    if (arr.length == 0) {
        return `Семья пуста`;
    } else {
        return str;
    }
}

console.log(showFamily(family))

const arr = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';

    arr.forEach(function(temp) {
        str += `${temp.toLowerCase()}\n`
    })

    return str;

    // arr.forEach(city => {
    //     console.log(city.toLowerCase())
    // })
}

console.log(standardizeStrings(arr));