import React, { Component } from 'react'

export class Form extends Component {

    constructor(props)
{
    super(props);
    this.state={
        username:"",
        Adress:""
    }
}

handleUserName = (event) =>
{
    this.setState({
        username:event.target.value
    })
}

handleUserAdress = (event) =>
{
    this.setState({
    Adress:event.target.value
    })
}

handleSubmit = (event) =>
{
   alert(`${this.state.username}  ${this.state.Adress}`)
   event.preventDefault();
}


  render() {

const css={
    textAlign: 'center',
}

    return (

        //instead oƒ using this.state.username this.state.Adress we can write
        //const {username,adress} = this.state
      <div>
        <h1> This is a form component</h1>
        <form style={css} onSubmit={this.handleSubmit}>
        <div>
            <label>User Name</label>
            <input type="text" value={this.state.username} onChange={this.handleUserName}></input>
        </div>
        <div>
        <label>Adress</label>
            <input type="text" value={this.state.Adress} onChange={this.handleUserAdress}></input>
        </div>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default Form;
