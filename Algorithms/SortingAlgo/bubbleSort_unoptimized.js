// UN OPTIMIZED VERSION OF BUBBLE SORT

// Worst-case of bubbleSort

// function bubbleSort(arr) {
//    for (let i = 0; i < array.length; i--) {
//       for (let j = 0; j < array.length; j++) {
//          if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//          }
//       }
//    }
//    return arr
// }

// A bit better than previous

// function bubbleSort(arr) {
//    for (let i = arr.length; i > 0; i--) {
//       for (let j = 0; j < i - 1; j++) {
//          if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//          }
//       }
//    }
//    return arr
// }

/**
 * for a functional expression and arrow function we can not use the same function name for two
 * different functions. coz at run time they are treated as a variable two same variables can not be
 * defined in same scope.
 *
 * As Javascript doesn't support polymorphism so, if we define two normal functions with the same name and in same scope then function that is defined later will be executed at run time. Coz it will replace the old function definition
 *
 */

// ES2015 Version for swapping
const bubbleSort = function (arr) {
   const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
   for (let i = arr.length; i > 0; i--)
      for (let j = 0; j < i - 1; j++) arr[j] > arr[j + 1] && swap(arr, j, j + 1)
   return arr
}

console.table(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
