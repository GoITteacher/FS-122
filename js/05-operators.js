/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false

// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean(25)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean('null')); // true
// console.log(Boolean('undefined')); // true

//!======================================================

// const x = 'hello';
// const y = '';
// const res = "hello" && "Mango" && true;

//!======================================================

// Boolean("Hello");

// 'hello';

// console.log(!!true);
// console.log(!false);

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // k

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // t

// console.log(true || 3 || 4); // t

// console.log(true || false || 7); //t

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

//!======================================================

// const username = prompt(); // "Volodymyr"

// const fullName = username || 'Anonym';

// console.log(`Hello ${fullName}`);

//!======================================================
// const userName = 'Hello';
// const userBalance  = 500;
// const isVip = true;
// if(!(false && true) || (true && false)){

// }

// const isAdult = userAge >= 18;
// const isRich = userBalance > 5000;
// const isAdmin = true;
// const isOwner = username === 'Vasya';

// if (isAdmin || (isAdult && isRich) || isOwner) {
// }

//!======================================================

let x = 10;

// console.log(x++); // x += 1;
// console.log(x);

// x+=1;

// x += 1;

// const y = 25 + x;
// const y = 25 + x++;

// console.log(++x);
// console.log(x);

false && 0;

// '' ?? 0
// false ?? 0
// null ?? 0
// undefined ?? 0
