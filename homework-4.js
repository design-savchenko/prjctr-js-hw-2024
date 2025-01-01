'use strict';

//First part homework

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames
    .map(name =>
        name
            .split(" ")
            .map(part => part[0])
            .join(".") + "."
    )
    .sort();

console.log(initials);

//Second part homework

// First Method
const userNamesArray = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];

for (let name of userNamesArray) {
    const firstLetter = name[0].toLowerCase();
    if ('аеєиіїоуюя'.includes(firstLetter)) {
        filteredNames.push(name);
    }
}

console.log(filteredNames);


// Second Method

const userNamesArrayRet = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

let filteredNamesRet = userNamesArrayRet.filter(name => {
    const firstLetter = name[0].toLowerCase();
    return 'аеєиіїоуюя'.includes(firstLetter);
});

console.log(filteredNamesRet);

//Third part homework

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = Number(
    currentMaxValue
        .toString()
        .split('')
        .reverse()
        .join('')
);

console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

//Fourth part homework

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;


function calculateProduct(arr) {
    return arr.reduce((product, item) => {
        if (Array.isArray(item)) {

            return product * calculateProduct(item);
        }
        return product * item;
    }, 1);
}

productOfArray = calculateProduct(resultsArray);
console.log(productOfArray);