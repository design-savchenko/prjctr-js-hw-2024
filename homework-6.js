'use strict';

//First part homework

function addThemAll(...numbers) {
    let summ = 0;

    for (let num of numbers) {
        summ += num;
    }
    return summ;
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
        if (direction === '>') {
            return a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
        } else if (direction === '<') {
            return a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0;
        } else {
            throw new Error();
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

console.log(movies.sort(byProperty('releaseYear', '>')));
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.sort(byProperty('movieName', '>')));


// Fourth part homework

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];


function filterUnique(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(filterUnique(userNames));