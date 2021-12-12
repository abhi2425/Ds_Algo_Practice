class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

class SinglyLinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.length = 0
   }
   push(val) {
      //O(1)
      let newNode = new Node(val)
      if (!this.head) {
         this.head = newNode
         this.tail = this.head
      } else {
         this.tail.next = newNode
         this.tail = newNode
      }
      this.length++
      return this
   }
   traverse() {
      let current = this.head
      while (current) {
         console.log(current)
         current = current.next
      }
   }
   pop() {
      //O(N)
      let previous = null
      let current = this.head
      while (current) {
         if (current.next === null) {
            this.head = this.tail = null
            this.length = 0
            return
         }
         if (current.next.next === null) {
            previous = current
            this.tail = previous
            const poppedValue = current.next
            current.next = null
            this.length--
            return poppedValue
         }
         current = current.next
      }
   }
   shift() {
      //O(1)
      if (this.head === null) {
         this.tail = null
         return undefined
      }
      const currentHead = this.head
      this.head = this.head.next
      this.length--
      return currentHead
   }
   unShift(val) {
      //O(1)
      let newNode = new Node(val)
      if (!this.head) {
         this.head = newNode
         this.tail = this.head
      } else {
         newNode.next = this.head
         this.head = newNode
      }
      this.length++
      return this
   }
   get(index) {
      //O(N)
      let current = this.head
      let valueAtIndex = null
      if (index === 0) {
         return current.value
      }
      if (index < 0 || index >= this.length) {
         return valueAtIndex
      }
      for (let i = 1; i <= index; i++) {
         current = current.next
         valueAtIndex = current.value
      }
      return valueAtIndex
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
      //O(n)
      let newNode = new Node(newItem)
      let current = this.head
      let previous = null
      if (index < 0 || index > this.length) return false

      if (index === 0) return !!this.unShift(newItem)

      if (index === this.length - 1) return !!this.push(newItem)

      for (let i = 1; i <= index; i++) {
         previous = current
         current = current.next
      }
      newNode.next = current
      previous.next = newNode
      this.length++
      return true
   }
   remove(index) {
      //O(N)
      let current = this.head
      let previous = null
      if (index < 0 || index > this.length) return null

      if (index === 0) return this.shift()

      if (index === this.length - 1) return this.pop()

      for (let i = 1; i <= index; i++) {
         previous = current
         current = current.next
      }
      previous.next = previous.next.next
      this.length--
      return current.value
   }
   reverse() {
      let currentNode = this.head
      ;[this.head, this.tail] = [this.tail, this.head]
      let prev = null,
         next
      for (let i = 0; i < this.length; i++) {
         next = currentNode.next
         currentNode.next = prev
         prev = currentNode
         currentNode = next
      }
      return this
   }
   toArray() {
      let current = this.head
      let listArray = []
      for (let i = 0; i < this.length; i++) {
         listArray.push(current.value)
         current = current.next
      }
      return listArray
   }
}

let list = new SinglyLinkedList()
list.push('HELLO')
list.push('Morning')
list.push('Noon')
list.push('Night')
console.table(list.toArray())
list.reverse()
console.log(list.toArray())

module.exports = SinglyLinkedList
