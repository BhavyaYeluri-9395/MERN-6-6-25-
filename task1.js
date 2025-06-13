// Exercise 1
let number = prompt("Enter a number to reverse:");
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
alert("Reversed number is: " + reverseNumber(number));

// Exercise 2
let inputString = prompt("Enter a string to sort alphabetically:");
function alphabetOrder(str) {
    return str.split('').sort().join('');
}
alert("Alphabetical order: " + alphabetOrder(inputString));
