/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formElem = document.querySelector('.js-form');
//!======================================================
/* 
formElem.addEventListener('submit', e => {
  e.preventDefault();
  const userData = {
    email: formElem.elements.email.value,
    comment: formElem.elements.comment.value,
    password: formElem.elements.password.value,
  };
  console.log(userData);
}); */

//!======================================================
// formElem.addEventListener('submit', e => {
//   e.preventDefault();
//   const borys = new FormData(formElem);

//   const userData = {
//     email: borys.get('email'),
//     password: borys.get('password'),
//     comment: borys.get('comment'),
//   };

//   console.log(userData);
// });

//!======================================================
const ulElem = document.querySelector('ul');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formElem);
  const userData = Object.fromEntries(formData.entries());

  const markup = itemTemplate(userData);
  ulElem.insertAdjacentHTML('afterbegin', markup);
  formElem.reset();
});

function itemTemplate(obj) {
  return `<li>${obj.email} - ${obj.comment}</li>`;
}
