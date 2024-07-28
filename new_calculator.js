const history = document.getElementById("history");
const screen = document.getElementById("screen");
let string_number = "";
let stored_number = null;
let counter = "";

// the function below displays the numbers

function write_number(number) {
  string_number += number;
  screen.textContent = string_number;
}

// the function below does the addition problem

function Sum() {
  let number_number = Number(string_number);
  stored_number += number_number;
  screen.textContent = 0;
  string_number = "";
  number_number = 0;
  counter = "+";
  show_operator();
}

// the function below does the subtraction operation

function Sub() {
  let number_number = Number(string_number);
  if (stored_number === null) {
    stored_number = 0;
    stored_number = Math.abs(stored_number - number_number);
    history.textContent = stored_number;
    screen.textContent = 0;
  } else {
    stored_number -= number_number;
    history.textContent = stored_number;
    screen.textContent = 0;
  }
  string_number = "";
  number_number = 0;
  counter = "-";
  show_operator();
}

// the function below shows the correct operator

function show_operator() {
  if (counter === "+") {
    history.textContent = stored_number + " +";
  } else if (counter === "-") {
    history.textContent = stored_number + " -";
  }
}

// the function below shows the final result

function equal() {
  if (counter === "+") {
    Sum();
    history.textContent = 0;
    screen.textContent = stored_number;
    stored_number = 0;
  }
  else if (counter === "-") {
    Sub();
    history.textContent = 0;
    screen.textContent = stored_number;
    stored_number = 0;
  }
}
