import React ,{ReactNode, useEffect,useState}from 'react'
import { Helpinghand } from '../helpiinghand/Helpinghand'
import card1 from "../../assest/landingImages/card1.svg"
import axios, { AxiosResponse } from 'axios'
import { Fade } from 'react-awesome-reveal'

export type cardType =  {
    _id:string;
    addedBy:string;
    descripction:string;
    getprice:number;
    image:string;
    investmentmultiple:string;
    location:string;
    maturity:string;
    mininvestment:number;
    securitytype:string;
    tag: [];
    title:string;
    totalprice: number;
  }
type ApiResponse = {
    status:string;
    msg:string;
    data:cardType[];
}


const Cards = () => {
    const base_url:string = process.env.REACT_APP_BASE_URL || ""
    const [cards , setCards] =useState<cardType[]>([])
    

    useEffect(()=>{
        axios.post(`${base_url}/card/getcards`).then((res:AxiosResponse<ApiResponse>)=>{
            // console.log(res.data.data)
            if(res.data.status=="ok"){
                setCards(res.data.data)
            }
        }).catch((err)=>{

        })
    },[])
    return (
        <div className='my-16'>
            <div className='text-center'>
            <Fade cascade>  <h1 className='font-bold text-slate-800 '>Offerings open for investment</h1></Fade >
            </div>
            <div className='text-center mb-14'>
                <p className='m-0 text-slate-500'>Explore pre-vetted investment opportunities available in a growing</p>
                <p className='text-slate-500'>number of industry categories.</p>
            </div>
            <div className='container flex flex-wrap gap-6 gap-y-12 justify-center'>
                {cards.map((el:cardType):ReactNode=>{
                    return <Helpinghand el={el} />
                })}
            </div>
            <div className='text-center mt-16'>
                <button className='border-solid border-custom-pink border-2 text-custom-pink px-4 py-2 font-bold hover:bg-custom-pink hover:text-white'>
                    View All Projects
                </button>
            </div>
        </div>
    )
}

export default Cards
