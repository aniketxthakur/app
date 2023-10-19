import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import DefaultButton from '../buttons/defaultButton'
import { Link } from 'react-router-dom'
import { FaBacterium } from 'react-icons/fa6'
import bg from './bg.jpg'

const HealthcareSolutions = () => {
    const NeuralData = [
        { name: 'Neural Engineering', link: '/' },
        { name: 'Neural Engineering', link: '/' },
        { name: 'Neural Engineering', link: '/' },
    ]
    const MedicalData = [
        { name: 'Immunology Research', link: '/' },
        { name: 'Immunology Research', link: '/' },
    ]
    const SliderData = [
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
        { name: 'Solutions for neural problems', para: 'There are many variations of passages of available, but the majority have suffered alteration in some form, injected humour, or randomised words which dont...' },
    ]
    return (
             <div id='solution' style={{backgroundImage: `url(${bg})` , backgroundSize:'cover'}} className="lg:grid grid-cols-2 grid-flow-row md:flex ps-8 py-28 text-white">
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
                    <Carousel showArrows={false} autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true}   showStatus={false} showIndicators={false} centerMode={true} centerSlidePercentage={100} transitionTime={500} >
                        {SliderData.map((data, id) => (
                            <div key={id} className="md:flex text-start">
                                <div className="rounded-xl bg-[#799EAE33] bg-opacity-20 flex-auto m-2 px-8 pt-28 pb-16 ">
                                    <h1 className='text-3xl'>{data.name}</h1>
                                    <p className='border-b-2 py-4'>{data.para}</p>
                                    <div className='flex justify-end '>
                                        <DefaultButton name='Join Healthcare' />
                                    </div>
                                </div>
                                <div className="rounded-xl bg-[#799EAE33] bg-opacity-20 flex-auto m-2 px-8 pt-28 pb-16 ">
                                    <h1 className='text-3xl'>{data.name}</h1>
                                    <p className='border-b-2 py-4'>{data.para}</p>
                                    <div className='flex justify-end'>
                                        <DefaultButton name='Join Healthcare' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
     )
}

export default HealthcareSolutions
