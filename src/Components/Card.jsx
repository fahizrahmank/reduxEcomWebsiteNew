// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple
// } from 'mdb-react-ui-kit';
// import Button from './Button';
// import ViewProduct from './ViewProduct';

// export default function Card() {
//   return (
//     <div style={{display:'flex',width:'20%',justifyContent:'center',alignItems:'center'}} > 
//     <MDBCard >
//       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'> <br /><br />
//         <div style={{width:'114px',height:'88px', marginLeft:'5rem'}}>
//         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />

//         </div>
//         <a>
//           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//         </a>
     

//       </MDBRipple>
//       <div >
//       <MDBCardBody className='text-center' >
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         {/* <Button classes='mx-2' text='Show' color='tertiary'  />     */}
//         <ViewProduct/>
//        </MDBCardBody>

//       </div>
//     </MDBCard>
//     </div>
    
//   );
// }






import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBRipple ,MDBCardFooter, MDBCard} from "mdb-react-ui-kit";
import ViewProduct from './ViewProduct';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fethProducts } from "../assets/Redux/Slices/ProductSlice";
import Button from "./Button";



function Card() {
  const datas = useSelector((state) => state.products)
  const nav = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      dispatch(fethProducts(response.data))
    })
    
  },[])
  console.log(datas)
  return (  
        <>      
        <div style={{textAlign:'center'}}>
        <h2>Product Dashboard</h2>

        </div>
        <br /><br />
            <MDBRow   >
              {
                datas.map((product) => (
                
        <MDBCol md="12" lg="4" className="mb-4" style={{marginBottom:'10px',display:'flex',justifyContent:'space-evenly'}} >
          <br /><br /><br />
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong h-100"
            style={{ width: '28rem' ,display:'flex',alignItems:'center',flexDirection:'column' }}
            
          >
           <div className="text-center" >
           <img
              src={product.image}
              fluid
              className="w-100"
              style={{width: '100px', height: '200px',marginTop:'100px'}}
            />
           </div>
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div className="d-flex justify-content-start align-items-start h-100">
                  <h5>
                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                    ₹ {product.price}   
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
            <MDBCardFooter className='text-muted' style={{height:'170px',display:'flex',alignItems:'center'}} onClick={() => nav(`/viewproduct/${product.id}`)}> 
            <Button  classes='mx-2' text='View Product' color='secondary'   />
     </MDBCardFooter>
          </MDBRipple>
          

        </MDBCol>
     
                ))
              }
      </MDBRow>
      </>
  );
}

export default Card;