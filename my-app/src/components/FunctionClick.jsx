import React,{Fragment} from 'react'

function FunctionClick() {

    // function changeEvent()
    // {
    //     console.log("Hello Event Handling...")
    // }


     function changeEvent(e)
    {
         e.preventDefault();
        console.log("Hello Event Handling...")
    }

    const numbers = [2,4,6,8,10]
    /*
    const newNumbers = numbers.map((numbers)=>
    {
      console.log(numbers)
      return <li>{numbers}</li>
    })
    console.log(newNumbers)
    */

    // const newNumbers = numbers.map((numbers) =>  { return <li>{numbers}</li>})


  return (
    <>
      <button onClick={changeEvent}>Click ME</button>
      
      {/* <button onCanPlay={this.changeEvent}>Click me in class component</button>   */}  {/* this is in class  components */}
      <a href='https://www.youtube.com/' onClick={changeEvent}>CLICK HERE PREVENT anchor Default</a>
      <br/>

    

      {/* {newNumbers} */}
          {/* numbers.map((numbers) =>  { return <li>{numbers}</li>}) */}
       <ul>

      {
        numbers.map((numbers) =>   <li key={numbers}>{numbers}</li>)
      }
      {
        numbers[0]
      }
      </ul>
    </>
  )
}

export default FunctionClick
