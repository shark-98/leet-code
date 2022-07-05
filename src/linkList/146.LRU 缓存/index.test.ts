import { LRUCache } from './index';

describe('LRUCache', () => {
  it('is ok', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 1);
    lRUCache.put(2, 2);
    const num1 = lRUCache.get(1);
    expect(num1).toBe(1)
    
    lRUCache.put(3, 3);
    const num2 = lRUCache.get(2);
    expect(num1).toBe(-1)

    lRUCache.put(4, 4);
    const num3 = lRUCache.get(1);
    expect(num1).toBe(-1)

    const num4 = lRUCache.get(3);
    expect(num1).toBe(3)

    const num5 = lRUCache.get(4);
    expect(num1).toBe(4)

  });
});
