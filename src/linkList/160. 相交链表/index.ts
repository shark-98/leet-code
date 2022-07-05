import { ListNode } from '../../utils/index'

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  return case1(headA, headB)
};

// case1: 哈希表；时间复杂度：O(m+n)，空间复杂度：O(m)
// 执行用时：72 ms, 在所有 TypeScript 提交中击败了99.79 %的用户
// 内存消耗：49.7 MB, 在所有 TypeScript 提交中击败了27.73 %的用户
const case1 = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
  let a = headA
  let b = headB
  const set = new Set()
  while (a) {
    set.add(a)
    a = a.next
  }
  while (b) {
    if (set.has(b)) {
      return b
    }
    b = b.next
  }

  return null
}
