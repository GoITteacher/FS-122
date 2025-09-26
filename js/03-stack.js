/**
 * - Стек викликів
 * - Порядок виконання
 */

// function fnA() {
//   console.log("fnA execution");
// }

// function fnB() {
//   console.log("fnB execution");
// }

// function fnC() {
//   console.log("fnC execution");
// }

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");
//!======================================================

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     x += 1;
//   }
// }

// function foo1() {
//   console.log('S1');
//   foo2();
//   console.log('E1');
// }

// function foo2() {
//   console.log('S2');
//   foo3();
//   console.log('E2');
// }

// function foo3() {
//   console.log('S3');
//   console.log(x);
//   console.log('E3');
// }

// foo1();
//!======================================================

// function foo(i) {
//   console.log(i);
//   foo(i + 1);
// }

// foo(1);

//!======================================================

// test !5 = 1 * 2 * 3 * 4 * 5;  !4 * 5;
// test !3 = 1 * 2 * 3;
// test !1 = 1;

// function factorial(x) {
//   if (x === 1) {
//     console.log('return 1');
//     return 1;
//   }

//   console.log(`factorial(${x - 1}) * ${x}`);

//   return factorial(x - 1) * x;
// }
// debugger;
// factorial(1); //1
// factorial(2); //2
// console.log(factorial(5));
//6

// factorial(4) * 5;
//  factorial(3) * 4;
//  factorial(3) * 4;
//  factorial(3) * 4;
