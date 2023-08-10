import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { GET_TOP_CATEGORIES } from "../../graphql/queries";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../products/product.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const CategoryList = () => {
  const { data, error, loading } = useQuery(GET_TOP_CATEGORIES);
  const [categories, setcategories] = useState();
  useEffect(() => {
    if (data) {
      setcategories(data.topCategoriesCollection.items);
    }
  }, [data]);
  return (
    <div>
      {categories && (
        <h4 className="font-bold text-2xl text-center mt-10">
          Shop By Categories
        </h4>
      )}
      <div>
        <div className="flex m-5 mx-auto">
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
                slidesPerView: 6,
              },
            }}
            slidesPerView={1}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            s
            {categories ? (
              categories.map((category, index) => (
                <SwiperSlide
                  key={index}
                  className="mx-3 text-center hover:text-red-600 hover:cursor-pointer"
                >
                  <Link to={`c/${category.redirect}`}>
                    <div>
                      <img
                        src={category.categoryImage.url}
                        alt={category.alt}
                        className="mx-auto"
                      />
                      <span className="uppercase text-base font-medium">
                        {category.categoryName}
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <Skeleton count={1} height={600} />
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
