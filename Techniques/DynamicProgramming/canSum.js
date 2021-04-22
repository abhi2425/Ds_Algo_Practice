// O(n^m)
// O(m) ----> space complexity
const canSum = (targetSum, numbers) => {
   if (targetSum === 0) return true
   if (targetSum < 0) return false
   for (let num of numbers) {
      const remainder = targetSum - num
      if (canSum(remainder, numbers) === true) return true
   }
   return false
}
console.time('timer-1')
console.log(canSum(7, [3]))
console.log(canSum(7, [5, 3]))
console.log(canSum(8, [2, 3, 5])) // 2+2+2+2 or 5+3
console.log(canSum(300, [4, 7]))
console.timeEnd('timer-1')

// optimized solution using memoization
// O(n*m)
//O(m)   ---> space complexity
const canSum_new = (targetSum, numbers, memo = {}) => {
   if (targetSum in memo) return memo[targetSum]
   if (targetSum === 0) return true
   if (targetSum < 0) return false

   for (let num of numbers) {
      const remainder = targetSum - num
      if (canSum_new(remainder, numbers, memo)) {
         memo[targetSum] = true
         return true
      }
   }
   memo[targetSum] = false
   return false
}
console.time('timer-2')
console.log(canSum_new(7, [3]))
console.log(canSum_new(7, [5, 3]))
console.log(canSum_new(8, [2, 3, 5]))
console.log(canSum_new(300, [4, 7])) //true --> [7,7,4,4,4,4]
console.timeEnd('timer-2')

//iterative way using tabulation method

const canSum_Tabulation = (targetSum, numbers) => {
   const table = Array(targetSum + 1).fill(false)
   table[0] = true
   for (let i = 0; i <= targetSum; i++)
      if (table[i]) for (const num of numbers) table[i + num] = true
   return table[targetSum]
}
console.time('timer-3')
console.log(canSum_Tabulation(7, [3]))
console.log(canSum_Tabulation(7, [5, 3]))
console.log(canSum_Tabulation(8, [2, 3, 5]))
console.log(canSum_Tabulation(300, [4, 7]))
console.timeEnd('timer-3')
