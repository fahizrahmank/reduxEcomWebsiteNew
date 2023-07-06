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
import { MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


export default function CartIcon() {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);

  const nav = useNavigate()

  return (
    <>
      <p onClick={toggleShow}><MDBIcon fas icon="shopping-cart" /></p>

      <MDBModal
        animationDirection='right'
        show={topRightModal}
        tabIndex='-1'
        setShow={setTopRightModal}
      >
        <MDBModalDialog position='top-right' side>
          <MDBModalContent>
            <MDBModalHeader className='bg-info text-white'>
              <MDBModalTitle>Product in the cart</MDBModalTitle>
              <MDBBtn
                color='none'
                className='btn-close btn-close-white'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='row'>
                <div className='col-3 text-center'>
                  <i className='fas fa-shopping-cart fa-4x text-info'></i>
                </div>

                <div className='col-9'>
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>No pressure, your product will be waiting for you in the cart.</p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='info'onClick={() => nav('/cart')}>Go to the cart</MDBBtn>
              <MDBBtn outline color='info' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}