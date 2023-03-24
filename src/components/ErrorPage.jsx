import React from "react";
import PageTemplate from "./PageTemplate";

const ErrorPage = () => {
  return (
    <div className="py-40">
      <PageTemplate>
        <h1 className="text-2xl mb-5 text-center font-medium">
          - 404 Not Found. -
        </h1>
      </PageTemplate>
    </div>
  );
};

export default ErrorPage;
