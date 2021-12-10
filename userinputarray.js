//WEEK 2 HW 2
//EXERCISE 2: Write a program to look for the user input in an array. When it finds the first occurrence, display the value and the index of that value
//Use higher functions like .map which returns an array you can manipulate then try making each index .toLowerCase()

let prompt=require('prompt-sync')()
let userInput=prompt('Enter a word: ').toLowerCase()

const words=['I', 'am', 'learning', 'so', 'much', 'learning']

let newArray=words.map(word => word.toLowerCase()) //Using the map function and a one liner arrow function to convert each word (element) in my original array into lowercase to match whatever the case of the word the user enters

//Trying to figure out a way to turn the elements in the array into the same case so that the code isn't case sensitive
// let array2=array.join().toLowerCase() 
// let array3=array2.split()
// But do I even need to worry about case? Yes, yes you do.

let wordInd=newArray.indexOf(userInput)

console.log(`The index of '${userInput}' is ${wordInd}.`) //Should display the value user entered and it's position in the array ie: The index of 'learning' is 2.

//Wise words from Tishana:
//Don't be afraid to break your code just run it to see what happens and keep figuring out what's wrong if you don't get the results you want

