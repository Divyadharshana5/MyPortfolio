import link from "next/link";
import { button } from "./ul/button";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto">header</div>
      <link href="/">
        <h1 className="text-5xl font-semibold">
          Divyadharshana <span className="text-accent">.</span>
        </h1>
      </link>
      <div className="hidden xl:flex">
        <Nav />
        <link href="/contact">
          <Button>Hire me</Button>
        </link>
      </div>
    </header>
  );
};

export default Header;
