import React from 'react';
import ContextApi2 from './ContextApi2';
import ContextApi3 from './ContextApi3';

export const MyContext = React.createContext();

function ContextApi1() {
  const A = {
    name: "Kingmzk",
    rollNo:21,
  };

  const consthandleClickContext = () =>
  {
      console.log(" I am consthandleClickContext function")
  }

  const obj = {
    data: A,
    handleClick: consthandleClickContext,
  };
  

  return (
    <div>
      <h1>ContextApi1</h1>
      {/* <MyContext.Provider value={A}> */}
      <MyContext.Provider value={obj}>
        <ContextApi2 />
        <ContextApi3 />
      </MyContext.Provider>
    </div>
  );
}

export default ContextApi1;