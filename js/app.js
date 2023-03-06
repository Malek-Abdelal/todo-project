'use strict';

var userName = prompt("Please inter your name:");
var gender = prompt("Please inter your gender: (male / female)");
var age = prompt("Please inter your age:");

while (age <= 0) {
    alert("Your age is not correct, please inter a valid age.");
    age = prompt("Please inter a valid age:");
}

let visit = prompt("Is this your first time visiting this website ?");
let field = prompt("Are you a programmer ?");
let language = prompt("Do you familiar with JavaScript language ?");


var welcMessage = confirm("Do you want to get the welcoming message ?");
if (welcMessage == true) {
    alert((gender === "male") ? `Welcome, Mr ${userName}` : (gender === "female") ? `Welcome, Ms ${userName}` : `Welcome, ${userName}`);
}

let ansValidate = (answer1, answer2, answer3) => {

    let answers = [answer1, answer2, answer3];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "") {
            answers[i] = "invalid";
        }
    }
    return answers;
}

let normalizedArr = ansValidate(visit, field, language);

let printAnswers = (array) => {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printAnswers(normalizedArr);