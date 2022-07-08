import { createListNode } from '../../utils/index'
import { removeNthFromEnd } from './index';

describe('removeNthFromEnd', () => {
  it('is ok', () => {
    const testData = [
      {
        head: createListNode([1, 2, 3, 4, 5]),
        n: 2,
        result: createListNode([1, 2, 3, 5])
      },
      {
        head: createListNode([1]),
        n: 1,
        result: createListNode([])
      },
      {
        head: createListNode([1, 2]),
        n: 1,
        result: createListNode([1])
      },
    ];

    testData.forEach(({ head, n, result }) => {
      const received = removeNthFromEnd(head, n)
      expect(received).toStrictEqual(result);
    })
  });
});
