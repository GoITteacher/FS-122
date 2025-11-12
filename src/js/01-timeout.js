/*
 * Метод window.setTimeout(callback, delay, args)
 */

// setTimeout(() => {
//   console.log('Hello');
// }, 2000);

// console.log(1);
// const x = 10;
// const y = 20;
// console.log(x + y);

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

const timeoutId = setTimeout(() => {
  alert(
    'Ваші данні було викрадено!!! Надішліть нам ваш пароль від пошти шоб ми вам допомгли.',
  );
}, 2000);

clearTimeout(timeoutId);

/**
 * Можливість передати параметри для колбеку
 */
//!======================================================
// function foo() {
//   const x = 10;

//   setTimeout(() => {
//     console.log(x);
//   }, 2000);
// }

// foo();
//!======================================================
// function callback(x) {
//   console.log(x);
// }

// function foo() {
//   const value = 10;
//   setTimeout(callback, 2000, value);
// }

// foo();
//!======================================================

// function callback(x) {
//   console.log(x);
// }

// function foo() {
//   const value = 10;
//   setTimeout(() => {
//     callback(value);
//   }, 2000);
// }

// foo();
//!======================================================

// console.log(1);
// console.log(2);

// setTimeout(function foo1() {
//   console.log('FOO1');
// }, 0);

// console.log(3);
// console.log(4);

// setTimeout(function foo2() {
//   console.log('FOO2');
// }, 0);

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }
