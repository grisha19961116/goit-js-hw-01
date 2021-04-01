// Exercise 4
// On user balance is 23580 credits , values save in variable  'credits' (create and assign).
//User decide buy fix Droids which costs 3000 credits by think.Price for one Droid save in
//variables 'pricePerDroid' (create and assign).
// During visit user page using prompt, requirement do request about quantity Droids,
// which user want buy and save into variable.Write script which does:
// If in  prompt was pressed button Cancel than lead out in console message 'Was canceled by User!'.
// Otherwise count general price order and save into variable  'totalPrice'.
// Check is user able to pay for order? : if amount for pay more that quantity credits on balance
// will show in console message 'Doesn't enough money on your balance!'.
// In another case have to count hkw many credits left on balance and show in
//console  message 'You bought [number] Droids, on balance left [number] credits.'.?
const credits = 23580;
const pricePerDroid = 3000;
let message = "How many Do you want to buy 'Droids'?Write in thing";
const input = prompt(message);
let totalPrice;
if (input === null) {
  message = "user is canceled!";
} else {
  if (Number.isNaN(Number(input))) {
    message = "You put not a number!Please rewrite!";
  } else {
    totalPrice = Number(input) * pricePerDroid;
    if (credits < totalPrice) {
      message = "do not have enough many on your balance!";
    } else {
      message = `You buy ${input} droids. Cost per droid is ${pricePerDroid},
total prise is ${totalPrice}. You have ${
        credits - totalPrice
      } money after buy.`;
    }
  }
}
console.log(message);
alert(message);
