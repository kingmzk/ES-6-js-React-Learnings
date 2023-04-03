import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component
{

    constructor(props)
    {
        super(props)

        this.state = {
            userid: "",
            pass: ""
        }
    }


    handleEvent = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>
            {
                console.log(response)
                
            })
            .catch(error =>
            {
                this.setState({error:'URL errror'})
                console.log(error);
            });
 
     
    }


    render()
    {
        const { userid, pass } = this.state
        return (
            <div>
                <div>
                    <h1> This is a form component</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>User Name</label>
                            <input type="text" value={userid} name="userid" onChange={this.handleEvent}></input>
                        </div>
                        <div>
                            <label>Adress</label>
                            <input type="text" value={pass} name="pass" onChange={this.handleEvent}></input>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm
