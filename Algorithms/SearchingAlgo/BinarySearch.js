//O(logN)
const binarySearch = (sortedArray, value) => {
   let left = 0
   let right = sortedArray.length - 1
   let midIndex = Math.floor((left + right) / 2)
   while (left <= right) {
      if (sortedArray[midIndex] === value) return midIndex
      left = sortedArray[midIndex] < value ? midIndex + 1 : left
      right = sortedArray[midIndex] > value ? midIndex - 1 : right
      midIndex = Math.floor((left + right) / 2)
   }
   return -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 77))
