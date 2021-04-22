//Frequency counter concept
function same(arr1, arr2) {
   if (arr1.length !== arr2.length) return false

   let counter1 = {}
   let counter2 = {}
   for (let val of arr1) counter1[val] = (counter1[val] || 0) + 1
   for (let val of arr2) counter2[val] = (counter2[val] || 0) + 1
   for (let key in counter1) {
      if (!(key ** 2 in counter2)) return false
      if (counter2[key ** 2] !== counter1[key]) return false
   }
   return true
}
console.time('timer')
console.log(
   same([1, 2, 3, 2, 5, 11, 4, 6, 25, 30, 12], [9, 1, 4, 4, 121, 25, 16, 36, 625, 900, 144]),
)
console.timeEnd('timer')
