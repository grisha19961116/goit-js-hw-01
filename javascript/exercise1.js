// Завдання 1
// Оголоси дві змінні, які зберігають назву та ціну товару: name і price
// Присвойте змінним наступні характеристики товару (відразу при оголошенні)
// назва: Генератор захисного поля
// ціна: 1000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 1000 кредитів'.
// Присвой товару нову ціну - 2000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 2000 кредитів'.
let name = 'laptop';
let price = 1000 ;
let generalInformationAboutProcess = `Обрано ${name} "Генератор захисного поля", ціна за штуку ${price} кредитів.`;
console.log(generalInformationAboutProcess);
name = 'keyaboard' ;
price = 2000;
generalInformationAboutProcess = `Обрано ${name} "Генератор захисного поля", ціна за штуку ${price} кредитів.`;
console.log(generalInformationAboutProcess);