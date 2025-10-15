/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

// function foo() {
//   // let this =
//   console.log();

// }

// foo(1, 2, 3);
// foo('hello', 'world');

/**
 * Глобальний контекст
 */

// function foo() {
//   console.log('foo -> this', this);
//   //this = undefined
// }

// foo();

/**
 * Контекст методу об'єкта
 */

// const user = {
//   name: 'Vasya',
//   tag: 'Mango',
//   showTag() {
//     // this = user;
//     console.log('showTag -> this', this);
//   },
// };

// user.showTag()

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

// function showTag() {
//   console.log(arguments);
//   console.log('showTag -> this', this);
// }

// const user = {
//   tag: 'Mango',
//   copy: showTag,
// };

// showTag();
// user.copy(1, 2, 3);

// mango.showUserTag = showTag;
// console.log('mango', mango);

// mango.showUserTag();

/**
Виклик без контексту але оголошена як метод обєкту
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// poly.showTag();

// const outerShowTag = poly.showTag;

// outerShowTag();

//!======================================================

// const user1 = {
//   name: 'Vasya',
//   showName() {
//     console.log(this);
//   },
// };

// const user2 = {
//   name: 'Roman',
//   copy: user1.showName,
// };

// user2.copy();

//!======================================================

/**
 * Контекст в callback-функциях
 */

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// function invokeAction(action) {
//   const obj = {
//     copy: action,
//   };

//   obj.copy();
// }

// invokeAction(jacob.showTag);
