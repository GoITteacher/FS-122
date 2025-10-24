/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
//!======================================================

// const inputElem = document.querySelector('.js-user-name');
// const messageElem = document.querySelector('.js-message');

// inputElem.addEventListener('input', () => {
//   const msg = inputElem.value;
//   messageElem.textContent = msg.padStart(10, '_').slice(0, 10);
// });

//!======================================================
// const inputElem = document.querySelector('.js-user-name');
// inputElem.addEventListener('focus', () => {
//   console.log('FOCUS on input');
// });

// inputElem.addEventListener('blur', () => {
//   console.log('Blur on input');
// });

//!======================================================
const inputElem = document.querySelector('.js-user-name');

inputElem.addEventListener('blur', () => {
  const value = inputElem.value;

  if (value.length < 6) {
    inputElem.style.border = '10px solid red';
  } else {
    inputElem.style.border = '10px solid green';
  }
});

inputElem.addEventListener('focus', () => {
  inputElem.style.border = 'none';
});

//!======================================================

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
