import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"king mzk"
       
      }
      console.log("lifecycleA : constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("lifecycleA : getDerivedStateFromProps")
        return null;
    }
    
componentDidMount()
{
    console.log("lifecycleA : componentDidMount")
}

  render() {
    console.log("lifecycleA : render")
    return (
      <div>
   
        <p>LifecycleA</p>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifecycleA
