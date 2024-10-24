import React from 'react';
import './carosal.css';
import Circle from '../../assest/landingImages/circle.svg';
import line from '../../assest/landingImages/lines.svg';
import { Element } from 'react-scroll';
import { Fade ,Slide} from "react-awesome-reveal";

const Carosal = () => {
    return (
        <Element name='home'>
            <div className='landing flex'>
            <div className='relative flex mt-[4%] left-[12%] mb-[12%]'>
                <div className=''>
                    <img src={Circle} alt="" className='opacity-90' />
                </div>
                <div className='relative top-[7%] md:top-[19%] left-[-25%]'>
                <Fade duration={5000}> <p className='md:text-5xl font-bold text-white'>Meaningful investments in Main Street businesses</p></Fade>
                <Slide triggerOnce>  <p className=' text-white m-0'>Browse vetted investment offerings in </p></Slide >
                <Slide triggerOnce> <p className=' md:mb-10 text-white'>communities all over the US.</p></Slide >
                    <button className="bg-custom-green text-white py-2 px-8 text-xs md:text-lg  hover:bg-green-600 transition text-white font-bold">
                        GET STARTED
                    </button>
                </div>
            </div>
            <div className="self-end "><img src={line} alt="" className="" /></div>
        </div>
        </Element>
    );
}

export default Carosal
