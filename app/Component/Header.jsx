"use client";

import Link from "next/link";
import { Button } from "./ul/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-3 xl:py-4 text-white border-b border-white/5 bg-[#1c1c22]/70 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="text-xl xl:text-3xl font-bold tracking-tight text-white hover:text-accent transition-colors">
            Divyadharshana<span className="text-accent">.P</span>
          </h3>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/Contact">
            <Button className="rounded-full px-6 py-2 text-sm font-semibold">
              Hire me
            </Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;