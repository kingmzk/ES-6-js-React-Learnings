import React from "react";

class Channel extends React.Component
{

    constructor()
    {
        super();
        this.state =
        {
            msg:'Please Subscribe me'
        }
    }


    subscribe() 
    {
        this.setState({
            msg:"Thank-You For Subscribing"

        })
    }


    render(){
        return(
            <>
        <h1>Hello From King MZK <br/> {this.state.msg}</h1>
        
        <button onClick={() => { this.subscribe() }}>Subscribe</button>


        </>
        )
    }
}

export default Channel;