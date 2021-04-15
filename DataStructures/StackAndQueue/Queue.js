class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}
class Queue {
   constructor() {
      this.first = null
      this.last = null
      this.size = 0
   }
   enqueue(value) {
      // push
      let newNode = new Node(value)
      if (!this.first) {
         this.first = newNode
         this.tail = this.first
      } else {
         this.tail.next = newNode
         this.tail = newNode
      }

      return ++this.size
   }
   dequeue() {
      // shift
      let poppedValue = this.first?.value
      if (!this.first) return null
      this.last = this.first === this.last ? null : this.last
      this.first = this.first.next
      this.size--
      return poppedValue
   }
   getTop = () => this.first?.value
   getBottom = () => this.last?.value
   toArray() {
      let current = this.first
      let qArray = []
      for (let i = 0; i < this.size; i++) {
         qArray.push(current.value)
         current = current.next
      }
      return qArray
   }
}
module.exports = Queue
const q = new Queue()

console.log(q.dequeue())
q.enqueue('hello')
q.enqueue('world')
console.log(q.enqueue('test'))
console.log(q.dequeue(), q.toArray(), q.size)
