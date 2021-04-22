// O(2^m+n)
const gridTraveller = (m, n) => {
   if (m === 1 && n === 1) return 1
   if (m === 0 || n === 0) return 0
   return gridTraveller(m - 1, n) + gridTraveller(m, n - 1)
}
console.log(gridTraveller(1, 1))
console.log(gridTraveller(2, 3))
console.log(gridTraveller(3, 3))
console.log(gridTraveller(5, 8))
// console.log(gridTraveller(18, 18)) --> freezes

console.log('-------------------------')

//Optimized using memoization
const gridTraveller_new = (m, n, memo = {}) => {
   const key = m + ',' + n
   if (key in memo) return memo[key]
   if (m === 1 && n === 1) return 1
   if (m === 0 || n === 0) return 0
   memo[key] = gridTraveller_new(m - 1, n, memo) + gridTraveller_new(m, n - 1, memo)
   return memo[key]
}
console.time('timer-1')
console.log(gridTraveller_new(1, 1))
console.log(gridTraveller_new(2, 3))
console.log(gridTraveller_new(3, 3))
console.log(gridTraveller_new(5, 8))
console.log(gridTraveller_new(180, 180))
console.timeEnd('timer-1')

//iterative way tabulation method
// faster than recursive one
const gridTraveller_Tabulation = (m, n) => {
   const table = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0))
   table[1][1] = 1

   for (let i = 0; i <= m; i++)
      for (let j = 0; j <= n; j++) {
         const current = table[i][j]
         if (j + 1 <= n) table[i][j + 1] += current
         if (i + 1 <= m) table[i + 1][j] += current
      }
   return table[m][n]
}
console.time('timer-2')
console.log(gridTraveller_Tabulation(1, 1))
console.log(gridTraveller_Tabulation(2, 3))
console.log(gridTraveller_Tabulation(3, 3))
console.log(gridTraveller_Tabulation(5, 8))
console.log(gridTraveller_Tabulation(180, 180))
console.timeEnd('timer-2')
