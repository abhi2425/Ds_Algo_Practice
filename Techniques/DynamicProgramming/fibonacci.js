// n---> nth fibonacci element
//O(2^n)
const fib = (n) => {
   if (n <= 2) return 1
   return fib(n - 1) + fib(n - 2)
}
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
// console.log(fib(50)) //-->it will freeze

//Optimized  using Memoization technique
//O(n)  more faster than iterative O(n)
const fib_new = (n, memo = {}) => {
   if (n in memo) return memo[n]
   if (n <= 2) return 1
   memo[n] = fib_new(n - 1, memo) + fib_new(n - 2, memo)
   return memo[n]
}
console.log(fib_new(6))
console.log(fib_new(7))
console.log(fib_new(8))

console.time('timer')
console.log(fib_new(200))
console.timeEnd('timer')
