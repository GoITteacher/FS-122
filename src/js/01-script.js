import { fetchNews } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function1';
//!======================================================
const refs = {
  form: document.querySelector('.js-search-form'),
  articleList: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
};
//!======================================================

const PAGE_SIZE = 4;
let query;
let currentPage;
let totalPages;

//!======================================================

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);

  query = formData.get('query');
  currentPage = 1;

  const res = await fetchNews(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleList.innerHTML = markup;
  totalPages = Math.ceil(res.totalResults / PAGE_SIZE);

  console.log('Total Pages', totalPages);

  checkBtnStatus();

  e.target.reset();
});

//!======================================================

refs.loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  checkBtnStatus();

  const res = await fetchNews(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleList.insertAdjacentHTML('beforeend', markup);
});

//!======================================================

function showLoadBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}

function checkBtnStatus() {
  if (currentPage < totalPages) {
    showLoadBtn();
  } else {
    hideLoadBtn();
  }
}
