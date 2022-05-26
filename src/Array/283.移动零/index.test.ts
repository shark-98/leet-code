import { moveZeroes } from './index';

describe('moveZeroes', () => {
  it('is ok', () => {
    const testData = [
      { nums: [0, 1, 0, 3, 12], result: [1, 3, 12, 0, 0] },
      { nums: [0], result: [0] },
    ];
    testData.forEach(({ nums, result }) => {
      expect(moveZeroes(nums)).toStrictEqual(result);
    })
  });
});
