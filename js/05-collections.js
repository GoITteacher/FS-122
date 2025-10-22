/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

function colorTemplate(obj) {
  return `<li class="color-item">
        <div style="width: 100px; height: 100px; background-color: ${obj.color}"></div>
        <p>Color: ${obj.label}</p>
      </li>`;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate).join('\n\n\n');
}

const markup = colorsTemplate(options);

const ulElem = document.querySelector('.js-color-picker');

// ulElem.innerHTML = markup;

//!======================================================

// ulElem.insertAdjacentHTML('afterbegin', '<li>Hello</li>');
// ulElem.insertAdjacentHTML('beforeend', '<li>The end</li>');
// ulElem.insertAdjacentHTML('beforeend', markup);
//!======================================================

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

// const arr = [1, 2, 3, 4, 5];

// const myTemplate = el => {
//   return `<li>${el}</li>`;
// };

// const res = arr.map(myTemplate).join();

// // ['<li>1</li>','<li>2</li>','<li>3</li>']
// // '<li>1</li><li>2</li><li>3</li>'
// console.log(res);
