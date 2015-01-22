
// Declare two variables, and give them
// values. Note, you can declare multiple
// variables with one var statement by
// placing a comma between the variable
// statements.
var quarts = 0,
    cups = 0,
    meters = 0,
    yards = 0,
    celcius = 0,
    fahrenheit = 0,
    resQuartsCups = 0,
    resMetersYards = 0,
    resCelciusFahrenheit = 0;

// looks for empty input and converts the other input to the opposite unit
function convertQuartsCups() {
    if (isNaN(quarts) || isNaN(cups)) {
        document.querySelector('.quarts-cups').textContent = "Check your request again– something ain't right."
    }
    else if (cups === 0) {
      resQuartsCups = quarts * 4;
      document.querySelector('.quarts-cups').textContent = (quarts + " quart(s) will give you " + resQuartsCups + " cup(s)");
    }
    else if (quarts === 0 ) {
        resQuartsCups = cups / 4;
        document.querySelector('.quarts-cups').textContent = (cups + " cup(s) will give you " + resQuartsCups + " quart(s)");
    }
    else if (quarts > 0 && cups > 0) {
        document.querySelector('.quarts-cups').textContent = ("Hey, aren't I the one doing the math? Clear one side of the equation.")
    }
}

// looks for empty input and converts the other input to the opposite unit
function convertMetersYards() {
    if (isNaN(meters) || isNaN(yards)) {
        document.querySelector('.meters-yards').textContent = "Check your request again– something ain't right."
    }
    else if (yards === 0) {
        resMetersYards = meters * 1.0936;
        document.querySelector('.meters-yards').textContent = (meters + " meter(s) comes to " + resMetersYards + " yard(s)");
    }
    else if (meters === 0 ) {
        resMetersYards = yards / 1.0936;
        document.querySelector('.meters-yards').textContent = (yards + " yard(s) comes to " + resMetersYards + " meter(s)");
    }
    else if (meters > 0 && yards > 0) {
        document.querySelector('.meters-yards').textContent = "This isn't a guessing game– leave one field empty!"
    }
}

// looks for empty input and converts the other input to the opposite unit
function convertCelciusFahrenheit() {
    if (isNaN(celcius) || isNaN(fahrenheit)) {
        document.querySelector('.celcius-fahrenheit').textContent = "Check your request again– something ain't right."
    }
    else if (fahrenheit === 0) {
        document.querySelector('.celcius-fahrenheit').textContent = celcius + "\xB0 Celcius will give you " + (((celcius * 9) / 5) + 32) + "\xB0 Fahrenheit"
    }
    else if (celcius === 0 ) {
        document.querySelector('.celcius-fahrenheit').textContent = fahrenheit + "\xB0 Fahrenheit will give you " + (((fahrenheit - 32) * 5) / 9) + "\xB0 Celcius"
    }
    else if (fahrenheit === -40 && celcius === -40) {
        document.querySelector('.celcius-fahrenheit').textContent = "Well, in this particular case, you are correct. Don't get use to me saying that."
    }
    else if (fahrenheit > 0 && celcius > 0) {
        document.querySelector('.celcius-fahrenheit').textContent = "That's 1000\xB0 wrong– please clear one side.";
    }
}





// setQuarts takes a string as a parameter, casts it
// to a number, and stores that value in quarts
function setQuarts(quartsString) {
    quarts = Number(quartsString);
}

// setCups takes a string as a parameter, casts it
// to a number, and stores that value in cups
function setCups(cupsString) {
    cups = Number(cupsString);
}

// setMeters takes a string as a parameter, casts it
// to a number, and stores that value in meters
function setMeters(metersString) {
    meters = Number(metersString);
}

// setYards takes a string as a parameter, casts it
// to a number, and stores that value in yards
function setYards(yardsString) {
    yards = Number(yardsString);
}

// setCelcius does the same thing as setX, only
// storing the value in celcius
function setCelcius(celciusString) {
    celcius = Number(celciusString);
}

// setFahrenheit does the same thing as setX, only
// storing the value in fahrenheit
function setFahrenheit(fahrenheitString) {
    fahrenheit = Number(fahrenheitString);
}

// function resetFields() {
//     document.querySelector(input).value = " ";
// }
