import React from 'react'
import customerSatisfaction from '../../../../assets/images/customerSatisfaction.svg'
import increasedRevenue from '../../../../assets/images/increasedRevenue.svg'
import TestimonialSlider from '../../../components/slider/testimonialSlider'


const Testimonials = () => {

  return (
    <div className='bg-gradient-to-b from-[#f6f7f9] from-55%  to-white to-0% pt-16 md:pt-28 md:px-20 px-5'>
      <div className='flex flex-wrap text-[#050f4e]'>
        <div className="w-full md:w-1/2 font-bold grid gap-8">
          <p className='text-3xl text-gray-400'>SAVE TIME AND MONEY</p>
          <p className='md:text-5xl text-xl'>Find My Trials reduce expenses, accelerate research, and yield quicker advancements, ultimately saving both time and money.</p>
        </div>
        <div className="sm:w-full mx-auto md:w-1/2">
          <div className="md:flex  md:justify-end md:p-0 pt-8">
            <img className='md:h-56' src={customerSatisfaction} alt="" />
            <img className='md:h-56 md:ps-40' src={increasedRevenue} alt="" />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap text-[#050f4e] md:mt-28 bg-white rounded-xl shadow-xl'>
        <TestimonialSlider />
      </div>
    </div>
  )
}

export default Testimonials
