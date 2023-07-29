import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowRightSFill } from "react-icons/ri";
import { TbSoup } from "react-icons/tb";

import { GiHotMeal, GiDumplingBao, GiDumpling } from "react-icons/gi";
import "swiper/css";
import { Link } from "react-router-dom";

function Popular() {
  const api_url = "https://api.oryze.gomaplus.tech/api/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const items = products?.data;
  const categoriesItems = categories?.data;
  console.log(items, categoriesItems);

  const getCategories = () => {
    fetch(`https://api.oryze.gomaplus.tech/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    console.log(catName);
    // fetch(`${api_url}/category/${catName}`)
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="px-6">
      <div className="flex-col px-2 space-y-5 py-6 ">
        <h1 className="text-start text-xl font-bold text-[#C4C4C4]">
          Categories
        </h1>

        <Swiper spaceBetween={15} slidesPerView={5}>
          <SwiperSlide>
            <div
              onClick={() => {
                getProducts();
              }}
              className="rounded-lg cursor-pointer text-[#C4C4C4] hover:text-[#ab714d] hover:border-[#ab714d]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    "
            >
              <div to="productpage">
                <GiHotMeal size={50} className="mx-auto px-1 sm:px-0 " />
                <h1 className=" text-xs sm:text-base md:text-lg md:font-semibold sm:font-medium font-normal pb-1   ">
                  all
                </h1>
              </div>
            </div>
          </SwiperSlide>
          {/* {categoriesItems.map((cat) => {
            return (
              <SwiperSlide
                key={cat.id}
                onClick={() => {
                  getProductInCategory(cat);
                }}
              >
                <button className="focus:text-[#ab714d] focus:border-[#ab714d] rounded-lg cursor-pointer    text-[#C4C4C4] hover:text-[#ab714d] hover:border-[#ab714d] border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex-col h-max items-center justify-center py-1  w-full">
                  <TbSoup size={50} className="mx-auto px-1 sm:px-0 " />
                  <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                    {cat.name}
                  </h1>
                </button>
              </SwiperSlide>
            );
          })} */}
        </Swiper>
      </div>
      <div className="grid  gap-4 lg:grid-cols-2 space-y-4 md:space-y-0  items-center justify-center py-4  ">
        {/* {items.map((item) => {
          return (
            <Link
              // to={`/${product.id}`}
              className="flex shadow-lg justify-between max-h-44 w-full overflow-hidden  border-2 border-[#d3cfcf]/60 rounded-xl border-glass "
            >
              <div className="rounded-xl hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
                <img
                  src={item.image}
                  alt="img"
                  className=" h-full w-36 object-cover object-center"
                />
              </div>
              <div className=" flex flex-1 flex-col items-start p-3 text-start ">
                <h1 className="font-bold md:text-xl text-base  text-[#d3cfcf] mb-2">
                  {item.name}
                </h1>
                <div className="space-y-1 ">
                  <h1 className="font-semibold text-xs sm:text-sm text-[#D0B8A8]">
                    ingredients
                  </h1>
                  <p className=" sm:text-lg text-sm  font-semibold text-[#d3cfcf]">
                    {item.ingredients}
                  </p>
                  <div className="flex flex-col sm:flex-row  sm:justify-between ">
                    <h1 className="font-semibold text-sm md:text-lg  text-[#D0B8A8]">
                      {item.price}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="sm:flex hidden text-[#D0B8A8] items-center justify-center sm:mx-6 md:mx-8 mx-1">
                <RiArrowRightSFill size={35} />
              </div>
            </Link>
          );
        })} */}
      </div>
    </div>
  );
}

export default Popular;
