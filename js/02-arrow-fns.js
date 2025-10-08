/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */
//!======================================================
// function myFunction(x) {
//   return x * 2;
// }

// const myFunction = x => x * 2;

// myFunction(10); // 20

// ()=>{
//   return ''
// }

// ()=>2*2

//!======================================================
// const arrowFn = (...items)=>{

// }

// Math.max()

//!======================================================
// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}
// const arrow = (x, y) => ({
//   name: x,
//   age: y,
// });

const fnA = () => ({
  a: 5,
});

const arrowFn = () => {
  return {
    a: 5,
  };
};
// console.log(fnA());

// const arrowFnA =

// console.log(arrowFnA());

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, (x, y) => x + y);

// calc(2, 3, function (x, y) {
//   return x + y;
// });

calc(10, 8, (x, y) => x - y);
// calc(10, 8, function (x, y) {
//   return x - y;
// });

// (() => {})();
