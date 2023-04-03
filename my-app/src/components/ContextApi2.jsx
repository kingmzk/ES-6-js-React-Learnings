import React from 'react';
import { MyContext } from './ContextApi1';

function ContextApi2() {
  return (
    <div>
      <h1>ContextApi2</h1>
      <MyContext.Consumer>
        {(value,handleClick) => (
          <>
          <h3>{value.data.name},{value.data.rollNo}</h3>
            <h3>{value.data.rollNo}</h3>
            <button onClick={handleClick}>Click me FROM 2</button>
          </>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default ContextApi2;