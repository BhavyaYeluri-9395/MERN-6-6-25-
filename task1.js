let number = prompt("Enter a number to reverse:");
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
alert("Reversed number is: " + reverseNumber(number));
