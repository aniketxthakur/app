import React from 'react'
import tab from './tab.svg';
import RecordCards from './recordCards';

const AllRecord = () => {
    return (
        <div id='home'>
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
        </div>
    )
}

export default AllRecord
