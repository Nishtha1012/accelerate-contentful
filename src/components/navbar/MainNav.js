import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GET_NAVBAR_DATA } from "../../graphql/queries";
import MainNavCategories from "./MainNavCategories";
import { SubList } from "./SubList";

export const MainNav = () => {
  const { data, error, loading } = useQuery(GET_NAVBAR_DATA);
  const [navList, setnavList] = useState();
  useEffect(() => {
    if (data) {
      setnavList(data.navbarListCollection.items);
    }
  }, [data]);
  return data && navList ? (
    <div className="bg-black ">
      <div className=" flex z-50 flex-wrap justify-center items-center max-w-6xl w-full mx-auto relative">
        {navList?.map((itemList, index) => (
          <MainNavCategories itemList={itemList} key={index} />
        ))}
      </div>
    </div>
  ) : (
    <Skeleton count={1} height={200} />
  );
};
