import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem 
} from 'mdb-react-ui-kit';
import Location from './Location';
import Login from '../Pages/Login';
import CartIcon from './CartIcon';
import { useNavigate } from 'react-router-dom';




export default function Navbar() {
  const nav = useNavigate()
  return (
    <>

      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' style={{color:'#53B175'}}>MY MART</MDBNavbarBrand>
          
       <div style={{display:'flex',justifyContent:'space-evenly'}}>
       <div style={{paddingLeft:'73rem',marginTop:'10px'}}>
          <Location />
      </div>
   <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='light'></MDBDropdownToggle>
      
       <div style={{display:'flex',justifyContent:'space-evenly',width:'5rem',alignItems:'center',paddingTop:'14px'}}>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <Login/>
        </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <CartIcon/>
  <span style={{paddingBottom:'10px'}}>0</span>
    </div>       
       </div>
        <MDBDropdownMenu >
          <MDBDropdownItem link>Order History</MDBDropdownItem>
          <MDBDropdownItem link onClick={() => nav('/orderStatus')}> Order Status </MDBDropdownItem>
          <MDBDropdownItem link>Log Out</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
       </div>
        </MDBContainer>

      </MDBNavbar>

      <br />

     
    </>
  );
}