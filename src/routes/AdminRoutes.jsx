import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLeftBar from "../app/admin/AdminLeftBar";
import AdminHeader from "./../app/admin/AdminHeader";
import ErrorPage from "./../shared/ErrorPage";

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
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/dashbord" element={"dashboard"} />
            <Route path="/m/products" element={"products"} />
            <Route path="/m/orders" element={"orders"} />
            <Route path="/m/services" element={"services"} />
            <Route path="/m/trainning" element={"trainning"} />
            <Route path="/m/employment" element={"employments"} />
            <Route path="/m/feed" element={"feeds"} />
            <Route path="/m/comments" element={"comments"} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminRoutes;
