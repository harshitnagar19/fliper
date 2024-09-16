import React ,{useEffect}from 'react'
import { Helpinghand } from '../helpiinghand/Helpinghand'
import card1 from "../../assest/landingImages/card1.svg"


const Cards = () => {
    let arr = [
        {src:"card1.svg"},
        {src:"card2.svg"},
        {src:"card3.svg"},
        {src:"card4.svg"},
        {src:"card5.svg"},
        {src:"card6.svg"},
    ]

    useEffect(()=>{

    },[])
    return (
        <div className='my-16'>
            <div className='text-center'>
                <h1 className='font-bold text-slate-800 '>Offerings open for investment</h1>
            </div>
            <div className='text-center mb-14'>
                <p className='m-0 text-slate-500'>Explore pre-vetted investment opportunities available in a growing</p>
                <p className='text-slate-500'>number of industry categories.</p>
            </div>
            <div className='container flex flex-wrap gap-6 gap-y-12 justify-center'>
                {arr.map((el)=>{
                    return <Helpinghand src={`${el.src}`}/>
                })}
            </div>
            <div className='text-center mt-16'>
                <button className='border-solid border-custom-pink border-2 text-custom-pink px-4 py-2 font-bold'>
                    View All Projects
                </button>
            </div>
        </div>
    )
}

export default Cards
