import { ListNode } from '../../utils/index'

export function detectCycle(head: ListNode | null): ListNode | null {
  return case2(head);
};

// case1: 哈希表；时间复杂度：O(n)，空间复杂度：O(n)
// 执行用时：84 ms, 在所有 TypeScript 提交中击败了34.20 %的用户
// 内存消耗：45.2 MB, 在所有 TypeScript 提交中击败了6.75 %的用户
const case1 = (head: ListNode | null): ListNode | null => {
  const hash = new Map()
  while (head && head.next) {
    if (hash.get(head)) {
      head.next = null // 此行是为了通过测试（对象循环引用模拟生成的环形链表，测试会报错），实际leetcode提交时需注释
      return head
    }
    hash.set(head, true)
    head = head.next
  }

  return null
}

// case2: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：72 ms, 在所有 TypeScript 提交中击败了83.76 %的用户
// 内存消耗：44.4 MB, 在所有 TypeScript 提交中击败了77.78 %的用户
// 思路详解：https://leetcode.cn/problems/linked-list-cycle-ii/solution/142-huan-xing-lian-biao-ii-jian-hua-gong-shi-jia-2/
const case2 = (head: ListNode | null): ListNode | null => {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      while (head !== slow) {
        head = head.next
        slow = slow.next
      }
      slow.next = null // 此行是为了通过测试（对象循环引用模拟生成的环形链表，测试会报错），实际leetcode提交时需注释
      return slow
    }
  }

  return null
}
