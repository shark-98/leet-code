import { twoSum } from './index';

describe('twoSum', () => {
  it('is ok', () => {
    const testData = [
      { nums: [2, 7, 11, 15], target: 9, result: [0, 1] },
      { nums: [3, 2, 4], target: 6, result: [1, 2] },
      { nums: [3, 3], target: 6, result: [0, 1] },
    ];
    testData.forEach(({nums, target, result}) => {
      expect(twoSum(nums, target)).toStrictEqual(result);
    })
  });
});
