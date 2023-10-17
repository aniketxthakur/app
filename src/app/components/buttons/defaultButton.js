import React from 'react'

const DefaultButton = (props) => {
    return (
        <button className='border-2 flex justify-items-end border-blue-100 p-4 mt-6 rounded-md'>{props.name}</button>
    )
}

export default DefaultButton
