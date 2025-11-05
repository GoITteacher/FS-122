const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

//!======================================================

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  const values = {
    name: formData.get('name'),
    message: formData.get('message'),
  };

  console.log(values);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

form.addEventListener('input', () => {
  const formData = new FormData(form);

  const values = {
    name: formData.get('name'),
    message: formData.get('message'),
  };

  saveToLS(STORAGE_KEY, values);
});

// form.addEventListener('input', () => {
//   const color = form.elements.color.value;
//   saveToLS('color', color);
//   document.body.style.backgroundColor = color;
// });

//!======================================================

document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(STORAGE_KEY);
  form.elements.name.value = data?.name || '';
  form.elements.message.value = data?.message || '';

  //   const color = loadFromLS('color');
  //   document.body.style.backgroundColor = color;
});

//!======================================================

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);

  try {
    const value = JSON.parse(zip);
    return value;
  } catch {
    return zip;
  }
}
