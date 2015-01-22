
// Declare two variables, and give them
// values. Note, you can declare multiple
// variables with one var statement by
// placing a comma between the variable
// statements.
var x = 0,
    y = 0,
    z = 0,
    solution = 0;

// add simply alerts the value of x + y
function add() {
  solution = x + y + z;
  document.querySelector('.result').textContent = solution;
}

// subtract simply alerts the value of x - y
function subtract() {
  solution = x - y - z;
  document.querySelector('.result').textContent = solution;
}


// divide alerts the value of x / y
function divide() {
    solution = x / z;
    document.querySelector('.result').textContent = solution;
}

// multiply alerts the value of x * y
function multiply() {
    solution= x * y;
    document.querySelector('.result').textContent = solution;
}

// mod simply alerts the value of x mod y
function modify() {
    solution = x % z;
    document.querySelector('.result').textContent = solution;
}

// setX takes a string as a parameter, casts it
// to a number, and stores that value in x
function setX(xString) {
  x = Number(xString);
}

// setY does the same thing as setX, only
// storing the value in y
function setY(yString) {
  y = Number(yString);
}

// setY does the same thing as setX, only
// storing the value in y
function setZ(zString) {
    z = Number(zString);
}
