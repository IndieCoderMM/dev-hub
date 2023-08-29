import { motion } from "framer-motion";
import { GooglePlay, Apple } from "@/assets/icons";
import { HeroImg } from "@/assets/images";
import AnimatedNumber from "@/components/AnimatedNumber";
import { Metrics } from "@/constants";
import { fadeIn } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="padding-x hero-gradient relative min-h-screen bg-background py-20 lg:pt-40 xl:min-h-[90vh]">
      <div className="max-container mx-auto grid place-items-center xl:grid-cols-2">
        <div className="padding-y flex flex-1 flex-col justify-center gap-10">
          <h1 className="text-5xl font-bold lg:text-7xl">
            AI-Powered Expense Tracker App
          </h1>
          <h2 className="text-2xl leading-relaxed">
            Simplify Expense Management, Predict Spending Trends, and Achieve
            Financial Goals Effortlessly.
          </h2>
          {/* Download on google play button with outline rounded border */}
          <div className="flex flex-col items-start gap-4 lg:flex-row">
            <button
              type="button"
              className="flex min-w-[250px] items-center gap-4 rounded-md border-2 border-white px-8 py-2 text-white transition-all hover:translate-y-[-2px] hover:shadow-md hover:shadow-accent hover:brightness-110"
            >
              <img src={Apple} alt="Google Play" className="h-8 w-8" />

              <div className="flex flex-col">
                <span className="text-sm">Available on</span>
                <span className="text-lg">App Store</span>
              </div>
            </button>
            <button
              type="button"
              className="flex min-w-[250px] items-center gap-4 rounded-md border-2 border-white px-8 py-2 text-white transition-all hover:translate-y-[-2px] hover:shadow-md hover:shadow-accent hover:brightness-110"
            >
              <img src={GooglePlay} alt="Google Play" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-sm">Download on</span>
                <span className="text-lg">Google Play</span>
              </div>
            </button>
          </div>
        </div>
        {/* Image */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 0.75)}
          initial="hidden"
          whileInView="show"
          className="hidden xl:block"
        >
          <img
            src={HeroImg}
            alt="Hero"
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
      {/* Metric grid with four columns */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          staggerChildren: 0.5,
          delayChildren: 0.5,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="bottom-0 left-1/2 mx-auto mt-20 grid gap-4 rounded-md bg-secondary/50 p-4 lg:absolute lg:w-[80%] lg:-translate-x-1/2 lg:translate-y-1/2 lg:grid-cols-4 lg:bg-primary lg:py-8"
      >
        {Metrics.map((metric, index) => (
          <div
            key={metric.title}
            className={`${
              index !== Metrics.length - 1 ? "border-white/20 lg:border-r" : ""
            } flex flex-col items-center gap-2 rounded-md bg-primary px-8 py-10 lg:rounded-none`}
          >
            <div className="text-4xl font-bold lg:text-6xl">
              <AnimatedNumber value={metric.value} />
              <span className="text-2xl">{metric.unit}</span>
            </div>
            <span className="text-2xl capitalize">{metric.title}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
