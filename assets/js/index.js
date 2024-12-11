//Завдання на змінні:
//#1
const a = 5;
const b = 5;
console.log("a * b = " + a * b);
//#2
const c = 16;
const d = 4;
console.log("c / d = " + c / d);
//#3
const e = 16;
const f = 4;
console.log("e + f = " + (e + f));
//#4
const numberValue = 11;
const booleanValue = true;
const stringValue = "java script";
const stringNumberValue = "100";
console.log(
  numberValue,
  "\n",
  booleanValue,
  "\n",
  stringValue,
  "\n",
  stringNumberValue
);
//#5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;
console.log(num);
//Завдання на введення/виведення
//#1
let number = Number(prompt("Enter number that I`ll square"));
console.log("Your squared number:" + Math.pow(number, 2));
//#2
let firstNumber = Number(
  prompt("Enter first number for the averege calculation")
);
let secondNumber = Number(
  prompt("Enter second number for the averege calculation")
);
console.log("Arithmetic mean:" + (firstNumber + secondNumber) / 2);
//#3
let countOfMinutes = Number(
  prompt("Enter count of minutes that I`ll convert to seconds")
);
console.log(countOfMinutes + " minutes in seconds is:" + countOfMinutes * 60);
//#4
const greeting = "Hello";
let userName = prompt("What is your name?");
console.log(greeting + "," + userName + "!");
