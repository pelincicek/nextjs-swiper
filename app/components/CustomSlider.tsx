"use client";
import { useState, useEffect } from "react";
import { Navigation, Pagination, A11y, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import Image from "next/image";
import SlideNavButtons from "./SlideNavButtons";

// External Data import
const url = "https://picsum.photos/v2/list";

// Define the type for a product
type Product = {
  id: number;
  title: string;
  download_url: string;
  // ... add other fields as needed based on the API response
};

const CustomSlider1 = () => {
  // Use the Product type for the state
  const [products, setProducts] = useState<Product[]>([]);

  const getProductsFromBackend = async () => {
    const data = await fetch(url);
    const fetchedProducts: Product[] = await data.json();
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    getProductsFromBackend();
  }, []);

  return (
    <div>
      <br />
      <Swiper
        modules={[Navigation, Pagination, A11y, Zoom]}
        navigation={true}
        slidesPerView={1}
        spaceBetween={15}
      >
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-white-200 !flex justify-center items-center"
            zoom={true}
          >
            <div className="border-2 rounded-lg overflow-hidden w-[600px] h-[500px] flex justify-center items-center">
              <div className="swiper-zoom-container">
                <img src={item.download_url} alt={item.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SlideNavButtons />
      </Swiper>
    </div>
  );
};

export default CustomSlider1;
