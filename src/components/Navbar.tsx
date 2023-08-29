import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

import { NavLinks } from "@/constants";
import LanguageSelect from "./LanguageSelect";

const ScrollHeaderVariants = {
  idle: {
    transition: {
      duration: 0.8,
    },
  },
  fixed: {
    backgroundColor: "hsl(263 86% 45%)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.8,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    if (latestScrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  return (
    <motion.header
      variants={ScrollHeaderVariants}
      initial="initial"
      animate={scrolling ? "fixed" : "initial"}
      layout
      className={`${
        open ? "bg-primary" : "bg-transparent"
      } padding-x fixed left-0 right-0 top-0 z-50 w-full py-2 lg:py-4`}
    >
      <motion.div
        style={{ scaleX }}
        className="absolute left-0 top-0 h-1 w-full origin-left bg-accent"
      />
      {/* Main nav */}
      <div className="max-container mx-auto flex items-center justify-between gap-4">
        <h1 className="text-lg font-bold uppercase lg:text-3xl">
          <a href="/">Billio</a>
        </h1>
        <nav className="hidden items-center gap-4 text-xl lg:flex">
          <ul className="flex items-center justify-center gap-2 lg:gap-8">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} key={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSelect languages={["en", "mm", "jp"]} />
          <a
            href="#download"
            className="rounded-full bg-accent px-4 py-2 text-xl font-bold text-background transition-all duration-150 hover:translate-y-[-2px] hover:brightness-110 lg:px-8 lg:py-4"
          >
            Download Now
          </a>
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
              <a
                href="#download"
                className="hover:bg w-full bg-accent px-4 py-2 text-white"
              >
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
