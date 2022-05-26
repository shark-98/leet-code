import { removeDuplicates } from './index';

describe('removeDuplicates', () => {
  it('is ok', () => {
    const testData = [
      { nums: [1, 1, 2], result: 2 },
      { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], result: 5 },
      { nums: [-1, 0, 0, 0, 0, 3, 3], result: 3 },
    ];
    testData.forEach(({ nums, result }) => {
      expect(removeDuplicates(nums)).toStrictEqual(result);
    })
  });
});
