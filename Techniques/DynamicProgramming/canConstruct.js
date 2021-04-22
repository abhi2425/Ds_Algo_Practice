/*m--> target.length
  n--->wordBank.length
  O(n^m*m)  time
  O(m^2)  space
*/
const canConstruct = (targetString, wordBank) => {
   if (targetString === '') return true
   for (let word of wordBank) {
      if (targetString.indexOf(word) === 0) {
         const suffix = targetString.slice(word.length)
         if (canConstruct(suffix, wordBank) === true) {
            return true
         }
      }
   }
   return false
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct('skateboard', ['ska', 'ate', 'bora', 'd', 'rd', 'sk']))
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
// console.log(
//    canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeee']),
// )    // ---> it will freeze

console.log('----------------')

//optimized solution using memoization
//O(n*m^2)
const canConstruct_new = (targetString, wordBank, memo = {}) => {
   if (targetString in memo) return memo[targetString]
   if (targetString === '') return true
   for (let word of wordBank) {
      if (targetString.indexOf(word) === 0) {
         const suffix = targetString.slice(word.length)
         if (canConstruct_new(suffix, wordBank, memo) === true) {
            memo[targetString] = true
            return true
         }
      }
   }
   memo[targetString] = false
   return memo[targetString]
}
console.time('timer-2')
console.log(canConstruct_new('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct_new('skateboard', ['ska', 'ate', 'bora', 'd', 'rd', 'sk']))
console.log(canConstruct_new('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(
   canConstruct_new('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeee']),
)
console.timeEnd('timer-2')
