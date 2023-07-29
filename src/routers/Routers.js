import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../pages/ProductDetails";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="productpage" element={<ProductPage />} />
      <Route path="/:id" element={<ProductDetails />} />
      <Route path="productpage/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default Routers;
