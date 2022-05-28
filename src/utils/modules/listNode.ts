export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export const createListNode = (arr: Array<number>, annularIndex?: number): ListNode => {
  let head: ListNode
  let current: ListNode
  let annular: ListNode
  arr.forEach((item, index) => {
    const obj = {
      val: item,
      next: index === arr.length - 1 ? annular : null
    }

    if (index === annularIndex) {
      annular = obj
    }

    if (index === 0) {
      head = obj
      current = head
    } else {
      current.next = obj
      current = current.next
    }
  })
  return head!
}
