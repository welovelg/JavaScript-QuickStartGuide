// Define our regular expression
// This will match text that contains the word gray or grey
// and ignore case
const searchPattern = /(gray|grey)/i

// The string to search
let myString = "The quick gray fox jumped over the lazy red dog."
// Perform the search
if (searchPattern.test(myString)) {
// This code runs if myString contains gray or grey, 
// regardless of case
}
