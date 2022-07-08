import { ListNode } from '../../utils/index'

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  return case2(head, n)
};

// case1: 暴力；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：68 ms, 在所有 TypeScript 提交中击败了60.77 %的用户
// 内存消耗：44 MB, 在所有 TypeScript 提交中击败了34.14 %的用户
const case1 = (head: ListNode | null, n: number): ListNode | null => {
  let cur = head
  const list = []
  while (cur) {
    list.push(cur)
    cur = cur.next
  }
  const length = list.length

  if (length < n) {
    return null
  }
  if (length === n) {
    return list[1] || null
  }

  const prev = list[length - n - 1]
  const next = list[length - n + 1]
  if (prev) {
    prev.next = next || null
  }

  return head
}

// case1: 快慢指针；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：56 ms, 在所有 TypeScript 提交中击败了97.58 %的用户
// 内存消耗：44 MB, 在所有 TypeScript 提交中击败了23.97 %的用户
const case2 = (head: ListNode | null, n: number): ListNode | null => {
  let fast = head
  let last = head

  while (n--) {
    fast = fast?.next || null
    if (!fast) {
      return head?.next || null
    }
  }

  while (fast?.next) {
    fast = fast.next
    last = last?.next || null
  }
  if (last) {
    last.next = last.next?.next || null
  }


  return head
}
