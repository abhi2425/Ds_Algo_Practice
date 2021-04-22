// iterative Way
const fibonacciGenerator = (firstInput, secondInput, length) => {
   if (firstInput === 0 && secondInput === 0) return console.log('0 not allowed for both inputs')
   let series = [firstInput, secondInput]
   for (let i = 0; i < length - 2; i++) {
      series = series.concat(series[i] + series[i + 1])
   }
   return series[length - 1]
}

console.time('timer-1')
console.log(fibonacciGenerator(1, 1, 40))
console.timeEnd('timer-1')

//recursive way
//O(2^n)
const fib = (n) => {
   if (n <= 2) return 1
   return fib(n - 1) + fib(n - 2)
}
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))

console.time('timer-2')
console.log(fib(40))
console.timeEnd('timer-2')
