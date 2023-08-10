import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { GET_NORMAL_BANNERS } from "../../graphql/queries";
import "react-loading-skeleton/dist/skeleton.css";

export const NormalBanner = () => {
  const { data, error, loading } = useQuery(GET_NORMAL_BANNERS);
  const [normalBanner, setnormalBanner] = useState([]);
  useEffect(() => {
    if (data) {
      setnormalBanner(data.bannerCollection.items);
    }
  }, [data]);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col my-3">
      {normalBanner ? (
        normalBanner.map((banner, index) => (
          <div key={index} className="mx-3 mt-1 hover:cursor-pointer">
            <Link to={banner.redirect}>
              <img src={banner.bannerImage.url} alt={banner.alt} />
            </Link>
          </div>
        ))
      ) : (
        <Skeleton count={1} height={900} />
      )}
    </div>
  );
};
