/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: 'Kate',
  },
  {
    name: 'Alex',
  },
  {
    name: 'Mark',
  },
];

// for (const { name } of users) {
//   console.log(name);
// }

// users.forEach(({ name }) => {
//   console.log(name);
// });

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

// const entries = Object.entries(book);

// for (const [key, value] of entries) {
//   console.log(key, value);
// }

//!======================================================
// const colors = [
//   { r: 10, g: 18, b: 10 },
//   { r: 11, g: 17, b: 10 },
//   { r: 12, g: 17, b: 10 },
//   { r: 13, g: 16, b: 10 },
//   { r: 14, g: 16, b: 10 },
//   { r: 15, g: 15, b: 10 },
//   { r: 16, g: 14, b: 10 },
//   { r: 17, g: 13, b: 10 },
//   { r: 18, g: 12, b: 10 },
//   { r: 19, g: 11, b: 10 },
// ];

// for (const { r, g, b } of colors) {
//   console.log(`rgb(${r},${g},${b});`);
// }

// for (let i = 0; i < colors.length; i++) {
//   const { r, g, b } = colors[i];
// }
