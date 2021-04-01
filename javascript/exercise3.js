// Exercise 3
// Write script, which can imitate admin authorization in control panel.
// Is variable message in which will be input message about result.
// During download page in user will get request to confirm password with 'prompt'
// If  is  taped Cancel, will write in  message row 'Was denied by user!'
// In another case, if input password same like value constant 'ADMIN_PASSWORD', write in message row 'Welcome dear Administrator!'
// Otherwise if no one from previous conditions were not executed , write in message row 'Access was denied by wrong password!'
// After all passed condition lead out alert  message with value changes variable .
let message = "Put your password please";
const input = prompt(message);
const ADMIN_PASSWORD = "Helena";
if (input === null) {
  message = "User canceled!";
} else if (input === ADMIN_PASSWORD) {
  message = "Well come!";
} else {
  message = "You can not get access because password was wrong!";
}
alert(message);
console.log(message);
