function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

function bubbleSort(arr) {
  console.log(arr);
  let tempArray = arr;
  arr.forEach(() => {
    arr.forEach((e, i, array) => {
      let next = array[i + 1];
      if (next) {
        if (e > next) {
          tempArray = swap(array, i, i + 1);
        }
      }
    });
  });
  console.log(tempArray);
  return tempArray;
};
