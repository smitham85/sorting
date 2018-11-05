beforeAll(function() {
  spyOn(swapTracker, 'counts').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('tracks three swaps', function() {
  swapTracker.bubbleSort();
  expect(swapTracker.counts.calls.count()).toEqual(3);
});

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('new array should match sorted array', function() {
    const arr = [1, 2, 3, 6, 5];
    expect(bubbleSort(arr)).toEqual(arr.sort());
  });
});
