// Завдання 2
// Напиши скрипт перевірки кількості товарів на складі. Є змінні total (кількість товарів на складі) і ordered (одиниць товару в замовленні).

// Порівняй ці значення і за результатами виведи:

// Якщо в замовленні вказано число, що перевищує кількість товарів на складі, то виведи повідомлення "На складі недостатньо товарів!".
// В іншому випадку виводь повідомлення "Замовлення оформлено, з вами зв'яжеться менеджер".
// Перевір працездатність коду з різними значеннями змінної ordered, наприклад 20, 80 і 130.

// const total = 100;
// const ordered = 50;
let total = 100;
let ordered = 100;
const atention ="We dont have enough products on storehouse!";
const accepted = "Oreder is accepted ,our maneger going to call you!";
if(ordered > total) {
    console.log(atention)
} else{
    console.log(accepted)
}

