//Frequency counter concept
const anagramCheck = (string1, string2) => {
   const array1 = string1.toLowerCase().split('')
   const array2 = string2.toLowerCase().split('')
   let counter1 = {},
      counter2 = {}
   if (array1.length !== array2.length) return false
   for (const letter of array1) counter1[letter] = (counter1[letter] || 0) + 1

   for (const letter of array2) counter2[letter] = (counter2[letter] || 0) + 1

   for (key in counter1) {
      if (!(key in counter2)) return false
      if (counter1[key] !== counter2[key]) return false
   }
   return true
}
console.log(anagramCheck('anagram', 'nagarah'))
