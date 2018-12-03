//Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).
// function palindrome2(str){
//   const str1 = [...str].reverse().join('');
//   return str === str1;
// }
// console.log(palindrome("12321"))
var palindrome = "racecar"
//write a function that takes 1 arugment
function palCheck(p){
// if(p != ""){
//   return p.toString("")
// }
//use .split to change string into array


  var splitArr = p.split("")

//use reverser function to reverse the string
  var palReverse = splitArr.reverse()

//use .join to convert array into reversed string
  var joinSplit = palReverse.join("")

  if (p === joinSplit){
    return "This is a palindrome"
  // } else if (p != ""){
  //   return "Numbers are not Palindromes"
  } else {
    return "This is not a palindrome"
  }
}
console.log(palCheck(palindrome));


// parseInt(num) === num
// if (Math.floor(x) === x)

//Write a function that takes in two arrays (of numbers) and checks for duplicates.  The function should output a new array without duplicates
//
// var a = [1, 2, 3, 30, 17]
// var b = [2, 30, 1, 15, 0]
//
// function dup(arr1, arr2){
//   var notDup = []
// //
//   var join = arr1.concat(arr2)
//
//   for(i = 0; i < join.length; i++) {
//   //comapare concatted values to check for duplicates
//     if(!notDup.includes(join[i])){
//       notDup.push(join[i])
//     }
//   }
//   return notDup
// }
// console.log(dup(a,b))

// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.The new keyword does the following 4 things

//The Set object lets you store unique values of any type, whether primitive values or object references.

// function dup(arr1, arr2){
//   var join = arr1.concat(arr2)
//   var notDup = [...new Set(join)]
//   return notDup
// }
//
// console.log(dup(a, b))


//Create a function that takes in a sentence and returns only the consonants (removes the vowels).

//while loop is for "While A is true, do B... not good for this program"
// var arg1 = "Trial sentence"
//
// function sentence(arg1) {
//   var arg1Arr = arg1.split("")
//   var vowelsArr = ["a", "e", "i", "o", "u"]
//   var noVowelArr = []
//   while (!vowelsArr.includes(arg1Arr)){
//     return noVowelArr.join("");
//   }
//
// }
// console.log(sentence(arg1))



// for (i = 0; i<split.length; i++){
  // if(!split.includes(vowels[])){
    // noVowel.push(sent[i])


// var sent = "This is an example"
//
// function removeVowels(sentence){
//     var vowels = ["a", "e", "i", "o", "u"]
//     var sentenceArr = sentence.split("")
//     var noVowelArr = []
//       sentenceArr.forEach(function(value){
//         if (vowels.includes(value)){
//       } else{
//           noVowelArr.push(value);
//       }
//     })
//       return noVowelArr.join("");
//   }
//
// console.log(removeVowels(sent));
