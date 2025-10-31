/**
 * Деструктуризація об'єкта в параметрах функції
 */

// function showUserInfo({name, age}) {
// }

// const user1 = {
//   name: 'Vasya',
//   age: 20,
// };
// showUserInfo(user1);$

//!======================================================

function itemTemplate({ name, price, title }) {
  return `<li>${name} ${price} ${title}</li>`;
}

//!======================================================

const showUser = ({ name }, test) => {
  return name;
};

//!======================================================

// const foo1 = ({ age: x }, { age: y }) => {
//   return x - y;
// };

//!======================================================
// const user = {
//   age: 25,
// };

// let { age=33 } = user;

// age = 55;

//!======================================================

// const arr = [
//   { name: 'vasya', age: '25' },
//   { name: 'petro', age: '13' },
//   { name: 'roman', age: '14' },
//   { name: 'anton', age: '15' },
//   { name: 'alex', age: '36' },
// ];

// arr.map(({ name, age }) => {
//   return `${name} ${age}`;
// });

// arr.sort(({ age: x }, { age: y }) => x - y);

document.addEventListener('keydown', handleKeydown);

// const handleKeydown = e => {
//   const { shiftKey, ctrlKey, altKey, ...rest } = e;
// };
