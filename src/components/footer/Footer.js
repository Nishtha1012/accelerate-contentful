import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_FOOTER_DATA } from "../../graphql/queries";
import CopyRight from "./CopyRight";
import NewsLetter from "./NewsLetter";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const Footer = () => {
  const { data, error, loading } = useQuery(GET_FOOTER_DATA);
  const [footerLogo, setfooterLogo] = useState([]);
  const [footerLists, setfooterLists] = useState([]);
  const [copyright, setcopyright] = useState("");
  const [newsletter, setnewsletter] = useState();
  const [socials, setsocials] = useState();

  useEffect(() => {
    if (data) {
      setfooterLogo(data.footerLevel2LogoCollection.items);
      setfooterLists(data.footerListsCollection.items);
      setcopyright(data.copyrightCollection.items);
      setnewsletter(data.newsletterCollection.items);
      setsocials(data.footerSocialsCollection.items);
    }
  }, [data]);
  return (
    <>
      <NewsLetter newsletter={newsletter} />
      <div className="px-16 bg-black pt-10 pb-5 max-sm:p-2 ">
        <div className="grid gap-3 grid-cols-3 py-5 max-md:grid-cols-1">
          <div>
            <img src={footerLogo[0]?.logo.url} alt={footerLogo[0]?.title} />
            <div className="font-light text-sm text-gray-400 my-5">
              {footerLogo[0]?.description}
            </div>
          </div>
          <div className="grid col-span-2 grid-cols-3 gap-3 max-md:grid-cols-1 ">
            {footerLists &&
              footerLists.map((list, index) => (
                <div key={index} className="text-white ">
                  <h3 className="uppercase font-medium my-2">
                    {list.listHeading}
                  </h3>
                  <ul>
                    {list.listItemsCollection.items.map((item, index) => (
                      <Link to={item.slug} key={index}>
                        <li className="font-light text-sm text-gray-400 my-2 cursor-auto hover:text-red-800 hover:cursor-pointer ">
                          {item.itemName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <Socials socials={socials} />
      </div>
      <CopyRight copyright={copyright} />
    </>
  );
};

export default Footer;
