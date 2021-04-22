//O(n^m*m) recursive way
const howSum = (targetSum, numbers) => {
   if (targetSum === 0) return []
   if (targetSum < 0) return null

   for (let num of numbers) {
      let remainder = targetSum - num
      const combination = howSum(remainder, numbers)
      if (combination !== null) return [...combination, num]
   }
   return null
}
console.time('timer-1')
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(8, [3, 5, 2, 8]))
console.log(howSum(100, [25, 50, 5, 7]))
console.log(howSum(30, [7]))
console.timeEnd('timer-1')

//optimization using memoization
const howSum_new = (targetSum, numbers, memo = {}) => {
   if (targetSum in memo) return memo[targetSum]
   if (targetSum === 0) return []
   if (targetSum < 0) return null

   for (let num of numbers) {
      let remainder = targetSum - num
      const combination = howSum(remainder, numbers)
      if (combination !== null) {
         memo[targetSum] = [...combination, num]
         return memo[targetSum]
      }
   }
   memo[targetSum] = null
   return memo[targetSum]
}

console.time('timer-2')
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(8, [3, 5, 2, 8]))
console.log(howSum(100, [25, 50, 5, 7]))
console.log(howSum(30, [7]))
console.timeEnd('timer-2')

// iterative way using tabulation method

const howSum_Tabulation = (targetSum, numbers) => {
   const table = Array(targetSum + 1).fill(null)
   table[0] = []
   for (let i = 0; i <= targetSum; i++)
      if (table[i] !== null) for (const num of numbers) table[i + num] = [...table[i], num]
   return table[targetSum]
}
console.time('timer-3')
console.log(howSum_Tabulation(7, [5, 3, 4, 7]))
console.log(howSum_Tabulation(8, [3, 5, 2, 8]))
console.log(howSum_Tabulation(100, [25, 50, 5, 7]))
console.log(howSum_Tabulation(30, [7]))
console.timeEnd('timer-3')
