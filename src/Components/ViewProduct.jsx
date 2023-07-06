
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Button from './Button';


export default function ViewProduct() {
  
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);

  return (
    <>
      {/* <MDBBtn onClick={toggleShow}>Full screen below xl</MDBBtn> */}
      <span onClick={toggleShow}><Button  classes='mx-2' text='View Product' color='secondary'  /> </span>   

      <MDBModal tabIndex='-1' show={fullscreenXlModal} setShow={setFullscreenXlModal}>
        <MDBModalDialog size="fullscreen"	>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Full screen below xl</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className='img-thumbnail'
      alt='...'
    />
           
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type='button' color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}