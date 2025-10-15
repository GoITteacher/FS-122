/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
//!======================================================

const user1 = {
  name: 'Vasya',
  showThis() {
    console.log(this);
  },
};

const user2 = {
  name: 'Roman',
};

// user1.showThis();

// user1.showThis.call(user2);

// user1.showThis();
// user1.showThis();
// user1.showThis();

// user1.showThis.call(user2);
// user1.showThis.apply(user2);

// showThis()
// showThis.call()
//!======================================================

// function setColor(r, g, b) {
//   // this = myColor
//   this.red = r;
//   this.green = g;
//   this.blue = b;
//   console.log(this);
// }

// const myColor = {};

// const red = 20;
// const green = 25;
// const blue = 55;
// setColor.call(myColor, red, green, blue);

// const rgb = [10, 20, 30];
// setColor.apply(myColor, rgb);

//!======================================================

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log("showThis -> this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

//!======================================================
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'green');
// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

//!======================================================

// function foo() {
//   console.log(this);
// }

// const user3 = {
//   name: 'Kamila',
// };

// const copy = foo.bind(user3);

// copy();
// copy.call(null)

// const user4 = {
//   copy2: copy
// }

// user4.copy2()
//!======================================================
// function changeColor(color) {
//   this.color = color;
//   console.log(this);
// }

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeColor();

// changeHatColor();

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

//!======================================================
const user10 = {
  name: 'vasya',
};
const user11 = {
  name: 'roman',
};

function test() {
  console.log(this);
}

const copy1 = test.bind(user1);
const copy2 = copy1.bind(user2);

//!======================================================

// this

// 1 - global/undefind
// 3 - object
// 7 - call apply
// 9 - bind
// 11 - arrow

// const copy = test.bind(user1);
// const copy2 = copy.bind(user2);

// user1.test.call(user2)

//!======================================================
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const cInc = counter.increment.bind(counter);
// const cDec = counter.decrement.bind(counter);

// cInc(5);
// cInc(10);
// console.log(counter);

//!======================================================

// function foo() {
//   const x = 25;
//   //let this = user1

//   const arrow = () => {
//     console.log(x);
//     console.log(this);
//   };

//   arrow();
// }

// foo.call(user1);
//!======================================================

/* 
1) Визначити тип функції (стрілчата чи звичайна)
2) 
  - Якщо звичайна то глянути місце виклику
  - Якщо стрілчата то взяти this від бат. функції
*/

// this = undefined
const arr1 = () => {
  const arr2 = () => {
    const arr3 = () => {
      const arr4 = () => {
        console.log(this);
      };

      arr4();
    };

    arr3();
  };

  arr2();
};

arr1();
