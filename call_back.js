// callback - функция, которая должна быть выполнена после того, как другая функция завершила свое выполнение.

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500); // функция задержки
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок!');
// }) 

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('Javascript', done);