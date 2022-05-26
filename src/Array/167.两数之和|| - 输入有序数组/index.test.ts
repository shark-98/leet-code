import { twoSum2 } from './index';

describe('twoSum2', () => {
  it('is ok', () => {
    const testData = [
      { nums: [2, 7, 11, 15], target: 9, result: [1, 2] },
      { nums: [2, 3, 4], target: 6, result: [1, 3] },
      { nums: [3, 3], target: 6, result: [1, 2] },
      { nums: [-1, 0], target: -1, result: [1, 2] },
      { nums: [1, 3, 4, 4], target: 8, result: [3, 4] },
      { nums: [3, 24, 50, 79, 88, 150, 345], target: 200, result: [3, 6] },
    ];
    testData.forEach(({ nums, target, result }) => {
      expect(twoSum2(nums, target)).toStrictEqual(result);
    })
  });
});
