//Hosting 





// function getName(call) {
//     call();
// }

// getName(() => {
//     console.log("Hoisting is all about Memory management");
// });
// getName();






/*

getName(() => {
    console.log("Hoisting is all about Memory management");
});

function getName(call)
{
    call();
}

*/

// let a=10;
// console.log(a);


getName();
getUser();

function getName()
{
    console.log("Hoisting is all about Memory management");
}

function getUser()
{
    console.log("Hoisting is all about Memory management in User");
}

//this type also not works
test = () =>
{
    console.log("it is a test function")
}
test();


let x;
console.log(x);
x=50;
console.log(x);


function myFunction() {
    console.log(myVariable); // Output: undefined
    var myVariable = "Hello, World!";
    console.log(myVariable); // Output: Hello, World!
  }
  
  myFunction();
  