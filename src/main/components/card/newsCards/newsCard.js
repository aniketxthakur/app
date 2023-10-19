import React from 'react';
import { BsDot } from 'react-icons/bs'
import A from './A.svg';
import B from './B.svg';
import C from './C.svg';

const NewsCard = () => {
  const CardData = [
    { heading: 'Getting AI to Reason: Using Neuro Symbolic Question Answering', img: A },
    { heading: 'Technology Breakthrough Always Change How The World Works', img: B },
    { heading: 'The Benefits Of Digital Sequence Information In Biological Research', img: C },
  ];
  return (
    <div className='grid gap-8 px-8 py-20' >
      <p className='font-black border-b-2 pb-4'>WHAT'S NEW</p>
      <h1 className='text-4xl'> <span className='font-black'>NEWS & </span>Stories</h1>

      <div className="flex flex-wrap">
        {
          CardData.map((data, id) => {
            return (
              <div key={id} className="w-full md:w-1/2 lg:w-1/3 lg:my-0 ">
                <div className='mx-2 lg:my-0 my-4'>
                  <img className="w-full rounded-xl" src={data.img} alt="cardimg" />
                  <div className="bg-white py-6 grid gap-6 hover:shadow-[rgba(0,0,0,0.1)_5px_10px_10px_0px]">
                    <div className='flex text-white'>
                      <button className="bg-[#aab6e0] rounded-3xl px-4 py-1 mr-3">News</button>
                      <button className="bg-[#80cfb3] rounded-3xl px-4 py-1">Science</button>
                    </div>
                    <div className="font-bold text-xl">{data.heading}</div>
                    <div className="flex">
                      <p>Jhon Doe </p>
                      <p className='mx-2 text-3xl text-[#9dbdcf]'>< BsDot /></p>
                      <p>10/10/2023</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewsCard;
