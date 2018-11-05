let swapTracker = 0;

swapTracker.counts = function() {
  swapTracker++;
};

function bubbleSort(array) {
  if (!array.length){
    onst arr = [1,2,3,6,5];
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = array[i + 1]; j < array.length; j++) {
      if (array[i] < array[j]) {
        continue;
      }
      if (array[i] > array[j]) {
        swapTracker();
        let numA = array[i];
        let numB = array[j];
        let ind1 = array.indexOf(array[i]);
        let ind2 = array.indexOf(array[i]);
        array[ind1] = numB;
        array[ind2] = numA;
      }
    }
  }
}

const arr = [1, 2, 3, 6, 5];
bubbleSort();
