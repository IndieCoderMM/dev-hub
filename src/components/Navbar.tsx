import { useEffect, useState } from "react";
import {
  Variant,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

import { NavLinks } from "@/constants";
import LanguageSelect from "./LanguageSelect";

// Make header animation variant
// initial normal
// onScroll down fixed at top, bg-primary

// onScroll up, normal

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.header
      variants={{
        initial: {
          position: "relative",
          transition: { duration: 0.3 },
        },
        fixed: {
          position: "fixed",
          background: "var(hsl(--primary))",
          transition: { duration: 0.3 },
        },
      }}
      initial="initial"
      animate={scrollY.get() > 0 ? "fixed" : "initial"}
      className={`${
        open ? "bg-primary" : "bg-background"
      } padding-x relative left-0 right-0 top-0 z-50 w-full pb-8 pt-4 lg:py-16`}
    >
      <motion.div
        style={{ scaleX }}
        className="absolute left-0 top-0 h-1 w-full origin-left bg-accent"
      />
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-lg font-bold uppercase lg:text-3xl">CoinTrackr</h1>
        {/* Main nav */}
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
        {/* Mobile buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelect languages={["en", "mm", "jp"]} />
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setOpen((prev) => !prev)}
            className={`flex h-10 w-10 select-none flex-col items-center justify-center rounded-full lg:hidden`}
          >
            <span
              className={`${
                open ? "translate-y-1 rotate-45" : "-translate-y-2"
              } h-1 w-full bg-white transition`}
            ></span>
            <span
              className={`${
                open ? "opacity-0" : "opacity-100"
              } h-1 w-full bg-white transition`}
            ></span>
            <span
              className={`${
                open ? "-translate-y-1 -rotate-45" : "translate-y-2"
              } h-1 w-full bg-white transition`}
            ></span>
          </button>
        </div>
        {/* Mobile Nav */}
        <motion.nav
          variants={{
            hidden: {
              height: 0,
              overflow: "hidden",
              transitionEnd: { display: "none" },
              transition: { duration: 0.3 },
            },
            visible: {
              height: "auto",
              transition: { duration: 0.3 },
              display: "flex",
            },
          }}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          className={`absolute left-0 right-0 top-full bg-primary`}
        >
          <ul className="flex flex-1 flex-col gap-2 p-2">
            {NavLinks.map((link, index) => (
              <li key={index} className="flex ">
                <a
                  href={link.href}
                  className="w-full bg-white px-4  py-2 text-primary"
                >
                  <span className="font-bold">{link.title}</span>
                </a>
              </li>
            ))}
            <li className="flex">
              <a className="hover:bg w-full bg-accent px-4 py-2 text-white">
                Download Now
              </a>
            </li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
