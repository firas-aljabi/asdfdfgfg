import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { RiArrowRightSFill } from "react-icons/ri";
import "swiper/css";
import { Link, useParams, useLocation } from "react-router-dom";
function Popular() {
  const api_url = "https://api.oryze.gomaplus.tech/api/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtered products
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const id = searchParams.get("id");
  const category = searchParams.get("category");

  const [lang, setLan] = useState('');

  useEffect(() => {
   getProducts();
    getCategories();
setLan(localStorage.getItem('lan'))


}, []);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {


        console.log(data.data)
        const filteredProducts = data.data.filter((product) => product.status === 1);
        setProducts(filteredProducts);
        setFilteredProducts(filteredProducts.filter(((product) => category!=null?product.category_id == category:product.category_id == 11 )))
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const items =  filteredProducts ;
  const categoriesItems = categories.data;
  const getCategories = () => {
    fetch(`https://api.oryze.gomaplus.tech/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
    
  };


  

  const getProductInCategory = (cat) => {
    console.log(cat)
    setSelectedCategory(cat);
    // Filter products based on the clicked category ID
    const filteredItems = products.filter((item) => item.category_id === cat.id);
    setFilteredProducts(filteredItems);
  };

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
    // If categories are available and no category is selected, set the first category as selected
    if (categoriesItems && categoriesItems.length > 0 && !selectedCategory) {
      setSelectedCategory(categoriesItems[0]);
    }
  }, [categoriesItems, selectedCategory]);
  useEffect(() => {
    // Call the function on initial render
    updateSlidesPerView();

    // Attach a resize event listener to update the slidesPerView on window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);
  const [noIngrediant, setNoIngrediant] = useState(false);

  function truncateString(str) {
    if (str == null || str === undefined) {
      return "";
    }
   
    if (str.length <= 20) {
      return str;
    }

    return str.slice(0, 20) + "...";
  }
  return (
    <div className="px-6 overflow-x-hidden">
      <div className="flex-col px-2 space-y-5 py-6 ">
        <h1 className="text-start text-2xl font-thin text-[#C4C4C4]">
      {lang=='ar'?'الاصناف':'Categories'}    
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
                        src={cat.imageurl}
                        alt={cat.name}
                        className=" object-center object-cover h-32 w-full rounded-lg hover:scale-110 hover:opacity-60 ease-in-out duration-200 transition-all"
                      />
                    </button>
                    <h1 className="text-xs py-2 cursor-pointer sm:text-base md:text-lg  pb-1  text-[#D0B8A8] ">
                      {lang=='ar'?cat.name_trans:cat.name}    

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
  to={`/productdetails?id=${item.id}&category=${selectedCategory ? selectedCategory.id : ""}`}
  className="flex shadow-lg justify-betwee h-36 w-full overflow-hidden  border-2 border-[#d3cfcf]/60 rounded-xl border-glass "
> <div className="rounded-xl  hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden  ">
<img
  src={item.image}
  alt="img"
  className="h-full w-44 object-cover object-center"
/>
</div>
<div className="  items-start p-3 text-start w-full  ">
<h1 className=" font-semibold md:text-xl text-base  text-[#d3cfcf] ">
  {lang=='ar'?item.name_trans:item.name}    

</h1>
{item.ingredients=='no'||item.ingredients=="no ingredients"||item.ingredients=="No ingredients"?"":
<div className="space-y-1 ">
  <h1 className="font-thin text-xs sm:text-sm text-[#D0B8A8]">
    
    {lang=='ar'?'المكونات':'ingredients'}    

  </h1>
  <p className=" sm:text-sm text-sm te  text-[#d3cfcf]">
    {lang=='ar'?truncateString(item.ingredients_trans):truncateString(item.ingredients)} 
  </p>




</div>
}
<div className=" flex justify-between mt-5 w-full">
<div>
<h1 className="font-semibold text-sm text-[#D0B8A8] ">
  {item.price} SAR
</h1>
</div>
<div>
<h1 className="font-semibold text-sm text-[#D0B8A8]  ">
  {item.calories} CAL
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





