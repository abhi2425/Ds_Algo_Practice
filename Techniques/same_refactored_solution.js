//Frequency counter concept
function same(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false
   }
   let counter1 = {}
   let counter2 = {}
   for (let val of arr1) {
      counter1[val] = (counter1[val] || 0) + 1
   }
   for (let val of arr2) {
      counter2[val] = (counter2[val] || 0) + 1
   }
   console.log(counter1)
   console.log(counter2)
   for (let key in counter1) {
      if (!(key ** 2 in counter2)) {
         return false
      }
      if (counter2[key ** 2] !== counter1[key]) {
         return false
      }
   }
   return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])
