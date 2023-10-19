import React from 'react';
import A from './A.svg';
import B from './B.svg';
import C from './C.svg';
import D from './D.svg';
import E from './E.svg';


const whatWeDoCard = () => {
    const CardData = [
        { id: 1, img: A, heading: 'Problem', para: 'There many variations passages of available, but the majority have suffered...', },
        { id: 2, img: B, heading: 'Solution', para: 'There many variations passages of available, but the majority have suffered...', },
        { id: 3, img: C, heading: 'Innovatiion', para: 'There many variations passages of available, but the majority have suffered...', },
        { id: 4, img: D, heading: 'Trails', para: 'There many variations passages of available, but the majority have suffered...', },
        { id: 5, img: E, heading: 'Success', para: 'There many variations passages of available, but the majority have suffered...', },
    ];
    return (
        <>
            <div id='blogs' className='bg-gradient-to-t from-[#eff7fc] grid gap-8 px-8 py-20'>
                <p className='font-black border-b-2 pb-4'>HOW WE DO</p>
                <h1 className='text-4xl lg:w-3/4'> <span className='font-black'>Variations </span>of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</h1>
                <div className='flex flex-wrap'>
                    {
                        CardData.map((data, id) => {
                            return (
                                <div key={id} className="w-full md:w-1/3 lg:w-1/5 lg:my-0 ">
                                    <div className='mx-2 lg:my-0 my-4 hover:shadow-[rgba(0,0,0,0.1)_5px_10px_10px_0px] rounded-b-3xl'>
                                        <div className="bg-white py-8 rounded-b-2xl p-8 font-bold text-2xl grid gap-3">
                                            <p className='ps-1'>{data.id}.</p>
                                            <img src={data.img} alt="cardimg" />
                                            <p>{data.heading}</p>
                                            <p className='text-lg font-light'>{data.para}</p>
                                            <a href='/' className='text-lg' >*Read More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default whatWeDoCard;
