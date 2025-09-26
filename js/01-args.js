/**
 * Псевдомасив arguments и Array.from
 */
//!======================================================
// function foo(x1, x2, x3) {
//   for (const item of arguments) {
//   }
//   arguments[2]
// arguments.length
// }

// foo(10, 20, 'Hello', true);

//!======================================================

// function foo(arguments) {
//     const args = Array.from(arguments);
//   const args = Array.from(arguments);
//   console.log(args.includes(25));
// }

// foo([10, 2, 60, 10, 12]);
// foo(10, 2, 60, 10, 12, 25);

//!======================================================

// const max = Math.max(10, 10, 24, 60);
// const min = Math.min(10, 24, 60, 6, 21, 3, 7, 89, 2);

// const arr = [];
// arr.push(1, 6, 1, 2, 6, 7, 2);
// console.log(arr);

//!======================================================

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

function task1() {
  // arguments = []
  const args = Array.from(arguments); // [25,22,12]

  let sum = 0;

  for (const item of args) {
    sum += item;
  }

  console.log(sum);

  return sum;
}

// function task1(arr) {
//   let sum = 0;

//   for (const item of args) {
//     sum += item;
//   }

//   console.log(sum);

//   return sum;
// // }
// task1(25, 22, 12); //arguments = [25 22 12]

// task1(11);
// task1(); // arguments = [];
// task1(1, 4, 6, 2, 4, 6);

//!======================================================
/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//   const args = Array.from(arguments);
//   let sum = 0;
//   for (const item of args) {
//     sum += item;
//   }
//   return sum / args.length;
// }
