function same(arr1, arr2) {
   if (arr1.length !== arr2.length) return false
   for (let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if (correctIndex === -1) return false
      arr2.splice(correctIndex, 1)
   }
   return true
}
console.time('timer')
console.log(
   same([1, 2, 3, 2, 5, 11, 4, 6, 25, 30, 12], [9, 1, 4, 4, 121, 25, 16, 36, 625, 900, 144]),
)
console.timeEnd('timer')
// can be solved using frequency counter concept
