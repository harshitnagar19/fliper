import React, { useState } from 'react'
import "./Login.css"
import login from "../../assest/loginImg/login.svg"
import { Link } from 'react-router-dom'
import { object, string } from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [showHidePass, setShowHidePass] = useState("password")
    const [password, setPassword] = useState("password123")
    const [email, setEmail] = useState("harshit@gmail.com")

    var navigate = useNavigate();


    //---------------------------------validation Schema-----------------------------

    const loginSchema = object({
        email: string().trim().matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, "email should be correct").required("email is required field"),
        password: string().required("password is required field")
    })
    const notify = (mes:any) => toast.error(mes);
    const sumbitLoginHandle = async () => {
        try {
            await loginSchema.validate({ email, password })
            const BASE_URL = process.env.REACT_APP_BASE_URL;
            axios.post(`${BASE_URL}/login`, { email, password }).then((res) => {
                if (res.data.status == "ok") {
                    localStorage.setItem("authorization", res.data.authToken)
                    console.log("ok", res.data)
                    navigate("/")
                } else {
                    notify(res.data.msg)
                }
            }).catch((err) => {
                notify(err.message)
                console.log(err)
            })
        } catch (err:any) {
            notify(err.message)

        }
    }
    return (
        <div className='containerr'>
            <div className='left-child'>
                <div className="login-img"> <img src={login} ></img></div>
            </div>
            <div className='right-child'>
                {/* ---- */}
                <div className="form">
                    <span className="signup">SIGN IN</span>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="form--input"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    ></input>
                    <input
                        type={showHidePass}
                        placeholder="Password"
                        className="form--input"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    ></input>
                    <div className='showPass'><input type="checkbox" onChange={(e) => { e.target.checked == true ? setShowHidePass("text") : setShowHidePass("password") }} /><label> show password</label></div>
                    <div className="forget-password"><Link to={""} >~Forget Password </Link></div>
                    <div className="form--marketing">
                        <label htmlFor="okayToEmail" className="checkbox text-sm">
                            Create a new account -
                        </label><Link to={"/register"} className="sign-up">Sign Up</Link>
                    </div>
                    <button
                        className="form--submit"
                        onClick={sumbitLoginHandle}
                    > 
                    Sign In
                    </button>
                </div>
                {/* ---- */}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
