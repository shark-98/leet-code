"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElement = void 0;
function removeElement(nums, val) {
    return case1(nums, val);
}
exports.removeElement = removeElement;
;
// case1: 覆盖；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：60 ms, 在所有 TypeScript 提交中击败了86.44 %的用户
// 内存消耗：42.5 MB, 在所有 TypeScript 提交中击败了22.74 %的用户
const case1 = (nums, val) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index++] = nums[i];
        }
    }
    return index;
};
// case2: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：56 ms, 在所有 TypeScript 提交中击败了94.93 %的用户
// 内存消耗：42.4 MB, 在所有 TypeScript 提交中击败了31.23 %的用户
const case2 = (nums, val) => {
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[--right];
        }
        else {
            left++;
        }
    }
    return left;
};
