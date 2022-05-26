"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
function twoSum(nums, target) {
    return case2(nums, target);
}
exports.twoSum = twoSum;
;
// case1: 暴力双循环；时间复杂度：O(n^2)，空间复杂度：O(1)
// 执行用时：140 ms, 在所有 TypeScript 提交中击败了15 %的用户
// 内存消耗：42.7 MB, 在所有 TypeScript 提交中击败了83 %的用户
const case1 = (nums, target) => {
    let result = [-1, -1];
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[j] === target - nums[i]) {
                result = [i, j];
                break;
            }
        }
        if (result[0] !== -1) {
            break;
        }
    }
    return result;
};
// case2: 哈希表；时间复杂度：O(n)，空间复杂度：O(n)
// 执行用时：68 ms, 在所有 TypeScript 提交中击败了82.16 %的用户
// 内存消耗：43.9 MB, 在所有 TypeScript 提交中击败了64.98 %的用户
const case2 = (nums, target) => {
    const hash = {};
    let result = [-1, -1];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const val = target - nums[i];
        if (hash[val] > -1) {
            result = [hash[val], i,];
            break;
        }
        else {
            hash[nums[i]] = i;
        }
    }
    return result;
};
