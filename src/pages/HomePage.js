import React from "react";
import Header from "../components/Home/Header";
import TopOffers from "../components/Home/TopOffers";
import Categories from "../components/Home/Categories";
import Popular from "../components/Home/Popular";

function HomePage() {
  return (
    <div className=" mx-auto max-w-5xl py-6 bg-[#2D2727]">
      <Header />
      <TopOffers />
      {/* <Categories /> */}
      <Popular />
    </div>
  );
}

export default HomePage;
