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

// const yabluko = { name12: '🍎', price: 50 }
// const venomgrad = { name13: '🍇', price: 70 }
// const limon = { name14: '🍋', price: 60 }
// const klubnika = { name15: '🍓', price: 110 }

// const cart = {
//     items: [],
//     getItems() {},
//     add(product) {},
//     remove(productName) {},
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
//   };
// cart.getItems = function () {
//     this.items.push(yabluko);
//     return this.items;
// }
// console.log(cart.getItems());
// const tractor = {
//   size: 'Big',
//   color: 'Blue',
//   motor: 'V12',
// }
// for (const key in tractor) {
//   console.log('value', tractor[key]);
// } 
// const tractor = {
//   size: 'Big',
//   color: 'Blue',
//   motor: 'V12',
// }
// const Keys = Object.keys(tractor);
// console.log(Keys);
// const Values = Object.values(tractor);
// console.log(Values);
// const Entries = Object.entries(tractor);
// console.log(Entries);
// function findFriendByName(friends, name) {
//   return friends.find(friend => friend.name === name) || null;
// }

// function getAllNames(friends) {
//   return friends.map(friend => friend.name);
// }

// function getOnlineFriends(friends) {
//   return friends.filter(friend => friend.online).map(friend => friend.name);
// }

// function getOfflineFriends(friends) {
//   return friends.filter(friend => !friend.online).map(friend => friend.name);
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// console.log(getAllNames(friends));

// console.log(getOnlineFriends(friends));

// console.log(getOfflineFriends(friends));
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];


// function findFriendByName(friends, name) {
//     for (const index in friends) {
//         if (friends[index].name === name) {
//             return friends[index];
//         }
//     }
//     return null;
// }

// function getAllNames(friends) {
//     const names = [];
//     for (const index in friends) {
//         names.push(friends[index].name);
//     }
//     return names;
// }

// function getOnlineFriends(friends) {
//     const onlineFriends = [];
//     for (const index in friends) {
//         if (friends[index].online) {
//             onlineFriends.push(friends[index].name);
//         }
//     }
//     return onlineFriends;
// }

// function getOfflineFriends(friends) {
//     const offlineFriends = [];
//     for (const index in friends) {
//         if (!friends[index].online) {
//             offlineFriends.push(friends[index].name);
//         }
//     }
//     return offlineFriends;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// console.log(getAllNames(friends));

// console.log(getOnlineFriends(friends));

// console.log(getOfflineFriends(friends)); 
// const test1 = [1, 2, 3, 4, 5];
// const test = [1, 2, 3, 4, 5];
// console.log(Math.min(...test, ...test1));
// const copytext = [...test];
// console.log(copytext);
// const a = {
//     x: 5,
//     y: 4,
// }

// const b = {
//     x: 11,
//     w: 22,
// }
// const c = Object.assign({}, a, b);
// console.log(c);
// const products = [
//     { name: 'Laptop', price: 1000, category: 'Electronics', stock: 5 },
//     { name: 'Phone', price: 500, category: 'Electronics', stock: 10 },
//     { name: 'Shirt', price: 50, category: 'Clothing', stock: 20 },
//     { name: 'Pants', price: 60, category: 'Clothing', stock: 15 },
//     { name: 'Headphones', price: 200, category: 'Electronics', stock: 8 },
//     { name: 'Shoes', price: 80, category: 'Clothing', stock: 12 },
// ];

// function getTotalValueByCategory(products, category) {
//     let totalValue = 0;
//     for (const index in products) {
//         if (products[index].category === category) {
//             totalValue += products[index].price * products[index].stock;
//         }
//     }
//     return totalValue;
// }

// console.log(getTotalValueByCategory(products, 'Electronics'));
// console.log(getTotalValueByCategory(products, 'Clothing'));
// const wwefwf = {
//     name1: 'roman',
//     robota: 'programist',
//     city: 'lviv',
//     family: 'big',
//     info() {
//         console.log('i love me')
//     },
//     items: [1, 2, 3, 4, 5],
//     education: {uni: 'lny', school: 'stryi',}
// }
// const { name1, robota, city, family, years = 20, items: [item1, item2, item3, item4, item5]} = wwefwf;
// console.log(name1, robota, city, family, years);
// console.log(wwefwf);




// const user = {
//   name1: 'John',
//   age: 30,
//   email: 'john@example.com'
// }
// const { name1, age, email } = user;
// console.log(name1, age, email);



// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//   }
// }
// const { make, model, year, features: [feature1, feature2, feature3], safety: { airbags, antilock_brakes, stability_control } } = car;
// console.log(make, model, year, feature1, feature2, feature3, airbags, antilock_brakes, stability_control);


// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }
// const { title, director: { name: directorName, nationality }, actors: [actor1, actor2], release_year, ratings: { imdb, rotten_tomatoes } } = movie;
// console.log(title, directorName, nationality, actor1, actor2, release_year, imdb, rotten_tomatoes);



// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ]
// }
// const { count, list: [{ title: book1Title, author: book1Author, year: book1Year }, { title: book2Title, author: book2Author, year: book2Year }, { title: book3Title, author: book3Author, year: book3Year }] } = books;
// console.log(count, book1Title, book1Author, book1Year, book2Title, book2Author, book2Year, book3Title, book3Author, book3Year);
// const text = [1, 2, 3, 4, 5];
// const [var1, var2,...rest] = text;
// console.log(`я чекаю до ${var1}, а потім до ${var2}, ${rest}`);
// function personInfo({ name, surname, age }) {
//   return `Мене звати ${name} ${surname} і мені ${age} років`;
// }

// const person = {
//   name: 'Nelli',
//   surname: 'Laroy',
//   age: 25
// };

// console.log(personInfo(person));
// function calculateAverageGrade({ grades }) {
//   let total = 0;
//   for (let i = 0; i < grades.length; i++) {
//     total += grades[i];
//   }
//   return total / grades.length;
// }

// const student = {
//   name: 'Bruce',
//   surname: 'Lee',
//   grades: [4, 5, 3]
// };

// console.log(calculateAverageGrade(student));

// const GDONSTEAM = [1, 2, 3, 4, 5];
// const double = GDONSTEAM.map(element => element * 2);
// console.log(double);
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playerNames = players.map(player => player.name);
// console.log(playerNames);
// const updatedPlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1
// }));
// console.log(updatedPlayers);
// const offlinePlayers = players.filter(player => !player.online);
// console.log('Offline Players:', offlinePlayers);

// const onlinePlayers = players.filter(player => player.online);
// console.log('Online Players:', onlinePlayers);

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.log('Hardcore Players:', hardcorePlayers);
// const sivmas = [1, 2, 3, 4, 5];
// let sum = sivmas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// let likes =  tweets.reduce((totalikes, tweests) => totalikes + tweests.likes, 0);
// let tagi = tweets.reduce((totaltegs, twity) => {totaltegs.push(...twity.tags); return totaltegs}, []);
// console.log(tagi);
// console.log(likes);


// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];
// let kkt = cart.reduce((totalkkt, kkt1) => totalkkt + kkt1.quantity, 0)
// // console.log(kkt);
// const numbers = [1, 2, 3, 4, 5];
// let sz = numbers.reduce((prostozminnayakutivivodish, tobidestrukturizatsiyanepotribna) => prostozminnayakutivivodish + tobidestrukturizatsiyanepotribna, 0)/ numbers.length

// console.log(sz)


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// let fruitCount = fruits.reduce((totalfruins, fruits) => {totalfruins[fruits] = (totalfruins[fruits] || 0 )+ 1; return totalfruins}, {});
// // console.log(fruitCount);
// const imena = ['Oleg', 'Vasyl', 'Oleg', 'Vasyl', 'Oleg', 'Vasyl'];
// const sorted = (a, b) => imena.b - imena.a;
// // const numbers = [4, 7, 1, 0, 5, 3, 6];
// console.log(imena.sort((a, b) => b.localeCompare(a)));
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// players.sort((a, b) => a.timePlayed - b.timePlayed);
// const playedtime = players.map(player => player.timePlayed);
// console.log(playedtime);

// const arr = [
//     { name1: 'John', age: 32 },
//     { name1: 'Jane', age: 26 },
//     { name1: 'Mike', age: 42 },
//     { name1: 'Emily', age: 29 }
// ];
// arr.sort((a, b) => a.name1.localeCompare(b.name1));
// const names = arr.map(item => item.name1);
// console.log(names);
// const products = [
//     { name: 'Product 1', price: 100, quantity: 5 },
//     { name: 'Product 2', price: 50, quantity: 10 },
//     { name: 'Product 3', price: 200, quantity: 2 },
//     { name: 'Product 4', price: 50, quantity: 5 }
// ];
// products.sort((a, b) => {
//     if (b.price !== a.price) {
//         return b.price - a.price;
//     }
//     return a.quantity - b.quantity;
// });
// console.log(products);
// const objectpronouns = {
//     username: 'John',
//     account: "google",
//     age: 30,
//     isOnline: true,
//     ipadkid() {
//         console.log(`I am ${this.age} and i am ipadkid`);
//     }
// }
// objectpronouns.ipadkid(); 
// class Human {
//     constructor(legs, arms, colorofeyes, fingers, colorofhair) {
//         this.legs = legs;
//         this.arms = arms;
//         this.colorofeyes = colorofeyes;
//         this.fingers = fingers;
//         this.colorofhair = colorofhair;
//     }
//     govority() {
//         console.log(`i have ${this.legs} legs`);

//     }
// }
// const romasik = new Human(2, 2, 'red', 65, 'blue');
// console.log(romasik); 
// romasik.govority();
// class Carton {
//     constructor({color, width, size, type}) {
//         this.color = color;
//         this.width = width;
//         this.size = size;
//         this.type = type;
//     }
// }
// const Cartonovyycolovik = new Carton({color: 'gray', width: 1, size: 100, type: 'normal'});
// console.log(Cartonovyycolovik);
// class Person {
//     constructor({firstname, lastname}) {
//         this.firstName = firstname;
//         this.lastName = lastname;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person({firstname: 'John', lastname: 'Doe'});
// console.log(person1.getFullName()); 
// class Rectangle {
//     constructor({width, height}) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
// const rectangle1 = new Rectangle({width: 10, height: 5});
// console.log(rectangle1.getArea());  
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
//     subtract(a, b) {
//         return a - b;
//     }
//     multiply(a, b) {
//         return a * b;
//     }
//     divide(a, b) {
//         return a / b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(10, 4));
// console.log(calculator.multiply(2, 6));
// console.log(calculator.divide(8, 2));
// console.log(calculator.divide(8, 0));
// let text = document.querySelector('#p-id');
// text.textContent = 'traktor soy gyd';
// text.style.backgroundColor = 'red';
// Отримати доступ до списку
// const navList = document.querySelector('.site-nav');
// navList.style.backgroundColor = 'yellow';
// const link = document.querySelector("a")
// link.classList.add('site-nav__link');
// const ldet = document.querySelector('a[href="https://"]');
// ldet.style.fontSize = '100px';
// let lirililarila = document.querySelectorAll('a[href^="https://"]');
// lirililarila.forEach(element => {
//     elment.style.backgroundColor = 'orange';
// });
// const h1 = document.querySelector('h1');
// h1.textContent = 'Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу. Замініть клас на заголовку. Перевірте чи містить посилання клас list';
// h1.className = 'title';
// h1.className = 'itle';
// h1.style.backgroundColor = 'blue';
// const Link = document.querySelector('a');
// console.log(Link.classList.contains('list'));
// const num1 = document.querySelector('#num1');
// const num2 = document.querySelector('#num2');

// const result = document.querySelector('#result');

// function calculate(operator) {
//     const a = parseFloat(num1.value);
//     const b = parseFloat(num2.value);
//     let res;
//     switch (operator) {
//         case '+':
//             res = a + b;
//             break;
//         case '-':
//             res = a - b;
//             break;
//         case '*':
//             res = a * b;
//             break;
//         case '/':
//             res = a / b;
//             break;
//         default:
//             res = '';
//     }
//     result.textContent = res;
// }
// const text = document.createElement('h1');
// text.textContent = "textcontent";
// document.body.append(text);
// console.log(text);
// const item = document.createElement('li');
// const list = document.querySelector('.list');
// item.textContent = 'New Item';
// list.append(item);
// list.prepend(item);
// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const colorPickerContainer = document.querySelector('.js-color-picker');

// for (const option of colorPickerOptions) {
//     const btn = document.createElement('button');
//     btn.type = 'button';
//     btn.textContent = option.label;
//     btn.style.backgroundColor = option.color;
//     btn.style.color = '#fff';
//     btn.style.margin = '4px';
//     colorPickerContainer.appendChild(btn);
// }
// const salam = document.querySelector('.salam');
// salam.innerHTML = '<h1> hi</h1>';
// salam.insertAdjacentHTML('beforeend', '<h1> gghhghg</h1>');
// Створення заголовка
// const header = document.createElement('h1');
// header.textContent = 'Привіт, це перший мій створений елемент!';
// header.classList.add('title');
// document.body.appendChild(header);

// const newul = document.createElement('ul')
// const newli = document.createElement('li')
// const newa = document.createElement('a')
// newli.classList.add('site-nav__item')
// newa.classList.add("site-nav__link")
// newa.textContent = 'Про нас'
// document.body.appendChild(newli)
// document.body.appendChild(newa)
// const form = document.querySelector('.add-form');
// const input = document.querySelector('.li-text');
// const ul = document.querySelector('.my-list');

// form.onsubmit = function(e) {
//     e.preventDefault();
//     if (input.value.trim() !== '') {
//         const li = document.createElement('li');
//         li.textContent = input.value;
//         ul.appendChild(li);
//         input.value = '';
//     }
// };

// 1
// const jddk = document.createElement('button');
// jddk.textContent = 'RGB Light';
// jddk.classList.add('buton');
// document.body.appendChild(jddk);
// jddk.addEventListener('click', () => {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     jddk.style.backgroundColor = randomColor;
// });
// 2
// const jsab2 = document.createElement('h1');
// const jsab = document.createElement('button');
// jsab2.textContent = 'tEXT';
// document.body.appendChild(jsab2);
// jsab.textContent = 'Додати стилі';
// document.body.appendChild(jsab);
// jsab.addEventListener('click', () => {
//     jsab2.classList.add('title');
// });


// const tgre = document.querySelector('#int1');
// const spee = document.querySelector('#btn1');
// spee.addEventListener('submit', () => {
//     const esfd = document.createElement('p');
//     esfd.textContent = `${tgre.value}`;
//     body.appendChild(esfd);
// });
// const butt = document.querySelector('#btn1');
// const handlClick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(this)
//     console.log(event.target);
// };
// butt.addEventListener('click', handlClick);

// const init = document.querySelector("#ininit");

// function inputfunct(event) {
//     let result = event.target.value;
//     console.log(result)
// }
// const trotinpu = _.throttle(inputfunct, 400);
// init.addEventListener("input", trotinpu);\
// const inputEl = document.querySelector('#input');

// const debouncedInput = _.debounce(function(event) {
//     console.log('Введення завершено:', event.target.value);
// }, 500);

// inputEl.addEventListener('input', debouncedInput);

// const target = document.querySelector('#target');
// const observer = new IntersectionObserver((entries) => entries.forEach(element => {
//     if (element.isIntersecting) {
//         console.log('Елемент в полі зору');
//         element.target.classList.add('inview');
//     } else {
//         console.log('Елемент поза полем зору');
//         element.target.classList.remove('inview');
//     }
// }));
// observer.observe(target);

const div = document.getElementById('div-img');

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelectorAll('.imgg');
    const observer = new IntersectionObserver((entries, observer) => entries.forEach(element => {
        if (element.isIntersecting && element.intersectionRatio >= 0.5) {
            let targ = element.target;
            targ.src = targ.dataset.src;
            targ.classList.add('visible');
            observer.unobserve(targ);
        }
    }))
}, { threshold: 0.5 });
img.forEach(img => {
    observer.observe(img);
})

