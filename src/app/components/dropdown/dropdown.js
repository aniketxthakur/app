import React, { useState, useRef } from 'react';
// import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const handleClick = () => {
        setShowDropdown(!showDropdown);
    };
    // const closeDropdown = (event) => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //         setShowDropdown(false);
    //     }
    // };
    // useEffect(() => {
    //     document.addEventListener('mousedown', closeDropdown);
    //     return () => {
    //         document.removeEventListener('mousedown', closeDropdown);
    //     };
    // }, []);
    const languages = [
        { name: 'Hindi', link: '/' },
        { name: 'Punjabi', link: '/' },
        { name: 'English', link: '/' },
        { name: 'English', link: '/' },
        { name: 'English', link: '/' },
    ]
    return (
        <div>
            <button onClick={handleClick} type="button">
                <RiArrowDropDownLine />
            </button>
            <div ref={dropdownRef} className={`z-10 bg-white absolute divide-y divide-gray-800 rounded-lg w-44 ${showDropdown ? '' : 'hidden'}`}>
                {showDropdown && (
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {
                            languages.map((data, id) => {
                                return (
                                    <li key={id}>
                                        <Link to={data.link} className="block px-4 py-2 hover:bg-gray-200">{data.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
