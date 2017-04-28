/*
This program is a node.js file operated from the command line (terminal).
After calling, it will ask the user for their DoB as MM/DD/YYYY.
It then will tell the user thier zodiac and chinese zodiac symbols.
*/

//Used to create a readline interface (a type of blank class) that can
//Read data from a stream, such as the terminal input
const readline = require('readline');

//Fills in the blank data for the readline interface to make an object, rl.
//r1 will read from stdin (terminal input) and write to stdout (terminal)
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//Our main body, question() functions as "question", response
//(answer) => {} states that with the given answer do this code.
rl.question('Please enter your date of birth as MM/DD/YYYY: ', (answer) => {
//Createsa blank line for appearance purposes
console.log("");

//Creates a date array from the data gathered from the answer provided
//MM/DD/YYYY becomes [MM, DD, YYYY]
var date = answer.split("/");

//Function calls to print Zodiac signs
getZodiac(date);
getChineseZodiac(date);

//Close up the interface to end the program
rl.close();
});

//Returns the Zodiac signs of the user, if valid month and days are given.
function getZodiac(date){
var month = parseInt(date[0]);
var day = parseInt(date[1]);

switch(month){
//January
case 1:
if ((day > 0) && (day <= 20)){
console.log('You are a Capricorn!\n');
}
else if ((day > 20) && (day <= 31)){
console.log('You are an Aquarius!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//February
case 2:
if ((day > 0) && (day <= 19)){
console.log('You are an Aquarius!\n');
}
else if ((day > 19) && (day <= 29)){
console.log('You are a Pisces!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//March
case 3:
if ((day > 0) && (day <= 20)){
console.log('You are a Pisces!\n');
}
else if ((day > 20) && (day <= 31)){
console.log('You are an Aries!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//April
case 4:
if ((day > 0) && (day <= 19)){
console.log('You are an Aries!\n');
}
else if ((day > 19) && (day <= 30)){
console.log('You are a Taurus!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//May
case 5:
if ((day > 0) && (day <= 20)){
console.log('You are a Taurus!\n');
}
else if ((day > 20) && (day <= 31)){
console.log('You are a Gemini!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;
//June
case 6:
if ((day > 0) && (day <= 21)){
console.log('You are a Gemini!\n');
}
else if ((day > 21) && (day <= 30)){
console.log('You are a Cancer!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//July
case 7:
if ((day > 0) && (day <= 23)){
console.log('You are a Cancer!\n');
}
else if ((day > 23) && (day <= 31)){
console.log('You are a Leo!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//August
case 8:
if ((day > 0) && (day <= 23)){
console.log('You are a Leo!\n');
}
else if ((day > 23) && (day <= 31)){
console.log('You are a Virgo!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//September
case 9:
if ((day > 0) && (day <= 22)){
console.log('You are a Virgo!\n');
}
else if ((day > 22) && (day <= 30)){
console.log('You are a Libra!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//October
case 10:
if ((day > 0) && (day <= 22)){
console.log('You are a Libra!\n');
}
else if ((day > 22) && (day <= 31)){
console.log('You are a Scorpio!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//November
case 11:
if ((day > 0) && (day <= 22)){
console.log('You are a Scorpio!\n');
}
else if ((day > 22) && (day <= 30)){
console.log('You are a Sagitarius!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//December
case 12:
if ((day > 0) && (day <= 20)){
console.log('You are a Sagitarius!\n');
}
else if ((day > 20) && (day <= 31)){
console.log('You are a Capricorn!\n');
}
else{
console.log('That is not a valid date.\n');
}
break;

//Invalid Month
default:
console.log('That is not a valid date.\n');
}

}

//Returns the Chinese Zodiac sign of the user, provided a valid year is given.
function getChineseZodiac(date){
var year = parseInt(date[2]);

var symbol = year % 12;

switch (symbol){
case 0:
console.log('You are a Monkey!');
break;
case 1:
console.log('You are a Rooster!');
break;
case 2:
console.log('You are a Dog!');
break;
case 3:
console.log('You are a Pig!');
break;
case 4:
console.log('You are a Rat!');
break;
case 5:
console.log('You are an Ox!');
break;
case 6:
console.log('You are a Tiger!');
break;
case 7:
console.log('You are a Rabbit!');
break;
case 8:
console.log('You are a Dragon!');
break;
case 9:
console.log('You are a Snake!');
break;
case 10:
console.log('You are a Horse!');
break;
case 11:
console.log('You are a Sheep!');
break;
default:
console.log('That is not a valid date.');
}
}
