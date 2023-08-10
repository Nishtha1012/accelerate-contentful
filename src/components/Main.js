import React, { useEffect, useState } from "react";
import MainBannerSlider from "./banners/MainBannerSlider";
import { MainNav } from "./navbar/MainNav";
import { NormalBanner } from "./banners/NormalBanner";
import CategoryList from "./categories/CategoryList";
import SmallBanner from "./banners/SmallBanner";
import Footer from "./footer/Footer";
import { useInView } from "react-intersection-observer";
import loadable from "@loadable/component";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeatureProducts = loadable(() => import("./products/FeatureProducts"), {
  fallback: <Skeleton count={1} height={550} />,
});

const Main = () => {
  const [isvisible, setisvisible] = useState(false);
  const { ref, inView } = useInView();

  console.log(inView);
  useEffect(() => {
    if (inView) {
      setisvisible(true);
    }
  }, [inView]);

  return (
    <>
      <MainNav />
      <MainBannerSlider />
      <NormalBanner />
      <CategoryList />
      <SmallBanner />
      <div ref={ref}>
        {isvisible ? <FeatureProducts /> : <Skeleton count={1} height={550} />}
      </div>
      <Footer />
    </>
  );
};
export default Main;
