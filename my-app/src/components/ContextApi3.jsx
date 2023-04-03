import React from 'react';
import { MyContext } from './ContextApi1';

function ContextApi3() {
  return (
    <div>
      <h1>ContextApi3</h1>
      <MyContext.Consumer>
        {value => (
          <>
            <h3>{value.data.name}</h3>
            <h3>{value.data.rollNo}</h3>
            <button onClick={value.handleClick}>Click me FROM 3</button>
          </>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default ContextApi3;