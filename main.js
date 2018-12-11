var calcVersion;

do {
  calcVersion = prompt("Which calculator do you wish to use? (1)Basic, (2)Advanced, (3)BMI? Type 1, 2, or 3");
  if (isNaN(calcVersion) || calcVersion < 0 || calcVersion > 3) {
    alert("Invalid input! Try again!");
  }
} while (isNaN(calcVersion) || !(calcVersion < 4) || !(calcVersion > 0));

if (calcVersion == 1) {

  var operation = prompt("Please enter an operation to use: + - * /");
  var valueOne;
  var valueTwo;

  do {
    valueOne = prompt("Please enter first number!");
    if (isNaN(valueOne)) {
      alert("Invalid input! Try again!");
    }
  } while(isNaN(valueOne));

  do {
    valueTwo = prompt("Please enter second number!");
    if (isNaN(valueTwo)) {
      alert("Invalid input! Try again!");
    }
  } while(isNaN(valueTwo));

  var result = eval(valueOne + operation + valueTwo);
  alert(valueOne + " " + operation + " " + valueTwo + " = " + result);

} else if (calcVersion == 2) {
  var operation;
  do {
    operation = prompt("Please enter an operation to use: (1)Power, (2)SquareRoot. Type 1 or 2");
    if (isNaN(operation) || !(operation < 3) || !(operation > 0)) {
      alert("Invalid input! Try again!");
    }
  } while (isNaN(operation) || !(operation < 3) || !(operation > 0));

  if (operation == 1) {
    var valueOne;
    var valueTwo;

    do {
      valueOne = prompt("Please enter first number!");
      if (isNaN(valueOne)) {
        alert("Invalid input! Try again!");
      }
    } while(isNaN(valueOne));

    do {
      valueTwo = prompt("Please enter second number!");
      if (isNaN(valueTwo)) {
        alert("Invalid input! Try again!");
      }
    } while(isNaN(valueTwo));

    alert(valueOne + "^" + valueTwo + " = " + power(valueOne, valueTwo));

  } else {
    var valueOne;
    do {
      valueOne = prompt("Please enter first number!");
      if (isNaN(valueOne)) {
        alert("Invalid input! Try again!");
      }
    } while(isNaN(valueOne));

    var result = Math.sqrt(parseInt(valueOne));
    alert("Square root of " + valueOne + " = " + result);

  }
} else {

  var valueOne;
  var valueTwo;

  do {
    valueOne = prompt("Please enter weight!");
    if (isNaN(valueOne)) {
      alert("Invalid input! Try again!");
    }
  } while(isNaN(valueOne));

  do {
    valueTwo = prompt("Please enter height!");
    if (isNaN(valueTwo)) {
      alert("Invalid input! Try again!");
    }
  } while(isNaN(valueTwo));

  alert("Your BMI value is: " + bmi(valueOne, valueTwo));
}



function power(number1, number2) {
  return parseInt(number1) ** parseInt(number2);
}

function bmi(weight, height) {
  return weight / (height * height);
}
