import React from "react";

const NewsLetter = ({ newsletter }) => {
  return (
    newsletter && (
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center py-8">
        <div className="px-5">
          <div className="font-normal text-2xl">
            {newsletter[0].newsLetterMainText}
          </div>
          <div className="pt-1 text-gray-600">
            {newsletter[0].newsLetterSubText}
          </div>
        </div>
        <div>
          <button className="bg-red-600 uppercase text-white font-bold px-5 py-3 flex justify-items-center hover:bg-black ">
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
              viewBox="0 0 16 16"
              className=" font-extrabold"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default NewsLetter;
