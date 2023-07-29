import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetails";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/:id" element={<ProductDetails />} />
      <Route path="productpage/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default Routers;
