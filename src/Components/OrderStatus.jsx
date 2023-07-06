import React, { useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBRow
} from "mdb-react-ui-kit";

export default function OrderStatus() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100 text-center">
            <MDBCol>
              <MDBBtn size="lg" onClick={toggleShow}>
                Track your order
              </MDBBtn>
              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog size="lg">
                  <MDBModalContent
                    className="text-white"
                    style={{ backgroundColor: "#6d5b98", borderRadius: "10px" }}
                  >
                    <MDBModalHeader className="border-bottom-0">
                      <MDBBtn
                        className="btn-close btn-close-white"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>

                    <MDBModalBody className="text-start px-4 pt-0 pb-4">
                      <div className="text-center">
                        <h5 className="mb-3">Order Status</h5>
                        <h5 className="mb-5">AWB Number-5335T5S</h5>
                      </div>

                      <div className="d-flex justify-content-between mb-5">
                        <div className="text-center">
                          <i className="fas fa-circle"></i>
                          <p>Order placed</p>
                        </div>
                        <div className="text-center">
                          <i className="fas fa-circle"></i>
                          <p>In Transit</p>
                        </div>
                        <div className="text-center">
                          <i className="fas fa-circle"></i>
                          <p className="lead fw-normal">Out of Delivery</p>
                        </div>
                        <div className="text-center">
                          <i
                            className="fas fa-circle"
                            style={{ color: "#979595" }}
                          ></i>
                          <p style={{ color: "#979595" }}>Delivered</p>
                        </div>
                      </div>
                      <MDBRow className="justify-content-center">
                        <div className="col-md-4 text-center">
                          <p className="lead fw-normal">Shipped with</p>
                        </div>
                        <div className="col-md-4 text-center">
                          <p className="lead fw-normal">UPS Expedited</p>
                        </div>
                        <div className="col-md-2 text-center">
                          <MDBIcon fas icon="phone" size="lg" />
                        </div>
                      </MDBRow>
                      <MDBRow className="justify-content-center">
                        <div className="col-md-4 text-center">
                          <p className="lead fw-normal">Estimated Delivery</p>
                        </div>
                        <div className="col-md-4 text-center">
                          <p className="lead fw-normal">02/12/2017</p>
                        </div>
                        <div className="col-md-2 text-center">
                          <MDBIcon fas icon="envelope" size="lg" />
                        </div>
                      </MDBRow>
                    </MDBModalBody>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}