import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
function HeaderSearch() {
  return (
    <div className="border w-full transition-all shrink flex items-center justify-center px-3 col-start-1 col-span-5 md:col-auto md:col-start-auto  bg-gray-100 rounded-lg">
      <AiOutlineSearch className="text-2xl text-gray-500" />
      <input
        type="text"
        placeholder="search items"
        className="outline-none bg-gray-100 h-10 w-full px-2"
      />
    </div>
  );
}

export default HeaderSearch;
