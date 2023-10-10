import React from "react";

const PageTemplate = ({ children }) => {
  return (
    <div className="container mx-auto px-4 md:px-3 whitespace-normal box-border">
      {children}
    </div>
  );
};

export default PageTemplate;
