/* ООП - это наука о том как делать правильную архитектуру. 
   JS - прототипно ориентированный язык. Это частный случай ООП 
   
   любая переменная - это свойство объекта лексического окружения
   
   В JS - объект это самая главная сущность
   */

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.log([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};



// const john = {
//     health: 100
// };

// john.__proto__ = soldier;  // устаревший формат
// console.log(john.armor);

Object.setPrototypeOf(john, soldier);
const john = Object.create(soldier);

john.sayHello();