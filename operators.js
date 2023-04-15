console.log('arr' + ' - object');
console.log(4 + '5');

let incr = 10,
    decr = 10;

// (Приоритет - 17)
// incr++; постфиксный инкремент
// decr--; постфиксный декремент 
// (Приоритет - 16)
// ++incr; префиксный инкремент
// --decr; префиксный декремент 


console.log(++incr);
console.log(--decr);

const isChecked = true,
    isClose = true;

console.log(isChecked && isClose);

// or => ||
// true || false => true
// false || false => false
// true || true => true

// and => &&
// true && false => false
// false && false => false
// true && true => true 