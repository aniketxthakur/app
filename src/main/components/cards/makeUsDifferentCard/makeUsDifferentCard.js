import React from 'react';
import diffbgA from '../../../../assets/images/difbgA.svg';
import diffbgB from '../../../../assets/images/difbgB.svg';
import diffbgC from '../../../../assets/images/difbgC.svg';
import firsticon from '../../../../assets/icons/firsticon.svg';
import secondicon from '../../../../assets/icons/secondicon.svg';
import thirdicon from '../../../../assets/icons/thirdicon.svg';

const MakeUsDifferentCard = () => {
  const CardData = [
    { bg: diffbgA, img: firsticon, para: 'Enhancing Clinical Trails Access' },
    { bg: diffbgB, img: secondicon, para: 'Promoting Inclusion and Equality', color: 'text-white' },
    { bg: diffbgC, img: thirdicon, para: 'Fostering Equitable Healthcare' },
  ];

  return (
    <div className='flex flex-wrap  md:pt-8'>
      {CardData.map((data, id) => {
        return (
          <div key={id} className="w-full lg:w-1/3 ">
            <div className='my-4  lg:m-5 bg-cover bg-no-repeat border text-center text-xl font-bold rounded-xl grid  bg-white gap-3' style={{ backgroundImage: `url(${data.bg})` }}>
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
