// // Завдання 5
// // Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні сторінки в prompt. 
// Врахуй, користувач може ввести ім'я країни не тільки буквами нижнього регістра, а наприклад 'кИтАЙ'.

// // Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково використовуй switch.
//  Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна] кредитів'.

// // Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в alert повідомлення 'У вашій країні доставка недоступна'.

// Нижче наведено список країн і вартість доставки.

// Китай - 100 кредитів
// Чилі - 250 кредитів
// Австралія - 170 кредитів
// Індія - 80 кредитів
// Ямайка - 120 кредитів
let message = "Put please name country from which you want order.";
let  input = prompt(message);
let newInput = input;
let rent;
let price = `Delivery ${input} will be cost  ${rent} coins`;
if(newInput !== null){
    newInput = input.toLocaleLowerCase();
}
switch(newInput){
    case 'china':
        rent="100";
        price = `Delivery ${newInput} will be cost  ${rent} coins`;
        console.log(price);
        alert(price);
        break;
    case 'chili':
        rent="250";
        price = `Delivery ${newInput} will be cost  ${rent} coins`;
        console.log(price);
        alert(price);
        break;
    case 'australia':
        rent="170";
        price = `Delivery ${newInput} will be cost  ${rent} coins`;
        console.log(price);
        alert(price);
        break;
    case 'india':
        rent="80";
        price = `Delivery ${newInput} will be cost  ${rent} coins`;
        console.log(price);
        alert(price);
        break;
    case 'jamika':
        rent="120";
        price = `Delivery ${newInput} will be cost  ${rent} coins`;
        console.log(price);
        alert(price);
        break;
    default:if(newInput===null){
        console.log("User canceled window!")
    } else {
        message = 'In your country deliveri is not access';  
        console.log(message);
        alert(message);  
    }  
}

