import React, { useState, useEffect } from 'react'
import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownMenu, CDropdownItem, CDropdownDivider, CDropdownToggle } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assest/landingImages/logo.svg"
const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [auth, setAuth] = useState(false)
  var navigate = useNavigate();

  useEffect(() => {
    var authorization = localStorage.getItem("authorization")
    if (authorization) setAuth(true)
    else setAuth(false)
  }, [auth])
  return (
    <>
      <CNavbar expand="lg" className="">
        <CContainer style={{ marginLeft: "13%" }}>
          <CNavbarBrand className='' href=""><img src={logo} alt="" /></CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse justify-center" visible={visible}>
            <CNavbarNav>
              <CDropdown variant="nav-item" popper={false} className='flex items-center font-bold'>
                <CDropdownToggle >Investment Opportunities</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem className='cursor-pointer'>Action</CDropdownItem>
                  <CDropdownItem className='cursor-pointer'>Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem className='cursor-pointer'>Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="nav-item" popper={false} className='flex items-center font-bold'>
                <CDropdownToggle>How It Works</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem className='cursor-pointer'>Action</CDropdownItem>
                  <CDropdownItem className='cursor-pointer'>Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem className='cursor-pointer'>Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem className='flex items-center font-bold'>
                <CNavLink className='cursor-pointer'>About Us</CNavLink>
              </CNavItem>
              <CNavItem className={`flex items-center font-bold ${auth ? "block" : "hidden"}`}>
                <CNavLink ><Link className='text-slate-600  no-underline ' to={"/dashboard"}>DashBoard</Link></CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink to='/login' ><button className='bg-custom-green px-4 py-2 font-bold text-white'
                  onClick={() => {
                    if (auth) {
                      localStorage.removeItem("authorization")
                      setAuth(false)
                    } else {
                      navigate("/login")
                    }
                  }}
                >{auth ? "LOGOUT" : "LOGIN"}</button></CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink className='cursor-pointer' >
                  <Link to="/register" className='border-solid border-2 border-custom-pink px-4 py-2 font-bold text-custom-pink no-underline'>
                    REGISTER
                  </Link> 
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default Navbar
