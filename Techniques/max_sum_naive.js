function maxSubarraySum(arr, num) {
   if (num > arr.length) return null
   let max = -Infinity
   for (let i = 0; i < arr.length - num + 1; i++) {
      temp = 0
      for (let j = 0; j < num; j++) temp += arr[i + j]
      max = temp > max ? temp : max
   }
   return max
}

console.time('timer')
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
console.timeEnd('timer')
// can be solved using Sliding Window concept
