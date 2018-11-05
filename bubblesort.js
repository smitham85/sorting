const obj = {};
obj.swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

obj.bubbleSort = (arr) => {
  let tempArray = arr;
  tempArray.forEach(() => {
    arr.forEach((e, i, array) => {
      let next = array[i + 1];
      if (next) {
        if (e > next) {
          tempArray = obj.swap(array, i, i + 1);
        }
      }
    });

  });
  return tempArray;
};



let test = [9, 1, 2, 6, 5, 8, 7, 4, 3];
console.log(obj.bubbleSort(test));
