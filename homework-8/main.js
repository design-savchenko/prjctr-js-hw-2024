'use strict';

const changeTitleSize = document.getElementById('headerTwo');
setTimeout(() => {
    changeTitleSize.style.fontSize  = '50px';
}, 3000);

const changeBackground = document.querySelector('.firstSection');
const textElements = document.querySelectorAll('.firstSection h2, .firstSection p');

setTimeout(() => {
    changeBackground.style.background  = 'black';
    textElements.forEach(element => {
        element.style.color = 'white';
    });
}, 2000);

const elementList = document.querySelectorAll('ul li');
const liElement = document.querySelectorAll('ul .text');

elementList.forEach(item => {
    item.style.opacity = '0';
    item.style.transition = 'opacity 1s';
});


setTimeout(() => {
    elementList.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, index * 400);
    });

    liElement.forEach(item => {
        item.style.color = 'red';
    });
}, 4000);

const listItems = document.querySelectorAll('ul li');

const targetItem = Array.from(listItems).find(item => item.textContent === 'Пункт 5');
if (targetItem) {
    targetItem.style.color = 'blue';
}


const hatredLevelLabel = document.querySelector('.hatredLevelCounter');
const updateButton = document.querySelector('.redBtn');
const fireBottom = document.querySelector('.fire-bottom');


listItems.forEach(item => {
    item.addEventListener('click', () => {
        hatredLevelLabel.textContent = item.textContent;
            hatredLevelLabel.style.fontWeight = 'bold';
    });
});

updateButton.addEventListener('click', () => {
    if (hatredLevelLabel.textContent) {
        setTimeout(() => {
       document.body.style.background = 'red';
        }, 1000);
    } else {
        alert('Please select a level first.');
    }

    setTimeout(() => {
        fireBottom.style.bottom = '0';
        fireBottom.style.transition = 'bottom 1s ease, opacity 1s ease';
    }, 10);
});