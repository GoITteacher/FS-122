/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// class Dog{

// }
//!======================================================
// const dog1 = {
//   name: 'Lord',
//   breed: 'Spaniel',
//   age: 2,
//   color: 'gold',
//   hp: 100,

//   sayWoof() {
//     console.log('Woof woof');
//   },

//   sleep() {
//     console.log('Zzzzzz');
//   },

//   eat() {
//     console.log('Ням ням ням');
//   },
// };
// const dog2 = {
//   name: 'Lord',
//   breed: 'Spaniel',
//   age: 2,
//   color: 'gold',
//   hp: 100,

//   sayWoof() {
//     console.log('Woof woof');
//   },

//   sleep() {
//     console.log('Zzzzzz');
//   },

//   eat() {
//     console.log('Ням ням ням');
//   },
// };
// const dog3 = {
//   name: 'Lord',
//   breed: 'Spaniel',
//   age: 2,
//   color: 'gold',
//   hp: 100,

//   sayWoof() {
//     console.log('Woof woof');
//   },

//   sleep() {
//     console.log('Zzzzzz');
//   },

//   eat() {
//     console.log('Ням ням ням');
//   },
// };

//!======================================================

// class Dog {
//   constructor(name, age, color, breed) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//     this.breed = breed;
//     this.legs = 4;
//     this.eyes = 2;
//   }

//   showName() {
//     console.log(this.name);
//   }

//   sayWoof() {
//     console.log('Woof woof');
//   }

//   sleep() {
//     console.log('Zzzzzz');
//   }

//   eat() {
//     console.log('Ням ням ням');
//   }
// }

// const dog1 = new Dog('Lord', 2, 'gold', 'spaniel');
// const dog2 = new Dog('Vasya', 4, 'gold', 'spaniel');
// const dog3 = new Dog('Boom', 5, 'gold', 'spaniel');

// dog1.showName();

//!======================================================

// class Student {
//   #age;

//   constructor(name, age, city) {
//     this.name = name;
//     this.city = city;
//     this.#age = 0;

//     if (age > 0 && age < 100) {
//       this.#age = age;
//     }
//   }

//   showInfo() {
//     const info = `-----------------
// Name: ${this.name}
// Age: ${this.#age}
// City: ${this.city}
// -----------------`;
//     console.log(info);
//   }

//   setAge(newAge) {
//     if (newAge > 0 && newAge < 100) {
//       this.#age = newAge;
//     }
//   }
// }

// const student1 = new Student('Vasya', 25, 'Dnipro');
// const student2 = new Student('Vasya', -25, 'Dnipro');

// student1.showInfo();

// student2.age = 25;

// student2.showInfo();
//!======================================================

// let counter = 0;

// class Account {
//   #balance;
//   #dicount = 10;

//   constructor() {
//     this.#balance = 0;
//   }

//   get balance() {
//     counter++;
//     return `Balance: ${this.#balance}`;
//   }

//   set balance(newBalance) {
//     if (newBalance > 0 && newBalance < 1000) {
//       this.#balance = newBalance;
//     }
//   }

//   get discount() {
//     return this.#dicount;
//   }

//   get test() {
//     console.log('HELLO TEST');
//     console.log('HELLO TEST');
//     console.log('HELLO TEST');
//     console.log('HELLO TEST');
//     console.log('HELLO TEST');
//     console.log('HELLO TEST');
//     console.log('HELLO TEST');
//   }
// }

// const account = new Account();

// class Product {
//   static storeName = 'Rozetka';
//   static #totalItems = 0;
//   static products = [];
//   static discount = 0;

//   constructor(title, price, amount) {
//     this.title = title;
//     this.price = price;
//     this.amount = amount;
//     Product.products.push(this);
//   }

//   showInfo() {
//     console.log('-------------------');
//     console.log(`Title: ${this.title}`);
//     console.log(`Price: ${this.price - Product.discount}`);
//     console.log(`Amount: ${this.amount}`);
//     console.log('-------------------');
//   }

//   static get totalItems() {
//     return Product.#totalItems;
//   }
// }

// const product1 = new Product('apple', 2000, 100);
// const product2 = new Product('Iphone', 1000, 10);
// const product3 = new Product('MacBook', 3000, 5);

// product1.showInfo();
// product2.showInfo();
// product3.showInfo();

// console.log(product1);
// console.log(product2);
// console.log(product3);
// console.log(Product.products);

// product1.showInfo();
// product2.showInfo();
// product3.showInfo();

// Product.discount = 500;

// product1.showInfo();
// product2.showInfo();
// product3.showInfo();

//!======================================================

// class Animal {
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }

//   eat() {
//     console.log('Ням ням');
//   }

//   sleep() {
//     console.log('Zzzz');
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, color) {
//     super(name, age, color);
//     this.legs = 4;
//   }

//   sayWoof() {
//     console.log('woof woof');
//   }

//   eat() {
//     console.log('Woof Woof woof');
//   }
// }

// const dog = new Dog('Lord', 2, 'black');

// console.log(dog);

// dog.sleep();

//!======================================================

class Animal {
  constructor(name, age, color, legs, breed) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.breed = breed;
  }
  eat() {}
  sleep() {}
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs, breed);
  }

  sayWoof() {}
}

class Cat extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs, breed);
  }

  sayMeow() {}
}

class Bird extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, legs);
  }

  fly() {}
}
