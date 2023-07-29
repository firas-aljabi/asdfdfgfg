import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import axios from "axios";
function TopOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get("https://api.oryze.gomaplus.tech/api/offers")
      .then((response) => {
        // Set the offers in the component state
        let res = response.data;
        setOffers(res.data);
        // console.log(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(offers);
  return (
    <div className="container rounded-xl mx-auto py-6">
      <Swiper
        loop={true}
        speed={4000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={15}
        slidesPerView={1}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="max-w-3xl flex mx-auto rounded-2xl items-center justify-center px-4">
              <img
                src={offer.Image}
                alt={`Offer ${offer.id}`}
                className="opacity-70 rounded-lg max-h-28 sm:max-h-44 md:max-h-64 w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopOffers;
