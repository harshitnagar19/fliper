import React,{useState} from 'react'
import { cardType } from '../cards/Cards';


export const Helpinghand:React.FC<{el:cardType}>= ({el}:{el:cardType}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  // console.log("el",el)
  return (
    // this div is of card
    <div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg  h-[380px]"
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)} 
        >
      {/* Image and header section */}
      <div className={isHovered?"relative transition-transform duration-500 ease-in-out -translate-y-52":"relative transition-transform duration-500 ease-in-out duration-500 ease-in-out translate-y-0"}>
        <img
          className="w-full h-48 object-cover ga"
          src={el.image}
          alt={"card"}
        />
        <div className="absolute top-4 left-4 flex space-x-2">
         {el.tag.map((ele:string[])=>{
          return <span className="bg-gray-900 text-white px-2 py-1 text-xs font-semibold uppercase rounded">{ele}</span>
         })} 
         
        </div>
      </div>

      {/* Content section */}
      <div className={isHovered?"px-6 py-4 transition-transform duration-500 ease-in-out -translate-y-52":"px-6 py-4 transition-transform duration-500 ease-in-out translate-y-0"}>
        <div className="font-bold text-xl mb-2">{el.title}</div>
        <p className="text-gray-600 text-sm mb-4">{el.location}</p>
        <p className="text-gray-700 text-base mb-4">
          {el.descripction}
        </p>

        {/* Progress bar */}
        <div className="h-2 relative max-w-full rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-300"></div>
          <div className="absolute top-0 h-full bg-green-500" style={{ width: '57%' }}></div>
        </div>

        {/* Funding details */}
        <div className="mt-2 text-gray-800 font-bold">
          ${el.getprice} <span className="font-normal text-gray-600">raised of ${el.totalprice}</span>
        </div>
      </div>

      {/* Hidden section on hover */}
      <div className={isHovered?"  transition-transform duration-500 ease-in-out -translate-y-52":" transition-transform duration-500 ease-in-out translate-y-0"}>
        <div className="py-6 px-3 grid grid-cols-2 gap-1 text-sm text-gray-700 mb-4">
          <div>Security Type</div>
          <div className="font-semibold">{el.securitytype}</div>
          <div>Investment Multiple</div>
          <div className="font-semibold">{el.investmentmultiple}x</div>
          <div>Maturity</div>
          <div className="font-semibold">{el.maturity}Months</div>
          <div>Min. Investment</div>
          <div className="font-semibold">${el.mininvestment}</div>
        </div>
        <button className="w-full pb-10 pt-1 bg-custom-pink text-white font-semibold ">
          VIEW
        </button>
      </div>
    </div>

    {/* //card div end */}
  </div>
  )
}
