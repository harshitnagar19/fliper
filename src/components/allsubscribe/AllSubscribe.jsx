import React ,{useEffect ,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashboardNavbar from '../navbar/DashboardNavbar';
const AllSubscribe = () => {
    var navigate = useNavigate();
    const [suscribe , setSuscribe] =useState([])
    const base_url = process.env.REACT_APP_BASE_URL
    useEffect(()=>{
        let auth = localStorage.getItem("authorization")
        if(!auth){
            navigate("/")
        }else{
            axios.post(`${base_url}/suscribe/getallsuscribe`).then((data)=>{
                if(data.data.status=="ok"){
                    setSuscribe(data.data.data)
                }
            }).catch((err)=>{
    
            })
        }
    })
  return (
    <div>
        <DashboardNavbar/>
        <div className="max-w-2xl mx-auto py-8 px-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Subscribers Emails
      </h1>

      <ul className="space-y-4">
        {suscribe.map((subscriber, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-md shadow-md hover:bg-blue-100 transition duration-200">
            <p className="text-blue-600 font-medium text-lg">{subscriber.email}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <p className="text-gray-500">Total Subscribers: {suscribe.length}</p>
      </div>
    </div>
    </div>
  )
}

export default AllSubscribe
