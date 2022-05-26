export function twoSum2(numbers: number[], target: number): number[] {
  return case2(numbers, target)
};

// case1: 双循环；时间复杂度：O(n^2)，空间复杂度：O(1)
// 执行用时：312 ms, 在所有 TypeScript 提交中击败了16.07 %的用户
// 内存消耗：43.2 MB, 在所有 TypeScript 提交中击败了19.13 %的用户
const case1 = (numbers: number[], target: number): number[] => {
  const len = numbers.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = len - 1; j > 0;) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
      if (numbers[i] + numbers[j] > target) {
        j--
      }
      if (numbers[i] + numbers[j] < target) {
        break
      }
    }
  }
  return [-1, -1]
}

// case2: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：56 ms, 在所有 TypeScript 提交中击败了98.21 %的用户
// 内存消耗：43.1 MB, 在所有 TypeScript 提交中击败了41.84 %的用户
const case2 = (numbers: number[], target: number): number[] => {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return [-1, -1]
}
