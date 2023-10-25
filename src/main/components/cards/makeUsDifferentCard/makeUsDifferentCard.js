import React from 'react';
import first from './first.svg';
import second from './second.svg';
import third from './third.svg';
import firsticon from './firsticon.svg';
import secondicon from './secondicon.svg';
import thirdicon from './thirdicon.svg';

const MakeUsDifferentCard = () => {
  const CardData = [
    { bg: first, img: firsticon, para: 'Enhancing Clinical Trails Access' },
    { bg: second, img: secondicon, para: 'Promoting Inclusion and Equality', color: 'text-white' },
    { bg: third, img: thirdicon, para: 'Fostering Equitable Healthcare' },
  ];

  return (
    <div className='flex flex-wrap  md:pt-8'>
      {CardData.map((data, id) => {
        return (
          <div key={id} className="w-full md:w-1/2 lg:w-1/3 ">
            <div className='my-4 md:m-5 bg-cover bg-no-repeat border text-center text-xl font-bold rounded-xl grid  bg-white gap-3' style={{ backgroundImage: `url(${data.bg})` }}>
              <div className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer flex py-12 md:text-3xl text-xl">
                <img className='md:ps-16 pr-8 ps-6' src={data.img} alt="" />
                <p className={`pr-10  ${data.color}`}>{data.para}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

  );
};

export default MakeUsDifferentCard;
