'use strict';

//First part homework

function detonatorTimer(delay) {
    let currentTime = delay;

    const intervalId = setInterval(() => {
        if (currentTime > 0) {
            console.log(currentTime);
            currentTime--;
        } else {
            console.log('BOOM!');
            clearInterval(intervalId);
        }
    }, 1000);
};

detonatorTimer(3);

//Second part homework

function detonatorTimerSec(delay) {
    if (typeof delay !== 'number' || delay < 0) {
        console.log('Введіть число');
        return;
    }
    function countDown(currentTimeSet) {
        if (currentTimeSet > 0) {
            console.log(currentTimeSet);
            setTimeout(() => countDown(currentTimeSet -1), 1000);
        } else {
            console.log('BOOM!');
        }
    }
    countDown(delay);
}

detonatorTimerSec(3);

//Third part homework

let me = {
    name: "Olexandr",
    residency: "Kyiv",
    profession: "UI/UX Designer",
    experience: 6,
    language: ["Ukrainian", "English", "France"],
    favoriteTool: "Figma",
    currentProject: "Design Web Site for my company",
    introduce() {
        console.log(
            `Hi, I'm ${this.name} from ${this.residency}. I'm a ${this.profession} with ${this.experience} years of expirience.`
        );
    },
    shareSkills() {
        console.log(
            `I speak ${this.language.join(", ")} and my favorite tool for work is ${
                this.favoriteTool
            }`
        );
    },
    currentFocus() {
        console.log(`Right now, I'm working on a ${this.currentProject} project.`);
    },
    futurePlans() {
        console.log(
            `I plan to expand my skills in animation and UI/UX design, and start learn JavaScript for more practise next year.`
        );
    },
};

me.introduce();
me.shareSkills();
me.currentFocus();
me.futurePlans();


//Fourth part homework

let aboutMe = {
    name: "Olexandr",
    residency: "Kyiv",
    profession: "UI/UX Designer",
    experience: 6,
    language: ["Ukrainian", "English", "France"],
    favoriteTool: "Figma",
    currentProject: "Design Web Site for my company",
    introduce() {
        console.log(
            `Hi, I'm ${this.name} from ${this.residency}. I'm a ${this.profession} with ${this.experience} years of experience.`
        );
    },
    shareSkills() {
        console.log(
            `I speak ${this.language.join(", ")} and my favorite tool for work is ${
                this.favoriteTool
            }`
        );
    },
    currentFocus() {
        console.log(`Right now, I'm working on a ${this.currentProject} project.`);
    },
    futurePlans() {
        console.log(
            `I plan to expand my skills in animation and UI/UX design, and start learn JavaScript for more practise next year.`
        );
    },
};

let securedSelfIntroduce = aboutMe.introduce.bind(aboutMe);
let securedSelfShareSkills = aboutMe.shareSkills.bind(aboutMe);
let securedSelfCurrentFocus = aboutMe.currentFocus.bind(aboutMe);
let securedSelfFuturePlans = aboutMe.futurePlans.bind(aboutMe);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfShareSkills, 2000);
setTimeout(securedSelfCurrentFocus, 3000);
setTimeout(securedSelfFuturePlans, 4000);


// //Fifth part homework

function decorFunction(a, b) {

    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

function slower(func, seconds) {
    return function (...args) {
        args.forEach(arg => {
            if (typeof arg !== 'number') {
                throw new Error('Введіть число!');
            }

        })
        console.log(`Chill out, you will get your result in ${seconds} seconds...`);
        setTimeout(() => {
            func(...args);
        }, seconds * 1000);
    };
}

let slowedDecorFunction = slower(decorFunction, 5);

try {

slowedDecorFunction(3, 7);
} catch (error) {
    console.log(error);
}
