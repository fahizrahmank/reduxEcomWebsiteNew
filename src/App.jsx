import React from "react";
import UserHome from "./Components/UserHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/UserSignup";
import Cart from "./Components/Cart";
import OrderStatus from "./Components/OrderStatus";
import Admin from "./Components/Admin/Admin";
import AdminUsers from "./Components/Admin/AdminUsers";
import Card from "./Components/Card";
import ViewProduct from "./Components/ViewProduct";
import { Provider } from "react-redux";
import { Store } from "./assets/Redux/Store/Store";
import Dealer from "./Components/Dealer/Dealer";
import AdminDealers from "./Components/Admin/AdminDealers";
import AdminLog from "./Components/Admin/AdminLog";
import Login from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import DealerRegister from "./Components/Dealer/DealerRegister";
import AdminRegister from "./Components/Admin/AdminRegister";
import Product from "./Components/Product";

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/card" element={<Card />} />
          <Route path="/usersignup" element={<UserSignup />} />
          <Route path="/adminregister" element={<AdminRegister />} />
          <Route path="/dealerregister" element={<DealerRegister />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/orderstatus" element={<OrderStatus />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dealer" element={<AdminDealers />} />

          <Route element={<Admin />} />
          <Route path="/admin/adminusers" element={<AdminUsers />} />
          <Route path="/admin/dealers" element={<AdminDealers />} />

        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
