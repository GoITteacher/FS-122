/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function foo(x, y) {
//   const sum = x + y;
//   return Promise.resolve(sum);
// }
//!======================================================
// function createPromise(value, isPositive, delay) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isPositive) {
//         res(value);
//       } else {
//         rej(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise('Promise1', true, 5000);
// const p2 = createPromise('Promise2', false, 2000);
// const p3 = createPromise('Promise3', true, 1000);
// const p4 = createPromise('Promise4', false, 3000);
// const p5 = createPromise('Promise5', true, 4000);

// function onFulfilled(res) {
//   console.log('🤑', res);
// }

// function onRejected(err) {
//   console.log('👿', err);
// }

// p1.then(onFulfilled, onRejected);
// p2.then(onFulfilled, onRejected);
// p3.then(onFulfilled, onRejected);
// p4.then(onFulfilled, onRejected);
// p5.then(onFulfilled, onRejected);
//!======================================================

function createPromise(value, isPositive, delay) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (isPositive) {
        res(value);
      } else {
        rej(value);
      }
    }, delay);
  });
  return promise;
}

const p1 = createPromise('Promise1', true, 5000);
const p2 = createPromise('Promise2', true, 2000);
const p3 = createPromise('Promise3', false, 1000);
const p4 = createPromise('Promise4', true, 3000);
const p5 = createPromise('Promise5', true, 4000);

const promises = [p1, p2, p3, p4, p5];

// Promise.all(promises)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Promise.race(promises)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Promise.allSettled(promises).then(res => {
//   console.log(res);
// });
