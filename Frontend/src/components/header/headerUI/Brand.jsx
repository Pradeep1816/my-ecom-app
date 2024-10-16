import React from "react";
import { NavLink } from "react-router-dom";

function Brand() {
  const handleHomePage = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div className="" onClick={handleHomePage}>
        <figure>
          <img src="public/logo.jpeg" alt="" className="h-10" />
        </figure>
      </div>
    </div>
  );
}

export default Brand;
