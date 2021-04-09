// iterative Way
const fibonacciGenerator = (firstInput, secondInput, length) => {
   if (firstInput === 0 && secondInput === 0) return console.log('0 not allowed for both inputs')
   let series = [firstInput, secondInput]
   for (let i = 0; i < length - 2; i++) {
      series = series.concat(series[i] + series[i + 1])
   }
   return series
}
console.log(fibonacciGenerator(0, 1, 10))

//recursive way
const fibonacciGeneratorRecursive = (firstInput, secondInput, length) => {
   let series = [firstInput, secondInput]
   const helperFunction = () => {}
}
