import React from 'react'
import articles from './articles.svg'
import DefaultButton from '../../../components/buttons/defaultButton'

const Article = () => {
    return (
        <div id='home' className='bg-gradient-to-r from-[#050f4e] from-50%  to-white to-0% py-16 md:py-24 md:px-20 px-5'>
            <div className='flex flex-wrap bg-white rounded-xl shadow-xl border '>
                <div className="w-full md:w-1/2 font-bold p-5 md:py-20 md:ps-20 md:pr-10 md:text-3xl text-xl">
                    <p className='text-gray-400 pb-4 pt-8'>ARTICLE</p>
                    <p className='md:text-5xl text-xl text-[#050f4e] py-6'>The Benefits Of Digital Sequence Information In Biological Research.</p>
                    <p>By Matthew Schwartz, Founder & Executive Director</p>
                    <DefaultButton name='Read More' class='transition duration-300 ease-in-out hover:scale-110 text-white bg-[#050f4e] py-4 px-8 text-xl font-normal mt-8 md:mt-14' />
                </div>
                <div className="w-full md:w-1/2 font-bold p-5 md:py-20 md:pr-20 md:ps-10">
                    <img className='md:w-full' src={articles} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Article
