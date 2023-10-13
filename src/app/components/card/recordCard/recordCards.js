import React from 'react'

const RecordCards = (props) => {
    return (
        <div className="backdrop-blur-md bg-[#799EAE4D] font-black lg:p-4 lg:my-0 my-2 rounded-md mr-2 cursor-pointer">
            <p className='py-2'>{props.number}</p>
            <p className='border-t-2 lg:text-xl text-end font-normal lg:ps-60 md:ps-16 lg:py-4 py-1'>{props.title}</p>
        </div>
    )
}

export default RecordCards
