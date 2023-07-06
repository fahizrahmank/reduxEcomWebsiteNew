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
  MDBInput ,
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);

  const nav = useNavigate()

  return (
    <>
      <p onClick={toggleShow}><MDBIcon fas icon="user-circle" /> </p>
      
      <div> 
      <MDBModal
        animationDirection='right'
        show={topRightModal}
        tabIndex='-1'
        setShow={setTopRightModal}
      >
        <MDBModalDialog position='top-right' side>
          <MDBModalContent>
            <MDBModalHeader className='bg-info text-white'>
              <MDBModalTitle>Login Here</MDBModalTitle>
              <MDBBtn
                color='none'
                className='btn-close btn-close-white'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='row'>
                <div className='col-3 text-center'>
                  {/* <i className='fas fa-shopping-cart fa-4x text-info'></i> */}
                  <div>
                  <MDBIcon className='ms-1' icon='user-circle' size='6x' />
                    </div>
                 
                </div>

                <div className='col-9'>
                <MDBInput label='Email ' id='typeEmail' type='email' />
                <br />
                <MDBInput label='Password ' id='typePassword' type='password' />
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
            <p onClick={() => nav('/signup')}>Not a member ? <span style={{color:'blue'}}>Register</span></p> 
              <MDBBtn color='info'>Sign in</MDBBtn>
              <MDBBtn outline color='info' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div> 
    </>
  );
}