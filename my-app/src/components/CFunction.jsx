import React from "react";


class CFunction extends React.Component
{

    constructor(props)
    {
        super(props);
        // this.changeEvent=this.changeEvent.bind(this);  to avoid this line use arrow function

        this.state={
            course:"BE",
            roll:this.props.roll
        }
    }
    
changeEvent=()=>
{
    this.setState({
        course:"MTECH"

    })
    
    console.log("Hello class component Event Handling...",this.state.course,this.props.roll)
}


    render(){
        const numbers = this.props.numbers

        return(
            <>       
          
        <button onClick={this.changeEvent}>Click me in class component</button>  
        {this.state.course} {this.props.roll} {numbers}
        {
            numbers.map((num) => <li key={num}>{num}</li>)
        }
        </>

        )
    }
}

export default CFunction;