import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Admin/Dashboard/Dashboard";
import Admin from "../Components/Admin/Dashboard/admin.tsx"
import AddProduct from "../Components/Admin/AddProduct/AddProduct";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AllProduct from "../Pages/Product/AllProduct";
import SingleProduct from "../Pages/Product/SingleProduct";
import Signup from "../Pages/Signup/Signup";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

/*
Dont make any changes to this file
*/

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/login" element={ <><Navbar /><Login /><Footer /></>} />
      <Route path="/signup" element={ <><Navbar /><Signup /><Footer /></>} />
      <Route path="/products" element={ <><Navbar /><AllProduct /><Footer /></>} />
      <Route path="/products/:id" element={ <><Navbar /><SingleProduct /><Footer /></>} />
      <Route path="/cart" element={ <><Navbar /><Cart /><Footer /></>} />
      <Route path="/checkout" element={ <><Navbar /><Checkout /><Footer /></>} />
  
     
      <Route path="/admin/dashboard" element={<Admin> <Dashboard/><Footer/></Admin>}/>
      <Route path="/admin/addProduct" element={<Admin><AddProduct/><Footer/> </Admin>}/>
     
      
    </Routes>
  );
};

export default AllRoutes;
