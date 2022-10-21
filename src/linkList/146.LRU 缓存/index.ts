export class LRUCache {
  capacity: number;
  map: Map<number, number> = new Map();
  constructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number): number {
    const data = this.map;
    if (!data.has(key)) {
      return -1;
    }

    const value = data.get(key) ?? -1;
    // 返回数据前,先删除原数据,然后在添加,就可以保持在最新
    data.delete(key);
    data.set(key, value);

    return value;
  }
  put(key: number, value: number): void {
    const data = this.map;

    // 如果存在该对象,则直接删除
    if (data.has(key)) {
      data.delete(key);
    }
    // 将数据对象添加到map中
    data.set(key, value);

    if (data.size > this.capacity) {
      // 如果map长度超过最大值,则取出map中的第一个元素,然后删除
      const delKey = data.keys().next().value
      data.delete(delKey);
    }
  }
}
