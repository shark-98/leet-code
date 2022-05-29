import { createListNode } from '../../utils/index'
import { detectCycle } from './index';

describe('detectCycle', () => {
  it('is ok', () => {
    const testData = [
      { head: createListNode([3, 2, 0, -4], 1), result: { val: 2, next: null } },
      { head: createListNode([1, 2], 0), result: { val: 1, next: null } },
      { head: createListNode([1]), result: null },
    ];

    testData.forEach(({ head, result }) => {
      expect(detectCycle(head)).toStrictEqual(result);
    })
  });
});
