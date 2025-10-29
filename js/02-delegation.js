/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
const ulElem = document.querySelector('.js-items');

ulElem.addEventListener('click', e => {
  //   if (e.target.nodeName !== 'SPAN') return;
  //   if (!e.target.classList.contains('title')) return;
  //   if (e.target.dataset.type !== 'title') return;
  //   const spanElem = e.target.closest('.title');
  //   if (!spanElem) return;
  //   const liElem = e.target.closest('li');
  //   if (!liElem) return;
  //   console.log(liElem);
});

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', e => {
  const boxElem = e.target.closest('.box');
  if (!boxElem) return;

  const color = boxElem.dataset.color;

  console.log(color);
});
