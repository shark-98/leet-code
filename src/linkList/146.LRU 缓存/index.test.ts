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
    expect(num2).toBe(-1)

    lRUCache.put(4, 4);
    const num3 = lRUCache.get(1);
    expect(num3).toBe(-1)

    const num4 = lRUCache.get(3);
    expect(num4).toBe(3)

    const num5 = lRUCache.get(4);
    expect(num5).toBe(4)

  });
  it('is ok1', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 0);
    lRUCache.put(2, 2);
    const num1 = lRUCache.get(1);
    expect(num1).toBe(0)

    lRUCache.put(3, 3);
    const num2 = lRUCache.get(2);
    expect(num2).toBe(-1)

    lRUCache.put(4, 4);
    const num3 = lRUCache.get(1);
    expect(num3).toBe(-1)

    const num4 = lRUCache.get(3);
    expect(num4).toBe(3)

    const num5 = lRUCache.get(4);
    expect(num5).toBe(4)

  });
  it('is ok2', () => {
    const lRUCache = new LRUCache(2)
    const num1 = lRUCache.get(2);
    expect(num1).toBe(-1)

    lRUCache.put(2, 6);
    const num2 = lRUCache.get(1);
    expect(num2).toBe(-1)

    lRUCache.put(1, 5);
    lRUCache.put(1, 2);
    const num3 = lRUCache.get(1);
    expect(num3).toBe(2)

    const num4 = lRUCache.get(2);
    expect(num4).toBe(6)
  });
  it('is ok3', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(2, 1);
    lRUCache.put(1, 1);
    lRUCache.put(2, 3);
    lRUCache.put(4, 1);
    const num1 = lRUCache.get(1);
    expect(num1).toBe(-1)
    const num2 = lRUCache.get(2);
    expect(num2).toBe(3)
  });
});
