import React from 'react'

const SearchInput = (props) => {
    return (
        <form>
            <input type="search" class={`mx-auto p-4 pl-10 rounded-lg bg-gray-100 text-lg font-light placeholder-black ${props.width}`} placeholder={props.placeHolder} required />
        </form>
    )
}

export default SearchInput