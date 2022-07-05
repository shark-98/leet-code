
interface IData {
  [key: number]: number,
}
export class LRUCache {
  capacity: number = 0
  data: Array<IData> = []
  constructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number): number {

  }

  put(key: number, value: number): void {
    const obj = { key: value }
    if (this.data.length >= this.capacity) {
      this.data.pop()
    }
    this.data.push(obj)
  }
}
