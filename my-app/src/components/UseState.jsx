import { useState } from "react"
import React from 'react'

function UseState() {

    // const name  = useState("King Mzk")  //1

    // const names = name[0];         //2
    // const  setName = name[1];      //2

    const [name,setName] = useState("HI How Are You")
    const [count,setCount] = useState(1)



   const statehandler = () =>
    {
        // name[1]("it is working")      //1
        // setName("it is workin")      //2
        setName("I am Fine . Functional UseState")
        setCount(count+1)
    }

  return (
    <div>
      {name}
      {count}
      <button onClick={statehandler}>Click here</button>
    </div>
  )
}

export default UseState
