class Node {
   constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
   }
}
class DoublyLinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.length = 0
   }
   push(val) {
      let newNode = new Node(val)
      if (!this.head) {
         this.head = newNode
         this.tail = this.head
      } else {
         this.tail.next = newNode
         newNode.prev = this.tail
         this.tail = newNode
      }
      this.length++
      return this
   }
   pop() {
      let poppedValue = this.tail
      if (!this.head) return undefined
      if (this.length === 1) {
         this.head = null
         this.tail = null
      } else {
         this.tail = this.tail.prev
         this.tail.next = null
         poppedValue.prev = null
      }
      this.length--
      return poppedValue
   }
   shift() {
      let oldHead = this.head
      if (!oldHead) return null

      if (this.length === 1) {
         oldHead = this.tail = null
      } else {
         this.head = oldHead.next
         this.head.prev = null
         oldHead.next = null
      }
      this.length--
      return oldHead
   }
   unShift(value) {
      let newNode = new Node(value)
      if (!this.head) {
         this.head = newNode
         this.tail = this.head
      } else {
         newNode.next = this.head
         this.head.prev = newNode
         newNode.prev = null
         this.head = newNode
      }
      this.length++
      return this
   }
   get(index) {
      let current = this.head
      if (index === 0) {
         return current.value
      }
      if (index < 0 || index >= this.length) {
         return null
      }
      for (let i = 0; i < index; i++) {
         current = current.next
      }
      return current
   }
   set(index, newItem) {
      //O(N)
      let current = this.head
      let previousValue
      for (let i = 1; i <= index; i++) {
         current = current.next
         previousValue = current.value
      }
      current.value = newItem
      return previousValue
   }
   insert(index, newItem) {
      let current = this.head
      let newNode = new Node(newItem)
      let previous = null

      for (let i = 0; i < index; i++) {
         current = current.next
         previous = current.prev
      }
      newNode.next = current
      previous.next = newNode
      newNode.prev = previous
      current.prev = newNode
      this.length++
      return true
   }
   remove(index) {
      let current = this.head
      let previous = null
      if (index < 0 || index > this.length) return null

      if (index === 0) return this.shift()

      if (index === this.length - 1) return this.pop()

      for (let i = 0; i < index; i++) {
         current = current.next
         previous = current.prev
      }
      previous.next = current.next
      current.next.prev = previous
      current.prev = null
      current.next = null
      this.length--
      return current
   }
}
let list = new DoublyLinkedList()

list.push('hello')
list.push('Boy')
list.push('how')
list.push('are u')
console.table(list.unShift('MORNING'))
console.table(list)
console.table(list.get(2))
console.table(list.insert(3, 'WHAT'))
console.table(list.get(3))
console.table(list.remove(1))
console.table(list.get(1))
console.table(list.get(2))
console.table(list.get(3))
console.table(list.get(4))
console.table(list.get(5))

module.exports = DoublyLinkedList
