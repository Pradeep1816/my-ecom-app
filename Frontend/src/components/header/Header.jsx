import React from "react";
import Brand from "./headerUI/Brand";
import HeadeSearch from "./headerUI/HeadeSearch";
import CartButton from "./headerUI/CartButton";
import AccountSelect from "./headerUI/AccountSelect";
import HeaderSearch from "./headerUI/HeaderSearch";

function Header() {
  return (
    <header className="px-6 py-2 w-full flex items-center justify-between h-40  md:h-16 border bg-gray-50 border-b shadow-md">
      <Brand />
      {/* <HeaderSearch /> */}
      <div className="flex items-center gap-5">
        <AccountSelect />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
