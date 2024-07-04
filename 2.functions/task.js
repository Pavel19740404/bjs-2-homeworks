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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
