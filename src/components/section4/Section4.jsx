import React from 'react'
import personImg from '../../assest/landingImages/person.svg'
import shape from '../../assest/landingImages/Shape.svg'
const Section4 = () => {
  return (
    <div>
      <div className='flex ml-[22%] gap-9 mb-40'>
        <div className='w-[60%]'>
            <div><h1 className='font-bold text-4xl text-slate-800 leading-snug'>Looking to raise captial for your growing business?</h1></div>
            <div className='w-[80%] text-slate-500 font-medium my-6'><p>Wether expanding or opening a brand-new concept , we make it easy to raise money from thousands of local investors. </p></div>
            <div><button className='px-[1.8rem] py-2.5 bg-custom-green text-white font-semibold'>APPLY ONLINE</button></div>
        </div>
        <div>
            <img src={personImg} alt="img loading..." className='' />
        </div>
        <div>
            <img src={shape} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section4
