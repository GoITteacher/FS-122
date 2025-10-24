/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// const btnElem = document.querySelector('.js-click');
// btnElem.addEventListener('click', () => {});

/* 
- handleTargetEvent - handleUserBtnClick
- targetEventHandler - userBtnClickHandler
- onTargetEvent - onUserBtnClick
*/

//!======================================================

//!======================================================

// btnElem.addEventListener('click', handleBtnClick);
// function handleBtnClick() {
//   console.log('HELLO1');
// }

// btnElem.addEventListener('click', handleBtnClick2);
// function handleBtnClick2() {
//   console.log('HELLO2');
// }

// btnElem.addEventListener('click', handleBtnClick3);
// function handleBtnClick3() {
//   console.log('HELLO3');
// }

//!======================================================
// btnElem.removeEventListener('click', handleBtnClick2);

//!======================================================
// btnElem.addEventListener('click', () => {});
// btnElem.removeEventListener('click');
//!======================================================

// const btnElem = document.querySelector('.js-click');
// const boxElem = document.querySelector('.js-box');

// const position = {
//   left: 100,
//   top: 100,
// };

// btnElem.addEventListener('click', () => {
//   position.left += 10;
//   position.top += 10;
//   boxElem.style.left = `${position.left}px`;
//   boxElem.style.top = `${position.top}px`;
// });
//!======================================================

const btnElem = document.querySelector('.js-click');

btnElem.addEventListener('click', () => {
  const markup = boxElemTemplate();
  document.body.insertAdjacentHTML('beforeend', markup);
});

function boxElemTemplate() {
  return '<div class="js-box box"></div>';
}
