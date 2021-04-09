//palindrome using recursion

const checkPalindrome = (string) => {
   let reverse = ''

   const reverseString = (string) => {
      if (string.length < 1) return string

      return reverseString(string.slice(1)) + string[0]
   }
   reverse = reverseString(string)
   if (string === reverse) return true
   return false
}
console.log(checkPalindrome('1233321'))
