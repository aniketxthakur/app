import React from 'react'
import img from './img.svg'
import check from './check.svg'
import DefaultButton from '../../../components/buttons/defaultButton'

const WhyChooseUs = () => {
    const promotingData = [
        { para: 'Ensuring patients join trials regardless of background or location.' },
        { para: 'Advocating diverse participation, breaking healthcare barriers.' },
        { para: 'Advancing medical science, benefiting all demographic groups.' },
    ]
    return (
        <div className='md:px-24 px-5 '>
            <div className='text-center font-bold grid gap-8'>
                <p className='text-3xl text-gray-400'>WHY CHOOSE FIND MY TRIALS?</p>
                <p className='md:text-5xl text-xl md:px-40 text-[#050f4e]'>We helping patients access innovative clinical trials regardless of demographics, location, or venue of care thus advocating inclusion, equality and diversity.</p>
                <div className="text-start flex flex-wrap md:mt-20">
                    <div className="w-full md:w-1/2">
                        <img className=' md:pr-20' src={img} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 text-xl font-light py-8">
                        <p className="text-3xl text-[#050f4e] font-bold pb-4">Promoting Inclusion and Equality:</p>
                        <p className='pb-4'>By advocating for inclusivity, the initiative not only advances medical science by gathering diverse and representative data but also fosters a more equitable healthcare system where everyone has the chance to benefit from the latest advancements, thus contributing significantly to the overall improvement of public health.</p>
                        {
                            promotingData.map((data, id) => {
                                return (
                                    <div key={id} className='flex pb-4'> <img src={check} alt="" /> <span className='ps-4'>{data.para}</span></div>
                                )
                            })
                        }
                        <DefaultButton name='Learn More' class='bg-[#050f4e] text-white px-8 py-4 transition duration-300 ease-in-out hover:scale-110' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
