import React from 'react'

function Stylesheet(props) {
let className = props.isValue ? 'demo':'demo1';
  return (
    <div>
      <h1 className={`${className} demo2`}>Hello StyleSheet</h1>
    </div>
  )
}

export default Stylesheet
