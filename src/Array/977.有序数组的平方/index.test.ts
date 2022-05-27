import { sortedSquares } from './index';

describe('sortedSquares', () => {
  it('is ok', () => {
    const testData = [
      { nums: [-4, -1, 0, 3, 10], result: [0, 1, 9, 16, 100] },
      { nums: [-7, -3, 2, 3, 11], result: [4, 9, 9, 49, 121] },
    ];
    testData.forEach(({ nums, result }) => {
      expect(sortedSquares(nums)).toStrictEqual(result);
    })
  });
});
