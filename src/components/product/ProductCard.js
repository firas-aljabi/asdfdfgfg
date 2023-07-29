import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

import Photo from "../../assets/dumpmeal.jpg";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <Link
      to={"productdetails"}
      className="flex shadow-lg justify-between max-h-44 w-full overflow-hidden  border-2 border-[#d3cfcf]/60 rounded-xl border-glass "
    >
      <div className="rounded-xl hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
        <img
          src={Photo}
          alt="img"
          className=" h-full w-36 object-cover object-center"
        />
      </div>
      <div className=" flex flex-1 flex-col items-start p-3 text-start ">
        <h1 className="font-bold md:text-xl text-base  text-[#d3cfcf] mb-2">
          Mac Cheese Burger
        </h1>
        <div className="space-y-1 ">
          <h1 className="font-semibold text-xs sm:text-sm text-[#D0B8A8]">
            Ingredients
          </h1>
          <p className=" sm:text-lg text-sm  font-semibold text-[#d3cfcf]">
            Lorem ipsum dolor sit amet consectetur.......
          </p>
          <div className="flex flex-col sm:flex-row  sm:justify-between ">
            <h1 className="font-semibold text-sm md:text-lg  text-[#D0B8A8]">
              20.00$
            </h1>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden text-[#D0B8A8] items-center justify-center sm:mx-6 md:mx-8 mx-1">
        <RiArrowRightSFill size={35} />
      </div>
    </Link>
  );
}

export default ProductCard;
