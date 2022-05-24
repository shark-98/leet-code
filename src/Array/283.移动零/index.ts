{
  function moveZeroes(nums: number[]): void {
    return case3(nums)
  };

  // case1: 哈希表；时间复杂度：O(n)，空间复杂度：O(n)
  // 执行用时：320 ms, 在所有 TypeScript 提交中击败了7.94 %的用户
  // 内存消耗：46.7 MB, 在所有 TypeScript 提交中击败了9.83 %的用户
  const case1 = (nums: number[]): void => {
    const hash: Array<number> = [];
    let step = 0
    for (let i = 0, len = nums.length; i < len; i++) {
      if (nums[i] === 0) {
        hash.push(i)
      }
    }
    hash.forEach((i) => {
      nums.splice(i - step, 1)
      nums.push(0)
      step++
    })
    console.log(nums);

  }

  // case2: 补0法；时间复杂度：O(n)，空间复杂度：O(1)
  // 执行用时：84 ms, 在所有 TypeScript 提交中击败了84.12 %的用户
  // 内存消耗：46.3 MB, 在所有 TypeScript 提交中击败了33.17 %的用户
  const case2 = (nums: number[]): void => {
    const len = nums.length
    let j = 0
    for (let i = 0; i < len; i++) {
      if (nums[i] !== 0) {
        nums[j++] = nums[i]
      }
    }

    for (; j < len; j++) {
      nums[j] = 0
    }
    console.log(nums);

  }

  // case3: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
  // 执行用时：80 ms, 在所有 TypeScript 提交中击败了93.84 %的用户
  // 内存消耗：46.2 MB, 在所有 TypeScript 提交中击败了65.76 %的用户
  const case3 = (nums: number[]): void => {
    const len = nums.length
    let left = 0, right = 0
    while (right < len) {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
      }
      right++
    }
    console.log(nums);
  }

  const run = (): void => {
    const testData = [
      { nums: [0, 1, 0, 3, 12] },
      { nums: [0] },
    ];

    testData.forEach(({ nums }) => {
      const result = moveZeroes(nums)
      console.log(result);
    })
  }

  run()
}
