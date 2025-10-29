let colorPalette = [];
const LENGTH = 8;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
//!======================================================
const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

//!======================================================

document.addEventListener('DOMContentLoaded', () => {
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

//!======================================================

refs.btnReloadColor.addEventListener('click', e => {
  createPaletteItems();
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

//!======================================================
refs.itemList.addEventListener('click', e => {
  const btnElem = e.target.closest('.color-body');
  if (!btnElem) return;

  const liElem = btnElem.closest('li.color-item');
  const color = liElem.dataset.color;
  refs.modalElement.style.backgroundColor = color;

  showModal();
});

//!======================================================

refs.backdropElem.addEventListener('click', e => {
  if (e.target === refs.backdropElem) {
    closeModal();
  }
});

//!======================================================

function handleCloseModal(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

//!======================================================

function colorTemplate(color) {
  return `<li class="color-item" data-color="${color.hex}">
          <button class="color-body" style="background-color: ${color.hex}"></button>
          <div class="color-footer">
            <div>HEX: ${color.hex}</div>
            <div>RGB: ${color.rgb}</div>
            <div></div>
          </div>
        </li>`;
}

function colorsTemplate(colors) {
  return colors.map(colorTemplate).join('');
}

function showModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', handleCloseModal);
}

function closeModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', handleCloseModal);
}
