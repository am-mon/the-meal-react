import React from "react";

const PageTemplate = ({ children }) => {
  return (
    <div className="w-[100%] md:w-[100%] lg:w-[1024px] mx-auto px-4 md:px-0 xl:px-0 whitespace-normal box-border">
      {children}
    </div>
  );
};

export default PageTemplate;
