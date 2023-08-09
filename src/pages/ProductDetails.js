import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "swiper/css";

import { RiArrowLeftSFill } from "react-icons/ri";
import SuchiBackground1 from "../assets/salmonsushi.png";
import SuchiBackground2 from "../assets/suchiBack.png";
import Chopsticks from "../assets/chopsteak.png";
import Suchi from "../assets/suchiBack2.png";

function ProductDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const category = searchParams.get("category");

  const [lang, setLan] = useState('');
  const api_url = "https://api.oryze.gomaplus.tech/api/show_product";
  const [product, setProduct] = useState({});
 // console.log(id);
  useEffect(() => {
    fetch(`${api_url}/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product.data));
      setLan(localStorage.getItem('lan'))

  }, []);
  return (
    <div className="mx-auto max-w-5xl min-h-screen  bg-[#2F2424] py-4 ">
      <div className="flex items-center justify-between text-[#D0B8A8]">
        <Link
        to={`/home?id=${id}&category=${category}`}
        className=" left-0 mx-5 my-6 p-2 border-2 border-[#D0B8A8] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill size={25} />
        </Link>
        <div className=" w-14 sm:w-24 ">
          <img src={SuchiBackground1} alt="" />
        </div>
      </div>
      <div className=" flex  bg-[#2F2424]  ">
        <img
          src={product.image}
          alt="img"
          className=" w-5/6 max-h-96  hover:scale-110 duration-300 ease-in-out rounded-lg shadow-xl shadow-stone-900 mx-auto object-cover object-center"
        />
      </div>
      <div className=" bg-[#2F2424] py-10">
        <div className="  flex items-center justify-center  ">
          <h1 className=" md:text-5xl text-xl  text-[#d3cfcf] mb-2">
            {lang=='ar'?product.name_trans:product.name}    

          </h1>
        </div>
        <div className="flex  items-center justify-between   ">
          <div className="w-44 sm:flex hidden">
            <img src={Chopsticks} alt="" />
          </div>
          {product.ingredients=='no'||product.ingredients=="no ingredients"||product.ingredients=="No ingredients"?"":

          <div className=" space-y-2 py-2 w-3/5 mx-auto  ">
            <h1 className="font-semibold text-2xl  text-[#D0B8A8]">
            {lang=='ar'?'حول':'About'}    

            </h1>
            <p className="  font- text-xl  text-[#d3cfcf] pb-4 ">
              {lang=='ar'?product.ingredients_trans:product.ingredients}    

            </p>
          </div>
  }
          <div className="w-36 sm:flex hidden ">
            <img src={SuchiBackground2} alt="" />
          </div>
        </div>

        <div className="space-x-4 sm:space-x-8 md:space-x-10 text-[#D0B8A8]  text-lg text-center">
          <span>{product.calories} Calories</span>
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
