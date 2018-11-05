describe('Bubble Sort', function () {
  let test = [20, 9, 1, 2, 6, 5, 8, 7, 4, 3];
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    window.bubbleSort(test);
  });
  it('handles an empty array', function () {
    expect(window.bubbleSort([])).toEqual([]);
  });
  it('calls swap', function () {
    expect(window.swap.calls.count()).toEqual(28);
  });

});
