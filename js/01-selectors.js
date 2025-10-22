/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// const magicBtnEl = document.querySelector('.js-magic-btn');

// const ulElem1 = document.querySelector('ul');
// const ulElem2 = document.querySelector('.js-item-list');
// const ulElem3 = document.querySelector('#js-item-list');

// console.dir(magicBtnEl);
// magicBtnEl.textContent = 'Hello world';

// magicBtnEl.style.backgroundColor = 'teal';

// const btn = {
//   textContent: 'Magic Button',
//   style: {
//     backgroundColor: '',
//   },
// };

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

// const btnElem = document.querySelector('.js-magic-btn');

// btnElem.parentElement;
// btnElem.previousElementSibling;
// btnElem.nextElementSibling;
// btnElem.firstElementChild;
// btnElem.lastElementChild;
// children

// const ulElem = document.querySelector('ul');
// const liElems = ulElem.querySelectorAll('li.active');

// console.log(liElems);

// for (const liElem of ulElem.children) {
//   liElem.style.backgroundColor = 'teal';
// }

//!======================================================

// const btnElem = document.querySelector('button');

// console.log(btnElem.nextSibling);
