import React from 'react'

const Cards = () => {
    return (
        <div className='my-16'>
            <div className='text-center'>
                <h1 className='font-bold text-slate-800 '>Offerings open for investment</h1>
            </div>
            <div className='text-center'>
                <p className='m-0 text-slate-500'>Explore pre-vetted investment opportunities available in a growing</p>
                <p className='text-slate-500'>number of industry categories.</p>
            </div>
            
            <div className='text-center'>
            <button className='border-solid border-custom-pink border-2 text-custom-pink px-4 py-2 font-bold'>
                View All Projects
            </button>
            </div>
        </div>
    )
}

export default Cards
