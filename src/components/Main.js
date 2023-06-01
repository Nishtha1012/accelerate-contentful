import React from 'react'
import MainBannerSlider from './banners/MainBannerSlider';
import { MainNav } from './navbar/MainNav';
import { NormalBanner } from './banners/NormalBanner';
import CategoryList from './categories/CategoryList';
import SmallBanner from './banners/SmallBanner';
import FeatureProducts from './products/FeatureProducts';
import Footer from './footer/Footer';

const Main = () => {

    return (
        <>
            <MainNav />
            <MainBannerSlider />
            <NormalBanner />
            <CategoryList />
            <SmallBanner />
            <FeatureProducts />
            <Footer />
        </>
    )
}
export default Main;
