//!======================================================

import {
  createBook,
  deleteBook,
  getAllBooks,
  resetBook,
  updateBook,
} from './api/booksApi';

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  deleteForm: document.querySelector('.js-delete-form'),
  bookList: document.querySelector('.js-book-list'),
  loader: document.querySelector('.js-loader'),
};

//!======================================================

document.addEventListener('DOMContentLoaded', () => {
  showLoader();

  getAllBooks()
    .then(books => {
      const markup = booksTemplate(books);
      refs.bookList.innerHTML = markup;
    })
    .finally(() => {
      hideLoader();
    });
});

//!======================================================

refs.createForm.addEventListener('submit', handleCreateBook);
refs.updateForm.addEventListener('submit', handleUpdateBook);
refs.resetForm.addEventListener('submit', handleResetBook);
refs.bookList.addEventListener('click', handleDeleteBook);

//!======================================================
function handleCreateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const newBook = {
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
    price: Math.round(Math.random() * 100),
    rating: Math.round(Math.random() * 10),
  };
  showLoader();
  createBook(newBook)
    .then(resultBook => {
      const markup = bookTemplate(resultBook);
      refs.bookList.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(() => {})
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
}
//!======================================================
function handleUpdateBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('bookId');

  const newBook = {
    title: formData.get('bookTitle') || undefined,
    author: formData.get('bookAuthor') || undefined,
    desc: formData.get('bookDesc') || undefined,
  };

  updateBook(id, newBook).then(res => {
    const oldElem = refs.bookList.querySelector(`li[data-id="${id}"]`);
    const markup = bookTemplate(res);
    oldElem.outerHTML = markup;
  });

  e.target.reset();
}
//!======================================================
function handleResetBook(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('bookId');

  const newBook = {
    title: formData.get('bookTitle'),
    author: formData.get('bookAuthor'),
    desc: formData.get('bookDesc'),
  };

  resetBook(id, newBook).then(res => {
    const oldElem = refs.bookList.querySelector(`li[data-id="${id}"]`);
    const markup = bookTemplate(res);
    oldElem.outerHTML = markup;
  });

  e.target.reset();
}
//!======================================================
function handleDeleteBook(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;
  deleteBook(id).then(() => {
    liElem.remove();
  });
}

//!======================================================

function bookTemplate({ id, title, desc, author, img, price, rating }) {
  return `
<li class="book-item card" data-id="${id}">
  <img
    class="book-img"
    src="https://picsum.photos/200?random=${id}"
    alt=""
  />

  <h5 class="book-title">${title}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price || 0}</span>
    <span>Rating: ${rating || 0}</span>
    <button>Delete</button>
  </div>
</li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}

//!======================================================

function showLoader() {
  refs.loader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
}
