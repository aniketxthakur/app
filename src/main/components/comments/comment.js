import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import doctor from './doctor.svg';
import icon from './icon.svg';


const Comment = () => {
    const data = [
        { icon: <RiDoubleQuotesL />, para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
        { icon: <RiDoubleQuotesL />, para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
        { icon: <RiDoubleQuotesL />, para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
        { icon: <RiDoubleQuotesL />, para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
        { icon: <RiDoubleQuotesL />, para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
        { icon: <RiDoubleQuotesL />, para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
    ]
    return (
        <Carousel showArrows={false} autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true} stopOnHover={false} showStatus={false} showIndicators={true} className="custom-carousel" centerMode={true} centerSlidePercentage={100} transitionTime={500} >
            {data.map((data, id) => (
                <div key={id} className='py-20 px-8'>
                    <div className="grid block grid-cols-5 grid-flow-row">
                        <div>
                            <img src={doctor} alt={`${id + 1}`} className="w-full h-full" />
                        </div>
                        <div className="col-span-4 lg:text-4xl text-start text-xl ps-10 mt-6">
                            <div className='w-20'>
                                <img src={icon} alt='i' className='w-10 h-14 f' />
                            </div>
                            <h1 className='pt-8'>{data.para}</h1>
                            <p className='pt-8 lg:text-2xl font-medium text-sm'>{data.name}</p>
                            <p className='text-xs pt-1 '>{data.role}</p>
                        </div>
                    </div>

                </div>
            ))}
        </Carousel>
    )
}

export default Comment
