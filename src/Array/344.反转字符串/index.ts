{
  function reverseString(s: string[]): void {
    return case1(s)
  };

  // case1: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
  // 执行用时：80 ms, 在所有 TypeScript 提交中击败了95.61 %的用户
  // 内存消耗：49.1 MB, 在所有 TypeScript 提交中击败了57.19 %的用户
  const case1 = (s: string[]): void => {
    let left = 0, right = s.length - 1

    while(left <= right) {
      const temp = s[right]
      s[right--] = s[left]
      s[left++] = temp
    }
    console.log(s);
  }

  const run = (): void => {
    const testData = [
      { s: ["h", "e", "l", "l", "o"] },
      { s: ["H", "a", "n", "n", "a", "h"] },
    ];

    testData.forEach(({ s }) => {
      const result = reverseString(s)
      console.log(result);
    })
  }

  run()
}
