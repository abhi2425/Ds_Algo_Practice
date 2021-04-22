// optimized solution using memoization
//O(n*m^2)
//O(m^2)  --->space complexity
const bestSum = (targetSum, numbers, memo = {}) => {
   if (targetSum in memo) return memo[targetSum]
   if (targetSum === 0) return []
   if (targetSum < 0) return null
   let shortestCombination = null
   for (let num of numbers) {
      const remainder = targetSum - num
      const remainderCombination = bestSum(remainder, numbers, memo)
      if (remainderCombination !== null) {
         const combination = [...remainderCombination, num]
         if (shortestCombination === null || combination.length < shortestCombination.length)
            shortestCombination = combination
      }
   }
   memo[targetSum] = shortestCombination
   return memo[targetSum]
}
console.time('timer-1')
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5, 8]))
console.log(bestSum(100, [25, 50, 5, 7]))
console.log(bestSum(30, [4, 7]))
console.timeEnd('timer-1')

//iterative way using tabulation
const bestSum_Tabulation = (targetSum, numbers) => {
   const table = Array(targetSum + 1).fill(null)
   table[0] = []
   for (let i = 0; i <= targetSum; i++)
      if (table[i] !== null)
         for (const num of numbers) {
            const combination = [...table[i], num]
            if (!table[i + num] || table[i + num].length > combination.length)
               table[i + num] = combination
         }
   return table[targetSum]
}
console.time('timer-2')
console.log(bestSum_Tabulation(7, [5, 3, 4, 7]))
console.log(bestSum_Tabulation(8, [2, 3, 5, 8]))
console.log(bestSum_Tabulation(100, [25, 50, 5, 7]))
console.log(bestSum_Tabulation(30, [4, 7]))
console.timeEnd('timer-2')
