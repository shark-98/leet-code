import { createListNode } from '../../utils/index'
import { hasCycle } from './index';

describe('hasCycle', () => {
  it('is ok', () => {
    const testData = [
      { head: createListNode([3, 2, 0, -1], 1), result: true },
      { head: createListNode([1,2], 0), result: true },
      { head: createListNode([1]), result: false },
    ];
    
    testData.forEach(({ head, result }) => {
      expect(hasCycle(head)).toStrictEqual(result);
    })
  });
});
