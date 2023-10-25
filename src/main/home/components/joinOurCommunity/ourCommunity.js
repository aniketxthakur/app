import React from 'react'
import bg from '../../../../assets/images/bg.svg'
import DefaultButton from '../../../components/buttons/defaultButton'

const OurCommunity = () => {
  return (
    <div className='md:mx-24 mx-5 py-16 md:py-24 bg-no-repeat bg-cover text-white rounded-lg' style={{ backgroundImage: `url(${bg})`}}>
      <div className='text-center font-bold grid gap-8'>
        <p className='text-3xl'>JOIN OUR COMMUNITY</p>
        <p className='md:text-5xl text-xl md:px-40 font-normal'>We are trusted by over <span className='text-[#6ed8a1] font-bold'>5000+</span> clients. <span className="block">Join them now and grow your reach with us.</span></p>
        <DefaultButton name='Contact Us' class='transition duration-300 ease-in-out hover:scale-110 text-[#050f4e] bg-[#6ed8a1] py-4 px-8 text-xl' />
       </div>
    </div>
  )
}

export default OurCommunity
