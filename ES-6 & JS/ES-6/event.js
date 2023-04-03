//Event Bubbling  &  Capturing
//Stop  Propagation ,Immediate  Propagation & Prevent  Default

// document.addEventListener("DOMContentLoaded", function() {
//     // Get the div element
//     var div = document.querySelector("div");
  
//     // Add a click event listener to the div element
//     div.addEventListener("click", function() {
//       console.log("Div clicked!");
//     });
//   });
  


var div = document.querySelector("div");     //parent tag to child tag because click is nature of Button (Capturing)
var button = document.querySelector("button");    //child tag to parent tag because click is nature of Button (Bubbling)
var a = document.querySelector("a"); 
console.log("after querySelector");              //child (main) is executed first

/*
div.addEventListener("click", () => {
  console.log("div clicked");
},true);          // ,true will ensure parent is called first    => This is event Capturing


button.addEventListener("click", () => {
    console.log("button clicked");
  });
*/

/*
button.addEventListener("click", (event) => {          //event arguement then stopPropagation stops Propagation
  event.stopPropagation();
  console.log("button clicked");

  div.addEventListener("click", () => {
    console.log("div clicked");
  },true);          // ,true will ensure parent is called first    => This is event Capturing
  
});
*/



button.addEventListener("click", (event) => {          //event arguement then stopPropagation stops Propagation
  event.stopPropagation();
  // event.stopImmediatePropagation();     
  console.log("button clicked");
})

button.addEventListener("click", (event) => {          //event arguement then stopPropagation stops Propagation
  event.stopImmediatePropagation();          //when 2 click event trigged telling to stop your propation here itself
  console.log("button1! clicked");
})

a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("a clicked");
});