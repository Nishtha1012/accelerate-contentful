import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MAIN_BANNERS } from '../../graphql/queries';

const MainBannerSlider = () => {
    const [mainbanner, setmainbanner] = useState([])

    const { data, error, loading } = useQuery(GET_MAIN_BANNERS)
    if (error) {
        console.log(error);
    }
    useEffect(() => {
        if (data) {
            setmainbanner(data.bannerCollection.items)
        }
    }, [data])
    return (
        <>
            <Swiper loop={true} pagination={true} modules={[Pagination, Autoplay]} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} >
                {mainbanner && mainbanner.map((banner, index) => <SwiperSlide key={index}>
                    <img src={banner.bannerImage.url} alt={banner.alt} className='h-fit w-screen hover:cursor-pointer' />
                </SwiperSlide>)}
            </Swiper>
        </>
    );
};

export default MainBannerSlider