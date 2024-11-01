import React ,{useState,useEffect} from 'react'
import {CNavbar ,CContainer,CNavbarBrand,CNavbarToggler,CCollapse,CNavbarNav,CNavItem,CNavLink,CDropdown,CDropdownMenu,CDropdownItem,CDropdownDivider,CDropdownToggle} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import logo from "../../assest/landingImages/logo.svg";
import { toast } from 'react-toastify';

const DashboardNavbar:React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [auth , setAuth] = useState<boolean>(false)
    var navigate:NavigateFunction = useNavigate();
    // const notifyE = (mes:any) => toast.error(mes);
    // const notifyS = (mes:any) => toast(mes);

     useEffect(()=>{
      var authorization:null|string = localStorage.getItem("authorization")
      if(authorization) setAuth(true)
      else setAuth(false)
     },[auth])

  return (
    <div>
      <CNavbar expand="lg" className="">
          <CContainer style={{marginLeft: "13%"}}>
            <CNavbarBrand className='' href=""><img src={logo} alt="" /></CNavbarBrand>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse justify-center" visible={visible}>
              <CNavbarNav>
                <CNavItem className='flex items-center font-bold'>
                  <CNavLink
                  className='cursor-pointer'
                  onClick={()=>{
                    navigate("/")
                  }}
                  >Home</CNavLink>
                </CNavItem>
                <CNavItem className='flex items-center font-bold'>
                  <CNavLink
                  className='cursor-pointer'
                  onClick={()=>{
                    navigate("/allsuscribe")
                  }}
                  >See All Subscribe</CNavLink>
                </CNavItem>
                <CNavItem className='flex items-center font-bold'>
                  <CNavLink 
                  className='cursor-pointer'
                  >About Us</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink to='/login' ><button className='bg-custom-green px-4 py-2 font-bold text-white'
                  onClick={()=>{
                    if(auth){
                      localStorage.removeItem("authorization")
                      setAuth(false)
                      navigate("/")
                    }else{
                      navigate("/login")
                    }
                  }}
                  >{auth?"LOGOUT":"LOGIN"}</button></CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="" ><button className='border-solid border-2 border-custom-pink px-4 py-2 font-bold text-custom-pink'
                   onClick={()=>{
                    navigate("/register")
                  }}
                  >REGISTER</button></CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>
    </div>
  )
}

export default DashboardNavbar
