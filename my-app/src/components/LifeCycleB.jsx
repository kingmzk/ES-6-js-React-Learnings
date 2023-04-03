import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"king mzk"
       
      }
      console.log("LifeCycleB : constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifeCycleB : getDerivedStateFromProps")
        return null;
    }
    
componentDidMount()
{
    console.log("LifeCycleB : componentDidMount")
}

  render() {
    console.log("LifeCycleB : render")
    return (
      <div>
        <p>LifeCycleB</p>
      </div>
    )
  }
}

export default LifeCycleB
