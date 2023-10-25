import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import logo from '../../../assets/icons/logo.svg';
import NavBg from '../../../assets/images/NavBg.svg';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(true);
    const handleNavbar = () => {
        setToggleNavbar(!toggleNavbar);
    };
    const leftNavdata = [
        { name: 'Home', link: '/#home' },
        { name: 'About Us', link: '/#about' },
        { name: 'Solutions', link: '/#solution' },
    ];
    const rightNavdata = [
        { name: 'Blogs', link: '/#blogs' },
        { name: 'Trials', link: '#trials' },
        { name: 'Contact Us', link: '#contact' },
    ];
    return (
         <nav style={{ backgroundImage: `url(${NavBg})` , backgroundSize:'cover'}} className="fixed z-20 w-full px-5 text-white text-lg">
            <div className="w-full flex flex-wrap justify-between md:justify-center mx-auto py-5">
                <img className='md:hidden block' src={logo} alt="logo" />
                <button onClick={handleNavbar} data-collapse-toggle="navbar-sticky" type="button" className="text-3xl md:hidden grid content-start" aria-controls="navbar-sticky" aria-expanded="false"><IoIosMenu /></button>
                <div className={`${toggleNavbar ? 'hidden' : ''} pb-10 md:p-0 w-full md:flex md:w-auto`} id="navbar-sticky" >
                    <ul className="flex md:flex-row md:m-0 mt-10 flex-col p-4 font-medium md:space-x-20 border rounded-md md:border-0">
                        {leftNavdata.map((data, id) => (
                            <li className='hover:border-b-2 hover:border-[#050f4e]' key={id}>
                                <HashLink smooth
                                    to={data.link}
                                    className={`block py-2 px-5 md:p-0 mt-3`}>
                                    {data.name}
                                </HashLink>
                            </li>
                        ))}
                        <img className='md:block hidden px-5 h-12' src={logo} alt="logo" />
                        {rightNavdata.map((data, id) => (
                            <li className='hover:border-b-2 hover:border-[#050f4e]' key={id}>
                                <HashLink smooth
                                    to={data.link}
                                    className={`block py-2 px-5 md:p-0 mt-3`}>
                                    {data.name}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
