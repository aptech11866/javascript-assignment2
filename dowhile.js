let number;

do {
    number = parseInt(prompt("Enter a number greater than 10:"));

    if (number <= 10) {
        alert("The number must be greater than 10. Try again!");
    }
} while (number <= 10); 

alert("Great! You entered a number greater than 10: " + number);
console.log("You entered:", number);


