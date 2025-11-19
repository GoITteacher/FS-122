//!======================================================
const refs = {
  form: document.querySelector('.js-binance-form'),
  container: document.querySelector('.js-binance-info'),
};

//!======================================================

function fetchPrice(input1) {
  const baseUrl = 'https://binance43.p.rapidapi.com';
  const endPoint = '/ticker/price';
  const params = new URLSearchParams({
    symbol: input1,
  });
  const url = `${baseUrl}${endPoint}?${params}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'binance43.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}

//!======================================================

function symbolTemplate(result) {
  let { symbol, price } = result;
  const icon = symbol.toLowerCase().replace('usdt', '');
  price = Number(price).toFixed(2);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${symbol}</span>
  <span class="coin-price">${price}</span>`;
}

//!======================================================

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const input1 = e.target.elements.query.value;

  fetchPrice(input1)
    .then(result => {
      const markup = symbolTemplate(result);
      refs.container.innerHTML = markup;
    })
    .catch(err => {
      refs.container.innerHTML = '<h1>Error</h1';
    });

  e.target.reset();
});

//!======================================================
/* 

function symbolTemplate(obj) {
  const icon = obj.symbol.toLowerCase().replace('usdt', '');
  obj.price = Number(obj.price).toFixed(2);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${obj.symbol}</span>
  <span class="coin-price">${obj.price}</span>`;
}
*/
