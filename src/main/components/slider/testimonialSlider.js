import React from 'react'
import star from '../../../assets/icons/star.svg'
import Testimonial from '../../../assets/images/Testimonial.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const TestimonialSlider = () => {
  const data = [
    { para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
    { para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
    { para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
    { para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
    { para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
    { para: 'Doctus propriae erroribus an eam, mel agam modus civibus, vim solet dissentiet cu velit sanctus mei', name: 'Jhon Doe', role: 'PRINCIPAL SCIENTIST, TRANSLATIONAL BIOLOGY' },
  ]

  return (
    <Carousel showArrows={false} autoPlay={false} interval={3000} showThumbs={false} infiniteLoop={true} stopOnHover={false} showStatus={false} showIndicators={true} className='md:w-auto w-96' centerMode={false} centerSlidePercentage={100} transitionTime={500} >
      {data.map((data, id) => (
           <div key={id} className="md:grid block grid-cols-2 grid-flow-row">
            <div>
              <img src={Testimonial} alt={`${id + 1}`} className="w-full h-full" />
            </div>
            <div className='md:text-3xl text-xl text-center px-10 grid content-center gap-10'>
              <img className='h-10' src={star} alt="" />
              <p >“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”</p>
              <div className='mb-16'>
                <p className='font-bold'>Coriss Ambady</p>
                <p> Neurologist</p>
              </div>
            </div>
          </div>
       ))}
    </Carousel>
  )
}

export default TestimonialSlider
