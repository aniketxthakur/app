import React from 'react'
import { Link } from 'react-router-dom'
import { FaBacterium } from 'react-icons/fa6'
import recent from './recent.svg'


const RecentTrails = () => {
    const NeuralData = [
        { name: 'Neural Engineering', link: '/' },
        { name: 'Neural Engineering', link: '/' },
        { name: 'Neural Engineering', link: '/' },
    ]
    const MedicalData = [
        { name: 'Immunology Research', link: '/' },
        { name: 'Immunology Research', link: '/' },
    ]
  return (
    <div className="px-8 pt-20">
    <div className='flex flex-wrap pb-20 border-b-2'>
        <div className="w-full md:w-1/2 lg:w-1/2 ">
            <img src={recent} alt="" className="w-full" />
        </div>
        <div className="w-full grid content-center md:w-1/2 lg:w-1/2 lg:px-14 pt-8 gap-5 ">
            <h1 className='text-4xl  pb-5'><span className='font-black '>Recent</span> Healthcare Trails</h1>
            <p className='text-gray-500'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <div className='flex pt-4 text-gray-500 text-lg'>
                <div className='flex-auto py-5'>
                    <div className='grid gap-4 '>
                        <h1 className='text-3xl font-medium border-b-2 pb-4 text-black'>Neural Research</h1>
                        {
                            NeuralData.map((data, id) => {
                                return (
                                    <Link key={id} to={data.link} className='flex hover:font-bold'><span className='px-2 pt-1 '><FaBacterium /></span>{data.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex-auto py-5'>
                    <div className='grid gap-4'>
                        <h1 className='text-3xl font-medium  border-b-2 pb-4 text-black'>Medical Research</h1>
                        {
                            MedicalData.map((data, id) => {
                                return (
                                    <Link key={id} to={data.link} className='flex hover:font-bold'><span className='px-2 pt-1'><FaBacterium /></span>{data.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Link to='/' className='text-xl font-semibold'>READ MORE ABOUT TRAILS </Link>
        </div>
    </div>
</div>
  )
}

export default RecentTrails
