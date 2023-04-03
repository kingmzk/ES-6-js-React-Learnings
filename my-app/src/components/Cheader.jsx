import React from "react";
import Testing from "./Testing";


class Cheader extends React.Component
{
    state={
        users:[
            {id:1,name:"King",class:"c"},
            {id:2,name:"mzk",class:"a"}
        ]
    }
    render(){
      const users =   this.state.users.map((user) =>
        {
        //    console.log(user)
        return(
            <div key={user.id}>
            <h1>
              {user.class}
              {user.name}
              {user.id}
            </h1>
            <Testing value={user.id} />
          </div>
           
        )
        })




        // console.log(this.state.users[1])
        return(
            <>
        <h1>Hello From CLass Component Once Again {this.props.name} {this.props.last}</h1>
            <h2>{this.state.users[0].name}</h2>
            <div>{users}</div>
          
        </>
        )
    }
}

export default Cheader;