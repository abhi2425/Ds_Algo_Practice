// iterative way
function factorial_iterative(num) {
   let total = 1
   for (let i = num; i > 1; i--) total *= i
   return total
}
// recursive way
function factorial_recursive(num) {
   if (num === 1) return 1
   return num * factorial(num - 1)
}
