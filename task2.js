// Exercise 2: Sort letters in alphabetical order
let inputString = prompt("Enter a string to sort alphabetically:");
function alphabetOrder(str) {
    return str.split('').sort().join('');
}
alert("Alphabetical order: " + alphabetOrder(inputString));
