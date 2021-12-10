//WEEK 2 HW 2
//EXERCISE 3: Write a program to find the longest element in a string array.

const wordsArray=['practice', 'your', 'coding', 'every', 'single', 'day']
let longElem=wordsArray[0]

//function longestElement(){ //Don't need a function apparantly
    for(i=0; i<wordsArray.length; i++){ //Here I'm looping through the array at each index
        if(wordsArray[i].length > longElem.length) //You're only making the switch if the element in your current index [i] is greater
        longElem=wordsArray[i]
    }

console.log(`The longest element in the array is '${longElem}.'`)



//I need to find the longest element in the array so that means the one with the most letters.  How do I do that? 
//Index is the position of each element, length tells me how many elements there are in total in the array. 
//What tells me the number of characters in each element??
//Ohhh the length property but for a string!
//So use the map function again I think...Can also create a for loop or a function with a for loop...

//Go to sleep. Keep working on this one tomorrow.

//let newArray=arr1.map(words => words.length) //This just gives me the length of each element in the array not the longest one

//console.log(newArray)


