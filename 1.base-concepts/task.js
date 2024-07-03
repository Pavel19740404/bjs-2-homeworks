"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
let x2;
let d = b ** 2 - 4 * a * c;

if (d > 0) {
	x1 = (-b + Math.sqrt(d)) / (2 * a);
	x2 = (-b - Math.sqrt(d)) / (2 * a);
	arr.push(x1, x2);
} else if (d === 0) {
	x1 = -b / (2 * a);
	arr.push(x1);
}
  
  return arr;
}


console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  date = +date;
  if (typeof percent === `string`) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (typeof contribution === `string`) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  } else if (typeof amount === `string`) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  } else if (typeof date === `string`) {
    totalAmount = `Параметр "Сроки ипотеки" содержит неправильное значение ${date}`;
  };
  let lianAmount = amount - contribution;
  let timeNow = new Date();
  let loanTerm = date - timeNow;
  let monthFee = lianAmount * (monthlyPartPercent + (monthlyPartPercent / (((1 + monthlyPartPercent) ** date) - 1)));
  totalAmount = +(monthFee * date).toFixed(2);
  console.log(totalAmount);
  return totalAmount;
}
