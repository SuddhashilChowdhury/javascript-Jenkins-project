var marks=[12,15,39,88,63,100]
var fruits= ["bananas", "apples", "oranges", "grapes", "promegranates"]
console.log(marks)
console.log(marks[4])
marks[3]=99
console.log(marks)
console.log(marks.length)
marks.push(77) //to add or append a +n element at the end of the array
console.log(marks)
marks.pop() //to delete an element at the end of the array
console.log(marks)
marks.unshift(29) //to add an element at the begining of the array
console.log(marks)
console.log(marks.indexOf(100))
console.log(marks.includes(120))
let sliced_array=marks.slice(2,5) //slicing array depending on index. First_index, last_index. last index not included
console.log(sliced_array)
console.log('The contents of the array:')
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
let sum=0
console.log("Sum of all the elements in the array: ")
for(let j=0;j<marks.length;j++)
{
sum=sum+marks[j]
}
console.log(sum)
var sum_of_marks=marks.reduce((sum,totalmarks)=> sum+totalmarks,0)
console.log(sum_of_marks)
var updated_marks=marks.map((n)=> n*2)
console.log(updated_marks)
var filtered_array=marks.filter(b=> b%10==0)
console.log(filtered_array)
var chained_array= marks.map(n=>n*2).filter(b=> b%10==0) //chaining two methods filter and map in an array
console.log(chained_array)
//Sorting
console.log(marks.sort((a,b)=> a-b)) //Uses bubble sort recursively
console.log(fruits.sort()) //nothing required to sort Strings.
console.log(fruits.reverse()) //to sort in descending order according to ASCII value for strings
console.log(marks.sort((a,b)=> b-a)) //to sort in descendig order for numbers




