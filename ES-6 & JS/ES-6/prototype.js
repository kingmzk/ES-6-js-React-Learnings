//TYPES OF WAYS AN OBJECT IS CREATED

/*
const obj = new Object({
    name:"King"
})

const obj1 = new obj();

const obj2 = {
    name:"MZK",
}

*/



const obj = {
    name:"MZK",
    GetName:function()
    {
        return this.name;
    },
    getRoll:function()
    {
        return this.roll
    }
}
// console.log(obj)

/*
const obj2 ={
    roll:10,
    name:"erina",
    __proto__:obj
}
// console.log(obj2.name);
// console.log(obj2.GetName());
// console.log(obj2.getRoll());
// console.log(obj2);

const obj3 = {
    class:"BIG",
    __proto__:obj2
}
// console.log(obj3.getRoll())
// console.log(obj3)

// const array = ["KingMzk"];
// console.log(array);

const obj4 = new Object();
// console.log(obj4);

const arr = new Array();
// console.log(arr)

Array.prototype.show=function()
{
    return this;
}
const array = ["KingMzk","MZK"];
console.log(array.show());
*/


const array = ["KingMzk","MZK","khan"];
Array.prototype.convertIntoObject = function()
{
    let newObj = {};
    this.forEach((element,index) =>
        {
            // newObj[index] = element;
            newObj[element] = element;
        })
        return newObj;
}

console.log(array.convertIntoObject());


function Myprototype(name,roll)
{
   return  this.name = name,
            this.roll = roll

}

Myprototype.prototype=obj;

const cons = new Myprototype("Germany","21");
console.log(cons.GetName())
console.log(cons.getRoll())

