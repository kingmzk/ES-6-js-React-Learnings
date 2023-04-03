import React, { useState } from 'react'

function HookArray() {

    const [items,SetItems] = useState([])

    const addItem = () =>
    {
        SetItems([...items,{
            id:items.length,
            value:Math.floor(Math.random() * 20)
          
        }])
    }



  return (
    <div>
      <button onClick={addItem}>Add a Random Number</button>
      <ul>
        {items.map((item) => (<li key={item.value}>{item.value}</li>))}
      </ul>
      {console.log(items)}
    </div>
  )
}

export default HookArray
