function greet()
{
    console.log("hey i am in function");
}

greet();
console.log("1");
greet();



function fun(name)
{
   return `hello ${name}`;
}
let user = "rean";
console.log(fun(user));




//here we can assign a function to a variable and call it by variable name
let res = function (value1 , value2)
{
    return `it is ${value1} , ${value2}`
}
let val = res(10,20);
let r = val;
console.log(val);
console.log(r);


//Here c is default value we can set but it takes 2 parameters in javascript
function fff(a , b ,c=1)
{
    return a+b+c;
}

let ans = fff(10,20);
console.log(ans);



//Arrow function
let answer = () => "hello world r u there";  //() it is a function we r neglecting function keyword and return
console.log(answer());