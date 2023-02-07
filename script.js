"use strict"

// const friends = ["Brian", "Justin", "Aaron", "Nick", "Meghan", "Ashlea", "Miranda"]
// console.log(friends);

// const y = new Array(1987, 1988, 2016, 2022);
// // console.log(years);

// console.log(friends[0]);

// console.log(friends.length);
// // console.log(years.length);
// console.log(friends[friends.length - 1]);

// friends[6] = "Erika"
// console.log(friends[6]);

// console.log(friends);

// const firstName = 'Greg';
// const greg = [firstName, 'Crutchlow', 2037 - 1991, 'student', friends];

// console.log(greg);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

// console.log(ages);

// const friends = ["Brian", "Justin", "Aaron", "Nick", "Meghan", "Ashlea", "Miranda"];
// const newLength = friends.push("Erika")
// console.log(friends);
// console.log(newLength);

// friends.unshift("Brian")
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// if (friends.includes('Greg')) {
//     console.log("You have a friend named Greg");
// } else {
//     console.log("You have no friend named Greg");
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips);

// const total = [bills[0] + tips[0]]

// console.log(total);

// const greg = {
// 	firstName: "Greg",
// 	lastName: "Crutchlow",
// 	age: 2023 - 1987,
// 	job: "n/a",
// 	friends: ["Brian", "Justin", "Aaron", "Nick", "Meghan", "Ashlea", "Miranda"]
// }

// console.log(greg);

// console.log(greg.lastName);
// console.log(greg['lastName']);

// const nameKey = 'Name';
// console.log(greg['first' + nameKey]);
// console.log(greg['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Greg? Choose between firstName, lastName, age, job and friends')
// console.log(greg[interestedIn]);

// if (greg[interestedIn]) {
//     console.log(greg[interestedIn]);
// } else {
//     console.log('Wrong request!');
// }

// greg.location = 'Ottawa, Canada';
// greg['twitter'] = '@GregCrutchlow';

// console.log(greg);

// // Challenge
// // "Greg has 7 friends, and his best friend is called Brian"

// console.log(`${greg.firstName} has ${greg.friends.length} friends, and his best friend is called ${greg.friends[0]}.`);

// const greg = {
// 	firstName: "Greg",
// 	lastName: "Crutchlow",
// 	birthYear: 1987,
// 	job: "Front-End Developer",
//     friends: ["Brian", "Justin", "Aaron", "Nick", "Meghan", "Ashlea", "Miranda"],
//     hasDriversLicense: true,
//     calcAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// }
// console.log(greg.getSummary())

// Challenge
// 'Jonas is a 46-year old teacher, and he has a/no driver's license.'

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2
//         return this.bmi
//     }
// }

// const john = {
// 	firstName: "John",
// 	lastName: "Smith",
// 	weight: 92,
// 	height: 1.95,
// 	calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2
//         return this.bmi
//     },
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi} is higher than ${john.firstName} ${john.lastName}'s BMI of ${john.bmi}.`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.firstName} ${john.lastName}'s BMI ${john.bmi} is higher than ${mark.firstName} ${mark.lastName}'s BMI of ${mark.bmi}.`)
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Repetition ${rep}`);
// }

// const gregArray = [
//     'Greg', 'Crutchlow', 1987, 'Front-End Developer', ['Brian', 'Justin', 'Aaron']
// ]

// const types = [];

// for (let i = 0; i < gregArray.length; i++){
//     console.log(gregArray[i], typeof gregArray[i]);

//     types[i] = typeof gregArray[i];
//     types.push(typeof gregArray[i])
// }

// console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}

console.log(ages);

const numbers = [1, 2, 3, 4, 'Five', 6, 7, 8, 9]

for (let i = numbers.length - 1; i >= 0; i--){
    console.log( numbers[i]);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

console.log(bills);
console.log(tips);
console.log(totals);

const calcTip = (bill) => { 
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
    // console.log(tips, totals);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage(totals));
console.log(calcAverage(tips))

