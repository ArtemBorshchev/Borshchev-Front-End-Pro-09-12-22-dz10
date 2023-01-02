/* Написати цикли, які роблять наступне:
...
1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1,
  які не мають інших дільників крім 1 і себе).
5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення
числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна). */

function startEnd() {
  let stDiap = +document.getElementById('g-1').value;
  let endDiap = +document.getElementById('g-2').value;
  const ArrNum = [];
  let obmenPeremennyh = null;
  if (stDiap > endDiap) {
    obmenPeremennyh = stDiap;
    stDiap = endDiap;
    endDiap = obmenPeremennyh;
  }
  for (stDiap; stDiap < endDiap; stDiap += 0.5) {
    ArrNum.push(` ${stDiap}`);
  }
  document.getElementById('out-1').innerHTML = ArrNum;
}

function currencyExch() {
  const exchRate = +document.getElementById('g-3').value;
  let tablePrint = '<ul>';
  for (let i = 10; i < 101; i += 10) {
    tablePrint += `<li> ${i} USD = ${exchRate * i} UAH </li>`;
  }
  tablePrint += '</ul>';
  document.getElementById('out-2').innerHTML = tablePrint;
}

function qwrtNumber() {
  let enterNumber = +document.getElementById('g-4').value;
  if (enterNumber % 1 > 0) {
    enterNumber = enterNumber - (enterNumber % 1) + 1;
  } else if (enterNumber % 1 < 0) {
    enterNumber -= enterNumber % 1;
  }
  const ArrNum = [];
  for (let i = 1; i < 101; i += 1) {
    if (i * i < enterNumber) {
      ArrNum.push(` ${i}`);
    }
  }
  document.getElementById('out-3').innerHTML = ArrNum;
}

function isPrimeNumber() {
  const enterNumber = +document.getElementById('g-5').value;
  let numberCounter = 0;
  for (let i = 2; i < enterNumber; i += 1) {
    if ((enterNumber / i) % 1 === 0) {
      document.getElementById('out-4').innerHTML = 'Введене число не є простим!';
      numberCounter += 1;
      break;
    }
  }
  if (numberCounter === 0) {
    document.getElementById('out-4').innerHTML = 'ВВЕДЕНЕ ЧИСЛО - ПРОСТЕ';
  }
}

function numberSqrt3() {
  const enterNumber = +document.getElementById('g-6').value;
  const testNumber = 3;
  let countOfSqrt = 1;
  let findNumber = 3;
  for (let i = 0; i < 15; i += 1) {
    findNumber *= testNumber;
    if (findNumber < enterNumber) {
      countOfSqrt += 1;
    } else if (findNumber === enterNumber) {
      countOfSqrt += 1;
      document.getElementById('out-5').innerHTML = `Це число можна одержати 
      шляхом зведення ${testNumber} у ${countOfSqrt} ступінь`;
      break;
    } else {
      document.getElementById('out-5').innerHTML = `Це число НЕМОЖЛИВО одержати 
      шляхом зведення ${testNumber} у деяку ступінь`;
      break;
    }
  }
}

document.getElementById('g1-1').onclick = startEnd;
document.getElementById('g2-1').onclick = currencyExch;
document.getElementById('g3-1').onclick = qwrtNumber;
document.getElementById('g4-1').onclick = isPrimeNumber;
document.getElementById('g5-1').onclick = numberSqrt3;
