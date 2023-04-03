import { useState, useEffect } from "react"
import React from 'react'

function UseState()
{

    // const name  = useState("King Mzk")  //1

    // const names = name[0];         //2
    // const  setName = name[1];      //2

    const [name, setName] = useState("HI How Are You")
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(0)



    const statehandler = () =>
    {
        // name[1]("it is working")      //1
        // setName("it is workin")      //2
        setName("I am Fine . Functional UseState")
        // setCount(count+1)
    }


    useEffect(() =>
    {
        console.log("Arina BewaKoof")
    }, [count2, count])

    const Increment = () =>
    {
        setCount(count + 1)
    }

    const Decrement = () =>
    {
        setCount2(count2 - 1)
        setCount(count - 1)

    }

    const Incremented = () =>       //use state with previous state
    {
        for (let i = 0; i < 10; i++)
        {
            // setCount(count + 1)  //it will not work
            // setCount(PreviousCount  => PreviousCount + 1)    //it will retian old values and add
            setCount((PreviousCount)  => PreviousCount + 1)
        }
    }

    return (
        <div>
            {name}
            {count}
            {count2}


            <button onClick={statehandler}>Click here</button>  <br />
            <button onClick={Increment}>Increment {count}</button>
            <h1>{count}</h1>
            <button onClick={() => Decrement()}>Decrement  {count2}</button>
            <button onClick={Incremented}>Incremented By 10 - {count} </button>

        </div>
    )
}

export default UseState
