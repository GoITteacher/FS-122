/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// function myCallback(value, index, array) {
//   console.log('ПОФАРБУВАТИ');
// }

// numbers.forEach(myCallback);

/* 
myCallback(5, 0)
myCallback(10, 1)
myCallback(15, 2)
myCallback(20, 3)
myCallback(25, 4)
*/

//!======================================================

// numbers.forEach(() => {});
// numbers.map(() => {});
// numbers.flatMap(() => {});
// numbers.filter(() => {});
// numbers.find(() => {});
// numbers.some(() => {});
// numbers.every(() => {});
// numbers.findIndex(() => {});
// numbers.findLastIndex(() => {});

// users.forEach((user, idx) => {});
// cars.forEach((car, idx) => {});
// numbers.forEach((number, idx) => {});
// cars.forEach((el, idx) => {});

//!======================================================
// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// numbers.forEach(el => {
//   total += el;
// });

// console.log(total);

// numbers.forEach((el, i) => {
//   console.log(el);
// });

// numbers.forEach((el, i) => {
//   console.log(`${i}) ${el}`);
// });

// numbers.forEach((el, i) => {
//   console.log(el * i);
// });

//!======================================================

// const arr = [
//   { name: 'Vasya', age: 25 },
//   { name: 'Petya', age: 40 },
//   { name: 'Anton', age: 18 },
//   { name: 'Roman', age: 52 },
// ];

// arr.forEach(user => {
//   console.log(`My name is ${user.name}. I'm ${user.age}`);
// });

//!======================================================

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function logItems(items) {
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }

  items.forEach((el, i) => {
    console.log(`${i + 1} - ${el}`);
  });
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  nameList.forEach((el, i) => {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  });
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function calculateAverage(...args) {
//   let total = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   args.forEach((el, i) => {
//     total += el;
//   });

//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
