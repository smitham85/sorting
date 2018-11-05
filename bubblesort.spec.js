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