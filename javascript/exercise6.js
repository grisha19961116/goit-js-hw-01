// Exercise 6
// Write script which demanding of user input number into prompt for that moment when user doesn't tap 'Cancel'
// and each time adding input value to general amount .
// During download user page will do proposal  into prompt input a number.Input value will add to 'total'.
// Process input number will have duration for tah moment when user doesn't tap button Cancel в prompt.
// After that how user has been finished to input by pressed button Cancel, show alert with row 'General amount numbers equivalent [amount]'.
// Do check what user has input exactly a number and don't free characters set!
///Lead out alert with title  'Was written not a number , try again', value from prompt isn't necessary
// add to general amount, after that again do proposal input number into prompt .

let total = 0;
const message = "Put amount which you wish";
let conclusion;
let input;
do {
  input = prompt(message);
  if (input === null) {
    conclusion = "General amount which you have put is ";
    break;
  }
  input = Number(input);
  total += input;
  if (Number.isNaN(Number(input))) {
    conclusion = "You put not a number!Please rewrite!";
    total = "That!";
    break;
  }
} while (true);
console.log(`${conclusion} ${total}`);
alert(`${conclusion} ${total}`);
