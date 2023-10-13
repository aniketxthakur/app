import React from 'react'
import tab from './images/tab.svg';
import recent from './images/recent.svg';
import Card from '../components/card/card';
import { FaBacterium } from 'react-icons/fa6'
import Cards from '../components/card/workCard/cards';
import Slider from '../components/sliders/slider';
import NewsCard from '../components/card/newsCards/newsCard';
import RecordCards from '../components/card/recordCard/recordCards';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const NeuralData = [
        { name: 'Neural Engineering', link: '/' },
        { name: 'Neural Engineering', link: '/' },
        { name: 'Neural Engineering', link: '/' },
    ]
    const MedicalData = [
        { name: 'Immunology Research', link: '/' },
        { name: 'Immunology Research', link: '/' },
    ]

    const data = [
        { name: "1" },
        { name: "2" },
        { name: "3" },
        { name: "4" },
        { name: "5" },
    ]
    return (
        <div className='mt-20'>
            <div className=' grid gap-8 px-8 py-16'>
                <h1 className='text-4xl lg:w-3/4'> <span className="font-black">Empowering</span> primary care professionals to seamlessly identify and engage with eligible patients for clinical trail opportunities.</h1>
                <p className='text-gray-400'>Helping Patients access innovative clinical trials regardless of demographics, location, or venue of care thus advocating inclusion, equality and diversity.</p>
            </div>
            <div className="relative mx-8">
                <img src={tab} alt="" className="w-full" />
                <div className="md:flex absolute lg:py-3 bottom-8 md:bottom-20 lg:bottom-28 right-0 lg:mr-8 md:mr-4 text-white lg:text-5xl">
                    <RecordCards number='*1.9m' title='medicines developed' />
                    <RecordCards number='*104K+' title='patients supported daily' />
                </div>
            </div>
            <div className='bg-gradient-to-t from-[#eff7fc] grid gap-8 px-8 py-20'>
                <p className='font-black border-b-2 pb-4'>WHAT WE DO</p>
                <h1 className='text-4xl  lg:w-3/4'> <span className="font-black">Variations </span>of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</h1>
                <Card />
            </div>
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
                                    <h1 className='text-3xl font-medium   border-b-2 pb-4 font-semibold text-black'>Neural Research</h1>
                                    {
                                        NeuralData.map((data, id) => {
                                            return (
                                                <Link key={id} to={data.link} className='flex'><span className='px-2 pt-1 text-gray-00'><FaBacterium /></span>{data.name}</Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='flex-auto py-5'>
                                <div className='grid gap-4'>
                                    <h1 className='text-3xl font-medium  border-b-2 pb-4 font-semibold text-black'>Medical Research</h1>
                                    {
                                        MedicalData.map((data, id) => {
                                            return (
                                                <Link key={id} to={data.link} className='flex '><span className='px-2 pt-1'><FaBacterium /></span>{data.name}</Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <a href='/' className='text-xl font-semibold'>READ MORE ABOUT TRAILS </a>
                    </div>
                </div>
            </div>
            <Slider />
            <div className="lg:grid grid-cols-2 grid-flow-row bg md:flex ps-8 py-28 text-white">
                <div className=" grid gap-8 py-16 pr-10">
                    <h1 className='text-4xl'><span className='font-black'>Solutions</span> Provided by Healthcare</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    <div className='flex'>
                        <div className='flex-auto'>
                            <div className='grid gap-4 '>
                                {
                                    NeuralData.map((data, id) => {
                                        return (
                                            <Link key={id} to={data.link} className='flex '><span className='px-2 pt-1'><FaBacterium /></span>{data.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex-auto'>
                            <div className='grid gap-4'>
                                {
                                    MedicalData.map((data, id) => {
                                        return (
                                            <Link key={id} to={data.link} className='flex '><span className='px-2 pt-1'><FaBacterium /></span>{data.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel showArrows={false} autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true} stopOnHover={false} showStatus={false} showIndicators={false} centerMode={true} centerSlidePercentage={100} transitionTime={500} >
                        {data.map((data, id) => (
                            <div className="md:flex text-start">
                                <div className="rounded-xl bg-[#799EAE33] bg-opacity-20 flex-auto m-2 px-8 pt-28 pb-16 ">
                                    <h1 className='text-3xl'>Solutions for neural problems</h1>
                                    <p className='border-b-2 py-4'>There are many variations of passages of
                                        available, but the majority have suffered
                                        alteration in some form, injected humour,
                                        or randomised words which don't...</p>
                                    <div className="flex justify-end ">
                                        <button className='border-2 flex justify-items-end border-blue-100 p-4 mt-6 rounded-md'>Join Healthcare</button>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-[#799EAE33] bg-opacity-20 flex-auto m-2 px-8 pt-28 pb-16 ">
                                    <h1 className='text-3xl'>Solutions for neural problems</h1>
                                    <p className='border-b-2 py-4'>There are many variations of passages of
                                        available, but the majority have suffered
                                        alteration in some form, injected humour,
                                        or randomised words which don't...</p>
                                    <div className="flex justify-end ">
                                        <button className='border-2 flex justify-items-end border-blue-100 p-4 mt-6 rounded-md'>Join Healthcare</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className='bg-gradient-to-t from-[#eff7fc] grid gap-8 px-8 py-20'>
                <p className='font-black border-b-2 pb-4'>HOW WE DO</p>
                <h1 className='text-4xl lg:w-3/4'> <span className="font-black">Variations </span>of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</h1>
                <div className="flex flex-wrap">
                    <Cards />
                </div>
            </div>
            <div className='grid gap-8 px-8 py-20'>
                <p className='font-black border-b-2 pb-4'>WHAT'S NEW</p>
                <h1 className='text-4xl'> <span className="font-black">NEWS & </span>Stories</h1>
                <NewsCard />
            </div>
        </div>
    )
}

export default Home