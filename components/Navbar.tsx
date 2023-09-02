import React from "react";
import Search from "./Search";
import Image from "next/image";

import sunIcon from "@/assets/sun_icon.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-evenly items-center py-5 text-lg flex-col md:flex-row">
        <Link href="/" className="flex justify-center items-center mb-3">
          <p className="mr-3 mt-1 text-xl">Weather App</p>
          <Image
            src={sunIcon}
            alt="Sun icon"
            width={20}
            className="ml-1 mt-2"
          />
        </Link>
        <Search />
      </nav>
    </header>
  );
};

export default Navbar;
