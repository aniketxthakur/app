import React from 'react';
import clinician from './clinician.svg';
import Patients from './Patients.svg';
import Sponsors from './Sponsors.svg';

const Card = () => {
    const CardData = [
        { heading: 'Clinicians', para: 'Empowering you to connect your patients, improve patient care through clinical trials and expand the range ', img: clinician },
        { heading: 'Patients', para: 'Empower yourself in your healthcare decisions with direct access to clinical trials.', img: Patients },
        { heading: 'Sponsors', para: 'Expanding your clinical trials reach, boosting recruitment and embracing diversity for inclusive research.', img: Sponsors },
    ];
    return (
        <div className='flex flex-wrap'>
            {
                CardData.map((data, id) => {
                    return (
                        <div key={id} className="w-full md:w-1/2 lg:w-1/3 lg:my-0 ">
                            <div className='mx-2 lg:my-0 my-4 rounded-b-3xl'>
                                <img className="w-full rounded-t-2xl " src={data.img} alt="cardimg" />
                                <div className="bg-white py-8 rounded-b-2xl p-8 hover:shadow-[rgba(0,0,0,0.1)_5px_10px_10px_0px]">
                                    <p className="font-bold text-2xl mb-2">{data.heading}</p>
                                    <p className="text-gray-500 text-base">{data.para}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;
