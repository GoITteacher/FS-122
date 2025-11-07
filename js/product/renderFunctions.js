export function productTemplate(product) {
  return `<li class="item" data-id="${product.id}">
        <img src="${product.img}" alt="${product.name}" />
        <h2>${product.name}</h2>
      </li>`;
}

export function productsTemplate(products) {
  return products.map(productTemplate).join('');
}
