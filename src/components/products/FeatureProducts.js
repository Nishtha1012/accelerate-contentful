import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { GET_FEATURE_PRODUCTS } from '../../graphql/queries';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './product.css'
import ProductCard from './ProductCard';

const FeatureProducts = () => {
    const { data, error, loading } = useQuery(GET_FEATURE_PRODUCTS)
    const [feaProducts, setfeaProducts] = useState();
    useEffect(() => {
        if (data) {
            console.log(data.featuredProductsCollection.items);
            setfeaProducts(data.featuredProductsCollection.items)
        }
    }, [data])
    if (error) {
        console.log(error);
    }
    return (
        <div>
            <h4 className='font-bold text-2xl text-center mt-10'>Feature Products</h4>
            <div className='flex m-5'>
                <Swiper
                    slidesPerView={6}
                    className="mySwiper"
                    navigation={true}
                    modules={[Navigation]}
                >
                    {feaProducts && feaProducts.map((product, index) =>
                        <div className='relative m-5' key={index} >
                            <SwiperSlide className='max-w-[240px] hover:cursor-pointer' >
                                <ProductCard product={product} />
                            </SwiperSlide>
                        </div>
                    )}
                </Swiper>

            </div>
        </div >
    )
}

export default FeatureProducts