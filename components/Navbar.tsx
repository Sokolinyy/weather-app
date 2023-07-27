import React from "react";
import Search from "./Search";
import Image from "next/image";

import sunIcon from "@/assets/sun_icon.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-evenly py-5 text-lg">
        <Link href="/" className="flex justify-center items-center">
          <p className="mr-3 text-xl">Weather App</p>
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
