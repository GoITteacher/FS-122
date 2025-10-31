/**
 * Деструктуризація об'єкта
 */
//!======================================================
// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {} = user;

// const country = user.country;
// const city = user.city;
// const username = user.username;
// const age = user.age;

//!======================================================
// const username = 'VASYA';

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { username: name, age: userAge } = user;
// const name = user.username
// const userAge = user.age

//!======================================================

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   address: {
//     location: {
//       x: 10,
//       y: 20,
//     },
//   },
// };

// const {
//   skills: { html, css, js },
// } = user;

// const {
//   address: {
//     location: { x, y },
//   },
// } = user;

// const {
//   address: { location },
// } = user;

// const { x, y } = location;

//!======================================================

// const user = {
//   firstname: 'Vasya',
//   lastname: 'Petrov',
// };

// const { age: age1 = 0, age: age2, age: age3 } = user;

// const age1 = user.age;
// const age2 = user.age;
// const age3 = user.age;

// const age = user.age || 0; //undefined

// console.log(age1, age2, age3);

//!======================================================

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
// const [, , x1, x2, x3] = arr;
// console.log(x1, x2, x3);
//!======================================================
// const rgb = [100, 123, 231];
// const [red, green, blue, alpha = 1] = rgb;
// console.log(red, green, blue, alpha);

//!======================================================

// const arr = [1, 2, 3, 44, 65, 1, 2, 4];

// const [x1, ...newArr] = arr;

// console.log(newArr);
//!======================================================
// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   address: {
//     location: {
//       x: 10,
//       y: 20,
//     },
//   },
// };

// const { skills, address, ...newUser } = user;

// console.log(newUser);
//!======================================================

// const book = {
//   id: '1231242345',
//   title: 'My Book',
//   author: 'Vasya',
//   price: 200,
//   pages: 300,
//   year: 2012,
//   genre: 'Fantasy',
// };

// const { id, ...copyBook } = book;

// console.log(copyBook);
