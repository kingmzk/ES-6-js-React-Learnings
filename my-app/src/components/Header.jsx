import React from "react";


/*
function Header()
{
    return (
        <h1>Hello Functional Comment</h1>
    )
}

const Header = function()
{
    return (
        <h1>Hello Functional Comment</h1>
    )
}
*/


//PROPS ARE IMMUTABLE  once received value cannot be changed
export const Header = (props) => {
    console.log(props);
    return (
        <>
      <span><h1>Hello Functional Comment {props.name} {props.last} {props.children}</h1></span>
        
        </>
    )
}

//export default Header;