//objects are a combination of properties

let person = {
    firstname :"Suddhashil",
    lastname :"Chowdhury",
    age : 31,
    fullname: function(){
        console.log(this.firstname+this.lastname)

         }
}
console.log(person.firstname)
console.log(person['lastname'])
person.firstname= "Suddhasil"
console.log(person.firstname)
person.gender="Male"
console.log(person.gender)
console.log(person['gender'])
delete person.gender
console.log(person)
let flag='gender' in person //to assert if a property is present in n object
console.log(flag)
//print all the values of a javascript object
for(let key in person)
{
    console.log(person[key])
}
console.log(person.fullname())