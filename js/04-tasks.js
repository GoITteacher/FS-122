/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems() {
//   const arr = Array.from(arguments);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1} - ${arr[i]}`);
//   }
// }

// logItems('Mango', 'Poly', 'Ajax');
// logItems('🍎', '🍇', '🍑', '🍌', '🍋');

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const arr1 = names.split(',');
//   const arr2 = phones.split(',');

//   for (let i = 0; i < arr1.length; i++) {
//     const name = arr1[i];
//     const phone = arr2[i];

//     console.log(`${name} - ${phone}`);
//   }
// }

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

function formatNumber(number) {
  const str = String(number);
  return str.padStart(2, '0'); // '07'
}

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  return `${formatNumber(hours)}:${formatNumber(minutes)}`;
}

debugger;
console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"

//!======================================================
