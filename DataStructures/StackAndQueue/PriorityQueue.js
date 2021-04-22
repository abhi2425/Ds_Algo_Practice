class Node {
   constructor(value, priority) {
      this.value = value
      this.priority = priority
   }
}
//MinBinaryHeap Implementation
class PriorityQueue {
   constructor() {
      this.values = []
   }
   bubbleUp(node) {
      let elem_index = this.values.length - 1
      let parentIndex
      while (true) {
         parentIndex = Math.floor((elem_index - 1) / 2)
         if (node.priority < this.values[parentIndex]?.priority) {
            ;[this.values[elem_index], this.values[parentIndex]] = [
               this.values[parentIndex],
               this.values[elem_index],
            ]
            elem_index = parentIndex
         } else break
      }
   }
   enqueue(value, priority) {
      const newNode = new Node(value, priority)
      this.values.push(newNode)
      this.bubbleUp(newNode)
      return this.values
   }
   bubbleDown() {
      let values = this.values
      let length = values.length - 1
      let elem_index = 0,
         element
      let childIndex_1, child_1
      let childIndex_2, child_2

      while (true) {
         childIndex_1 = 2 * elem_index + 1
         childIndex_2 = 2 * elem_index + 2
         element = values[elem_index].priority
         child_1 = values[childIndex_1]?.priority
         child_2 = values[childIndex_2]?.priority

         if (element < child_1 && element < child_2) break
         else if (element > child_1 && child_1 < child_2) {
            ;[values[childIndex_1], values[elem_index]] = [values[elem_index], values[childIndex_1]]
            if (childIndex_1 < length) elem_index = childIndex_1
            else break
         } else if (element > child_2) {
            ;[values[childIndex_2], values[elem_index]] = [values[elem_index], values[childIndex_2]]
            if (childIndex_2 < length) elem_index = childIndex_2
            else break
         } else break
      }
   }
   dequeue() {
      let last_index = this.values.length - 1
      ;[this.values[0], this.values[last_index]] = [this.values[last_index], this.values[0]]
      let maxPriorityNode = this.values.pop()
      this.bubbleDown()
      return maxPriorityNode
   }
}

const hospital = new PriorityQueue()

hospital.enqueue('Common Cold', 6)
hospital.enqueue('GunShot Wound', 1)
hospital.enqueue('fever', 4)
hospital.enqueue('Rash', 5)
hospital.enqueue('Dog Bite', 2)
hospital.enqueue('Hepatitis', 3)
console.log(hospital)
console.log(hospital.dequeue(), hospital.dequeue(), hospital.dequeue())
