let input ='name';
// this is an object
var alien = 
{
    name : 'mohammed zakria khan',
    technology: 'Full Stack',
    'work Experience' : 4,
    laptop :
    {
        cpu : 'i7',
        Ram : '12gb',
        brand : 'Asus',
    }
}

//console.log(alien);
// console.log(alien.technology);
// console.log(alien['name']);

console.log(alien.laptop);
console.log(alien.laptop.brand);
console.log(alien['laptop']['Ram']);
console.log(alien.laptop.Ram);
console.log(alien.brand?.cpu);
//delete laptop;

for(let value in alien)
{
   console.log(value , alien[value]);  
}
