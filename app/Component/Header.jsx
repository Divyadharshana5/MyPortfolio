"use client";

import Link from "next/link";
import { Button } from "./ul/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-5xl font-semibold">
            Divyadharshana <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
