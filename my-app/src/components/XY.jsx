import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react';

function XY()
{
    const [x, SetX] = useState(0);
    const [y, SetY] = useState(0);

    const mouseMove = (e) =>
    {
        SetX(e.clientX)
        SetY(e.clientY)
    }

    useEffect(() =>
    {
        console.log("use effect called");
        window.addEventListener('mousemove', mouseMove)
    }, [])

    return (

        <div>

            <h1>x axis - {x}</h1>
            <h1>x axis - {y}</h1>

        </div>
    )
}

export default XY
