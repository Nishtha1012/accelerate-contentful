import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_FEATURE_PRODUCTS } from "../../graphql/queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./product.css";
import ProductCard from "./ProductCard";
import Skeleton from "react-loading-skeleton";

const FeatureProducts = () => {
  const { data, error, loading } = useQuery(GET_FEATURE_PRODUCTS);
  const [feaProducts, setfeaProducts] = useState();
  useEffect(() => {
    if (data) {
      // console.log(data.featuredProductsCollection.items);
      setfeaProducts(data.featuredProductsCollection.items);
    }
  }, [data]);
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h4 className="font-bold text-2xl text-center mt-10">Feature Products</h4>
      <div className="flex m-5">
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1100: {
              width: 1100,
              slidesPerView: 5,
            },
          }}
          slidesPerView={1}
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
        >
          {feaProducts ? (
            feaProducts.map((product, index) => (
              // <div key={index} className="relative m-5">
              <SwiperSlide
                className="hover:cursor-pointer mx-auto max-w-['205px'] relative m-5"
                key={index}
              >
                <ProductCard product={product} />
              </SwiperSlide>
              // </div>
            ))
          ) : (
            <Skeleton count={1} height={430} />
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProducts;
