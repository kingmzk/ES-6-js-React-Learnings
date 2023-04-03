//For Each 
//map
//Filter
//sort
//reduce

const companies = [
    {name:'Google', category : "Product Based", start:1981,end:2023},
    {name:'Amazon', category :"Product Based", start:1981,end:2003},
    {name:'KHAN', category :"Product Based", start:1981,end:2023},
    {name:'MKA', category :"Service Based", start:1997,end:2015},
    {name:'Arina', category :"Service Based", start:2010,end:2083},

]


/*
for(let i=0;i<companies.length;i++)
{
    console.log(companies[i]);
}
*/

/*
companies.forEach(function(company, index)
{
 console.log(company.name);
}) 
*/

/*
companies.forEach((company,index) =>
{
    console.log(company.name);

});
*/

//companies.forEach((company, index) => (console.log(company)) );



//FILTER


const ages = [50,10,60,80,70,66,15,98,99,56,78,24,43]


/*
for(var i=0;i<ages.length;i++)
{
    if(ages[i] < 50)
    {
        console.log(ages[i]);
    }
}
*/


/*
const age = ages.filter(function(age, index)
{
    if(age < 50)
    {
        return true;
    }
});
console.log(age)
*/

/*
const age  = ages.filter((age, index) => {
    if(age<50)
    {
        return true;
    }
})
console.log(age)
*/

/*
// const age = ages.filter((age,index) => age < 50)
const age = ages.filter(age => age<50);
console.log(age)

const company = companies.filter((company,index) => company.category === "Product Based")
console.log(company)
*/





//Map Function
/*
const age = ages.map(function(age,index)
{
    console.log(index , age)
})



const dummy = companies.map((company,index) =>
{
  return `${company.name} : ${company.category}`;
});
console.log(dummy);
*/

/*
const comp = companies.sort(function(a,b)
{
    if(a.start > b.start)
    {
        return 1;
    }
    else
    {
        return -1;
    }
});
console.log(comp)


const compa = companies.sort((a,b) => a.start > b.start ? 1 : -1)
console.log(compa);

const SortedArrays = ages.sort((a,b) => a - b);
console.log(SortedArrays)

*/


//REDUCE

/*
let total = 0;
for(let i=0;i<ages.length;i++)
{
    total += ages[i];
}
console.log(total)

const SumAges = ages.reduce(function(total,age)
{
    return total+age
},0);
console.log(SumAges)

const sunage = ages.reduce((total,age) => total+age ,0);
console.log(sunage)
*/