import React, { useState } from 'react'
import { FaGlobeAmericas } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoIosMenu } from 'react-icons/io';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import DefaultButton from '../buttons/defaultButton';

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const pathname = useLocation().pathname
    const handleNavbar = () => {
        setToggleNavbar(!toggleNavbar);
    };
    const navbarData = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        { name: 'Solutions', link: '' },
        { name: 'Blogs', link: '' },
        { name: 'Contact Us', link: '' },
    ];
    return (
        <>
            <div className="flex">
                <div className="flex fixed z-50 w-full px-8 lg:p-2 pt-2 lg:text-base text-xs text-white bg-[#0e202a]">
                    <div className="flex-auto flex justify-start">
                        <p className='border-r pr-5'> HealthCare Global</p>
                        <div className="flex ps-5">
                            <p className='pt-1 pr-1'><FaGlobeAmericas /></p>
                            <p>EN</p>
                            <p className='text-2xl'><RiArrowDropDownLine /></p>
                        </div>
                    </div>
                    <div className="flex-auto flex justify-end">
                        <p className='border-r pr-5'>Our Sponsors</p>
                        <p className='ps-5'>Already have an account? <span className='font-semibold'>Login Now</span></p>
                    </div>
                </div>
            </div>
            <div>
                <nav className="pt-5 fixed w-full z-20 top-0 left-0 mt-6 px-5 bg-white">
                    <div className="w-full flex flex-wrap justify-between mx-auto py-4">
                        {/* Logo*/}
                        <img src={logo} alt="logo" />
                        {/* Toggle Button */}
                        <button onClick={handleNavbar} data-collapse-toggle="navbar-sticky" type="button" className="text-3xl md:hidden grid content-start" aria-controls="navbar-sticky" aria-expanded="false"><IoIosMenu /></button>
                        {/* Navigation Links */}
                        <div className={`${toggleNavbar ? 'hidden' : ''} w-full md:flex md:w-auto`} id="navbar-sticky" >
                            <ul className="flex md:flex-row flex-col p-3 font-medium md:space-x-8 border rounded-md md:border-0">
                                {navbarData.map((data, id) => (
                                    <li key={id}>
                                        <Link
                                            to={data.link}
                                            className={`${pathname === data.link ? 'border-blue-200 border-b-2 font-bold' : ''
                                                } block text-xl py-2 px-4 md:p-0 w-auto text-[#0e202a]`}
                                            aria-current={pathname === data.link ? 'page' : null}
                                        >
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* button */}
                            <button className='border-2 text-xl py-4 px-5 rounded-md border-blue-100 lg:block hidden'>Join Healthcare</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
