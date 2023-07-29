import React from "react";
import ProductCard from "../components/product/ProductCard";
import { Link } from "react-router-dom";
import { RiArrowLeftSFill } from "react-icons/ri";
function ProductPage() {
  return (
    <div className="mx-auto max-w-5xl py-6 min-h-screen">
      <div className="flex relative items-center justify-center ">
        <Link
          to="/"
          className=" text-[#D0B8A8] absolute left-0 mx-5 my-6 p-2 border-2 border-[#D0B8A8] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill size={25} />
        </Link>
        <h1 className="text-2xl font-semibold  text-[#D0B8A8]  ">Soups</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 space-y-2 md:space-y-0  items-center justify-center py-10 px-5 ">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductPage;
