{
  function intersection(nums1: number[], nums2: number[]): number[] {
    return case3(nums1, nums2)
  };

  // case1: 双层for循环；时间复杂度：O(n^3)，空间复杂度：O(n)
  // 执行用时：80 ms, 在所有 TypeScript 提交中击败了14.89 %的用户
  // 内存消耗：43.6 MB, 在所有 TypeScript 提交中击败了93.53 %的用户
  const case1 = (nums1: number[], nums2: number[]): number[] => {
    const arr: Array<number> = []
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j] && !arr.includes(nums1[i])) {
          arr.push(nums1[i])
        }
      }
    }

    return arr
  }

  // case2: 哈希表+array；时间复杂度：O(n^2)，空间复杂度：O(n)
  // 执行用时：56 ms, 在所有 TypeScript 提交中击败了98.38 %的用户
  // 内存消耗：44.2 MB, 在所有 TypeScript 提交中击败了10.04 %的用户
  const case2 = (nums1: number[], nums2: number[]): number[] => {
    const arr: Array<number> = []
    interface IHash {
      [key: number]: boolean
    }
    const hash: IHash = {}
    for (let i = 0; i < nums1.length; i++) {
      if (!hash[nums1[i]]) {
        hash[nums1[i]] = true
      }
    }

    for (let j = 0; j < nums2.length; j++) {
      if (hash[nums2[j]] && !arr.includes(nums2[j])) {
        arr.push(nums2[j])
      }
    }

    return arr
  }

  // case3: 哈希表+set；时间复杂度：O(n)，空间复杂度：O(n)
  // 执行用时：52 ms, 在所有 TypeScript 提交中击败了99.68 %的用户
  // 内存消耗：44 MB, 在所有 TypeScript 提交中击败了39.48 %的用户
  const case3 = (nums1: number[], nums2: number[]): number[] => {
    const set = new Set()
    interface IHash {
      [key: number]: boolean
    }
    const hash: IHash = {}
    for (let i = 0; i < nums1.length; i++) {
      if (!hash[nums1[i]]) {
        hash[nums1[i]] = true
      }
    }

    for (let j = 0; j < nums2.length; j++) {
      if (hash[nums2[j]]) {
        set.add(nums2[j])
      }
    }

    return Array.from(set) as Array<number>
  }

  const run = (): void => {
    const testData = [
      { nums1: [1, 2, 2, 1], nums2: [2, 2] },
      { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] },
    ];

    testData.forEach(({ nums1, nums2 }) => {
      const result = intersection(nums1, nums2)
      console.log(result);
    })
  }

  run()
}
