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

// let balance = 1000;
// let withdrawal = parseFloat(prompt("Введіть суму для зняття: ")) || 0;

// alert(`Ви хочете зняти ${withdrawal} гривень. Перевіряємо доступні кошти...`);

// if (withdrawal > 0 && withdrawal <= balance) {
//     balance -= withdrawal;
//     alert(`Операція успішна! Ви зняли ${withdrawal} гривень. Залишок на рахунку: ${balance} кредитів.`);
// } else if (withdrawal > balance) {
//     alert("Недостатньо коштів на рахунку!");
// } else {
//     alert("Некоректна сума зняття!");
// }

// alert("Дякуємо, що скористалися банкоматом!");


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

// switch (subscription) {
//     case 'free':
//         cost = 0;
//         break;

//     case 'pro':
//         cost = 100;
//         break;

//     case 'premium':
//         cost = 500;
//         break;

//     case 'super ultra mega giga Turbo MLG sony arichson':
//         cost = 500;
//         break;

//     default:
//         console.log('Invalid subscription type');
// }
// confirm("це буде коштувати:" + cost + "грн");
// if(browser == 'Edge') {
//     p.textContent = "You've got the Edge!";
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     p.textContent = 'Ми підтримуємо i ці браузери' ;
//   } else {
//     p.textContent =  'Маємо надію, що ця сторінка виглядає добре!' ;
//   }

// const browser = prompt('Введіть браузер (Edge, Chrome, Firefox, Safari, Opera):');
// switch (browser) {
//     case 'Edge':
//         textContent = "You've got the Edge!";
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         textContent = 'Ми підтримуємо i ці браузери' ;
//         break;

//     default:
//         textContent =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }
// console.log(textContent);

// if (a === 0) {
//     textContent = 0;
//  }
//  if (a === 1) {
//    textContent = 1;
//  }

//  const a = prompt` Введіть число від 0 до 3`;

//  switch (a) {
//   case "0":
//     console.log("0");
//     break;
//   case "1":
//     console.log("1");
//     break;
//   case "2":
//   case "3":
//     console.log("2,3");
//     break;
//   default:
//     console.log("dealfut");
// }

// const number = parseInt(prompt('Введіть число від 55 до 99:'));
// switch (true) {
//     case number>=55 && number<=99:
//         console.log("Число потрапляє в діапазон");
//         break;
//     default:
//         console.log("Число не потрапляє в діапазон");
// }

// const imya = prompt('Введіть ім\'я: ');
// const prisvishe = prompt('Введіть прізвище: ');
// const www = imya.length + prisvishe.length;
// switch (true) {
//     case imya.length > 4 && prisvishe.length > 5:
//         console.log(www);
//         break;
//     default:
//         console.log("УПС");
// }

// let a = 0;
// while (a < 10) {
//     console.log(a);
//     a += 1;
// }
// let pass = "";
// do {
//   pass = prompt("Введіть пароль: ");
// } while (pass.length < 5);
// console.log("Ви ввели пароль: ", pass);

// let grades = [3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// let total = 0;
// while (i < grades.length) {
//     total += grades[i];
//     i ++;
// }
//     rest = total / grades.length;
//     console.log(total, rest);

//     if (rest < 7) {
//         console.log("роботу перервано");        
//     }
// let total
// const max = 10;
// for (let i = 0; i <= max; i ++) {
//     console.log(i);
// }
// let number;
// do {
//     number = parseInt(prompt("send a number more than 100"), 10);
// } while (number <= 100 && number !== null);
// console.log("You entered:", number);
// const employees = 5;
// let totalSalary = 0;

// for (let i = 0; i < employees; i++) {
//     const salary = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
//     console.log(`Employee ${i + 1} salary: ${salary}`);
//     totalSalary += salary;
// }

// console.log(`Total salary: ${totalSalary}`);

// const fruits = ['mango','banana','orange','cucumber']
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[3]);
// console.log(fruits[2]);
// fruits[2] = 'kivi';
// console.log(fruits[2]);
// console.log(fruits);
// console.log(fruits.length);
// fruits.length = 2;
// console.log(fruits);
// fruits.length = 4;
// console.log(fruits);

// const Arr1 = [1,5,'4','hello'];
// const Arr2 = [true,2,{},['a'],222];
// console.log(Arr1[2]);
// console.log(Arr2[2]);
// console.log(Arr1[2]+Arr2[2]);


// const massiv = ['A','B','C','D'];
// console.log(massiv[0]);
// massiv[3] = 'F';
// console.log(massiv[3]);
// console.log(massiv);

// const cities = ['Київ', 'Львів', 'Одеса', 'Харків'];
// console.log(cities.length);
// const masiv = [1,2,'3','4'];
// for (const element of masiv) {
//     console.log(element);    
// }
// const masiv = [155,233,'java','script'];
// for (const element of masiv) {
//      console.log(element);    
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     }
// }
// console.log('Total:', total);

// let date = '2025/03/30';
// let parts = date.split('/');
// let formatparts = [parts[2], parts[1], parts[0]];
// console.log(formatparts.join('-'));

// const numbers = [1, 2, 3, 4, 5];
// const index = numbers.indexOf(3);
// console.log(index);

// const strings = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// const joinedString = strings.join(', ');
// console.log(joinedString);

// const mas = [];
// console.log(mas.push('1'));
// console.log(mas.push('2'));
// console.log(mas.push('3'));
// console.log(mas);
// console.log(mas.pop());
// console.log(mas);
// console.log(mas.unshift('4'));
// console.log(mas);
// console.log(mas.shift());
// console.log(mas);

// const numberss = [1, 2, 3, 4, 5];
// console.log(numberss.push(6));
// console.log(numberss);

// const stringss = ['apple', 'banana', 'orange'];
// console.log(stringss.pop());
// console.log(stringss);

// const siv = ['red', 'green', 'blue', 'yellow'];
// console.log(siv.slice[1]);

// let fruits = ["apple", "banana", "cherry", "mango", "pineapple"];
// const slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits); 
// const vis = [1,2,3,4,5];
// console.log(vis.splice(1,2));

// const svist = [1,2,3,4,5];
// svist.splice(4, 0, 1, 2, 3);
// console.log(svist);

// const wedew = [1,2,3,4,5];
// wedew.splice(1,2,3,4);
// console.log(wedew);

// const sss = [1,2,3,4,5,6,7,8,9,10];
// const www = sss.slice(0, 5);
// console.log(sss);
// console.log(www);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// for (let element of array1) {
//     total += element;
// }
// for (let element of array2) {
//     total += element;
// }
// console.log(total);
// const message = 'Welcome to Ukraine!'
// const messageArray = message.split('');
// console.log(messageArray);
// console.log(message.indexOf('l'));
// console.log(messageArray.join(''));
// const sdfs = function (a, b) {
//     return a + b;
// }
// console.log(sdfs(5, 7));
// const stes = function (a = 2, b = 2) {
//     return a + b;
// }
// console.log(stes());

// const logsd = function (masf) {
//     console.log(masf.length);
//     let sum = 0;
//     for (const num of masf) {
//         sum += num;
//     }
//     console.log(sum);
//     return sum/masf.length;
// }
// logsd([1,2,3,4,5]);
// const isEven = function (number) {
//     return number % 2 === 0;
// };

// console.log(isEven(4)); // true
// console.log(isEven(3)); // false
// document.addEventListener('click', (event) => {
//     if (event.button === 0) { // 0 is the code for the left mouse button
//         console.log('click');
//     }
// });

// function findMaxNumber(arr) {
//     let max = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]; 
//         }
//     }
//     return max; 
// }
// console.log(findMaxNumber([1, 3, 2, 5, 4])); 
// const hello2 = function (name) {
//     return `Привіт, ${name}`;
// }
// console.log(hello2('Василь'));
// console.log(hello2('Олег'));
// console.log(hello2('Валерій'));
// console.log(hello2('Аліна'));

// const mul = function (n, m) {
// let product = n * m;
// let sum = n + m;
// let difference = n - m;
// return ('product: ' + product + ', sum: ' + sum + ', difference: ' + difference);
// }
// console.log(mul(5, 3)); // product: 15, sum: 8, difference: 2
// function foo(message) {
//     console.log(message);
// }
// function namei(callback) {
//     const text = 'Hello world!';
//     callback(text);
// }
// namei(foo); 

// const arr = [1, 2, 3, 4, 5];


// function sumArray(arr, callback) {
//    // пиши код тут
// }


// sumArray(arr, cb);
// function sumArray(arr, callback) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     callback(sum);
// }

// function cb(result) {
//     console.log('з вас', result, 'мільйонів грн');
// }

// sumArray(arr, cb);
// const filtr = function (arr, callback) {
//     const filt = []
//     for (const element of arr) {
//         const passed = callback(element)
//         if (passed) {
//             filt.push(element)
//         }
//     }
//     return filt
// }
// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];
//   const freshFruits = filtr(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits);

// const add1 = (a, b)=>a+b;
// console.log(add1(5, 3));

// const hello2 = (imya) => `Привіт, ${imya}`;
// console.log(hello2('Василь'));

// const myAverageScore = (scores) => {
//     let total = 0;
//     for (const score of scores) {
//         total += score;
//     }
//     const average = total / scores.length;
//     let grade;
//     switch (true) {
//         case average >= 91:
//             grade = 'A';
//             break;
//         case average >= 81:
//             grade = 'B';
//             break;
//         case average >= 71:
//             grade = 'C';
//             break;
//         default:
//             grade = 'D';
//     }
//     console.log(average);
//     return `My average score: ${grade}`;
// };


// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));
// const tractor = {
//     name1: "aytomobiler",
//     coleso: "6",
//     potuchnist: "noStrong",
//     copatu(){
//         console.log('ух ух');
//     }
// }

// console.log(tractor["name1"], tractor["coleso"]);
// tractor.color = "pinkPicmi";
// console.log(tractor.color);
// delete tractor.coleso;
// tractor.copatu()
// const person = {
//     name2: "John",
//     age: "30",
//     gender: "man",
//     meth() {
//         console.log(this.name2,this.age,this.gender)
//     }
// };
// person.meth()
// const book = {
//     title: "JavaScript for Beginners",
//     author: "Jim Smith",
//     year: 2077,
//     genre: "Programming",
//     mdete(newtitle, newauthor, newyear, newgenre) {
//         this.title = newtitle;
//         this.author = newauthor;
//         this.year = newyear;
//         this.genre = newgenre;
//     }
// }
// book.mdete("novanazva", "noviyautor", 2024, "noviyganr")
// console.log(book)

// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "black",
//     dspi() {
//         console.log("Бренд " + car.brand + ", Модель " + car.model + ", Рік " + car.year + ", Колір " + car.color);
//     }
// };
// car.dspi()

const yabluko = { name12: '🍎', price: 50 }
const venomgrad = { name13: '🍇', price: 70 }
const limon = { name14: '🍋', price: 60 }
const klubnika = { name15: '🍓', price: 110 }

const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };
cart.getItems = function () {
    this.items.push(yabluko);
    return this.items;
}
console.log(cart.getItems());
