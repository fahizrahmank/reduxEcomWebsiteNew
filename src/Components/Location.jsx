// import React from 'react';

// export default function Location() {
//   return (
//     // <MDBTextArea label='Message' id='textAreaExample' rows={4} />
//     // <textarea name="" id="" cols="30" rows="10"></textarea>
//     <input type="text"  className='location1'/>
//   );
// }



import { MDBIcon } from 'mdb-react-ui-kit';
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

export default function Location() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
    <p onClick={toggleShow}> <MDBIcon fas icon="map-marker-alt" /> </p>
      {/* <MDBBtn onClick={toggleShow}>< GrLocation  style={{fontSize:'1.3rem'}}/></MDBBtn> */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Enter your location</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            {/* <MDBModalBody>Modal body text goes here.</MDBModalBody> */}
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}