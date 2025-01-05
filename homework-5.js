'use strict';

//First part homework

function durationBetweenDates(startDate = '01 Jan 2000',
                              endDate = '02 Jan 2000',
                              unit = 'days') {

    const start = new Date(startDate);
    const end = new Date(endDate);

    const difference = Math.abs(end - start);

    let multiplier;
    if (unit === 'seconds') multiplier = 1000;
    else if (unit === 'minutes') multiplier = 1000 * 60;
    else if (unit === 'hours') multiplier = 1000 * 60 * 60;
    else multiplier = 1000 * 60 * 60 * 24;

    const result = Math.floor(difference / multiplier);

    return `${result} ${unit}`;
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));

//Second part homework

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    const result = {};

    for (let key in data) {
        result[key.toLowerCase()] = (+data[key]).toFixed(2);
    }
    return result;
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);