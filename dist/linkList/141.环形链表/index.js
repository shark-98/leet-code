"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCycle = void 0;
function hasCycle(head) {
    return case2(head);
}
exports.hasCycle = hasCycle;
;
// case1: 哈希表；时间复杂度：O(n)，空间复杂度：O(n)
// 执行用时：76 ms, 在所有 TypeScript 提交中击败了71.43 %的用户
// 内存消耗：46.8 MB, 在所有 TypeScript 提交中击败了5.04 %的用户
const case1 = (head) => {
    let hash = new Map();
    while (head && head.next) {
        if (hash.get(head)) {
            return true;
        }
        hash.set(head, true);
        head = head.next;
    }
    return false;
};
// case2: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：72 ms, 在所有 TypeScript 提交中击败了85.71 %的用户
// 内存消耗：44.7 MB, 在所有 TypeScript 提交中击败了54.68 %的用户
const case2 = (head) => {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
