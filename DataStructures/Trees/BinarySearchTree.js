const Queue = require('../StackAndQueue/Queue')
const Stack = require('../StackAndQueue/Stack')
class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
      this.count = 0
   }
}
class BinarySearchTree {
   constructor() {
      this.root = null
      this.size = 0
   }
   //    iterative way of inserting in Binary Search Tree
   insert(value) {
      const node = new Node(value)
      let current = this.root
      if (!this.root) {
         this.root = node
         this.size++
         return this
      }
      while (true) {
         if (value === current.value) return
         if (value < current.value) {
            if (!current.left) {
               current.left = node
               this.size++
               return this
            }
            current = current.left
         } else if (value > current.value) {
            if (!current.right) {
               current.right = node
               this.size++
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
            this.size++
            return this
         }
         if (value === current.value) return
         if (value < current.value) {
            if (!current.left) {
               current.left = node
               this.size++
               return this
            }
            current = current.left
            insertRecursive()
         } else if (value > current.value) {
            if (!current.right) {
               current.right = node
               this.size++
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
      if (!current) return null
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
   getSmallest = () => {
      let current = this.root
      if (!current) return null
      while (true) {
         if (!current.left) return current
         current = current.left
      }
   }
   getLargest = () => {
      let current = this.root
      if (!current) return null
      while (true) {
         if (!current.right) return current
         current = current.right
      }
   }
   // remove = (value) => {
   //    let deleteNode = this.find(value)

   //    if (!deleteNode.left && deleteNode.right) {
   //    }
   // }
   breadthFirstSearch() {
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
   // Iterative way
   DFSPreOrder() {
      let node = null,
         stack = new Stack()
      const allNodes = []
      stack.push(this.root)
      while (stack.size) {
         node = stack.pop()
         allNodes.push(node.value)
         node.right && stack.push(node.right)
         node.left && stack.push(node.left)
      }
      return allNodes
   }
   //Recursive way
   DFSPreOrder() {
      const current = this.root
      const allNodes = []
      const traverse = (node) => {
         allNodes.push(node.value)
         node.left && traverse(node.left)
         node.right && traverse(node.right)
      }
      traverse(current)
      return allNodes
   }
   //Recursive way
   DFSPostOrder() {
      const current = this.root
      const allNodes = []
      const traverse = (node) => {
         node.left && traverse(node.left)
         node.right && traverse(node.right)
         allNodes.push(node.value)
      }
      traverse(current)
      return allNodes
   }
   //Recursive way  -->Ascending Order
   DFSInOrder_ASC() {
      const current = this.root
      const allNodes = []
      const traverse = (node) => {
         node.left && traverse(node.left)
         allNodes.push(node.value)
         node.right && traverse(node.right)
      }
      traverse(current)
      return allNodes
   }
   //Recursive way --->Descending Order
   DFSInOrder_DESC() {
      const current = this.root
      const allNodes = []
      const traverse = (node) => {
         node.right && traverse(node.right)
         allNodes.push(node.value)
         node.left && traverse(node.left)
      }
      traverse(current)
      return allNodes
   }
}

//          15    --->
//      7       21  ------>
//   6      8        25
//       7.5      9       99
//                      88
const tree = new BinarySearchTree()
tree.insert(15)
tree.insert(7)
tree.insert(21)
tree.insert(8)
tree.insert(6)
tree.insert(25)
tree.insert(99)
tree.insert(9)
tree.insert(7.5)
tree.insert(88)
console.log(tree.getLargest(), tree.getSmallest())
console.log(tree.contains(99), tree.find(8))
console.log(tree.breadthFirstSearch(), tree.size)
console.table(tree.DFSPreOrder())
console.table(tree.DFSPostOrder())
console.log(tree.DFSInOrder_ASCENDING(), tree.DFSInOrder_DESCENDING())

module.exports = BinarySearchTree
