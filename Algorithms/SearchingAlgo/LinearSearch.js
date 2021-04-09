//O(n)
const linearSearch = (array, value) => {
   for (let i = 0; i < array.length; i++) {
      if (value === array[i]) return i
   }
   return -1
}

console.log(linearSearch([2, 4, 'wrap', 5, 7], 'wrap'))
//array.findIndex or indexOf or string.charAt---> they all use linear search
