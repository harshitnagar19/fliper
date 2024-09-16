import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import facebook from '../../assest/LandingIcons/001-facebook.svg'
import twitter from '../../assest/LandingIcons/003-twitter.svg'
import insta from '../../assest/LandingIcons/004-instagram.svg'
import caretDown from '../../assest/LandingIcons/CaretDown.svg'
import axios from "axios"
import { Link } from "react-scroll";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
    const [rotated, setRotated] = useState(false);
    const [suscribe, setSuscribe] = useState("");
    const baseUrl = process.env.REACT_APP_BASE_URL

    const notifySucess = (notifyMessage) => toast(notifyMessage);
    const notifyError = (notifyMessage) => toast.error(notifyMessage);


    return (
        <div className="bg-gray-100 py-8 px-4">
            <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center">
                {/* Left Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-800">NEXT INVEST</h2>
                    <p className="text-xs font-semibold text-gray-500">Copyright &copy; 2020 Logolpsum. All rights reserved.</p>
                </div>
                {/* Middle Section */}
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <ul className="mt-2 space-y-1">
                            <li className="text-md font-semibold text-gray-700">Services</li>
                            <li className="text-gray-600">Email Marketing</li>
                            <li className="text-gray-600">Company</li>
                            <li className="text-gray-600">Branding</li>
                            <li className="text-gray-600">Offline</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="mt-2 space-y-1">
                            <li className="text-md font-semibold text-gray-700">About</li>
                            <li className="text-gray-600">Our Story</li>
                            <li className="text-gray-600">Benefits</li>
                            <li className="text-gray-600">Team</li>
                            <li className="text-gray-600">Careers</li>
                        </ul>
                    </div>
                </div>
                {/* Middle Section */}
                <div >
                    <Link to='home' smooth={true} duration={500}>   <button className='bg-custom-green rounded-full'>
                        <img
                            src={caretDown}
                            alt=""
                            className='p-2  inline filter invert brightness-0 transform rotate-180'
                        />
                    </button>
                    </Link>

                </div>
                {/* bottom Section */}

            </div>
            <div className="container flex justify-between ">
                <div className='ml-[20px] md:ml-[55px]'>
                    <h3 className="text-sm font-semibold text-gray-700">Subscribe to our newsletter</h3>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:ring-pink-400"
                            value={suscribe}
                            onChange={(e)=>{
                                setSuscribe(e.target.value)
                            }}
                        />
                        <button className="bg-pink-500 text-white px-2 py-2 rounded-r-md hover:bg-pink-600"
                            onMouseEnter={() => setRotated(true)}
                            onMouseLeave={() => setRotated(false)}
                            onClick={async()=>{
                                try{
                                    let response =   await axios.post(`${baseUrl}/suscribe`,{"email":suscribe})
                                    if(response.data.status=="OK"){
                                        notifySucess(response.data.msg);
                                    }else{
                                        notifyError(response.data.data[0])
                                    }
                                }catch(err){
                                    notifyError(err.message)
                                }finally{
                                    setSuscribe("")
                                }
                            }}
                        >
                            <img src={caretDown} alt="" className={`filter invert brightness-0 transform transition-transform duration-200 -rotate-90 ${rotated ? "scale-150" : ''}`} />
                        </button>

                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-4 mr-16 md:mr-40">
                    <img src={facebook} alt='media image...' className="text-gray-600 hover:text-gray-800"></img>
                    <img src={twitter} alt='media image...' className="text-gray-600 hover:text-gray-800"></img>
                    <img src={insta} alt='media image...' className="text-gray-600 hover:text-gray-800"></img>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Footer;
