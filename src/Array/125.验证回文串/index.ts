{
  function isPalindrome(s: string): boolean {
    return case4(s)
  };

  // case1: 反转字符串；时间复杂度：O(n)，空间复杂度：O(n)
  // 执行用时：68 ms, 在所有 TypeScript 提交中击败了90.26 %的用户
  // 内存消耗：49.5 MB, 在所有 TypeScript 提交中击败了11.24 %的用户
  const case1 = (s: string): boolean => {
    let result = false
    if (s === '' || (s && s.length === 1)) {
      result = true
    } else {
      const arr = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase().split('')
      const arrSource = JSON.parse(JSON.stringify(arr))
      arr.reverse()
      if (arrSource.join('') == arr.join('')) {
        result = true
      }
    }

    return result
  }

  // case2: 反转字符串Plus；时间复杂度：O(n)，空间复杂度：O(n)
  // 执行用时：72 ms, 在所有 TypeScript 提交中击败了80.90 %的用户
  // 内存消耗：46.9 MB, 在所有 TypeScript 提交中击败了34.83 %的用户
  const case2 = (s: string): boolean => {
    let result = false
    if (s === '' || (s && s.length === 1)) {
      result = true
    } else {
      const str = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase()
      const len = str.length
      let str1 = ''
      for (let i = len - 1; i >= 0; i--) {
        str1 += str[i]
      }

      if (str1 == str) {
        result = true
      }
    }

    return result
  }

  // case3: 双指针；时间复杂度：O(n/2)，空间复杂度：O(n)
  // 执行用时：68 ms, 在所有 TypeScript 提交中击败了90.26 %的用户
  // 内存消耗：44.2 MB, 在所有 TypeScript 提交中击败了84.64 %的用户
  const case3 = (s: string): boolean => {
    let result = false
    if (s === '' || (s && s.length === 1)) {
      result = true
    } else {
      const str = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
      const len = str.length - 1;
      result = true;
      for (let i = 0; i <= len / 2; i++) {
        const left = i;
        const right = len - i;
        if (left > right || str[left] !== str[right]) {
          result = false;
          break;
        }
      }
    }

    return result
  }

  // case4: 双指针Plus；时间复杂度：O(n)，空间复杂度：O(1)
  // 执行用时：72 ms, 在所有 TypeScript 提交中击败了80.90 %的用户
  // 内存消耗：45 MB, 在所有 TypeScript 提交中击败了56.56 %的用户
  // 实际效果并没有很好
  const case4 = (s: string): boolean => {
    if (s.length <= 1) {
      return true
    }
    let left = 0;
    let right = s.length - 1;
    const reg = /[^0-9a-zA-Z]/;
    while (left < right) {
      if (reg.test(s[left])) {
        left++
      } else if (reg.test(s[right])) {
        right--
      } else if (s[left].toLocaleLowerCase() === s[right].toLocaleLowerCase()) {
        left++, right--
      } else {
        return false
      }
    }
    return true
  }

  const run = (): void => {
    const testData = [
      'A man, a plan, a canal: Panama',
      'race a car',
      'ab_A',
      'OP',
      '0P',
      '.,'
    ];

    testData.forEach((item) => {
      const result = isPalindrome(item)
      console.log(result);
    })
  }

  run()
}
