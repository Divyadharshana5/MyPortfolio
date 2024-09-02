"use client";

import Link from "next/link";
import { Button } from "./ul/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="xl:text-4xl text-lg font-semibold text-white">
            Divyadharshana.P
            {/* <span className="text-accent">.</span> */}
          </h3>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
