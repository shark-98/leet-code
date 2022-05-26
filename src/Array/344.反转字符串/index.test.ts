import { reverseString } from './index';

describe('reverseString', () => {
  it('is ok', () => {
    const testData = [
      { s: ["h", "e", "l", "l", "o"], result: ['o', 'l', 'l', 'e', 'h'] },
      { s: ["H", "a", "n", "n", "a", "h"], result: ['h', 'a', 'n', 'n', 'a', 'H'] },
    ];
    testData.forEach(({ s, result }) => {
      expect(reverseString(s)).toStrictEqual(result);
    })
  });
});
