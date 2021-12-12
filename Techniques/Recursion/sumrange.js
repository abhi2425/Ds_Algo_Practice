function sumRange(num) {
   if (num === 1) return 1
   return num + sumRange(num - 1)
}
console.time('timer-1')
console.log(sumRange(5))
console.timeEnd('timer-1')

function sumRange_new(num, memo = {}) {
   if (num in memo) return memo[num]
   if (num === 1) return 1
   memo[num] = num + sumRange_new(num - 1, memo)
   return memo[num]
}
console.time('timer-2')
console.log(sumRange_new(5))
console.timeEnd('timer-2')
