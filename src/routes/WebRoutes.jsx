import React from 'react'
import { Routes, Route } from "react-router-dom"
import GetStarted from '../app/GetStarted'
import Home from '../app/Home'
import ServiceWrapper from '../app/ServiceWrapper'
import ShopWrapper from '../app/ShopWrapper'
import SingleProduct from "../components/SingleProduct";
import ErrorPage from "../shared/ErrorPage";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/services" element={<ServiceWrapper />} />
      <Route path="/shop" element={<ShopWrapper button={true} />} />
      <Route path="/product/view/:productId" element={<SingleProduct />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default WebRoutes
