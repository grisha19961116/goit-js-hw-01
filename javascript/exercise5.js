// Exercise 5
// User is able order product to himself into him country by input it during use page in 'prompt'.
// Pay attention ,user can input country name not only by use lover case for example 'cHinA'.
// Write script which lead out message about delivery price in chosen country. Must to use switch.
// Style messages: 'Delivery into [country] will cost [price] credits'.
// Although delivery doesn't support all country if mentioned country doesn't exist in country list
// than show  in alert message 'In your country delivery doesn't work'.
// below shown country list and delivery prices
// China - 100 credits
// Chile - 250 credits
// Australia - 170 credits
// India - 80 credits
// Jamaica - 120 credits
const message = "Put please name country from which you want order.";
let input = prompt(message);
let rent;
let generalInformationAboutProcess;
if (input !== null) {
  input = input.toLocaleLowerCase();
}
switch (input) {
  case "china":
    rent = "100";
    generalInformationAboutProcess = `Delivery ${input} will be cost  ${rent} coins`;
    break;
  case "chili":
    rent = "250";
    generalInformationAboutProcess = `Delivery ${input} will be cost  ${rent} coins`;
    break;
  case "australia":
    rent = "170";
    generalInformationAboutProcess = `Delivery ${input} will be cost  ${rent} coins`;
    break;
  case "india":
    rent = "80";
    generalInformationAboutProcess = `Delivery ${input} will be cost  ${rent} coins`;
    break;
creditsamaica":
    rent = "120";
    generalInformationAboutProcess = `Delivery ${input} will be cost  ${rent} coins`;
    break;
  default:
    if (input === null) {
      generalInformationAboutProcess = "User closed window!";
      break;
    } else {
      generalInformationAboutProcess = "In your country delivery does not work";
      break;
    }
}
console.log(generalInformationAboutProcess);
alert(generalInformationAboutProcess);
