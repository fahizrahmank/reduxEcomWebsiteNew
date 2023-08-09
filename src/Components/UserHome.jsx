import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Button from "./Button";
import Search from "./InputTextt";
import Card from "./Card";
import { GrLocation } from "react-icons/gr";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import ViewProduct from "./ViewProduct";
import AdminLog from "./Admin/AdminLog";

const UserHome = () => {
  const nav = useNavigate();
  return (
    <>
      <div>
     
        <Navbar />
    
       


        <div style={{ marginLeft: "20px" }}></div>
        <br />
        <div className="homeContainer1">
          <div className="homeContainer2">
            <div style={{ width: "50%" }}>
              <h2>Order from your nearest Supermarket</h2>
              <br />
            </div>
            <p>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te.
            </p>
            <br />
            <br />
            <div onClick={() => nav("/product")}>
              <Button text="ORDER NOW" classes="me-1" color="success" />
            </div>
          </div>
        </div>
        <br />
        <div className="homeSearch">
          <Search search="Location" />
          <div style={{ marginLeft: "1.8rem" }}>
            <GrLocation style={{ fontSize: "1.3rem" }} />
          </div>
        </div>
        <br />
        <div>
          <Card />
        </div>
        <br />
        <br />
        <div></div>
        <div>
          <Footer />
        </div>
        <AdminLog />
      </div>
    </>
  );
};

export default UserHome;
