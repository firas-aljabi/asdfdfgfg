import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowRightSFill } from "react-icons/ri";
import { TbSoup } from "react-icons/tb";
import { CgBowl } from "react-icons/cg";
import { GiHotMeal, GiDumplingBao, GiDumpling } from "react-icons/gi";
import "swiper/css";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="flex-col px-6 space-y-5 py-6 ">
      <div className="flex items-center justify-between py-2 ">
        <h1 className=" text-xl font-bold text-[#C4C4C4]">Categories</h1>
        {/* <div className="flex">
          <h1 className="  font-bold text-base text-[#d3cfcf] ">See all</h1>
          <RiArrowRightSFill size={24} className="text-[#d3cfcf]" />
        </div> */}
      </div>

      <Swiper spaceBetween={15} slidesPerView={5}>
        <SwiperSlide>
          <div className="rounded-lg  text-[#C4C4C4] hover:text-[#ab714d] hover:border-[#ab714d]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
            <Link to="productpage">
              <GiHotMeal size={50} className="mx-auto px-1 sm:px-0 " />
              <h1 className=" text-xs sm:text-base md:text-lg md:font-semibold sm:font-medium font-normal pb-1   ">
                Starters
              </h1>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg  text-[#C4C4C4] hover:text-[#ab714d] hover:border-[#ab714d] border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
            <Link>
              <TbSoup size={50} className="mx-auto px-1 sm:px-0 " />
              <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                Soups
              </h1>
            </Link>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
            <Link>
              <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
              <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                Lobster
              </h1>
            </Link>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="rounded-lg  text-[#C4C4C4] hover:text-[#DC0D28] hover:border-[#DC0D28]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
            <Link>
              <CiBurger size={50} className="mx-auto px-1 sm:px-0 " />
              <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                Skewers
              </h1>
            </Link>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="rounded-lg  text-[#C4C4C4] hover:text-[#ab714d] hover:border-[#ab714d]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
            <Link>
              <CgBowl size={50} className="mx-auto px-1 sm:px-0 " />
              <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                Bowls
              </h1>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg  text-[#C4C4C4] hover:text-[#ab714d] hover:border-[#ab714d]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
            <Link>
              <GiDumplingBao size={50} className="mx-auto px-1 sm:px-0 " />
              <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                Dumpling
              </h1>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg  text-[#C4C4C4] hover:text-[#ab714d] hover:border-[#ab714d]  border-2 border-[#C4C4C4] transition  duration-300 ease-in-out flex items-center justify-center py-1    ">
            <Link>
              <GiDumpling size={50} className="mx-auto px-1 sm:px-0 " />
              <h1 className=" text-xs sm:text-base md:text-lg font-semibold pb-1  ">
                Wraps
              </h1>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Categories;
