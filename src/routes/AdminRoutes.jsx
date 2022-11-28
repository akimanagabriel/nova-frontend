import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLeftBar from "../app/admin/AdminLeftBar";
import AdminProducts from "../app/admin/AdminProducts";
import AdminHeader from "./../app/admin/AdminHeader";
import ErrorPage from "./../shared/ErrorPage";
import SingleProduct from "./../components/SingleProduct";
import AdminService from "../app/admin/AdminService";
import NewProductForm from "../app/admin/NewProductForm";
import Employees from "../app/Employees";
import SingleEmployee from "../components/SingleEmployee";

function AdminRoutes() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const redirect = useNavigate();
  if (!isLoggedIn) return redirect("/");

  return (
    <>
      <div className="flex flex-row bg-gray-200 min-h-screen">
        <AdminLeftBar />
        <div className="w-[100%]">
          <AdminHeader />
          {/* admin routers */}
          <div className="px-4">
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/admin/dashbord" element={"dashboard"} />
              <Route path="/m/products" element={<AdminProducts />} />
              <Route path="/m/orders" element={"orders"} />
              <Route path="/m/services" element={<AdminService />} />
              <Route path="/m/trainning" element={"trainning"} />

              <Route path="/m/employment" element={<Employees />} />
              <Route path="/employment/view/:id" element={<SingleEmployee />} />

              <Route path="/m/feed" element={"feeds"} />
              <Route path="/m/comments" element={"comments"} />

              {/* products */}
              <Route
                path="/product/view/:productId"
                element={<SingleProduct />}
              />
              <Route path="/create-product" element={<NewProductForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRoutes;
