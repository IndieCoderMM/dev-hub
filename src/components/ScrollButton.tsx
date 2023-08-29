import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { ArrowBigUpDashIcon } from "lucide-react";
import { useEffect } from "react";

const isBrowser = () => typeof window !== "undefined";

const scrollToTop = () => {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: "0%" },
  hover: { scale: 1.1 },
};

const ScrollButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });
  return (
    <motion.button
      className="fixed bottom-3 right-3 z-50  flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-gray-200 shadow-lg hover:bg-accent hover:text-white lg:h-16 lg:w-16"
      onClick={scrollToTop}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      whileHover="hover"
      animate={controls}
    >
      <span className="sr-only">Scroll to top</span>
      <ArrowBigUpDashIcon className="h-8 w-8 lg:h-14 lg:w-14" />
    </motion.button>
  );
};

export default ScrollButton;
