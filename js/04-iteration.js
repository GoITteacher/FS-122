var x;
/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */
// const arr = [5000, 1000, 2200, 5500, 1110, 2500];

// let sum = 0;
// sum += arr[0];
// sum += arr[1];
// sum += arr[2];
// sum += arr[3];
// sum += arr[4];
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// for (let i = 0; i < arr.length; i += 2) {
//   arr[i] *= 2;
// }

// for (let i = 0; i < arr.length; i += 2) {
//   arr[i] *= 2;
// }

// console.log(arr);

//!======================================================

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//   console.log(friend);
//   friend.toUpperCase();
// }

//!======================================================

// const arr = [1, 2, 4, 5, 2, 3, 35, 56, 2, 4, 6, 45, 3, 42];

// function findIndexes(arr, userValue) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === userValue) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(findIndexes(arr, 2));

//!======================================================
/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

function getArea(values) {
  const numbers = values.split(' ');
  const height = +numbers[0];
  const width = +numbers[1];
  const area = height * width;
  return area;
}

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

function task2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}: ${arr[i]}`);
  }
}

task2(fruits);
console.log(x);

var x = 25;
