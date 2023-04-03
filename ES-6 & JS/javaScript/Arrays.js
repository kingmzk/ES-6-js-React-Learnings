//Arrays

let values = new Array();
values.push(12);
console.log(values);


// Another simple way

let arr = [5,7,9,20,30];
console.log(arr);


//Arrrays accept everything

let data = ["telsuko" , 12 , {tech : 'guggu'},function(){console.log("Hello world")}]
console.log(data);
data[3]();



let date = [5,6,7,9,32]
for(let ele of date)
{   
    console.log(ele);
}

for(let ele in date)
{   
    console.log(date[ele]);
}
let [a,b,, ...e] = date;
console.log(a , e);


console.log("*******************");
//forEach loop in arrays 

let nums = [124,3,4,55,6,67,6,54,543,3];
nums.forEach((n,i,nums) =>
    { 
        console.log(n, i , nums);
    });