let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

//!======================================================

refs.firstTagsList.addEventListener('click', e => {
  const liElem = e.target.closest('li.tag-item');
  if (!liElem) return;
  liElem.classList.toggle('active');
});

//!======================================================

refs.secondTagsList.addEventListener('click', e => {
  const liElem = e.target.closest('li.tag-item');
  if (!liElem) return;

  const oldActiveElem = refs.secondTagsList.querySelector('.active');
  oldActiveElem.classList.remove('active');
  liElem.classList.add('active');
});
