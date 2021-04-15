const Queue = require('../StackAndQueue/Queue')

class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}
class BinarySearchTree {
   constructor() {
      this.root = null
   }

   //    iterative way of inserting in Binary Search Tree
   insert(value) {
      const node = new Node(value)
      let current = this.root

      if (!this.root) {
         this.root = node
         return this
      }
      while (true) {
         if (value === current.value) return
         if (value < current.value) {
            if (!current.left) {
               current.left = node
               return this
            }
            current = current.left
         } else if (value > current.value) {
            if (!current.right) {
               current.right = node
               return this
            }
            current = current.right
         }
      }
   }

   // Recursive way of inserting in Binary Search Tree
   insert(value) {
      const node = new Node(value)
      let current = this.root
      const insertRecursive = () => {
         if (!this.root) {
            this.root = node
            return this
         }
         if (value === current.value) return
         if (value < current.value) {
            if (!current.left) {
               current.left = node
               return this
            }
            current = current.left
            insertRecursive()
         } else if (value > current.value) {
            if (!current.right) {
               current.right = node
               return this
            }
            current = current.right
            insertRecursive()
         }
      }
      insertRecursive()
   }
   contains(value) {
      let current = this.root
      if (!current) return false
      while (true) {
         if (value === current.value) return true
         if (value < current.value) {
            if (!current.left) return false
            current = current.left
         } else if (value > current.value) {
            if (!current.right) return false
            current = current.right
         }
      }
   }

   find = (value) => {
      let current = this.root
      if (!current) return false
      while (true) {
         if (value === current.value) return current
         if (value < current.value) {
            if (!current.left) return
            current = current.left
         } else if (value > current.value) {
            if (!current.right) return
            current = current.right
         }
      }
   }

   BreadthFirstSearch() {
      let allNodes = []
      let node = this.root
      const q = new Queue()
      q.enqueue(node)
      while (q.size) {
         node = q.dequeue()
         allNodes.push(node.value)
         node.left && q.enqueue(node.left)
         node.right && q.enqueue(node.right)
      }
      return allNodes
   }
}

//         15    --->
//      7      21
//    6   8        25
//          9           99

const tree = new BinarySearchTree()
tree.insert(15)
tree.insert(7)
tree.insert(21)
tree.insert(8)
tree.insert(6)
tree.insert(25)
tree.insert(99)
tree.insert(9)
console.log(tree)
console.log(tree.contains(99), tree.find(8))
console.log(tree.BreadthFirstSearch())

module.exports = BinarySearchTree
