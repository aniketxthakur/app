import React from 'react'
import Vector from '../../../../assets/images/Vector.svg';
import DefaultButton from '../../../components/buttons/defaultButton';
import HeroSectionCard from '../../../components/cards/heroSectionCard/heroSectionCard';

const HeroSection = () => {
    return (
        <div id='home' className=' lg:pt-36 md:pt-32 pt-16 text-white bg-no-repeat bg-auto lg:bg-contain' style={{ backgroundImage: `url(${Vector})`}} >
            <div className='text-center px-3 py-10 md:w-[800px] mx-auto grid gap-5'>
                <h1 className='leading-none lg:text-[83px] text-[40px] font-semibold'>Access Innovative Healthcare</h1>
                <p className='md:text-[28px] text-[20px]'>Empowering primary care professionals to seamlessly identify and engage with eligible patients for clinical trail opportunities.</p>
                <DefaultButton name='Contact Us' className='transition duration-300 ease-in-out hover:scale-110 bg-white text-blue-800 text-xl font-semibold px-14 py-5 md:mt-4' />
            </div>
            {/* Card */}
            <HeroSectionCard />
        </div>
    )
}
export default HeroSection
