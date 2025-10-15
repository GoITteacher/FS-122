/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(dog.legs);
//!======================================================

// const a = {
//   x1: 1,
//   x2: 2,
//   x3: 3,
// };

// const b = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
//   __proto__: a,
// };

// console.log(b.y1);
// console.log(b.x1);

// console.log(b.hasOwnProperty('y1'));
// console.log(b.hasOwnProperty('x1'));

// console.log(b.awdawd);

//!======================================================

// const x1 = 10;
// const x2 = 'string';
// const x3 = true;

// console.log(x1.toString());
// console.log(x1.toFixed());

// console.dir(Object);

//!======================================================

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

// /**
//  * ----------------------------------------
//  */
// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);

// console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);

//!======================================================

const a = {
  x1: 1,
  x2: 2,
  x3: 3,
};

const b = {
  y1: 1,
  y2: 2,
  y3: 3,
  __proto__: a,
};

const c = {
  q1: 1,
  q2: 2,
  q3: 3,
  __proto__: b,
};

// for (const key in c) {
//   if (c.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
//!======================================================

// const x1 = {
//   value: 10,
// };

// const x2 = {
//   value: 20,
//   __proto__: x1,
// };

// console.log(x2);

//!======================================================
