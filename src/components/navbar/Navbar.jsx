import React ,{useState} from 'react'
import {CNavbar ,CContainer,CNavbarBrand,CNavbarToggler,CCollapse,CNavbarNav,CNavItem,CNavLink,CDropdown,CDropdownMenu,CDropdownItem,CDropdownDivider,CDropdownToggle} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import logo from "../../assest/Next Invest - Landing Page (images)/logo.svg"
const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <CNavbar expand="lg" className="">
          <CContainer style={{marginLeft: "13%"}}>
            <CNavbarBrand className='' href="#"><img src={logo} alt="" /></CNavbarBrand>
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
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="nav-item" popper={false} className='flex items-center font-bold'>
                  <CDropdownToggle>How It Works</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem className='flex items-center font-bold'>
                  <CNavLink href="#">About Us</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" ><button className='bg-custom-green px-4 py-2 font-bold text-white' >LOGIN</button></CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" ><button className='border-solid border-2 border-custom-pink px-4 py-2 font-bold text-custom-pink' >REGISTER</button></CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>
    )
}

export default Navbar
