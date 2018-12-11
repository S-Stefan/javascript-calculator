var calcVersion;

do {
  calcVersion = prompt("Which calculator do you wish to use? (1)Basic, (2)Advanced, (3)BMI, (4)Trip Calculator? Type 1, 2, 3, or 4");
  if (isNaN(calcVersion) || calcVersion < 0 || calcVersion > 4) {
    prompt("Invalid input! Try again!");
  }
} while (isNaN(calcVersion) || !(calcVersion < 5) || !(calcVersion > 0));

if (calcVersion == 1) {

  var operation = prompt("Please enter an operation to use: + - * /");
  var valueOne;
  var valueTwo;

  do {
    valueOne = prompt("Please enter first number!");
    if (isNaN(valueOne)) {
      prompt("Invalid input! Try again!");
    }
  } while(isNaN(valueOne));

  do {
    valueTwo = prompt("Please enter second number!");
    if (isNaN(valueTwo)) {
      prompt("Invalid input! Try again!");
    }
  } while(isNaN(valueTwo));

  var result = eval(valueOne + operation + valueTwo);
  prompt(valueOne + " " + operation + " " + valueTwo + " = " + result);
} else if (calcVersion == 2) {
  var operation;
  do {
    operation = prompt("Please enter an operation to use: (1)Power, (2)SquareRoot. Type 1 or 2");
    if (isNaN(operation) || !(operation < 3) || !(operation > 0)) {
      prompt("Invalid input! Try again!");
    }
  } while (isNaN(operation) || !(operation < 3) || !(operation > 0));

  if (operation == 1) {
    var valueOne;
    var valueTwo;

    do {
      valueOne = prompt("Please enter first number!");
      if (isNaN(valueOne)) {
        prompt("Invalid input! Try again!");
      }
    } while(isNaN(valueOne));

    do {
      valueTwo = prompt("Please enter second number!");
      if (isNaN(valueTwo)) {
        prompt("Invalid input! Try again!");
      }
    } while(isNaN(valueTwo));

    prompt(valueOne + "^" + valueTwo + " = " + power(valueOne, valueTwo));

  } else {
    var valueOne;
    do {
      valueOne = prompt("Please enter first number!");
      if (isNaN(valueOne)) {
        prompt("Invalid input! Try again!");
      }
    } while(isNaN(valueOne));

    var result = Math.sqrt(parseInt(valueOne));
    prompt("Square root of " + valueOne + " = " + result);
  }
}



function power(number1, number2) {
  return parseInt(number1) ** parseInt(number2);
}

function bmi(weight, height) {
  return weight / (height * height);
}

//
// } else if (calcVersion == 2) {
//   var operation = prompt("Please enter an operation to use: (1)Power, (2)SquareRoot. Type 1 or 2");
//   var valueOne = prompt("Please enter a number!");
//   var result;
//
//   if (operation == "1") {
//     var valueTwo = prompt("Please enter a second number!");
//     result = parseInt(valueOne) ** parseInt(valueTwo);
//     console.log(valueOne + "^" + valueTwo + " = " + result);
//   } else {
//     result = Math.sqrt(parseInt(valueOne));
//     console.log("Square root of " + valueOne + " = " + result);
//   }
// } else if (calcVersion == 3) {
//   var metricOrImperial = prompt("Calculate using (1)Metric or (2)Imperial? Type 1 or 2");
//   var weight = prompt("What is your weight?");
//   var height = prompt("What is your height?")
//   var bmi = weight/(height * height);
//   console.log("Test: " + bmi);
//
//   if (metricOrImperial == 2) {
//     bmi *= 703;
//     console.log("Your bmi is: " + bmi);
//   } else {
//     console.log("Your bmi is: " + bmi);
//   }
//
// } else {
//   console.log("This functionality is not completed");
//   // console.log("Lets plan a trip!");
//   // var distance = prompt("How far is your trip? Enter a number in miles");
//   // var fuelEfficiency = prompt("What is your fuel efficiency in MPG?");
//   // var costPerGal = prompt("What is the cost per gallon of petrol?");
//   // var speed = prompt("What speed will you be going at in MPH?");
//   //
//   // var time = distance / speed;
//   // var overSixtyMph = speed - 60;
//   // var reducedMpg = overSixtyMph * 2;
//   // var actualFuelEfficiency = fuelEfficiency - reducedMpg;
// }
