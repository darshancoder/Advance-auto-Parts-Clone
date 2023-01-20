import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Admin//Dashboard";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AllProduct from "../Pages/Product/AllProduct";
import SingleProduct from "../Pages/Product/SingleProduct";
import Signup from "../Pages/Signup/Signup";
import AdminPrivateAuth from "./AdminPrivateAuth";

/*
Dont make any changes to this file
*/

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* <Route path="/admin/dashboard" element={<AdminDashboard />}>
        <Route
          index
          element={
            <AdminPrivateAuth>
              <Dashboard />
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="dashboard"
          element={
            <AdminPrivateAuth>
              <Dashboard />
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="orders"
          element={
            <AdminPrivateAuth>
              <Orders />
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="products"
          element={
            <AdminPrivateAuth>
              <AdminProducts />
            </AdminPrivateAuth>
          }
        />
        <Route
          exact
          path="users/list"
          element={
            <AdminPrivateAuth>
              <AllUsers />
            </AdminPrivateAuth>
          }
        />
      </Route> */}
      
    </Routes>
  );
};

export default AllRoutes;
