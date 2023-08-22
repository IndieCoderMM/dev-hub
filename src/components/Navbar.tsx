import { useState } from "react";
import { NavLinks } from "@/constants";
import LanguageSelect from "./LanguageSelect";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x flex w-full items-center justify-between">
      <h1 className="text-3xl font-bold uppercase">CoinTrackr</h1>
      <nav className="hidden items-center gap-4 lg:flex ">
        <ul className="flex gap-2">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} key={index}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div>EN</div>
        <button
          type="button"
          className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Download Now
        </button>
      </nav>
      <LanguageSelect />
      <button
        type="button"
        aria-label="Toggle Menu"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex h-12 w-12 flex-col items-center justify-center rounded-full lg:hidden`}
      >
        <span
          className={`${
            open ? "translate-y-1 rotate-45" : "-translate-y-2"
          } h-1 w-full bg-white transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`${
            open ? "opacity-0" : "opacity-100"
          } h-1 w-full bg-white transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`${
            open ? "-translate-y-1 -rotate-45" : "translate-y-2"
          } h-1 w-full bg-white transition-all duration-300 ease-out`}
        ></span>
      </button>
    </header>
  );
};

export default Navbar;
