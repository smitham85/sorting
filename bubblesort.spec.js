<<<<<<< HEAD
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  it('handles an array')
  const testArr = [1,2,3,6,5]
  expect( bubbleSort(testArr)).toEqual (testArr.sort() );

  beforeAll(function () {
    spyOn(bubbleSort, 'swapTracker').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('will be called 1 time', function () {
    bubbleSort.swapTracker();
    expect(bubbleSort.swapTracker.calls.count()).toEqual(1);
  });
=======
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
>>>>>>> ae279782aa1e54d93118bdd956e8807fb02f87de
