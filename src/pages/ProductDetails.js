import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import Photo from "../assets/dumpmeal.jpg";
import { RiArrowLeftSFill } from "react-icons/ri";
import SuchiBackground1 from "../assets/salmonsushi.png";
import SuchiBackground2 from "../assets/suchiBack.png";
import Chopsticks from "../assets/chopsteak.png";
import Suchi from "../assets/suchiBack2.png";

function ProductDetails() {
  const { id } = useParams();

  const api_url = "https://api.oryze.gomaplus.tech/api/show_product";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  const item = product.data;
  return (
    <div className="mx-auto max-w-5xl  bg-[#2D2727] py-4 ">
      <div className="flex items-center justify-between text-[#D0B8A8]">
        <Link
          to="/"
          className=" left-0 mx-5 my-6 p-2 border-2 border-[#D0B8A8] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill size={25} />
        </Link>
        <div className=" w-14 sm:w-24 ">
          <img src={SuchiBackground1} alt="" />
        </div>
      </div>
      <div className=" flex  bg-[#2D2727]  ">
        <img
          src={item.image}
          alt="img"
          className=" w-2/4 max-h-96  hover:scale-110 duration-300 ease-in-out rounded-lg shadow-xl shadow-stone-900 mx-auto object-cover object-center"
        />
      </div>
      <div className=" bg-[#2D2727] py-5">
        <div className="  flex items-center justify-center  ">
          <h1 className="font-bold md:text-2xl text-xl  text-[#d3cfcf] mb-2">
            Mac Cheese Burger
          </h1>
        </div>
        <div className="flex  items-center justify-between   ">
          <div className="w-44 sm:flex hidden">
            <img src={Chopsticks} alt="" />
          </div>

          <div className=" space-y-2 py-2 w-3/5 mx-auto  ">
            <h1 className="font-semibold text-xl  text-[#D0B8A8]">About</h1>
            <p className="  font-semibold text-[#d3cfcf] pb-4">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum
              dolor sit amet consectetur.......
            </p>
          </div>

          <div className="w-36 sm:flex hidden ">
            <img src={SuchiBackground2} alt="" />
          </div>
        </div>
        <div className="space-x-4 sm:space-x-8 md:space-x-10 text-[#D0B8A8] text-lg text-center">
          <span>60 Calories</span>
          <span>20% Fat</span>
          <span>60% Carbs</span>
        </div>
        <div className="flex  items-center justify-between ">
          <div className=" w-16 sm:w-28 ">
            <img src={Suchi} alt="" />
          </div>
          <div className="w-16 sm:w-28">
            <img src={SuchiBackground1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
