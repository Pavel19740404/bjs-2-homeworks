'use strict'

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
  }
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let sum = sumWithInitial;
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}
function summElementsWorker(...arr) {

  return arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {

  let evenElements = 0;
  let oddElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenElements += arr[i];
    } else {
      oddElements += arr[i];
    }
  }
  return evenElements - oddElements;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElements = 0;
  let countEvenElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
      countEvenElements++;
    }
  }
  if (countEvenElements === 0) {
    return 0;
  }
  return sumEvenElements / countEvenElements;
}

function makeWork (arrOfArr, func) {

function makeWork(arrOfArr, func) {
  let maxResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = arrOfArr[i];
    let result = func(...arr);
    if (result > maxResult) {
      maxResult = result;
    }
  }
  return maxResult;
}

