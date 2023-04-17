const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test")
    }
};

options.makeTest(); // Test

const {border, bg} = options.colors; // деструктуризация удалась

console.log(border); // black

// console.log(Object.keys(options)); // [ 'name', 'width', 'height', 'colors' ] - метод, который создает массив с элементами из объектов "options" 

// console.log(Object.keys(options).length); // 4 - длина объекта

// console.log(options["colors"]["border"]); // black

// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key of options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
// }

// let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            // counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет знач ${options[key]}`);
        // counter++;
    }
    counter++;
}

console.log(counter);