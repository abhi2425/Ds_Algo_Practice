class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}
class Stack {
   constructor() {
      this.first = null
      this.last = null
      this.size = 0
   }
   push(value) {
      //unShift
      let newNode = new Node(value)
      if (!this.first) {
         this.first = newNode
         this.last = this.first
      } else {
         newNode.next = this.first
         this.first = newNode
      }

      return ++this.size
   }
   pop() {
      //shift
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
      let stackArray = []
      for (let i = 0; i < this.size; i++) {
         stackArray.push(current.value)
         current = current.next
      }
      return stackArray
   }
}

const stack = new Stack()
stack.push('Hello world!')
stack.push({ name: 'Abhinav' })
stack.push(35)
console.log(stack.getBottom(), stack.pop(), stack.getTop(), stack.pop(), stack.pop(), stack.pop())
console.log(stack.toArray(), stack)

module.exports = Stack
