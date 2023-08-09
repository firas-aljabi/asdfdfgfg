import React from "react";
import Header from "../components/Home/Header";
import TopOffers from "../components/Home/TopOffers";
import ProductsPage from "../components/Home/ProductsPage";

function HomePage() {
  return (
    <div className=" mx-auto max-w-5xl py-6 bg-[#2F2424]">
      <Header />
      <TopOffers />
      <ProductsPage />
    </div>
  );
}

export default HomePage;
