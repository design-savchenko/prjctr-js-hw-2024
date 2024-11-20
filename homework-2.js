'use strict';


// First part homework

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('ЛолКек');
    } else if (i % 3 === 0) {
        console.log('Лол');
    } else if (i % 5 === 0) {
        console.log('Кек');
    } else {
        console.log(i);
    }
}

// Second part homework

// For cycle
let value = 10;

if (typeof value === 'number' && value > 0) {
    for (let i = 2; i < value; i += 2) {
        console.log(i);
    }
} else {
    console.log('Таке чуство шо Бог десь наказує нас за шось');
}

// While cycle
value = 10;

if (typeof value === 'number' && value > 0) {
    let i = 2;
    while (i < value) {
        console.log(i);
        i += 2;
    }
} else {
    console.log('Таке чуство шо Бог десь наказує нас за шось');
}

