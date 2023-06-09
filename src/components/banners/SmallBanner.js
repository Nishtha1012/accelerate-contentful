import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_SMALL_BANNERS } from "../../graphql/queries";

const SmallBanner = () => {
  const { data, error, loading } = useQuery(GET_SMALL_BANNERS);
  const [smallBanner, setsmallBanner] = useState([]);
  useEffect(() => {
    if (data) {
      setsmallBanner(data.bannerCollection.items);
    }
  }, [data]);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col mt-8">
      {smallBanner &&
        smallBanner.map((banner, index) => (
          <div key={index} className="mx-3 mt-1 hover:cursor-pointer">
            <Link to={banner.redirect}>
              <img src={banner.bannerImage.url} alt={banner.alt} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SmallBanner;
