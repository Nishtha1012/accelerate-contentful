import React from "react";
import { Link } from "react-router-dom";

export const SubList = ({ listItem }) => {
  return (
    <div className=" bg-white text-black absolute  z-10 flex top-14 max-sm:block left-0 p-5 shadow w-full">
      {listItem.listCollection.items.map((sublist, index) => (
        <div className="p-5" key={index}>
          <Link to={sublist.slug}>
            <h4 className="font-bold hover:text-red-500">{sublist.title}</h4>
          </Link>
          <div>
            {sublist.listItemsCollection.items.map((item, index) => (
              <Link to={`${sublist.slug}/${item.slug}`}>
                <li
                  className="list-none hover:text-red-500 capitalize"
                  key={index}
                >
                  {item.itemName}
                </li>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
