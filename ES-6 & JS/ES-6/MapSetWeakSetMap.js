//set -> is a collection of unique values

"use strict";

/*

let MyArr =  [1,2,3,4,5,6,7,7,7,8,]
let obj = new Set(MyArr);
obj.add(10);
var obj1 = {name:"King Mzk"};
obj.add(obj1);
console.log(obj)
console.log(obj.has(10));

for(let Store of obj)
{
    console.log(Store);
}

obj.forEach((ele)=> console.log(ele));


*/


/*
//Map -> key- values

 let MyMap = new Map([["King","mzk"],["Key","Values"],["a2","ajay"]])
 MyMap.set("a2","ajay")
 MyMap.get("a2")
 console.log(MyMap)
 console.log( MyMap.get("a2"));
 for(let [key,values] of MyMap)
 {
    console.log(`keys ${key} & values ${values}`);
 }

  MyMap.forEach((key,values) => console.log(key, values))

  */




  //WeaKSET          ->         Here We Cant Use cant Iterate            and                can only Storeobjects
  let ws = new  WeakSet();
//   console.log(ws);
let ob1 = {"name":"ayub"};
let ob2 = {"no":"21"}
ws.add(ob1)
ws.add(ob2)
console.log(ws);
console.log(ws.has(ob1));


//WeaKMap
let wp=new WeakMap();
//console.log(wp);
let ob3 = {"name":"ayub"};
let ob4 = {"no":"21"};  
wp.set(ob3,"ayub 2nd")
wp.set(ob4,"21 2nd")
console.log(wp);
console.log(wp.has(ob4));