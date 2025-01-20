'use strict';

//First part homework

function addThemAll(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        if (typeof num !== 'number') {
            return 'Введіть число!';
        }
        sum += num;
    }
    return sum;
}

console.log(addThemAll(2,4));
console.log(addThemAll(1,2,3,4));
console.log(addThemAll(5,5,10));



//Second part homework

function multiply(a) {
    return function(b) {
        return a * b;
    }
}

console.log(multiply(5)(5))
console.log(multiply(2)(-2))
console.log(multiply(4)(3))



// Third part homework

function byProperty(property, direction) {
    return function (a, b) {


        if (!(a.hasOwnProperty(property) && b.hasOwnProperty(property))) {
            throw new Error('Неправильно значення!');
        }

        if (direction === '>') {
            return a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
        } else if (direction === '<') {
            return a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0;
        } else {
            throw new Error('Не працює сортування!');
        }
    };
}

const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

try {
    console.log(movies.sort(byProperty('releaseYear', '>')));
    console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
    console.log(movies.sort(byProperty('movieName', '>')));
} catch (error) {
    console.log(error);
}




// Fourth part homework

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];


function filterUnique(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(filterUnique(userNames));