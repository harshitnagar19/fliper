import React from 'react'
import personImg from '../../assest/landingImages/person.svg'
import shape from '../../assest/landingImages/Shape.svg'
const Section4 = () => {
  return (
    <div>
      <div className='flex ml-[25%]'>
        <div>
            <div><h1>Looking to raise captial for your growing business</h1></div>
            <div><p>Wether expanding or opening a brand-new concept , we make it easy to raise money from thousands of local investors </p></div>
            <div><button>APPLY ONLINE</button></div>
        </div>
        <div>
            <img src={personImg} alt="" />
        </div>
        <div>
            <img src={shape} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section4
