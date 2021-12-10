//WEEK 2 HW 2
//EXERCISE 1: Write a program to add up all the elements of a number array.

let arr1=[23, 45, 67, 43, 21]
let sum=0 //Here set the variable sum which will be displayed in the console log to 0 because you wanna add each number in the array to this so you cannot leave it undefined here

for(i=0; i<arr1.length; i++){
    sum+=arr1[i] //Here you're using the += which means you adding each element of the array to 0, which is the initial value of the sum (0+23+45+...)
}
console.log(sum)
