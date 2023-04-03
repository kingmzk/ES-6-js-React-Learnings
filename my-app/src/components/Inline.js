import React from 'react';

function Inline() {

    const heading =
    {
        color:'blue',
        fontSize:'30px'   
    }

  return (
    <div>
      <h1 style={heading}>Hello Inline StyleSHeet</h1>
      <h1 className='onlycss'>onlycss</h1>
        
    </div>
  )
}

export default Inline
