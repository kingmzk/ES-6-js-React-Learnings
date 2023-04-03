//differernce between var and let in js
/*
By using var .if we decale var inside a if staement still it acts like global variable
by using var. WE may have same variable name 
var is afunction scoped

let is blocked scoped

*/
/*
const person =
{
    name : "King",
    profile : "Chief Architech"
};


person.profile="CEO";
//we cannnot change value of const but can change its properties; 
console.log(person)


*/

//const integer=[1,2,3,4,5,6]


// const updatedInteger = integer.map(function(number)
// {
//    return number +=1;
// });


// const updatedInteger = integer.map((number)=>
// {

//     return number += 1
// });


//const updatedInteger = integer.map((number) => number += 1)


//const updatedInteger =  integer.map(number => number +=1)

//const updatedInteger = integer.map(()=>"zakria")
//onsole.log(updatedInteger);


/*
const ages  = [22,25,30,35,18]

// const filt = ages.filter((ages)=>{
// return ages<25;
// })


const filt = ages.filter(ages=> ages > 25)
//const filt = ages.filter((ages)=> ages > 25)

console.log(filt);
*/

/*
let name='king mzk'
let location='Germany'
console.log("My naem is "+name+" .And I live in "+location)
console.log(`My Name is : ${name} .And i Live in ${location} .as a Millionaire`);

*/


// const person =
// {
//     name : "King",
//     profile : "Chief Architech"
// };


/*
//constructor
function Person(name ,age)
{
this.name=name,
this.age = age
};

Person.prototype.speak= function()
{
    console.log(`my name is ${this.name}`);
}

const ans = new Person("MZK", 23);
ans.speak();
console.log(ans)

*/


/*
class Person
{
    constructor(name,age,child)
    {
        this.name=name,
        this.age = age,
        this.child = child
    }
    speak()
    {
        console.log(this.name);
    }
    Child(child)
    {
     this.child.push(child);

    }
    }

const ans = new Person("KingMZK", 27,["malhun","Mohammed Zakria Khan"]);
ans.speak();
ans.Child("bala");
console.log(ans); 

*/



// const names = ['MZK',"mka","sp"]
// const Profile =['developer','Devops',"tester"]

// const mergeWiithTwo = [...names ," Jio ", ...Profile];
// console.log(...names)       //aslo Removes Bracket
// console.log(mergeWiithTwo);


