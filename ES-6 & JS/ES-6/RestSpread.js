
//ES-6 Rest
/*
function addNumber(a,b,c,...other)
{
    console.log(other);  
    console.log(other[1]);          //other is rest opertor
    return a+b+c;
}
const res = addNumber(2,4,8,10,20)

console.log(res) 


//spread
let names = ["mzk","mka","Lord of the Rings","anuj"];
function getNames (name1,name2,name3)
{
    console.log(name1,name2,name3)

}
// getNames(names[0],names[1],names[2]);     //old
getNames(...names)                        //new        //Best
// getNames(names)                    //prints array in [] form

*/

//OBJECT
//REST

var students = {
    names:"KING_MZk",
    age:23,
    hobbies:["Swimming","Learning"]
}

// const age = students.age;
// console.log(age);

//array destructuring
// let {age,names} = students
// console.log(names," ",age);

let {names,...rests} = students;
console.log(rests);                    //after name everything it prints

//Spread
let newStudents = {
    ...students,
    age:25                      //overriding age 
}

console.log(newStudents)