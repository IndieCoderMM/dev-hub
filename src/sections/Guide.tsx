import { motion } from "framer-motion";

import { PlayFill } from "@/assets/icons";
import { BudgetManagement } from "@/assets/images";
import { GuideSteps } from "@/constants";
import { fadeIn } from "@/lib/motion";

const Guide = () => {
  return (
    <section id="guide" className="padding bg-secondary">
      <div className="max-container space-y-8">
        <h2 className="text-center text-4xl font-bold">Here's how it works</h2>
        <p className="text-center leading-loose">
          CoinTrackr is the only app you need to manage your finances.
        </p>
        {/* Steps grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {GuideSteps.map((step, index) => (
            <div
              className="flex flex-col items-center p-8 text-center"
              key={step.title}
            >
              <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full border-2 border-border">
                <motion.img
                  initial={{ scale: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.25,
                    duration: 0.75,
                    type: "spring",
                  }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  src={step.image}
                  alt={step.title}
                />
                <div className="absolute -left-12 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <span className="text-xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{step.title}</h3>
              <p className="mt-4 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        {/* Embed youtube video */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.25,
          }}
          className="relative mx-auto h-[250px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[540px] lg:w-[80%] xl:w-[60%]"
        >
          <img
            src={BudgetManagement}
            alt="Budget Management"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-indigo-400/50">
            <div className="relative h-20 w-20 rounded-full lg:h-24 lg:w-24">
              {/* Pulsing circle */}
              <motion.div
                variants={{
                  initial: {
                    scale: 1,
                  },
                  animate: {
                    scale: 1.3,
                  },
                }}
                className="absolute bottom-0 left-0 right-0 top-0 rounded-full bg-red-400/50"
                animate="animate"
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              ></motion.div>

              <a
                href="#guide"
                className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 lg:h-24 lg:w-24"
              >
                <img src={PlayFill} alt="Play" className="h-12 w-12 " />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide;
