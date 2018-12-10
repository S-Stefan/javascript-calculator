console.log("Hello!");

var basicOrAdvanced = prompt("Which calculator do you wish to use? (1)Basic, (2)Advanced? Type 1 or 2");

if (basicOrAdvanced == 1) {
  var valueOne = prompt("Please enter a number!");
  var operation = prompt("Please enter an operation: + - * /");
  var valueTwo = prompt("Please enter a second number!");
  var result = eval(valueOne + operation + valueTwo);

  console.log(valueOne + " " + operation + " " + valueTwo + " = " + result);

  //
  // switch (operation) {
  //   case "+":
  //     result = valueOne + valueTwo;
  //     console.log(valueOne + " + " + valueTwo + " = " + result);
  //     break;
  //
  //   case "-":
  //     result = valueOne - valueTwo;
  //     console.log(valueOne + " - " + valueTwo + " = " + result);
  //     break;
  //
  //   case "*":
  //     result = valueOne * valueTwo;
  //     console.log(valueOne + " * " + valueTwo + " = " + result);
  //     break;
  //
  //   case "/":
  //     result = valueOne / valueTwo;
  //     console.log(valueOne + " / " + valueTwo + " = " + result);
  //     break;
  //
  //   default:
  //     console.log("Invalid operation!");
  //
  // }

} else {

}
