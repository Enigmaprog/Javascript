const num = 51;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('More');
} else {
    console.log('Ok!')
}

(num === 50) ? console.log('Ok!') : console.log('Error');


switch (num) {
    case 49: 
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Correct');
        break;
    default:
        console.log('Not one case');
        break;
}