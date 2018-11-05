function bubbleSort (arr) {
  return arr.map((e, i, array) => {
    let next = array[i +1];
    if (next) {
      if (e > next) {
        swap(array, e, next);
      }
    }
  });
}

const swap = (arr, a, b) => {
  const temp = arr[arr.indexOf(a)];
  arr[arr.indexOf(a)] = arr[arr.indexOf(b)];
  arr[arr.indexOf(b)] = temp;
};

let test = [9, 1, 2, 6, 5, 8, 7, 4, 3];
console.log(bubbleSort(test));
