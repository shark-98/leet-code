import { removeElement } from './index';

describe('removeElement', () => {
  it('is ok', () => {
    const testData = [
      { nums: [3, 2, 2, 3], val: 3, result: 2 },
      { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2, result: 5 },
      { nums: [1], val: 1, result: 0 },
      { nums: [3, 3], val: 3, result: 0 },
    ];
    testData.forEach(({ nums, val, result }) => {
      expect(removeElement(nums, val)).toStrictEqual(result);
    })
  });
});
