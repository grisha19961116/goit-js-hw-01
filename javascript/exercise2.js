// Exercise 2
// Write check script for quantity products on storage .Is variables total (amount products on warehouse)
// and ordered (units in order).
// Compare those values and by result lead out :
// If in order is number which is more than limit on storage than lead out alert "In warehouse is not enough quantity !".
// In another case show message "Order has completed manager is going to call you!".
// Check how this code works with different 'ordered' value , for example 20, 80 and 130.
const total = 100;
const ordered = 90;
let message;
if (ordered > total) {
  message = "We don't have enough products on storehouse!";
} else {
  message = "Order is accepted ,our manager is going to call you!";
}
console.log(message);
