import React, { useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addUser } from "../assets/Redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

function UserSignup() {

    const reff = useRef()
    const dispatch = useDispatch()
    const nav =  useNavigate()

    const handleSubmit = () => {

          const userName = reff.current.userName.value;
          const userEmail = reff.current.userEmail.value;
          const userPassword = reff.current.userPassword.value;
          const confirmUserPassword = reff.current.confirmUserPassword.value;
          dispatch(addUser({userEmail,userName,userPassword,confirmUserPassword}))

          nav('/')

    }


  return (
    <> 
    <h1>User SignUp</h1>
    <MDBContainer fluid>
      <br />
      <br />
      <br />
      <br />
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
      <form ref={reff} onSubmit={(e) =>{
        e.preventDefault()
      }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>
    
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                  name="userName"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Your Email" id="form2" type="email" name="userEmail" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" id="form3" type="password" name="userPassword"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                  name="confirmUserPassword"
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="mb-4" size="lg" onClick={handleSubmit} >
                Register
              </MDBBtn>
            </MDBCol>
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
          
        </MDBCardBody>
        </form>

      </MDBCard>
    </MDBContainer>
    </>
  );
}

export default UserSignup;
