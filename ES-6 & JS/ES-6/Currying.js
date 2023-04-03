
/*
function Addition(a,b,c)
{
   return a+b+c;
}
let res = Addition(2,4,6);
console.log(res);
*/



/*
//also exapmle for closures
function add(a)
{
    return function(b)
    {
        return function(c)
        {
            return a*b*c;
        }
    }
}
// let res = add(2);
// let data = res(4);
// let ans = data(6);

//instead of above use currying
let ans = add(2)(4)(6);
console.log(ans);

*/


userobj = {
    name:"mzk",
    age:"23"
}

function userInfo(obj)
{
    return function(userinfo)
    {
        return obj[userinfo]
    }
}

let res = userInfo(userobj);
console.log(res('name'));
// console.log(res('name')()());  -> iƒwanteed to supply more values we could have used like this
// console.log(userobj.age);