import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../navbar/DashboardNavbar'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Dashboard = () => {
  var navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [auth, setAuth] = useState("")
  const base_url = process.env.REACT_APP_BASE_URL 

  const notifyS = (mes) => toast(mes);
  const notifyE = (mes) => toast.error(mes);


  useEffect(() => {
    const authh = localStorage.getItem("authorization")
    if (authh) {
      setAuth(authh)
      console.log(authh)
    } else {
      navigate("/")
    }
  }, [])

  const validationSchema = Yup.object({
    tag: Yup.array().of(Yup.string()).min(1, 'At least one tag is required'),
    image: Yup.string().required('Image is required'),
    title: Yup.string().required('Title is required'),
    location: Yup.string().required('Location is required'),
    description: Yup.string().required('Description is required'),
    totalprice: Yup.number().required('Total Price is required').positive('Price must be positive'),
    getprice: Yup.number().required('Get Price is required').positive('Price must be positive'),
    securitytype: Yup.string().required('Security Type is required'),
    investmentmultiple: Yup.string().required('Investment Multiple is required'),
    maturity: Yup.string().required('Maturity is required'),
    mininvestment: Yup.number().required('Minimum Investment is required').positive('Investment must be positive'),
  });

  // Formik for form handling
  const formik = useFormik({
    initialValues: {
      tag: [],
      image: '',
      title: '',
      location: '',
      description: '',
      totalprice: '',
      getprice: '',
      securitytype: '',
      investmentmultiple: '',
      maturity: '',
      mininvestment: '',
    },
    validationSchema,
    onSubmit: async(values) => {
      setFormData(values);
      try{
        let result = await axios.post(`${base_url}/card`,values, {headers: {'authorization': auth}})
        console.log(result.data)
        if(result.data.status=="ok"){
          notifyS("sucessuly data entered")
        }else{
          notifyE(result.data.msg)
        }
      }
      catch(err){
        notifyE(err.data.msg)
      
      }

    },
  });

  return (
    <div >
      <DashboardNavbar />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create New Card</h1>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Added By */}
          {/* Tag */}
          <div>
            <label className="block text-gray-700">Tags (comma separated)</label>
            <input
              name="tag"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.tag}
              onChange={(e) => formik.setFieldValue('tag', e.target.value.split(','))}
            />
            {formik.errors.tag && <p className="text-red-500 text-sm">{formik.errors.tag}</p>}
          </div>

          {/* Image */}
          <div>
            <label className="block text-gray-700">Image URL</label>
            <input
              name="image"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.image}
              onChange={formik.handleChange}
            />
            {formik.errors.image && <p className="text-red-500 text-sm">{formik.errors.image}</p>}
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              name="title"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && <p className="text-red-500 text-sm">{formik.errors.title}</p>}
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700">Location</label>
            <input
              name="location"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.location}
              onChange={formik.handleChange}
            />
            {formik.errors.location && <p className="text-red-500 text-sm">{formik.errors.location}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            {formik.errors.description && <p className="text-red-500 text-sm">{formik.errors.description}</p>}
          </div>

          {/* Total Price */}
          <div>
            <label className="block text-gray-700">Total Price</label>
            <input
              name="totalprice"
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.totalprice}
              onChange={formik.handleChange}
            />
            {formik.errors.totalprice && <p className="text-red-500 text-sm">{formik.errors.totalprice}</p>}
          </div>

          {/* Get Price */}
          <div>
            <label className="block text-gray-700">Get Price</label>
            <input
              name="getprice"
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.getprice}
              onChange={formik.handleChange}
            />
            {formik.errors.getprice && <p className="text-red-500 text-sm">{formik.errors.getprice}</p>}
          </div>

          {/* Security Type */}
          <div>
            <label className="block text-gray-700">Security Type</label>
            <input
              name="securitytype"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.securitytype}
              onChange={formik.handleChange}
            />
            {formik.errors.securitytype && <p className="text-red-500 text-sm">{formik.errors.securitytype}</p>}
          </div>

          {/* Investment Multiple */}
          <div>
            <label className="block text-gray-700">Investment Multiple</label>
            <input
              name="investmentmultiple"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.investmentmultiple}
              onChange={formik.handleChange}
            />
            {formik.errors.investmentmultiple && <p className="text-red-500 text-sm">{formik.errors.investmentmultiple}</p>}
          </div>

          {/* Maturity */}
          <div>
            <label className="block text-gray-700">Maturity</label>
            <input
              name="maturity"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.maturity}
              onChange={formik.handleChange}
            />
            {formik.errors.maturity && <p className="text-red-500 text-sm">{formik.errors.maturity}</p>}
          </div>

          {/* Minimum Investment */}
          <div>
            <label className="block text-gray-700">Minimum Investment</label>
            <input
              name="mininvestment"
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.mininvestment}
              onChange={formik.handleChange}
            />
            {formik.errors.mininvestment && <p className="text-red-500 text-sm">{formik.errors.mininvestment}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>

        {/* Display form data */}
        {formData && (
          <div className="mt-6 bg-gray-100 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Form Submitted Data</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Dashboard
