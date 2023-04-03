//   Implementing memorization in JavaScript
//   Memorization is a optimization technique thaţ can be used  to reduce
//   Time-consuming  calculations by saving  previous input to something called  cache and
//   returning  the result from it.


let sum = 0;
const calc=(n)=>
{
    for(let i=0;i<n;i++)
    {
        sum += i;
    }
    return sum;
}


const memorize=(Learn)=>
{
    let cache={};
    return function(...args)
    {
        let n = args[0];
        if(n in cache)             //if something is there in cache put it in n
        {
            console.log("This is coming from Cache")
            console.log(cache);
            return cache[n];
        }
        else
        {
             console.log("Running First Time");
             let result =  Learn(n);
             cache[n] = result;
             return result;
        }
    }
}


console.time();
const efficient = memorize(calc);
console.log(efficient(5));
console.timeEnd();



console.time();
// console.log(calc(5));
console.log(efficient(5));
console.timeEnd();