const cars = [];

const refs = {
  createForm: document.querySelector('.js-create-form'),
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-list'),
};

//!======================================================

function carTemplate(car) {
  const id = Math.round(Math.random() * 1000);
  return `
  <li class="car-item on-sale">
    <img src="https://picsum.photos/720?random=${id}" alt="" />
    <div class="car-info">
      <h3>${car.title}</h3>
      <p>Type: ${car.type}</p>
      <p>Price: ${car.price}</p>
    </div>
  </li>`;
}

function carsTemplate(cars) {
  return cars.map(carTemplate).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const initCars = loadFromLS('cars') || [];
  cars.push(...initCars);
  const markup = carsTemplate(cars);
  refs.container.innerHTML = markup;
});

//!======================================================

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(refs.form);
  const query = formData.get('query');
  const carType = formData.get('type');

  const filteredCars = cars.filter(car => {
    const isValidCar = car.title.includes(query);
    const isValidType = car.type === carType;
    const isAllType = carType === 'all';

    return isValidCar && (isAllType || isValidType);
  });

  const markup = carsTemplate(filteredCars);
  refs.container.innerHTML = markup;

  refs.form.reset();
});

//!======================================================

refs.createForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(refs.createForm);

  const carInfo = Object.fromEntries(formData.entries());
  carInfo.price = Number(carInfo.price);
  carInfo.onSale = Boolean(carInfo.onSale);

  cars.unshift(carInfo);
  saveToLS('cars', cars);

  const markup = carTemplate(carInfo);
  refs.container.insertAdjacentHTML('afterbegin', markup);
  refs.createForm.reset();
});
//!======================================================

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    return JSON.parse(zip);
  } catch {
    return zip;
  }
}
