import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchNews } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function1';

//!======================================================

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};

//!======================================================

const PAGE_SIZE = 4;
let currentPage;
let query;
let totalPages;

const observer = new IntersectionObserver(arr => {
  const myTargetItem = arr[0];
  const { isIntersecting } = myTargetItem;

  if (isIntersecting) {
    loadMore();
  }
}, {});

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  showLoader();
  const formData = new FormData(e.target);
  query = formData.get('query');
  currentPage = 1;
  try {
    const response = await fetchNews(query, currentPage);
    const markup = articlesTemplate(response.articles);
    refs.articleListElem.innerHTML = markup;

    totalPages = Math.ceil(response.totalResults / PAGE_SIZE);
  } catch {
    iziToast.error('Smt went wrong');
  }

  hideLoader();
  updateObserverStatus();
  e.target.reset();
});

//!======================================================

async function loadMore() {
  currentPage += 1;
  showLoader();
  updateObserverStatus();

  try {
    const res = await fetchNews(query, currentPage);
    const markup = articlesTemplate(res.articles);
    refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  } catch {}

  hideLoader();
}

//!======================================================

function updateObserverStatus() {
  if (currentPage < totalPages) {
    console.log('Add Observer');

    observer.observe(refs.targetElem);
  } else {
    console.log('Remove Observer');
    observer.unobserve(refs.targetElem);
  }
}

//!======================================================

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}
