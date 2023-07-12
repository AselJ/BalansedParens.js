// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const has_balanced_parens = (string) => {
  let parent = 0

  for (let i=0; i<string.length; i++){
    if(string[i] === '(') {
      parent++
    }
    if (string[i] === ')') {
      parent--
    }
  }
      return !parent
}

console.log(has_balanced_parens("()"))//true
console.log(has_balanced_parens("(Oh Noes!)("))//false
console.log(has_balanced_parens("((There's a bonus open paren here.)"))//false
console.log(has_balanced_parens(")"))//false
console.log(has_balanced_parens("("))//false
console.log(has_balanced_parens("(This has (too many closes.) ) )"))//false