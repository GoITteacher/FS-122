/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 26;
// let timestring; //"14 г. 26 хв." "14 г.";

// if (minutes === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minutes} хв.`;
// }

// timestring = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = Number(prompt('Enter deadline'));

const userAge = 18;
const userBalance = 500;
const isVip = true;

if (isVip) {
  console.log('Ласкаво просимо.');
} else if (userAge >= 18) {
  console.log('Проходьте');
} else if (userBalance > 100) {
  console.log('Проходь через ті двері.');
} else {
  console.log('Ми вас не пропустимо');
}

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }
