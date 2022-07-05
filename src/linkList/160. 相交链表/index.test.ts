import { createListNode, addListNode } from '../../utils/index'
import { getIntersectionNode } from './index';

describe('getIntersectionNode', () => {
  it('is ok', () => {
    const base0 = createListNode([8, 4, 5])
    const base1 = createListNode([2, 4])
    const testData = [
      {
        head: {
          headA: addListNode(createListNode([4, 1]), base0),
          headB: addListNode(createListNode([5, 6, 1]), base0),
        },
        result: base0
      },
      {
        head: {
          headA: addListNode(createListNode([1, 9, 1]), base1),
          headB: addListNode(createListNode([3]), base1),
        },
        result: base1
      },
      {
        head: {
          headA: createListNode([2, 6, 4]),
          headB: createListNode([1, 5]),
        },
        result: null
      },
    ];

    testData.forEach(({ head, result }) => {
      expect(getIntersectionNode(head.headA, head.headB)).toStrictEqual(result);
    })
  });
});
