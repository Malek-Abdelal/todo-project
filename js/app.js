'use strict';

let userName = promptMessage("Please inter your name:");
let gender = promptMessage("Please inter your gender: (male / female)");
let age = promptMessage("Please inter your age:");

while (age <= 0) {
    alert("Your age is not correct, please inter a valid age.");
    age = prompt("Please inter a valid age:");
}

let visit = promptMessage("Is this your first time visiting this website ?") ?? "Question canceled";
let field = promptMessage("Are you a programmer ?") ?? "Question canceled";
let language = promptMessage("Do you familiar with JavaScript language ?") ?? "Question canceled";


var welcMessage = confirm("Do you want to get the welcoming message ?");
if (welcMessage == true) {
    alert((gender === "male") ? `Welcome, Mr ${userName}` : (gender === "female") ? `Welcome, Ms ${userName}` : `Welcome, ${userName}`);
}

function promptMessage(message) {
    return prompt(message);
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


let printAnswers = (array) => {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let normalizedArr = ansValidate(visit, field, language);
printAnswers(normalizedArr);