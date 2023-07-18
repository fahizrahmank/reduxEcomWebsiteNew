import React from "react";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
import AdminLog from "./AdminLog";


const Admin = () => {
  return (
    <>   
    <div style={{backgroundColor:'greenyellow',width:'400px'}}>
   <h1>Login in</h1>
    </div>
   <div>
    
     <div style={{ marginLeft: "4rem", display: "flex" }}>
      
      <AdminSideBar />
      
    </div>
    <Outlet/>
   </div>
   </>
  );
};

export default Admin;
