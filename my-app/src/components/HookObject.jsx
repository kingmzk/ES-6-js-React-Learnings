import React, { useState } from 'react'

function HookObject()
{
    const [name, SetName] = useState({ firstName: '', lastName: ''})

    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e => { SetName({ ...name, firstName: e.target.value }) }}></input> {/* ...name is spread operator to add to values */}
                <input type='text' value={name.lastName} onChange={e => { SetName({ ...name, lastName: e.target.value }) }}></input>

            </form>
            {name.firstName}
            {name.lastName}
            {JSON.stringify(name)}
        </div>
    )
}

export default HookObject


//form connecting a database in react?