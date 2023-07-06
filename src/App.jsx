import React from 'react'
import UserHome from './Components/UserHome'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Cart from './Components/Cart';
import OrderStatus from './Components/OrderStatus';
import Admin from './Components/Admin/Admin';
import AdminUsers from './Components/Admin/AdminUsers';
import Card from './Components/Card';
import ViewProduct from './Components/ViewProduct';
import { Provider } from 'react-redux';
import { Store } from './assets/Redux/Store/store';



const App = (props) => {
  return (
      <BrowserRouter>
      <Provider store={Store}>
      <Routes>
       <Route path='/' element={<UserHome/>}/>
       <Route path='/card' element={<Card/>} /> 
       <Route path='/signup' element={<Signup/>} />
       <Route path='/cart' element={<Cart/>} /> 
       <Route path='/orderstatus' element={<OrderStatus/>} /> 
       <Route path='/viewproduct/:id' element={<ViewProduct/>} /> 
       <Route path='/admin' element={<Admin/>} /> 
       <Route path='/adminusers' element={<AdminUsers/>} /> 
      </Routes>
      </Provider>
      </BrowserRouter>

  )
}
export default App
