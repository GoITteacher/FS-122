/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

//!======================================================

// const x = 25;
// const y = 30;

// function foo1() {
//   const t = 50;
// }

// function foo2() {
//   const t = 75;

//   if(){
//     console.log()
//   }

//   for(){

//   }
// }

// console.log(t);

//!======================================================
// const globalValue = 10;
// const a = 'Hello';
// console.log(globalValue); // 10

// function foo() {
//   const a = 20;
//   console.log(a); // 20
//   console.log(globalValue); // 10

//   for (let i = 0; i < 5; i += 1) {
//     console.log(a); // 20
//     console.log(globalValue); // 10

//     if (i === 2) {
//       const x = 25;
//       console.log(a); // 20
//       console.log(globalValue); // 10
//     }
//   }
// }

// debugger;

// foo();

// // ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i += 1) {
//   // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }
