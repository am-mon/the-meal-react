import React from "react";

const Footer = () => {
  return (
    <div className="px-2 py-6 mt-10 md:mt-20 bg-black text-white text-center">
      Copyright © {new Date().getFullYear()} Mon. All Rights Reserved.
    </div>
  );
};

export default Footer;
