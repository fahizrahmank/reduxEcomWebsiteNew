import React, { useRef, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios"; 

export default function UserLogin() {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);
  const reff = useRef();
  const nav = useNavigate();
  const data = useSelector((state) => state.user);
  // console.log(data);

  const handleSubmit = () => {
    const loginEmail = reff.current.loginEmail.value;
    const loginPassword = reff.current.loginPassword.value;

    // const filtered  =  data.filter((item)=>item.userEmail === loginEmail && item.userPassword === loginPassword )
    //    if(filtered.length > 0){
    //     nav('/admin')
    //    }else{
    //     alert('try again')
    //    }

    axios
      .post("http://localhost:4000/admin/login", {
        userName: loginEmail,
        password: loginPassword,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <p onClick={toggleShow}>
        <MDBIcon fas icon="user-circle" />{" "}
      </p>

      <div>
        <form
          ref={reff}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <MDBModal
            animationDirection="right"
            show={topRightModal}
            tabIndex="-1"
            setShow={setTopRightModal}
          >
            <MDBModalDialog position="top-right" side>
              <MDBModalContent>
                <MDBModalHeader className="bg-info text-white">
                  <MDBModalTitle>Login Here</MDBModalTitle>
                  <MDBBtn
                    color="none"
                    className="btn-close btn-close-white"
                    onClick={toggleShow}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="row">
                    <div className="col-3 text-center">
                      {/* <i className='fas fa-shopping-cart fa-4x text-info'></i> */}
                      <div>
                        <MDBIcon
                          className="ms-1"
                          icon="user-circle"
                          size="6x"
                        />
                      </div>
                    </div>

                    <div className="col-9">
                      <MDBInput
                        label="Email "
                        id="typeEmail"
                        type="email"
                        name="loginEmail"
                      />
                      <br />
                      <MDBInput
                        label="Password "
                        id="typePassword"
                        type="password"
                        name="loginPassword"
                      />
                    </div>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <p onClick={() => nav("/usersignup")}>
                    Not a member ?{" "}
                    <span style={{ color: "blue" }}>Register</span>
                  </p>
                  <MDBBtn color="info" onClick={handleSubmit}>
                    Sign in
                  </MDBBtn>
                  <MDBBtn outline color="info" onClick={toggleShow}>
                    Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </form>
      </div>
    </>
  );
}
