import { minSubArrayLen } from './index';

describe('minSubArrayLen', () => {
  it('is ok', () => {
    const testData = [
      { nums: [2, 3, 1, 2, 4, 3], target: 7, result: 2 },
      { nums: [1, 4, 4], target: 4, result: 1 },
      { nums: [1, 1, 1, 1, 1, 1, 1, 1], target: 11, result: 0 },
      { nums: [1, 1, 1, 1, 7], target: 7, result: 1 },
      {
        nums: [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12], target: 213, result: 8
      },
    ];
    testData.forEach(({ nums, target, result }) => {
      expect(minSubArrayLen(target, nums)).toStrictEqual(result);
    })
  });
});
