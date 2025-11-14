/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

//!======================================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 5000);
// });

// setInterval(() => {
//   console.log(promise);
// }, 1000);
//!======================================================

// const promise = new Promise((res, rej) => {
//   const rand = Math.round(Math.random() * 5000) + 2000;
//   console.log(`Почекайте ${rand} хвилин`);

//   setTimeout(res, rand);
// });
//!======================================================
// function onFulFilled() {
//   console.log('Дякую');
//   console.log('Ням ням ням, яка смачна піца');
// }
// function onRejected() {
//   console.log('Поверніть гроші');
// }
// promise.then(onFulFilled, onRejected);
//!======================================================

// promise.then(
//   () => {
//     console.log('Ням Ням');
//   },
//   () => {
//     console.log('Error');
//   },
// );

// promise
//   .then(() => {
//     console.log('Ням Ням');
//   })
//   .catch(() => {
//     console.log('Error');
//   });

//!======================================================
// const promise = new Promise((res, rej) => {
//   const rand = Math.round(Math.random() * 3000) + 2000;
//   console.log(rand);

//   setTimeout(() => {
//     if (rand % 2 === 0) {
//       res(awdawd);
//     } else {
//       rej({ error: 'Sorry' });
//     }
//   }, rand);
// });

// promise
//   .then(x => {
//     console.log(x);
//     console.log('дякую');
//   })
//   .catch(y => {
//     console.log(y);
//     console.log('ERROR');
//   });

//!======================================================
// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((res, rej) => {
//   const rand = Math.round(Math.random() * 3000) + 2000;
//   console.log(rand);

//   setTimeout(() => {
//     if (rand % 2 === 0) {
//       res('Helllo');
//     } else {
//       rej({ error: 'Sorry' });
//     }
//   }, rand);
// });

//!======================================================

// const x = promise.then(() => {
//   return 10;
// });

// console.log(x);
