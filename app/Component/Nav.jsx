"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Services",
    path: "/Services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {Links.map((Link, index) => {
        return (
          <Link
            href={Link.path}
            key={index}
            className={'${
            Link.path *** pathname && "text-accent border-b-2 border-accent"
      } capitalize font-medium hover:text-accent transition-all'}
      >
      { Link.name }
          </Link>
  );
})}
  </nav >
    );
    };

export default Nav;
https://www.youtube.com/