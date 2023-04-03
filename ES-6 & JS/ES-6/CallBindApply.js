//Call Apply AND BIND
/*

let userDetailes =
{
    name:"king_mzk",
    Age:23,
    Designation:"DevOps",
    printDetails:function()
    {
        console.log(this.name);
    }
}

userDetailes.printDetails();



let userDetailes2 =
{
    name:"mka",
    Age:22,
    Designation:"DevOps",
}
//Function Borrowing
userDetailes.printDetails.call(userDetailes2);

*/

let userDetailes =
{
    name:"king_mzk",
    Age:23,
    Designation:"DevOps",
}


let userDetailes2 =
{
    name:"mzk",
    Age:22,
    Designation:"DevOps",
}

let printDetails = function(para,country)
{
    console.log(this.name +"  "+ para + "  "+country);
}

// printDetails.call(userDetailes,"Bangalore","Germany");
printDetails.call(userDetailes2,"Mysore","Australia");


//Apply
printDetails.apply(userDetailes2,["Bangalore","Germany"]);  //in apply we are passing as a arraylist


//Bind

let Bind = printDetails.bind(userDetailes,"Mysore","Australia")
//In binď storing a value in variable copy and using it
console.log(Bind);
Bind();
