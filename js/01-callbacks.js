/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// function foo(value) {
//   console.log(value);

//   value();
// }

// const userData = function () {
//   console.log('Call Value');
// };

// userData();

// foo(userData);

//!======================================================

// function myDay(food, instruction) {
//   console.log('Прокинутись');
//   console.log(`Поснідати ${food}`);
//   console.log('Піти до школи');
//   console.log('Повернутись зі школи');
//   instruction();
//   console.log('Зробити уроки');
//   console.log('Відпочинок');
//   console.log('Спати');
// }

// function goToMusicSchool() {
//   console.log('Піти до муз школи');
//   console.log('Повернутись з муз школи');
// }
// function goToDanceSchool() {
//   console.log('Піти до школи танців');
//   console.log('Повернутись з школи танців');
// }

// function goToGrandma() {
//   console.log('Піти до школи танців');
//   console.log('Повернутись з школи танців');
// }

// function skip() {}

// myDay('борщ', goToMusicSchool);
// myDay('борщ', goToDanceSchool);
// myDay('борщ', skip);
// myDay('борщ', goToMusicSchool);
// myDay('борщ', goToDanceSchool);
// myDay('борщ', goToGrandma);

//!======================================================
/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const res = callback(a, b);
//   console.log(res);
// }

// function sum(x1, x2) {
//   return x1 + x2;
// }
// function sub(x1, x2) {
//   return x1 - x2;
// }
// function mult(x1, x2) {
//   return x1 * x2;
// }
// function div(x1, x2) {
//   return x1 / x2;
// }

// calc(2, 3, sum);
// calc(10, 8, mult);
//!======================================================
/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  const res = [];

  for (const el of array) {
    const value = callback(el);
    res.push(value);

    // res.push(callback(el))
  }

  return res;
}

// each([10,20,30], function (){});

// each(["hello","world","test"], function (el) {
//   return el.toUpperCase();
// });

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

//!======================================================

// function test(value) {
//   console.log(value * value);
// }

// test(25);

//!======================================================
// const value = 150;

// function test(value, callback) {
//   // value = x = 25;
//   // callback = y = function;
//   callback(value);
// }

// test(25, function (value) {
//   // value = 25
//   console.log(value * 10);
// });

// test(10, function (value) {
//   console.log(value * 10);
// });
