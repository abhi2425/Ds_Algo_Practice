// This can be solved with multiple pointer but
// I have solved this question using the frequency counter concept
const countSpecificValue = (array) => {
   let counter = {}
   for (const number of array) {
      counter[number] = (counter[number] || 0) + 1
   }

   return Object.keys(counter).length
}
console.log(countSpecificValue([2, 3, 2, 3, 1, 3, 2, 1, 5, 3, 2, 4, 4, 5]))
//Another way-->
console.log(Array(...new Set([2, 3, 2, 3, 1, 3, 2, 1, 5, 3, 2, 4, 4, 5])).length)
