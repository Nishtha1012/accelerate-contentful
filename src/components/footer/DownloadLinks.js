import React from "react";

const DownloadLinks = () => {
  return (
    <>
      <div className="font-medium text-white mx-3  max-sm:mx-0 max-sm:mb-2 ">
        DOWNLOAD APP ON
      </div>
      <div className="flex gap-3 items-center mx-2 ">
        <div>
          <img
            src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4967912f.png&w=32&q=75"
            alt="playstore"
          />
        </div>
        <div>
          <img
            src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp.1b12d473.png&w=32&q=75"
            alt="appstore"
          />
        </div>
      </div>
    </>
  );
};

export default DownloadLinks;
