class MaxBinaryHeap {
   constructor() {
      this.values = [41, 39, 33, 18, 27, 12]
   }
   bubbleUp(element) {
      let elem_index = this.values.length - 1
      let parentIndex
      while (true) {
         parentIndex = Math.floor((elem_index - 1) / 2)
         if (element > this.values[parentIndex]) {
            ;[this.values[elem_index], this.values[parentIndex]] = [
               this.values[parentIndex],
               this.values[elem_index],
            ]
            elem_index = parentIndex
         } else break
      }
   }
   insert(element) {
      //O(logN)
      this.values.push(element)
      this.bubbleUp(element)
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
         element = values[elem_index]
         child_1 = values[childIndex_1]
         child_2 = values[childIndex_2]

         if (element > child_1 && element > child_2) break
         else if (element < child_1 && child_1 > child_2) {
            ;[values[childIndex_1], values[elem_index]] = [values[elem_index], values[childIndex_1]]
            if (childIndex_1 < length) elem_index = childIndex_1
            else break
         } else if (element < child_2) {
            ;[values[childIndex_2], values[elem_index]] = [values[elem_index], values[childIndex_2]]
            if (childIndex_2 < length) elem_index = childIndex_2
            else break
         } else break
      }
   }
   extractMax() {
      //O(logN)
      let last_index = this.values.length - 1
      ;[this.values[0], this.values[last_index]] = [this.values[last_index], this.values[0]]
      let maxValue = this.values.pop()
      this.bubbleDown()
      return maxValue
   }
}

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(55)
console.log(maxBinaryHeap.values)
maxBinaryHeap.extractMax()
console.table(maxBinaryHeap.values)
