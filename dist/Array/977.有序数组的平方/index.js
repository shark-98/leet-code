"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedSquares = void 0;
function sortedSquares(nums) {
    return case3(nums);
}
exports.sortedSquares = sortedSquares;
;
// case1: new Array + sort；时间复杂度：O(n)，空间复杂度：O(n)
// 执行用时：100 ms, 在所有 TypeScript 提交中击败了72.02 %的用户
// 内存消耗：48.7 MB, 在所有 TypeScript 提交中击败了13.37 %的用户
const case1 = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(Math.pow(nums[i], 2));
    }
    result.sort((a, b) => a - b);
    return result;
};
// case2: map + sort；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：92 ms, 在所有 TypeScript 提交中击败了90.53 %的用户
// 内存消耗：48.5 MB, 在所有 TypeScript 提交中击败了32.92 %的用户
const case2 = (nums) => {
    return nums.map(item => Math.pow(item, 2)).sort((a, b) => a - b);
};
// case2: 双指针；时间复杂度：O(n)，空间复杂度：O(n)
// 执行用时：96.2 ms, 在所有 TypeScript 提交中击败了84 %的用户
// 内存消耗：48.2 MB, 在所有 TypeScript 提交中击败了83 %的用户
const case3 = (nums) => {
    const result = [];
    const len = nums.length - 1;
    let left = 0, right = len, currentIndex = len;
    while (left <= right) {
        const leftVal = Math.pow(nums[left], 2);
        const rightVal = Math.pow(nums[right], 2);
        if (leftVal > rightVal) {
            result[currentIndex--] = leftVal;
            left++;
        }
        else {
            result[currentIndex--] = rightVal;
            right--;
        }
    }
    return result;
};
const testData = [
    { nums: [-4, -1, 0, 3, 10], result: [0, 1, 9, 16, 100] },
    { nums: [-7, -3, 2, 3, 11], result: [4, 9, 9, 49, 121] },
];
testData.forEach(({ nums, result }) => {
    sortedSquares(nums);
});
