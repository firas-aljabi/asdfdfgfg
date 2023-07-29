import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { RiArrowRightSFill } from "react-icons/ri";
import "swiper/css";
import { Link } from "react-router-dom";
function Popular() {
  const api_url = "https://api.oryze.gomaplus.tech/api/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtered products

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  };

  const items = filteredProducts.length > 0 ? filteredProducts : products;
  const categoriesItems = categories.data;

  const getCategories = () => {
    fetch(`https://api.oryze.gomaplus.tech/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (cat) => {
    console.log(cat);
    // Filter products based on the clicked category ID
    const filteredItems = products.filter(
      (item) => item.category_id === cat.id
    );
    setFilteredProducts(filteredItems);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  const [slidesPerView, setSlidesPerView] = useState(2);

  const breakpoints = {
    200: 2,
    350: 3,
    500: 4,
    600: 5,
  };
  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    for (const breakpoint in breakpoints) {
      if (screenWidth >= parseInt(breakpoint)) {
        setSlidesPerView(breakpoints[breakpoint]);
      }
    }
  };
  useEffect(() => {
    // Call the function on initial render
    updateSlidesPerView();

    // Attach a resize event listener to update the slidesPerView on window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);
  function truncateString(str) {
    if (str == null || str === undefined) {
      return "No ingredients";
    }

    if (str.length <= 20) {
      return str;
    }

    return str.slice(0, 20) + "...";
  }
  return (
    <div className="px-6">
      <div className="flex-col px-2 space-y-5 py-6 ">
        <h1 className="text-start text-xl font-bold text-[#C4C4C4]">
          Categories
        </h1>

        <Swiper spaceBetween={15} slidesPerView={slidesPerView}>
          {categoriesItems &&
            categoriesItems.map((cat) => {
              return (
                <SwiperSlide
                  key={cat.id}
                  onClick={() => {
                    getProductInCategory(cat);
                  }}
                >
                  <div className="focus-within:text-[#ab714d] ">
                    <button className=" sm:h-32 h-24 overflow-hidden focus-within:border-[#ab714d] bg-[#251c16]     rounded-lg cursor-pointer text-[#C4C4C4]  hover:border-[#ab714d] border-2 border-[#C4C4C4] transition duration-300 ease-in-out flex flex-col items-center justify-center  w-full">
                      <img
                        src={cat.Image}
                        alt={cat.name}
                        className=" object-center object-cover h-32 w-full rounded-lg hover:scale-110 hover:opacity-60 ease-in-out duration-200 transition-all"
                      />
                    </button>
                    <h1 className="text-xs py-2 cursor-pointer sm:text-base md:text-lg font-semibold pb-1  text-[#D0B8A8] ">
                      {cat.name}
                    </h1>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="grid  gap-4 lg:grid-cols-2 space-y-4 md:space-y-0  items-center justify-center py-4  ">
        {items &&
          items.map((item) => {
            return (
              <Link
                to={`/productdetails?id=${item.id}`}
                className="flex shadow-lg justify-between max-h-32 min-w-full overflow-hidden  border-2 border-[#d3cfcf]/60 rounded-xl border-glass "
              >
                <div className="rounded-xl  hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
                  <img
                    src={item.Image}
                    alt="img"
                    className="h-full  w-36 object-cover object-center"
                  />
                </div>
                <div className=" flex flex-1 flex-col items-start p-3 text-start ">
                  <h1 className="font-bold md:text-lg text-base  text-[#d3cfcf] ">
                    {item.name}
                  </h1>
                  <div className="space-y-1 ">
                    <h1 className="font-medium text-xs sm:text-sm text-[#D0B8A8]">
                      ingredients
                    </h1>
                    <p className=" sm:text-base text-sm te  font-medium text-[#d3cfcf]">
                      {truncateString(item.ingredients)}
                    </p>

                    <div className="flex flex-col sm:flex-row  sm:justify-between ">
                      <h1 className="font-semibold text-sm text-[#D0B8A8]">
                        {item.price} SR
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Popular;
