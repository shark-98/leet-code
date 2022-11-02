// case1
export class LRUCache1 {
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


// case2
class ListNode {
  next: ListNode | null;
  prev: ListNode | null;
  key: string | number;
  value: string | number;
  constructor(key?: string | number, value?: any) {
    this.key = key!
    this.value = value
    this.next = null
    this.prev = null
  }
}
export class LRUCache {
  capacity: number;
  count: number;
  dummyHead: ListNode;
  dummyTail: ListNode;
  hash: any;
  constructor(capacity: number) {
    this.capacity = capacity
    this.hash = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key: string | number) {
    let node = this.hash[key]
    if (node == null) return -1
    this.moveToHead(node)
    return node.value
  }

  put(key: string | number, value: any) {
    let node = this.hash[key]
    if (node == null) {
      if (this.count == this.capacity) {
        this.removeLRUItem()
      }
      let newNode = new ListNode(key, value)
      this.hash[key] = newNode
      this.addToHead(newNode)
      this.count++
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  moveToHead(node: ListNode) {
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeFromList(node: ListNode) {
    let temp1 = node.prev!
    let temp2 = node.next!
    temp1.next = temp2
    temp2.prev = temp1
  }

  addToHead(node: ListNode) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    if (this.dummyHead.next) {
      this.dummyHead.next.prev = node
    }
    this.dummyHead.next = node
  }

  removeLRUItem() {
    let tail = this.popTail()
    delete this.hash[tail.key]
    this.count--
  }

  popTail() {
    let tail = this.dummyTail.prev
    this.removeFromList(tail!)
    return tail!
  }
}
