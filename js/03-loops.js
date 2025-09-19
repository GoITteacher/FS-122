/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// i--; i -=1;
// i++; i+=1;
// console.log("Before");

// for (let i = 1; i < 10; i += 5) {
//   console.log(`7 * ${i} = ${7 * i}`);
// }

// for (let i = 10; i >= 0; i -= 1) {
//   console.log(i);
// }

// console.log("After");

//!======================================================
// function foo() {
//   const start = Number(prompt('Enter first number:'));
//   const end = +prompt('Enter second number:');

//   for (let i = start; i < end; i += 2) {
//     console.log(i);
//   }
// }

// foo();

//!======================================================
// let userPassowrd;

// while (userPassowrd != 'qwerty') {
//   console.log('Wrong Password');
//   userPassowrd = prompt('Enter Password');
// }

// console.log('Вітаємо');

//!======================================================

// const random = Math.round(Math.random() * 100);

// let userValue;

// while (userValue != random) {
//   userValue = prompt('Enter value');

//   if (userValue > random) {
//     console.log('Спробуй менше <');
//   } else if (userValue < random) {
//     console.log('Спробуй більше >');
//   }
// }

// console.log(`Random: ${random}`);

//!======================================================

// const salary = 1500;
// let userSalary = 1000;

// for (let i = 0; i < 3; i++) {
//   console.log('А можна трохи більше ЗП');
//   userSalary += Math.round(Math.random() * 500);
//   console.log(`Ok, тепер ваша ЗП - ${userSalary}`);
// }
//!======================================================

// const salary = 1500;
// let userSalary = 2000;

// while (userSalary < salary) {
//   console.log('А можна трохи більше ЗП');
//   userSalary += Math.round(Math.random() * 100);
//   console.log(`Ok, тепер ваша ЗП - ${userSalary}`);
// }

// do {
//   console.log('А можна трохи більше ЗП');
//   userSalary += Math.round(Math.random() * 100);
//   console.log(`Ok, тепер ваша ЗП - ${userSalary}`);
// } while (userSalary < salary);
//!======================================================

// for (let i = 1; i < 1000; i++) {
//   console.log(i);
//   if (i % 7 === 0 && i % 12 === 0) {
//     break;
//   }
// }

// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0 || i % 5 === 0)continue;

//   console.log(i);
// }

//!======================================================

// function foo(x, y) {
//   console.log('Йду до магазину');
//   console.log('Шукаю необхідний товар');
// }

// function sum(start, end) {
//   let result = 0;
//   for (let i = start; i < end; i++) {
//     result += i;
//   }
//   return result;
// }
// const x = sum(0, 10);

// console.log(x * 10);
// console.log(x / 2);

//!======================================================

// function mult(x1, x2) {
//   return x1 * x2;
// }

// console.log(mult(5, 2) + mult(7, 7));

function foo() {
  for (let i = 1; i < 1000; i++) {
    if (i % 7 === 0 && i % 12 === 0) {
      break;
    }

    console.log('iteration');
  }

  for (let i = 1; i < 1000; i++) {
    if (i % 7 === 0 && i % 12 === 0) {
      break;
    }

    console.log('iteration');
  }

  for (let i = 1; i < 1000; i++) {
    if (i % 7 === 0 && i % 12 === 0) {
      return i;
    }

    console.log('iteration');
  }
}

const x = foo();

console.log(x);
