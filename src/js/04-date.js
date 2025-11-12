/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date1 = new Date();
// const date1 = new Date('2025');
// const date1 = new Date('2025 03');
// const date1 = new Date('2025/01/03 12:01');
// const date1 = new Date('2025.01.01 23:06');
// const date1 = new Date('2025-01-02');
// const date1 = new Date('01 01 2025');
// console.log(date1);

//!======================================================

// function getUserAge() {
//   const birthday = prompt('Enter your year');

//   const date1 = new Date(birthday);
//   const date2 = new Date();

//   const year1 = date1.getFullYear(); // 1975
//   const year2 = date2.getFullYear(); // 2025

//   console.log(year2 - year1);
// }
// getUserAge();

//!======================================================

// const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// date.setFullYear(2030);

// console.log(date.toISOString());

//!======================================================

// const date = new Date('03/10/2025 15:25');

// date.setFullYear(2001);
// date.setDate(date.getDate() + 5);
// date.setUTCDate();
// date.getDate();
// date.getUTCDate();
// console.log(date);

//!======================================================

// const date = new Date('01/01/2025 00:01');
// console.log(date.getFullYear(), date.getUTCFullYear());
// console.log(date.getMonth(), date.getUTCMonth());
// console.log(date.getHours(), date.getUTCHours());

// const date = new Date('11.09.2025');
// console.log(date.getDay());

//!======================================================

// const date1 = new Date('12.01.2001 12:01:10');
// const date2 = new Date('12.01.2001 12:01:11');

// console.log((date2 - date1) / 1000);

//!======================================================

// const initTime = new Date();

// setInterval(() => {
//   const currentTime = new Date();

//   const diff = currentTime - initTime;
//   console.log(diff);
// }, 1000);
