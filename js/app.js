'use strict';

var userName = prompt("Please inter your name:");
var gender = prompt("Please inter your gender: (male / female)");
var age = prompt("Please inter your age:");

while (age <= 0) {
    alert("Your age is not correct, please inter a valid age.");
    age = prompt("Please inter a valid age:");
}

var welcMessage = confirm("Do you want to get the welcoming message ?");
if (welcMessage == true) {
    alert((gender === "male") ? `Welcome, Mr ${userName}` : (gender === "female") ? `Welcome, Ms ${userName}` : `Welcome, ${userName}`);
}