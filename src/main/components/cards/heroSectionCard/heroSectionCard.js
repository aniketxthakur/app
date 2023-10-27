import React from 'react';
import diffA from '.././../../../assets/images/diffA.svg';
import diffB from '.././../../../assets/images/diffB.svg';
import diffC from '.././../../../assets/images/diffC.svg';
import { Link } from 'react-router-dom';

const HeroSectionCard = () => {
  const CardData = [
    { img: diffA, title: 'Clinicians', bgg:'hover:border-[#6ed8a1]', para: 'Empowering you to connect your patients, improve patient care through clinical trials and expand the range of healthcare experiences and choices available.', bg: 'text-[#6ed8a1]' },
    { img: diffB, title: 'Patients',  bgg:'hover:border-[#63d7fb]', para: 'Empower yourself in your healthcare decisions with direct access to clinical trials.', bg: 'text-[#63d7fb]' },
    { img: diffC, title: 'Sponsors', bgg:'hover:border-[#050f4e]', para: 'Expanding your clinical trials reach, boosting recruitment and embracing diversity for inclusive research.', bg: 'text-[#050f4e]', },
  ];
  return (
    <div className='flex flex-wrap lg:px-20 md:pt-8'>
      {
        CardData.map((data, id) => {
          return (
            <div key={id} className="w-full lg:w-1/3">
              <div className='m-5 p-10 border text-center text-xl font-bold rounded-xl shadow-xl shadow-gray-300/40  grid justify-items-center bg-white gap-3'>
                <img className="w-14 h-14" src={data.img} alt="cardimg" />
                <p className="text-3xl text-[#050f4e]">{data.title}</p>
                <p className={`text-black font-light lg:h-[100px]`}>{data.para}</p> bg
                <Link to='' className={`transition duration-300 ease-in-out hover:scale-110 hover:border-b-2 border-b-2 border-white  ${data.bgg}  ${data.bg}`}>Learn More</Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default HeroSectionCard;
