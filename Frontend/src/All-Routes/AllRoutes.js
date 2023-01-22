import { Routes, Route } from "react-router-dom";

// import Dashboard from "../Components/Admin//Dashboard";

import Dashboard from "../Components/Admin/Dashboard";
import AdminDashboard from "../Components/Admin/AdminDashBoard";
import AdminProducts from "../Components/Admin/Pages/AdminProducts";
import AllUsers from "../Components/Admin/Pages/AllUsers";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AllProduct from "../Pages/Product/AllProduct";
import SingleProduct from "../Pages/Product/SingleProduct";
import Signup from "../Pages/Signup/Signup";

// import AdminPrivateAuth from "./AdminPrivateAuth";
import AdminPrivateAuth from "./AdminPrivateAuth";
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

      <Route path="/dashboard" element={<Dashboard/>}/>
       {/* <Route path="/admin/dashboard" element={<AdminDashboard />}> */}
  
   <Route path="/admin" element={<AdminDashboard />}>

        <Route
          index
          element={
            // <AdminPrivateAuth>
                <Dashboard />
            // </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="dashboard"
          element={
            // <AdminPrivateAuth>
              <Dashboard />
            // </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="products"
          element={
            // <AdminPrivateAuth>
              <AdminProducts />
            // </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="users/list"
          element={
            // <AdminPrivateAuth>
              <AllUsers />
            // </AdminPrivateAuth>
          }
        />
      </Route> 
      
    </Routes>
  );
};

export default AllRoutes;
