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
import Login from '../Pages/UserLogin';
import CartIcon from './CartIcon';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function Navbar() {
  const nav = useNavigate()
  const cartProduct = useSelector(state => state.cart)
  return (
    <>

      <MDBNavbar light bgColor='light' >
        <MDBContainer fluid>
          <MDBNavbarBrand style={{color:'#53B175'}} onClick={()=>nav('/')}>MY MART</MDBNavbarBrand>
          
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
    </div>       
       </div>
       <span style={{color:'red'}}>{cartProduct.length}</span>

        <MDBDropdownMenu >
          <MDBDropdownItem link onClick={() => nav('/orderStatus')}>  Order Status</MDBDropdownItem>
          <MDBDropdownItem link onClick={() => nav('/admin')}> Admin</MDBDropdownItem>
          <MDBDropdownItem link onClick={() => nav('/admin/')}>Log Out</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

       </div>
        </MDBContainer>

      </MDBNavbar>

      <br />

     
    </>
  );
}