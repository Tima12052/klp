// const x = Number(prompt("Введіть перше число:"));
// const y = Number(prompt("Введіть друге число:"));

// alert(x + " * " + y + " = " + (x * y));


// const message = 'Скачать' + ' обои' + ' клещь' + ' рояль!!!';
// console.log(message);
// setTimeout(() => {
//     console.log();
// }, 4000);


// const name = 'Oamt';
// const age = 999;
// const mood = 'Javascript is awesome!';

// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;
// console.log(sameMessage);
//
//
// const num = 20
// const result = num > 19 || num < 21;
// console.log(result);
// console.log(!0);

 


/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */
// console.log(!!" ");
// let cost;
// const subscription = prompt('Введіть тип підписки (free, pro, company, bot):');
// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'company') {
//   cost = 500;
// } else if (subscription === 'bot') {
//   cost = 300;
// } else if (subscription === 'super ultra mega giga Turbo MLG sony arichson 1488') {
//   cost = 1;
// } else {
//   console.log('Invalid subscription type');
// }
// confirm("це буде коштувати:" + cost + "грн");
// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';

let balance = 1000;
let withdrawal = parseFloat(prompt("Введіть суму для зняття: ")) || 0;

alert(`Ви хочете зняти ${withdrawal} гривень. Перевіряємо доступні кошти...`);

if (withdrawal > 0 && withdrawal <= balance) {
    balance -= withdrawal;
    alert(`Операція успішна! Ви зняли ${withdrawal} гривень. Залишок на рахунку: ${balance} кредитів.`);
} else if (withdrawal > balance) {
    alert("Недостатньо коштів на рахунку!");
} else {
    alert("Некоректна сума зняття!");
}

alert("Дякуємо, що скористалися банкоматом!");


