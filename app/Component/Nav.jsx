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
    path: "/Resume",
  },
  {
    name: "work",
    path: "/Work",
  },
  {
    name: "contact",
    path: "/Contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "text-accent border-b-2 border-accent "
                : ""
            } capitalize font-medium hover:text-accent text-[14px] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
