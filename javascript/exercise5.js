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
const message = "Put please name country from which you want order.";
let  put = prompt(message);
let newPut = put;
const nameForCheck ='китай';
let rent;
let price ='Доставка в '+put+ " буде коштувати "+rent +" кредитів";
if(newPut != null){
    newPut = put.toLocaleLowerCase();
}
switch(newPut){
    case 'китай':
        rent="100";
        price ='Доставка в '+put.toLocaleLowerCase()+ " буде коштувати "+rent +" кредитів";
        console.log(price)
        break;
    case 'чілі':
        rent="250";
        price ='Доставка в '+put.toLocaleLowerCase()+ " буде коштувати "+rent +" кредитів";
        console.log(price)
        break;
    case 'австралія':
        rent="170";
        price ='Доставка в '+put.toLocaleLowerCase()+ " буде коштувати "+rent +" кредитів";
        console.log(price)
        break;
    case 'індія':
        rent="80";
        price ='Доставка в '+put.toLocaleLowerCase()+ " буде коштувати "+rent +" кредитів";
        console.log(price)
        break;
    case 'ямайка':
        rent="120";
        price ='Доставка в '+put.toLocaleLowerCase()+ " буде коштувати "+rent +" кредитів";
        console.log(price)
        break;
    default:if(newPut===null){
        console.log("Користувач закрив вікно!")
    } else {
        alert('У вашій країні доставка недоступна');    
    }  
}
