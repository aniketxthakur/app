import React from 'react'
import MakeUsDifferentCard from '../../../components/cards/makeUsDifferentCard/makeUsDifferentCard'

const WhyMakeUsDifferent = () => {

    return (
        <div id='' className='md:px-16 px-5 '>
            <div className='text-center font-bold grid gap-8'>
                <p className='text-3xl text-gray-400'>WHAT MAKE US DIFFERENT?</p>
                <p className='md:text-5xl text-xl md:px-40 text-[#050f4e]'>We bring solutions to make life easier for our customers.</p>
                <p className='text-xl md:px-40 font-light'>By ensuring that all individuals, regardless of factors such as age, gender, ethnicity, or socioeconomic status, have the opportunity to engage in these innovative trials, the initiative promotes the fundamental principles of inclusion, equality, and diversity within the realm of medical research and healthcare services.</p>
               <div>
                <MakeUsDifferentCard/>
               </div>

            </div>
        </div>
    )
}

export default WhyMakeUsDifferent
