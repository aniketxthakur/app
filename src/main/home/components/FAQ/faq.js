import React, { useState } from 'react';
import SearchInput from '../../../components/input/searchInput';
import FAQimg from './FAQimg.svg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import DefaultButton from '../../../components/buttons/defaultButton';

function FaqComponent() {
    const [openSection, setOpenSection] = useState(null);
    const toggleContent = (section) => {
        if (openSection === section) {
            setOpenSection(null);
        } else {
            setOpenSection(section);
        }
    };
    const faqSections = [
        { id: 1, title: 'Coriss Ambady', content: 'Use our search feature, input your condition, and explore relevant trials matching your criteria.', },
        { id: 2, title: 'Who can participate in clinical trials?', content: 'Use our search feature, input your condition, and explore relevant trials matching your criteria.', },
        { id: 3, title: 'How can I find trials suitable for my condition?', content: 'Use our search feature, input your condition, and explore relevant trials matching your criteria.', },
        { id: 4, title: 'Will I receive compen sation for participating?', content: 'Use our search feature, input your condition, and explore relevant trials matching your criteria.', },
        { id: 5, title: 'What are the benefits of participating in a clinical trial?', content: 'Use our search feature, input your condition, and explore relevant trials matching your criteria.', },
    ];

    return (
        <div className='md:px-24 px-5 '>
            <div className='text-center font-bold grid gap-8'>
                <p className='text-3xl text-gray-400'>HAVE ANY QUESTION?</p>
                <p className='md:text-5xl text-xl md:px-40 text-[#050f4e]'>Frequently Asked Questions</p>
                <SearchInput />
                {/* FAQ */}
                {faqSections.map((section) => (
                    <div onClick={() => toggleContent(section.id)} key={section.id} className='cursor-pointer text-start p-8 border-2 rounded-lg md:text-3xl text-xl'>
                        <div className="flex">
                            <img src={FAQimg} alt="" />
                            <p className='flex-auto text-[#050f4e] ps-8'><span>{section.id}.  </span>{section.title}</p>
                            <div className="flex justify-end">
                                {openSection === section.id && (
                                    <p className={`text-end `}><IoIosArrowUp /></p>
                                )}
                                {openSection !== section.id && (
                                    <p className={`text-end`}><IoIosArrowDown /></p>
                                )}
                            </div>
                        </div>
                        {openSection === section.id && (
                            <div className="font-light">
                                <p className='ps-16 pt-8'>{section.content}</p>
                            </div>
                        )}
                    </div>
                ))}
                <DefaultButton name='Read More' class='transition duration-300 ease-in-out hover:scale-110 text-white bg-[#050f4e] py-4 px-8 text-xl font-normal' />
            </div>
        </div>
    );
}

export default FaqComponent;
