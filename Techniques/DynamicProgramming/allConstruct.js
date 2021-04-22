const allConstruct = (targetString, wordBank, memo = {}) => {
   if (targetString in memo) return memo[targetString]
   if (targetString === '') return [[]]
   let result = []
   for (let word of wordBank) {
      if (targetString.indexOf(word) === 0) {
         const suffix = targetString.slice(word.length)
         const allWaysForSuffix = allConstruct(suffix, wordBank, memo)
         const possibleWays = allWaysForSuffix.map((ways) => [word, ...ways])
         result.push(...possibleWays)
      }
   }
   memo[targetString] = result
   return memo[targetString]
}
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('skateboard', ['ska', 'ate', 'bora', 'd', 'rd', 'sk']))
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(allConstruct('eeeeefeeeeefeeeeeeef', ['e', 'ee', 'eeee', 'eeeeef']))
