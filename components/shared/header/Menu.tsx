import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="flex items-center header-button">
          Hello, Sign In
        </Link>

        <Link href="/cart" className="header-button">
          <div className="flex items-end">
            <ShoppingCartIcon className="h-8 w-8" />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
