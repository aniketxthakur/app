import React from 'react'
import footerimg from "../../../assets/icons/footerimg.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    const learnMoreData = [
        { name: 'About Us' },
        { name: 'Our Blogs' },
        { name: 'Terms of Use' },
        { name: 'Privacy Policy' },
        { name: 'Contact Us' }
    ]
    return (
        <div id='contact' className='flex flex-wrap lg:px-20  md:pt-28 pt-8 text-xl'>
            <div className="w-1/2 lg:w-1/4">
                <div className='m-5 grid gap-8'>
                    <img src={footerimg} alt="" />
                    <p>© 2023 Find My Trials. <br />All rights reserved.</p>
                </div>
            </div>
            <div className="w-1/2 lg:w-1/4 ">
                <div className='m-5 grid gap-8'>
                    <h1 className='font-semibold text-3xl text-[#050f4e]'>Get In Touch</h1>
                    <p className="w-42">
                        Downtown St. 129/04 <br /> Light City, <br /> London
                        United Kingdom
                    </p>
                    <p className='cursor-pointer'><span className='hover:text-[#050f4e] hover:font-bold'>info@findmytrials.com</span> <br /><span className='hover:text-[#050f4e] hover:font-bold'>00 (123) 456 7890</span></p>
                </div>
            </div>
            <div className="w-1/2 lg:w-1/4">
                <div className='m-5 grid gap-8'>
                    <h1 className='font-semibold text-3xl text-[#050f4e]'>Learn More</h1>
                    <ul className='grid gap-4' >
                        {
                            learnMoreData.map((data, id) => {
                                return (
                                    <li key={id} className='hover:text-[#050f4e] hover:font-bold'>
                                        <Link to="">{data.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="w-1/2 lg:w-1/4">
                <div className='m-5 grid gap-8'>
                    <h1 className='font-semibold text-3xl text-[#050f4e]'>Our Newsletter</h1>
                    <p>Subscribe to our newsletter to get <br />updates about trails.</p>
                    <div className='md:flex'>
                        <input type="text" id="first_name" className="bg-gray-100 placeholder:text-black text-lg md:rounded-s-lg block w-full p-2.5" placeholder="Enter email address..." required />
                         <button className='bg-blue-800 text-white text-lg font-bold py-4 px-8 hover:bg-white hover:text-black hover:border-2 hover:border-gray-200 border-2 border-white md:rounded-r-lg'>Join</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
