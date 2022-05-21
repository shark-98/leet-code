"use strict";
{
    function minSubArrayLen(target, nums) {
        return case2(target, nums);
    }
    ;
    // case1: 暴力双重循环；时间复杂度：O(n^2)，空间复杂度：O(1)
    // 执行用时：152 ms, 在所有 TypeScript 提交中击败了25.08 %的用户
    // 内存消耗：42.8 MB, 在所有 TypeScript 提交中击败了18.04 %的用户
    const case1 = (target, nums) => {
        const len = nums.length;
        if (len === 0) {
            return 0;
        }
        let result = Infinity;
        for (let i = 0; i < len; i++) {
            if (nums[i] >= target) {
                return 1;
            }
            let sum = nums[i];
            for (let j = i + 1; j < len; j++) {
                sum += nums[j];
                if (sum >= target) {
                    result = Math.min(result, j - i + 1);
                    break;
                }
            }
        }
        return result === Infinity ? 0 : result;
    };
    // case2: 滑动窗口；时间复杂度：O(n)，空间复杂度：O(1)
    // 执行用时：60 ms, 在所有 TypeScript 提交中击败了93.88 %的用户
    // 内存消耗：42.5 MB, 在所有 TypeScript 提交中击败了85.63 %的用户
    const case2 = (target, nums) => {
        const len = nums.length;
        if (len === 0) {
            return 0;
        }
        let left = 0, right = 1, sum = nums[left] + nums[right], result = Infinity;
        while (right < len) {
            if (nums[left] >= target) {
                return 1;
            }
            if (sum >= target) {
                result = Math.min(result, right - left + 1);
                sum -= nums[left++];
            }
            else {
                sum += nums[++right];
            }
        }
        return result === Infinity ? 0 : result;
    };
    const run = () => {
        const testData = [
            { nums: [2, 3, 1, 2, 4, 3], target: 7 },
            { nums: [1, 4, 4], target: 4 },
            { nums: [1, 1, 1, 1, 1, 1, 1, 1], target: 11 },
            { nums: [1, 1, 1, 1, 7], target: 7 },
            {
                nums: [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12], target: 213
            },
        ];
        testData.forEach(({ nums, target }) => {
            const result = minSubArrayLen(target, nums);
            console.log(result);
        });
    };
    run();
}
