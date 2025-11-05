/**
 * LocalStorage
 */

const LS_KEY = 'Array of names';
const names = ['Alice', 'Kate', 'Emma'];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

/**
 * Видалення
 */

/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

//!======================================================

// const value = {
//   name: 'vasya',
//   age: 25,
//   city: 'Dnipro',
// };

// const zip = JSON.stringify(value);

// console.log(zip);

//!======================================================

// const zip = `{"name":"vasya","age":25,"city":"Dnipro"}`;
// const data = JSON.parse(zip);

// console.log(data);

//!======================================================
// const value = { name: 'vasya', key: undefined };
// console.log(JSON.stringify(value));
//!======================================================

// JSON.parse('"Hello world"')
// JSON.parse("'Hello world'")
// JSON.parse("Hello")

//!======================================================
// JSON.stringify({}); // -> string
// JSON.parse(string); // -> data

//!======================================================

// for{}();
// if(){
// }esle{
// }

//!======================================================
// const age = prompt('Enter your age:');
// const res = +age + 10.123343;
// console.log(res.toFixed(2));

//!======================================================
// try {
//   const itemsJSON = prompt('Enter json items:');
//   const arr = JSON.parse(itemsJSON);
//   const copy = arr.map(el => el * 2);
//   console.log(copy);
// } catch (err) {
//   console.log('ERROR', err);
// }
//!======================================================

// const storage = {
//   key1: 'Hello world',

//   setItem(key, value) {
//     this[key] = value;
//   },
//   getItem(key) {
//     return this[key];
//   },
// };

// storage.setItem('key1', 'Hello world');
//!======================================================

// localStorage.setItem('test', 'Hello world');
// const value = localStorage.getItem('test', 'Hello world');

// localStorage.removeItem('test');

// const value = localStorage.getItem('test');

//!======================================================

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  const item = localStorage.getItem(key);
  if (!item) {
    localStorage.setItem(key, zip);
  }
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);

  try {
    const value = JSON.parse(zip);
    return value;
  } catch {
    return zip;
  }
}

//!======================================================

//!======================================================
