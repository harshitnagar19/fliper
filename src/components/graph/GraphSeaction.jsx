import React from 'react'
import "./graph.css"
import subtract from '../../assest/landingImages/Subtract.svg'
import graph from '../../assest/landingImages/graph.svg'
import dotmatrix from '../../assest/landingImages/dotmatrix.svg'
import graphcircle from '../../assest/landingImages/graphcircle.svg'

const GraphSeaction = () => {
    return (
        <div className='bg-custom-light-blue'>
            <div className='relative graph mb-40 mr-12 md:mr-0 pt-[150px] pb-[165px] '>
                <div className='container md:flex justify-center'>
                    <div className='ml-6 mb-7 md:mb-0 md:ml-[12.5rem] md:mr-10   w-full md:w-[31.3%]'>
                        <div className='pb-6'><img src={subtract} alt="" /></div>
                        <div><h1 className='font-bold text-3xl mb-6'>$7M+ paid out to investors</h1></div>
                        <div><p className='mb-0 text-sm text-slate-500 font-semibold'>Next invest has already paid out over $7M in cash returns to investors. Earn potential cash payments through unique revenue-share and debit financing investments.</p></div>
                    </div>
                    <div >
                        <img className='h-60' src={graph} alt="" />
                    </div>
                    <div className='hidden md:block self-end ml-40'>
                        <img src={dotmatrix} alt="" />
                    </div>
                </div>
                <div className='top-0 absolute right-0 mr-16'>
                    <img src={graphcircle} alt="" />
                </div>

            </div>
        </div>
    )
}

export default GraphSeaction
