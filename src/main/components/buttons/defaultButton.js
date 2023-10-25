import React from 'react'

const DefaultButton = (props) => {
    return (
        <button className={`mx-auto rounded-md ${props.class}`}>{props.name}</button>
    )
}

export default DefaultButton
