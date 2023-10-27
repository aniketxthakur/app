import React from 'react'
import articles from '../../../../assets/images/articles.svg'
import DefaultButton from '../../../components/buttons/defaultButton'

const Article = () => {
    return (
        <div id='home' className='bg-gradient-to-r from-[#050f4e] from-50%  to-white to-0% py-16 md:py-24 lg:px-20 px-5'>
            <div className='flex flex-wrap bg-white rounded-xl shadow-xl border lg:px-0 md:p-10 p-5'>
                <div className="w-full lg:w-1/2 font-bold p-5  lg:ps-20 lg:pr-10 md:text-3xl text-xl">
                    <p className='text-gray-400 pb-4 '>ARTICLE</p>
                    <p className='md:text-5xl text-xl text-[#050f4e] py-6'>The Benefits Of Digital Sequence Information In Biological Research.</p>
                    <p>By Matthew Schwartz, Founder & Executive Director</p>
                    <DefaultButton name='Read More' class='transition duration-300 ease-in-out hover:scale-110 text-white bg-[#050f4e] py-4 px-8 text-xl font-normal mt-4' />
                </div>
                <div className="w-full lg:w-1/2 font-bold lg:py-20 lg:pr-20 lg:ps-10">
                    <img className='w-full' src={articles} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Article
