import React from "react";

function PageTitle({ children }) {
  return (
    <>
      <h1 className="text-5xl text-center">{children}</h1>
      <div className="divider"></div>
    </>
  );
}

export default PageTitle;
