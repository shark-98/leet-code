import { isPalindrome } from './index';

describe('isPalindrome', () => {
  it('is ok', () => {
    const testData = [
      { s: 'A man, a plan, a canal: Panama', result: true },
      { s: 'race a car', result: false },
      { s: 'ab_A', result: true },
      { s: 'OP', result: false },
      { s: '0P', result: false },
      { s: '.', result: true },
    ];
    testData.forEach(({ s, result }) => {
      expect(isPalindrome(s)).toBe(result);
    })
  });
});
