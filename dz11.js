/* eslint-disable no-console */
/* eslint-disable no-alert */
//
let arrLeng = +prompt('Введіть розмір масиву: ');
if (Number.isNaN(arrLeng)) {
  do {
    arrLeng = +prompt('Введіть розмір масиву: ');
  } while (Number.isNaN(arrLeng));
}
console.log(arrLeng);
const ArrUser = [];

for (let i = 0; i < arrLeng; i += 1) {
  let userInput = +prompt('Введіть елемент масиву: ');
  if (Number.isNaN(userInput)) {
    do {
      userInput = +prompt('Дозволенно ввод тільки цифр. Введіть числовий елемент масиву: ');
    } while (Number.isNaN(userInput) || userInput < 0);
  }
  ArrUser.push(userInput);
  console.log(`${i} element is: ${ArrUser[i]}`);
  if (userInput === null) {
    break;
  }
}
console.log(ArrUser);
// ArrUser.sort()   //при сортировке игнорирует 10 введенную через промпт
// розберусь із цим методом пізніше, а поки написав сортування
// сортування за зростанняс (або за спаданняс якщо змінити зкак < >)
for (let i = 0; i < ArrUser.length; i += 1) {
  let maxOrMinArrElement = i;
  for (let j = i + 1; j < ArrUser.length; j += 1) {
    if (ArrUser[maxOrMinArrElement] > ArrUser[j]) {
      maxOrMinArrElement = j;
    }
  }
  if (maxOrMinArrElement !== i) {
    const buFer = ArrUser[i];
    ArrUser[i] = ArrUser[maxOrMinArrElement];
    ArrUser[maxOrMinArrElement] = buFer;
  }
}

console.log(ArrUser);

let startDell = +prompt('enter start dell index: ');
if (startDell < 0 || startDell >= ArrUser.length) {
  do {
    startDell = +prompt(`enter start dell index from 0 to ${ArrUser.length - 1} `);
  } while (startDell < 0 || startDell >= ArrUser.length);
}
const indexesDell = +prompt('how many indexes we\'ll dell: ');
ArrUser.splice(startDell, indexesDell);

console.log(ArrUser);
