//Closure
/*
var sum = function(a)
{
 console.log("readers : ", a);
 var c = 5;

 return function(b)
 {
    return a+b+c;
 }
}

let store = sum(10);
console.log(store)
console.log(store(30))
*/



var sum = function(a,b,c)
{
 return {
   getSumtwo:function () {
    return a+b;
   },
   getSumthree:function () {
    return a+b+c;   
 }
}
}

var store = sum(10,20,30);
console.log(store.getSumtwo());
console.log(store.getSumthree());

var store1 = sum(5,10,15);
console.log(store1.getSumtwo());
console.log(store1.getSumthree());

