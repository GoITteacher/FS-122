/**
 * Ланцюжки методів
 */
const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(el => el > 2);
const multByThree = greaterThenTwo.map(el => el * 3);
const sorted = multByThree.toSorted((a, b) => a - b);

// const arr = [1, 3, 5, 7, 23, 1];
// const copy = arr.toSorted((a, b) => a - b);

// console.log(arr);
// console.log(copy);

// const sortedbyChaining = numbers
//   .filter(el => el > 2)
//   .sort((a, b) => a - b)
//   .map(el => el * 3);

// console.log(sortedbyChaining);

//!======================================================

// Повернути масив чисел де кожен елемент буде більшим за 10, щоб кожен елемент був сумою попереднього і поточного

// const arr = [1, 3, 56, 2, 233, 42, 5, 456, 34, 234, 1];
// [11, 72,25,73,15,71];
// [11, 83, 97, 98, 88, 86]
// [11, 83, 97, 98, 88, 86]

// const res = arr
// .filter(el => el > 10)
// .map((el, idx, array) => {
//   return el + array[idx-1]
// });

//!======================================================
// const arr = [
//   {
//     date: '22.01.2025',
//     game: 'NBA',
//     time: 2,
//   },
//   {
//     date: '22.01.2025',
//     game: 'NBA',
//     time: 4,
//   },
//   {
//     date: '22.01.2025',
//     game: 'Dota',
//     time: 1,
//   },
//   {
//     date: '22.01.2025',
//     game: 'NBA',
//     time: 3,
//   },
//   {
//     date: '22.01.2025',
//     game: 'Dota',
//     time: 24,
//   },
//   {
//     date: '22.01.2025',
//     game: 'CS',
//     time: 1,
//   },
//   {
//     date: '22.01.2025',
//     game: 'Dota',
//     time: 5,
//   },
//   {
//     date: '22.01.2025',
//     game: 'NBA',
//     time: 8,
//   },
//   {
//     date: '22.01.2025',
//     game: 'CS',
//     time: 25,
//   },
//   {
//     date: '22.01.2025',
//     game: 'Dota',
//     time: 18,
//   },
//   {
//     date: '22.01.2025',
//     game: 'NBA',
//     time: 2,
//   },
//   {
//     date: '22.01.2025',
//     game: 'CS',
//     time: 20,
//   },
//   {
//     date: '22.01.2025',
//     game: 'NBA',
//     time: 2,
//   },
// ];

// const csTotalGames = arr
//   .filter(el => el.game === 'CS')
//   .map((el, idx, array) => {
//     let total = 0;
//     for (let i = 0; i <= idx; i++) {
//       total += array[i].time;
//     }
//     el.total = total;
//     return el;
//   });

// console.table(csTotalGames);

//!======================================================

/**
 * -------------------------------------
 */
const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */
const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */
const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(allCars));
