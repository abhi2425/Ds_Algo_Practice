const countConstruct = (targetString, wordBank, memo = {}) => {
   if (targetString in memo) return memo[targetString]
   if (targetString === '') return 1
   let totalWaysToForm = 0
   for (let word of wordBank) {
      if (targetString.indexOf(word) === 0) {
         const suffix = targetString.slice(word.length)
         const countForRest = countConstruct(suffix, wordBank, memo)
         totalWaysToForm += countForRest
         memo[targetString] = totalWaysToForm
      }
   }
   memo[totalWaysToForm] = totalWaysToForm
   return memo[totalWaysToForm]
}
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('skateboard', ['ska', 'ate', 'bora', 'd', 'rd', 'sk']))
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(
   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeeef']),
)
