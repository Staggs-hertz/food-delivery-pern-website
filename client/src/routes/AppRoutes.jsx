import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

//Route guards
import AdminRoute from "./AdminRoute";

//Pages
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import List from "../pages/Admin/List";
import Add from "../pages/Admin/Add";
import Orders from "../pages/Admin/Orders";
import Admin from "../pages/Admin/Admin";

const AppRoutes = () => {
  const url = "http://localhost:5000";

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* PUBLIC USER PAGES */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Route>

        {/* ADMIN PAGES (PROTECTED)  */}
        <Route
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/list" element={<List url={url} />} />
          <Route path="/admin/add" element={<Add url={url} />} />
          <Route path="/admin/orders" element={<Orders url={url} />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
